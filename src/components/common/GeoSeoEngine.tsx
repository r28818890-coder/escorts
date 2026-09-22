import React, { useEffect } from 'react';

/**
 * Google Maps Local 3-Pack Geo-SEO Engine
 * Injects GPS coordinates, ICBM tags, and Geo-region metadata into <head>
 */
const GeoSeoEngine: React.FC = () => {
  useEffect(() => {
    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('geo.region', 'IN-RJ');
    setMeta('geo.placename', 'Sindhi Camp, Jaipur, Rajasthan, India');
    setMeta('geo.position', '26.9239;75.8016');
    setMeta('ICBM', '26.9239, 75.8016');
  }, []);

  return null;
};

export default GeoSeoEngine;
