import { useEffect, useState } from 'react';

interface CookieLeadData {
  phone?: string;
  name?: string;
  email?: string;
  city?: string;
  state?: string;
  country?: string;
  source?: string;
  timestamp: string;
  visits: number;
  lastVisit: string;
  pagesViewed: string[];
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
}

class CookieLeadTracker {
  private static readonly COOKIE_NAME = 'bn_lead_data';
  private static readonly EXPIRY_DAYS = 30;

  // Get cookie data
  static getLeadData(): CookieLeadData | null {
    try {
      const cookie = document.cookie
        .split('; ')
        .find(row => row.startsWith(this.COOKIE_NAME + '='));
      
      if (!cookie) return null;
      
      const data = JSON.parse(decodeURIComponent(cookie.split('=')[1]));
      
      // Validate and clean data
      return {
        phone: data.phone || undefined,
        name: data.name || undefined,
        email: data.email || undefined,
        city: data.city || undefined,
        state: data.state || undefined,
        source: data.source || undefined,
        timestamp: data.timestamp || new Date().toISOString(),
        visits: data.visits || 1,
        lastVisit: data.lastVisit || new Date().toISOString(),
        pagesViewed: data.pagesViewed || [],
        utmSource: data.utmSource,
        utmMedium: data.utmMedium,
        utmCampaign: data.utmCampaign
      };
    } catch (error) {
      console.error('Cookie parse error:', error);
      return null;
    }
  }

  // Set cookie data
  static setLeadData(data: Partial<CookieLeadData>): void {
    const existingData = this.getLeadData() || {
      timestamp: new Date().toISOString(),
      visits: 0,
      lastVisit: new Date().toISOString(),
      pagesViewed: []
    };

    const updatedData: CookieLeadData = {
      ...existingData,
      ...data,
      visits: existingData.visits + 1,
      lastVisit: new Date().toISOString()
    };

    // Set cookie with expiry
    const expiry = new Date();
    expiry.setDate(expiry.getDate() + this.EXPIRY_DAYS);
    
    const cookieValue = encodeURIComponent(JSON.stringify(updatedData));
    document.cookie = `${this.COOKIE_NAME}=${cookieValue}; expires=${expiry.toUTCString()}; path=/; SameSite=Lax`;
  }

  // Update page view
  static trackPageView(pagePath: string): void {
    const data = this.getLeadData();
    if (data) {
      const pagesViewed = [...data.pagesViewed];
      if (!pagesViewed.includes(pagePath)) {
        pagesViewed.push(pagePath);
      }
      this.setLeadData({ pagesViewed });
    }
  }

  // Extract phone from various sources and store in cookie
  static capturePhone(): string | null {
    const phoneSources = [
      // URL parameters
      () => {
        const params = new URLSearchParams(window.location.search);
        return params.get('phone') || params.get('mobile') || params.get('contact');
      },
      // UTM parameters with phone
      () => {
        const params = new URLSearchParams(window.location.search);
        return params.get('utm_phone') || params.get('utm_contact');
      },
      // Referrer analysis
      () => {
        const referrer = document.referrer;
        const match = referrer.match(/(\d{10})/);
        return match && /^[6-9]\d{9}$/.test(match[1]) ? match[1] : null;
      },
      // Local storage
      () => localStorage.getItem('user_phone') || sessionStorage.getItem('contact_phone'),
      // Session storage
      () => sessionStorage.getItem('mobile_number')
    ];

    for (const source of phoneSources) {
      const phone = source();
      if (phone && /^[6-9]\d{9}$/.test(phone.replace(/\D/g, ''))) {
        const cleanPhone = phone.replace(/\D/g, '');
        this.setLeadData({ phone: cleanPhone });
        return cleanPhone;
      }
    }
    return null;
  }

  // Capture UTM parameters
  static captureUTM(): void {
    const params = new URLSearchParams(window.location.search);
    const utmData = {
      utmSource: params.get('utm_source') || undefined,
      utmMedium: params.get('utm_medium') || undefined,
      utmCampaign: params.get('utm_campaign') || undefined
    };

    if (utmData.utmSource || utmData.utmMedium || utmData.utmCampaign) {
      this.setLeadData(utmData);
    }
  }

  // Check if user should be considered a lead
  static isQualifiedLead(): boolean {
    const data = this.getLeadData();
    if (!data) return false;

    // Qualified if:
    // 1. Has phone number, OR
    // 2. Visited more than 3 times, OR
    // 3. Viewed more than 5 pages, OR
    // 4. Spent more than 5 minutes on site
    return !!(data.phone || data.visits > 3 || data.pagesViewed.length > 5);
  }

  // Get lead score
  static getLeadScore(): number {
    const data = this.getLeadData();
    if (!data) return 0;

    let score = 0;
    
    // Phone number (highest value)
    if (data.phone) score += 50;
    
    // Name
    if (data.name) score += 20;
    
    // Email
    if (data.email) score += 15;
    
    // Multiple visits
    score += Math.min(data.visits * 5, 25);
    
    // Page views
    score += Math.min(data.pagesViewed.length * 2, 20);
    
    // UTM parameters (indicates marketing campaign)
    if (data.utmSource) score += 10;
    
    return Math.min(score, 100);
  }

  // Clear cookie
  static clearCookie(): void {
    document.cookie = `${this.COOKIE_NAME}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }
}

const useCookieLeadTracking = () => {
  const [leadData, setLeadData] = useState<CookieLeadData | null>(null);
  const [isQualifiedLead, setIsQualifiedLead] = useState(false);
  const [leadScore, setLeadScore] = useState(0);

  useEffect(() => {
    // Initialize tracking
    const initializeTracking = () => {
      // Capture phone from various sources
      CookieLeadTracker.capturePhone();
      
      // Capture UTM parameters
      CookieLeadTracker.captureUTM();
      
      // Track current page view
      CookieLeadTracker.trackPageView(window.location.pathname);
      
      // Update state
      const data = CookieLeadTracker.getLeadData();
      setLeadData(data);
      setIsQualifiedLead(CookieLeadTracker.isQualifiedLead());
      setLeadScore(CookieLeadTracker.getLeadScore());
    };

    initializeTracking();

    // Track page changes
    const handlePageChange = () => {
      CookieLeadTracker.trackPageView(window.location.pathname);
      const updatedData = CookieLeadTracker.getLeadData();
      setLeadData(updatedData);
      setIsQualifiedLead(CookieLeadTracker.isQualifiedLead());
      setLeadScore(CookieLeadTracker.getLeadScore());
    };

    // Listen for page changes (SPA)
    window.addEventListener('popstate', handlePageChange);
    
    // Also check for pushstate (for programmatic navigation)
    const originalPushState = history.pushState;
    history.pushState = function(...args: any[]) {
      originalPushState.apply(history, args);
      setTimeout(handlePageChange, 0);
    };

    return () => {
      window.removeEventListener('popstate', handlePageChange);
      history.pushState = originalPushState;
    };
  }, []);

  return {
    leadData,
    isQualifiedLead,
    leadScore,
    updateLeadData: (data: Partial<CookieLeadData>) => {
      CookieLeadTracker.setLeadData(data);
      const updatedData = CookieLeadTracker.getLeadData();
      setLeadData(updatedData);
      setIsQualifiedLead(CookieLeadTracker.isQualifiedLead());
      setLeadScore(CookieLeadTracker.getLeadScore());
    },
    clearTracking: () => {
      CookieLeadTracker.clearCookie();
      setLeadData(null);
      setIsQualifiedLead(false);
      setLeadScore(0);
    }
  };
};

export default useCookieLeadTracking;
export { CookieLeadTracker };
