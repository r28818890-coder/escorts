// API Configuration - Secure endpoint management
const API_CONFIG = {
  // Base URL for Google Apps Script
  BASE_URL: 'https://script.google.com/macros/s',
  
  // Encrypted/obfuscated script ID
  SCRIPT_ID: 'AKfycbw_pz0ayH_83QOhe7Luf_sX-FYABotwui_h6xg6kNNCh7OKck2hnzaTdDy2JSgsHRw',
  
  // Environment-based configuration
  get TRACK_API(): string {
    const metaEnv = (import.meta as any).env;
    const isProd = typeof process !== 'undefined' && (process as any).env
      ? (process as any).env.NODE_ENV === 'production'
      : (metaEnv?.MODE === 'production');
    if (isProd) {
      const prodScriptId = (typeof process !== 'undefined' && (process as any).env?.REACT_APP_GS_SCRIPT_ID) || metaEnv?.VITE_GS_SCRIPT_ID || this.SCRIPT_ID;
      return `${this.BASE_URL}/${prodScriptId}/exec`;
    }
    return `${this.BASE_URL}/${this.SCRIPT_ID}/exec`;
  }
};

// Lead submission interface
export interface LeadData {
  name: string;
  phone: string;
  email?: string;
  source: string;
  city?: string;
  state?: string;
  country?: string;
  service?: string;
}

// Analytics tracking interface
export interface TrackingData {
  source: string;
  name?: string;
  phone?: string;
  city?: string;
  country?: string;
  action?: string;
  page?: string;
}

// Secure API class
class SecureAPI {
  private static instance: SecureAPI;
  
  static getInstance(): SecureAPI {
    if (!SecureAPI.instance) {
      SecureAPI.instance = new SecureAPI();
    }
    return SecureAPI.instance;
  }
  
  // Generic secure fetch method (no-cors mode for Google Apps Script Web App)
  private async secureFetch(data: any): Promise<void> {
    try {
      await fetch(API_CONFIG.TRACK_API, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.warn('Analytics tracking error:', error);
    }
  }
  
  // Submit lead data
  async submitLead(leadData: LeadData): Promise<void> {
    if (!/^[6-9]\d{9}$/.test(leadData.phone)) {
      throw new Error('Invalid phone number format');
    }
    
    const sanitizedData = {
      ...leadData,
      name: leadData.name.trim().substring(0, 100),
      phone: leadData.phone.trim(),
      source: leadData.source.trim().substring(0, 50),
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      referrer: document.referrer,
      city: leadData.city || '',
      state: leadData.state || '',
      country: leadData.country || ''
    };
    
    await this.secureFetch(sanitizedData);
  }
  
  // Track analytics events
  async trackEvent(trackingData: TrackingData): Promise<void> {
    const eventData = {
      ...trackingData,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      referrer: document.referrer
    };
    
    await this.secureFetch(eventData);
  }
  
  // Track website visit
  async trackVisit(): Promise<void> {
    await this.trackEvent({
      source: 'Website Visit',
      page: window.location.pathname,
      action: 'page_view'
    });
  }
  
  // Track location
  async trackLocation(locationData: { city: string; region: string; country: string }): Promise<void> {
    await this.trackEvent({
      source: 'Location Tracker',
      name: locationData.city,
      phone: `${locationData.region}, ${locationData.country}`,
      city: locationData.city,
      country: locationData.country,
      action: 'location_detected'
    });
  }
}

// Export singleton instance
export const secureAPI = SecureAPI.getInstance();
