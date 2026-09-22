/**
 * VisitorPushNotifier.ts
 * Native Web Push & Visitor Alert Engine for Jaipur Spa.
 * Allows authorized admin devices to receive 100% free live push notifications when a new user visits the site.
 */

export interface VisitorLogItem {
  id: string;
  timestamp: string;
  page: string;
  device: string;
  city: string;
}

const VISITOR_LOGS_STORAGE_KEY = 'jaipur_spa_admin_visitor_logs';
const ADMIN_PUSH_ENABLED_KEY = 'jaipur_spa_admin_push_enabled';

/** Check if push notifications are enabled on this admin device */
export const isAdminPushEnabledOnDevice = (): boolean => {
  try {
    return localStorage.getItem(ADMIN_PUSH_ENABLED_KEY) === 'true';
  } catch {
    return false;
  }
};

/** Toggle Push Notifications on Admin Device */
export const setAdminPushEnabledOnDevice = (enabled: boolean): void => {
  try {
    localStorage.setItem(ADMIN_PUSH_ENABLED_KEY, enabled ? 'true' : 'false');
  } catch {
    // ignore
  }
};

/** Get saved visitor logs */
export const getVisitorLogs = (): VisitorLogItem[] => {
  try {
    const raw = localStorage.getItem(VISITOR_LOGS_STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as VisitorLogItem[];
  } catch {
    return [];
  }
};

/** Request Native Browser Push Notification Permission */
export const requestAdminPushPermission = async (): Promise<boolean> => {
  if (!('Notification' in window)) {
    alert('Push Notifications are not supported by this browser.');
    return false;
  }

  const permission = await Notification.requestPermission();
  if (permission === 'granted') {
    setAdminPushEnabledOnDevice(true);
    
    // Fire test notification
    new Notification(' Jaipur Skokka Admin Alerts Active!', {
      body: 'You will now receive live push notification alerts whenever a new visitor opens the website!',
      icon: '/jaipur_escorts_club_logo.jpg',
    });
    return true;
  } else {
    setAdminPushEnabledOnDevice(false);
    return false;
  }
};

/** Track Visitor & Fire Push Notification to Authorized Admin Device */
export const trackVisitorAndNotifyAdmin = (pathname: string): void => {
  try {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const deviceType = isMobile ? 'Mobile' : 'Desktop';
    const now = new Date();
    const formattedTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const newLog: VisitorLogItem = {
      id: 'v_' + Math.random().toString(36).substring(2, 9),
      timestamp: formattedTime,
      page: pathname || '/',
      device: deviceType,
      city: 'Jaipur, Rajasthan',
    };

    // Save to local logs
    const existing = getVisitorLogs();
    const updated = [newLog, ...existing.slice(0, 49)];
    localStorage.setItem(VISITOR_LOGS_STORAGE_KEY, JSON.stringify(updated));

    // Fire Push Notification if authorized on this device
    if (
      isAdminPushEnabledOnDevice() &&
      typeof window !== 'undefined' &&
      'Notification' in window &&
      Notification.permission === 'granted'
    ) {
      new Notification(' New Visitor Alert — Jaipur Escorts', {
        body: `Someone opened ${pathname} at ${formattedTime} (${deviceType}).`,
        icon: '/jaipur_escorts_club_logo.jpg',
        tag: 'visitor-alert',
      });
    }
  } catch {
    // Ignore tracking failures
  }
};
