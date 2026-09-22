/**
 * analytics.ts
 * Dual Engine: Google Analytics 4 (GA4) + Hostinger Internal Zero-API Analytics Engine.
 * Automatically records Pageviews, Calls, and WhatsApp events both to GA4 and to Hostinger internal database.
 */

export const GA_MEASUREMENT_ID = (import.meta.env?.VITE_GA_MEASUREMENT_ID as string) || 'G-HEWRH9K2K5';

const LOCAL_STORAGE_BACKUP_KEY = 'jaipur_spa_internal_events_backup';

/**
 * Send background event payload to Hostinger internal endpoint /api/track.php
 */
const sendHostingerEvent = (event: 'pageview' | 'whatsapp' | 'call', page: string, source: string = 'direct', locality: string = '') => {
  try {
    const payload = {
      event,
      page: page || window.location.pathname,
      source,
      locality,
      timestamp: new Date().toISOString(),
    };

    // 1. Try Beacon API (ideal for page navigation)
    if (typeof navigator !== 'undefined' && navigator.sendBeacon) {
      const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
      const sent = navigator.sendBeacon('/api/track.php', blob);
      if (sent) return;
    }

    // 2. Fallback to standard fetch
    if (typeof fetch !== 'undefined') {
      fetch('/api/track.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        keepalive: true,
      }).catch(() => {
        // Fallback local storage logging for offline/dev
        saveLocalEventBackup(payload);
      });
    }
  } catch {
    // Fail silently to never impact user experience
  }
};

/** Save local backup for dev / offline testing */
const saveLocalEventBackup = (payload: any) => {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_BACKUP_KEY);
    const list = raw ? JSON.parse(raw) : [];
    list.push({ ...payload, id: 'ev_' + Date.now() });
    if (list.length > 500) list.shift();
    localStorage.setItem(LOCAL_STORAGE_BACKUP_KEY, JSON.stringify(list));
  } catch {
    // ignore
  }
};

/**
 * Track SPA Page View in GA4 + Hostinger Internal DB
 */
export const trackPageView = (url: string, title?: string): void => {
  try {
    // 1. Google Analytics
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        page_title: title || document.title,
        page_location: window.location.href,
        page_path: url,
      });
    }

    // 2. Hostinger Internal Tracker
    sendHostingerEvent('pageview', url, 'direct');
  } catch (err) {
    // Fail silently
  }
};

/**
 * Track WhatsApp Click Event in GA4 + Hostinger Internal DB
 */
export const trackWhatsAppClick = (number: string, source: string = 'unknown'): void => {
  try {
    // 1. Google Analytics
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'whatsapp_click', {
        event_category: 'Lead',
        event_label: `WhatsApp ${number} - Source: ${source}`,
        whatsapp_number: number,
        click_source: source,
        value: 1,
      });
    }

    // 2. Hostinger Internal Tracker
    sendHostingerEvent('whatsapp', window.location.pathname, source);
  } catch (err) {
    // Fail silently
  }
};

/**
 * Track Direct Call Click Event in GA4 + Hostinger Internal DB
 */
export const trackCallClick = (number: string, source: string = 'unknown'): void => {
  try {
    // 1. Google Analytics
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'phone_call_click', {
        event_category: 'Lead',
        event_label: `Call ${number} - Source: ${source}`,
        phone_number: number,
        click_source: source,
        value: 1,
      });
    }

    // 2. Hostinger Internal Tracker
    sendHostingerEvent('call', window.location.pathname, source);
  } catch (err) {
    // Fail silently
  }
};

/**
 * Track Custom Ad / Profile View or Action
 */
export const trackCustomEvent = (eventName: string, params: Record<string, any> = {}): void => {
  try {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', eventName, params);
    }
  } catch (err) {
    // Fail silently
  }
};
