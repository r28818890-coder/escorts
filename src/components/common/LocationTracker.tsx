// File: src/components/LocationTracker.tsx

import React, { useEffect, useRef } from 'react';

// --- TYPES ---
export interface LocationData {
  city: string;
  region: string;
  country: string;
  ip: string;
  org: string;
}

interface Props {
  onLocationFound: (data: LocationData) => void;
}

const LocationTracker: React.FC<Props> = ({ onLocationFound }) => {
  const hasFetched = useRef(false);
  const hasSucceeded = useRef(false); //  NEW: Tracks if we already got location

  useEffect(() => {
    // Agar pehle se hi success ho chuka hai, ya fetch ho chuka hai, toh EXIT
    if (hasFetched.current || hasSucceeded.current) return;
    hasFetched.current = true;

    const fetchLocation = async () => {
      let data: any = null;

      // ---------------------------------------------------------
      // ATTEMPT 1: ipapi.co
      // ---------------------------------------------------------
      try {
        console.log(" Trying API 1 (ipapi.co)...");
        const res = await fetch('https://ipapi.co/json/');
        if (res.ok) {
          const json = await res.json();
          if (!json.error) {
             data = { city: json.city, region: json.region, country: json.country_name, ip: json.ip, org: json.org };
          }
        }
      } catch (e) { 
        console.warn(" API 1 Failed"); 
      }

      // ---------------------------------------------------------
      // ATTEMPT 2: ipwho.is (Backup)
      // ---------------------------------------------------------
      if (!data) {
        try {
          console.log(" Trying API 2 (ipwho.is)...");
          const res = await fetch('https://ipwho.is/');
          if (res.ok) {
            const json = await res.json();
            if (json.success) {
               data = { city: json.city, region: json.region, country: json.country, ip: json.ip, org: json.connection?.isp };
            }
          }
        } catch (e) { 
          console.warn(" API 2 Failed"); 
        }
      }

      // ---------------------------------------------------------
      // ATTEMPT 3: ip-api.com (Final Backup)
      // ---------------------------------------------------------
      if (!data) {
        try {
          console.log(" Trying API 3 (ip-api.com)...");
          const res = await fetch('https://ip-api.com/json/');
          if (res.ok) {
            const json = await res.json();
            if (json.status === "success") {
               data = { city: json.city, region: json.regionName, country: json.country, ip: json.query, org: json.isp };
            }
          }
        } catch (e) { 
          console.warn(" API 3 Failed"); 
        }
      }

      // ---------------------------------------------------------
      // FINAL: Result bhejo aur STOP karo
      // ---------------------------------------------------------
      if (data) {
        console.log(" SUCCESS! Tracking STOPPED. Location:", data.city);
        hasSucceeded.current = true; //  Ab aage koi call nahi hoga
        onLocationFound(data);
      } else {
        console.log(" All APIs failed. Sending fallback.");
        onLocationFound({ city: "Unknown", region: "Unknown", country: "India", ip: "", org: "" });
      }
    };

    // Defer location check to browser idle time (4s) so initial page render is 100% unblocked
    const timer = setTimeout(() => {
      const isSlow = typeof navigator !== 'undefined' && 'connection' in navigator && 
        ((navigator as any).connection?.saveData || /2g/.test((navigator as any).connection?.effectiveType || ''));
      
      if (isSlow) {
        // Skip external calls on slow networks to save user bandwidth
        onLocationFound({ city: 'Noida', region: 'Uttar Pradesh', country: 'India', ip: '', org: '' });
        return;
      }

      fetchLocation();
    }, 4000);

    return () => clearTimeout(timer);
  }, [onLocationFound]);

  return null;
};

export default LocationTracker;