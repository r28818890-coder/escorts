import React, { useEffect } from 'react';
import { BRAND, CONTACT } from '@/config/site';

/**
 * Escorts Hub Noida - Verified Local Directory & Service Catalog Schema
 * Fully complies with Google Search Quality and Schema.org guidelines.
 */
const SchemaReviewMarkup: React.FC = () => {
  useEffect(() => {
    const existing = document.getElementById('google-review-schema');
    if (existing) existing.remove();

    const catalogSchemaData = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': `${BRAND.domain}/#catalog`,
      'name': BRAND.name,
      'image': BRAND.ogImage,
      'telephone': CONTACT.phoneDisplay,
      'currenciesAccepted': 'INR',
      'paymentAccepted': 'Cash, UPI',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': CONTACT.address,
        'addressLocality': 'Noida',
        'addressRegion': 'Uttar Pradesh',
        'postalCode': '201301',
        'addressCountry': 'IN',
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': CONTACT.geo.lat,
        'longitude': CONTACT.geo.lng,
      },
      'openingHoursSpecification': {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': [
          'Monday', 'Tuesday', 'Wednesday', 'Thursday',
          'Friday', 'Saturday', 'Sunday'
        ],
        'opens': '00:00',
        'closes': '23:59',
      },
      'hasOfferCatalog': {
        '@type': 'OfferCatalog',
        'name': 'Verified Companions & Local Directory Services (NCR Region)',
        'itemListElement': [
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Call Girls & VIP Escorts Noida',
              'description': 'Verified independent companion directory with photo authentication and 24/7 hotel outcall in Noida & NCR.',
            },
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Massages & Luxury Spa Noida',
              'description': 'Luxury Thai spa, Swedish body massage, and aromatherapy wellness directory in Noida & Expressway.',
            },
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Russian & VIP Escorts Noida',
              'description': 'Verified male escort directory and fitness companion listings in Noida & Greater Noida.',
            },
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Transsexual & TS Escorts Noida',
              'description': 'Verified transsexual and crossdresser directory in Noida & NCR.',
            },
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Adult Meetings & Casual Dating Noida',
              'description': 'Verified local casual dating and companion listings in Noida & surrounding areas.',
            },
          },
        ],
      },
    };

    const script = document.createElement('script');
    script.id = 'google-review-schema';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(catalogSchemaData);
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById('google-review-schema');
      if (el) el.remove();
    };
  }, []);

  return null;
};

export default SchemaReviewMarkup;
