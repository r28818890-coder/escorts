import { useEffect, useState } from 'react';

interface PhoneDetectionResult {
  phone: string | null;
  confidence: number;
  source: string;
  method: string;
}

const useAdvancedPhoneDetection = () => {
  const [detectedPhone, setDetectedPhone] = useState<PhoneDetectionResult | null>(null);

  useEffect(() => {
    const detectPhone = async () => {
      const results: PhoneDetectionResult[] = [];

      // Method 1: URL Parameter Detection
      const urlResult = detectFromURL();
      if (urlResult) results.push(urlResult);

      // Method 2: Local Storage Detection
      const storageResult = detectFromStorage();
      if (storageResult) results.push(storageResult);

      // Method 3: Referrer Analysis
      const referrerResult = detectFromReferrer();
      if (referrerResult) results.push(referrerResult);

      // Method 4: Browser Pattern Analysis
      const browserResult = detectFromBrowser();
      if (browserResult) results.push(browserResult);

      // Method 5: Network Information API
      const networkResult = await detectFromNetwork();
      if (networkResult) results.push(networkResult);

      // Method 6: Behavioral Analysis
      const behaviorResult = await detectFromBehavior();
      if (behaviorResult) results.push(behaviorResult);

      // Select best result with highest confidence
      if (results.length > 0) {
        const best = results.reduce((prev, current) => 
          current.confidence > prev.confidence ? current : prev
        );
        setDetectedPhone(best);
      }
    };

    detectPhone();
  }, []);

  return detectedPhone;
};

// Detect phone from URL parameters
const detectFromURL = (): PhoneDetectionResult | null => {
  const urlParams = new URLSearchParams(window.location.search);
  const phoneParams = ['phone', 'mobile', 'contact', 'tel', 'whatsapp'];
  
  for (const param of phoneParams) {
    const value = urlParams.get(param);
    if (value) {
      const cleanPhone = value.replace(/\D/g, '');
      if (/^[6-9]\d{9}$/.test(cleanPhone)) {
        return {
          phone: cleanPhone,
          confidence: 0.9,
          source: 'URL Parameter',
          method: param
        };
      }
    }
  }
  return null;
};

// Detect phone from storage
const detectFromStorage = (): PhoneDetectionResult | null => {
  const storageKeys = [
    'user_phone',
    'contact_number',
    'mobile_number',
    'whatsapp_number',
    'customer_phone'
  ];
  
  for (const key of storageKeys) {
    const value = localStorage.getItem(key) || sessionStorage.getItem(key);
    if (value && /^[6-9]\d{9}$/.test(value)) {
      return {
        phone: value,
        confidence: 0.8,
        source: 'Storage',
        method: key
      };
    }
  }
  return null;
};

// Detect phone from referrer
const detectFromReferrer = (): PhoneDetectionResult | null => {
  const referrer = document.referrer;
  
  // WhatsApp links
  const waMatch = referrer.match(/wa\.me\/(\d{10})/);
  if (waMatch) {
    return {
      phone: waMatch[1],
      confidence: 0.95,
      source: 'WhatsApp Referrer',
      method: 'wa.me'
    };
  }
  
  // Phone links
  const telMatch = referrer.match(/tel:(\d{10})/);
  if (telMatch) {
    return {
      phone: telMatch[1],
      confidence: 0.9,
      source: 'Phone Link Referrer',
      method: 'tel:'
    };
  }
  
  // Generic phone number in URL
  const phoneMatch = referrer.match(/(\d{10})/);
  if (phoneMatch) {
    const phone = phoneMatch[1];
    if (/^[6-9]\d{9}$/.test(phone)) {
      return {
        phone,
        confidence: 0.6,
        source: 'URL Pattern',
        method: 'regex_match'
      };
    }
  }
  
  return null;
};

// Detect phone from browser patterns
const detectFromBrowser = (): PhoneDetectionResult | null => {
  const userAgent = navigator.userAgent;
  
  // Check for mobile operators in user agent
  const operatorPatterns = [
    { pattern: /jio/i, operator: 'Jio' },
    { pattern: /airtel/i, operator: 'Airtel' },
    { pattern: /vi/i, operator: 'VI' },
    { pattern: /bsnl/i, operator: 'BSNL' },
    { pattern: /idea/i, operator: 'Idea' }
  ];
  
  for (const { pattern, operator } of operatorPatterns) {
    if (pattern.test(userAgent)) {
      // Store operator info for later use
      sessionStorage.setItem('detected_operator', operator);
      return {
        phone: null,
        confidence: 0.3,
        source: 'Browser Detection',
        method: operator
      };
    }
  }
  
  return null;
};

// Detect phone from network information
const detectFromNetwork = async (): Promise<PhoneDetectionResult | null> => {
  try {
    // @ts-ignore - Network Information API
    if ('connection' in navigator) {
      // @ts-ignore
      const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
      
      if (connection) {
        // @ts-ignore
        const effectiveType = connection.effectiveType;
        
        // Mobile network types
        if (['slow-2g', '2g', '3g', '4g'].includes(effectiveType)) {
          // User is likely on mobile
          sessionStorage.setItem('network_type', effectiveType);
          
          // Try to get phone from mobile-specific APIs
          if ('getBattery' in navigator) {
            // @ts-ignore
            const battery = await navigator.getBattery();
            if (battery) {
              // Mobile device detected
              return {
                phone: null,
                confidence: 0.4,
                source: 'Network Detection',
                method: 'mobile_network'
              };
            }
          }
        }
      }
    }
  } catch (error) {
    console.log('Network detection failed:', error);
  }
  
  return null;
};

// Detect phone from user behavior
const detectFromBehavior = async (): Promise<PhoneDetectionResult | null> => {
  // Analyze user interaction patterns
  const interactions = {
    scrollDepth: 0,
    timeOnPage: 0,
    clicks: 0,
    mobileGestures: 0
  };
  
  // Track mobile-specific interactions
  let touchCount = 0;
  const touchHandler = () => {
    touchCount++;
    if (touchCount > 5) {
      // Heavy touch usage - likely mobile
      sessionStorage.setItem('mobile_user', 'true');
    }
  };
  
  document.addEventListener('touchstart', touchHandler);
  
  // Check after 10 seconds
  setTimeout(() => {
    document.removeEventListener('touchstart', touchHandler);
    
    if (touchCount > 10) {
      return {
        phone: null,
        confidence: 0.5,
        source: 'Behavioral Analysis',
        method: 'touch_heavy'
      };
    }
  }, 10000);
  
  return null;
};

export default useAdvancedPhoneDetection;
