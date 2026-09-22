import { useEffect, useRef } from 'react';
import { secureAPI } from '@/services/api';
import { useErrorTracking } from '@/utils/sentry';

interface VisitorData {
  ip?: string;
  userAgent?: string;
  city?: string;
  state?: string;
  country?: string;
  org?: string;
  timestamp: string;
  sessionId: string;
}

const useVisitorTracking = () => {
  const { trackUserAction } = useErrorTracking();
  const hasTracked = useRef(false);

  useEffect(() => {
    if (hasTracked.current) return;
    hasTracked.current = true;

    const trackVisitor = async () => {
      try {
        // Get visitor data from multiple sources
        const visitorData: VisitorData = {
          timestamp: new Date().toISOString(),
          sessionId: generateSessionId(),
          userAgent: navigator.userAgent,
        };

        // Get IP and location data
        try {
          const response = await fetch('https://ipapi.co/json/');
          if (response.ok) {
            const data = await response.json();
            visitorData.ip = data.ip;
            visitorData.city = data.city;
            visitorData.state = data.region;
            visitorData.country = data.country_name;
            visitorData.org = data.org;
          }
        } catch (error) {
          console.log('Location API failed, using alternative');
          // Fallback to free IP API
          try {
            const fallbackResponse = await fetch('https://api.ipify.org?format=json');
            if (fallbackResponse.ok) {
              const ipData = await fallbackResponse.json();
              visitorData.ip = ipData.ip;
            }
          } catch (fallbackError) {
            console.log('All IP APIs failed');
          }
        }

        // Try to get phone from user agent or other signals
        const possiblePhone = extractPhoneFromSignals(visitorData);
        
        if (possiblePhone) {
          // Send as potential lead
          await secureAPI.submitLead({
            name: 'Website Visitor',
            phone: possiblePhone,
            source: 'Auto-Detected Visitor',
            city: visitorData.city,
            state: visitorData.state,
            country: visitorData.country,
            service: 'Unknown'
          });

          trackUserAction('auto_detected_lead', {
            phone: possiblePhone,
            source: 'visitor_tracking',
            city: visitorData.city,
            ip: visitorData.ip
          });
        } else {
          // Store visitor data for later matching
          await storeVisitorData(visitorData);
          trackUserAction('visitor_tracked', {
            ip: visitorData.ip,
            city: visitorData.city,
            userAgent: visitorData.userAgent
          });
        }

      } catch (error) {
        console.error('Visitor tracking failed:', error);
        trackUserAction('visitor_tracking_failed', { 
          error: (error as Error).message 
        });
      }
    };

    // Delay tracking to avoid blocking initial load
    const timer = setTimeout(trackVisitor, 3000);
    return () => clearTimeout(timer);

  }, [trackUserAction]);

  return null;
};

// Generate unique session ID
const generateSessionId = (): string => {
  return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
};

// Extract phone from various signals
const extractPhoneFromSignals = (visitorData: VisitorData): string | null => {
  // Method 1: Check localStorage for previous interactions
  const storedPhone = localStorage.getItem('user_phone');
  if (storedPhone && /^[6-9]\d{9}$/.test(storedPhone)) {
    return storedPhone;
  }

  // Method 2: Check URL parameters for UTM or phone
  const urlParams = new URLSearchParams(window.location.search);
  const urlPhone = urlParams.get('phone') || urlParams.get('mobile');
  if (urlPhone && /^[6-9]\d{9}$/.test(urlPhone.replace(/\D/g, ''))) {
    const cleanPhone = urlPhone.replace(/\D/g, '');
    localStorage.setItem('user_phone', cleanPhone);
    return cleanPhone;
  }

  // Method 3: Check session storage
  const sessionPhone = sessionStorage.getItem('contact_phone');
  if (sessionPhone && /^[6-9]\d{9}$/.test(sessionPhone)) {
    return sessionPhone;
  }

  // Method 4: Check if user came from WhatsApp or phone-related source
  const referrer = document.referrer;
  if (referrer.includes('wa.me') || referrer.includes('whatsapp') || referrer.includes('tel:')) {
    // Extract phone from referrer if possible
    const phoneMatch = referrer.match(/(\d{10})/);
    if (phoneMatch) {
      const phone = phoneMatch[1];
      if (/^[6-9]\d{9}$/.test(phone)) {
        localStorage.setItem('user_phone', phone);
        return phone;
      }
    }
  }

  // Method 5: Check for Indian mobile operator patterns in user agent
  const userAgent = navigator.userAgent.toLowerCase();
  const operatorPatterns = [
    /jio/i, /airtel/i, /vi/i, /bsnl/i, /idea/i
  ];
  
  if (operatorPatterns.some(pattern => pattern.test(userAgent))) {
    // User might be on mobile, but we don't have phone yet
    // Store this information for later
    sessionStorage.setItem('mobile_user', 'true');
  }

  return null;
};

// Store visitor data for future matching
const storeVisitorData = async (visitorData: VisitorData): Promise<void> => {
  try {
    // Store in IndexedDB for offline capability
    const db = await openVisitorDB();
    const transaction = db.transaction(['visitors'], 'readwrite');
    const store = transaction.objectStore('visitors');
    
    await store.add({
      ...visitorData,
      id: Date.now().toString(),
      matched: false
    });

  } catch (error) {
    console.error('Failed to store visitor data:', error);
  }
};

// Open IndexedDB for visitor storage
const openVisitorDB = (): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('VisitorDB', 1);
    
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
    
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains('visitors')) {
        db.createObjectStore('visitors', { keyPath: 'id' });
      }
    };
  });
};

export default useVisitorTracking;
