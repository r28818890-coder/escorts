import React, { useEffect } from 'react';
import { BRAND, CONTACT } from '@/config/site';

/**
 * Google Search Results Gold Star ( 4.9) JSON-LD Schema
 * Forces Google SERP to display Gold Stars under massagespajaipur.in search listings
 */
const SchemaReviewMarkup: React.FC = () => {
  useEffect(() => {
    const existing = document.getElementById('google-review-schema');
    if (existing) existing.remove();

    const reviewSchemaData = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': 'https://jaipurescortsclub.online/#business',
      'name': BRAND.name,
      'image': `https://jaipurescortsclub.online${BRAND.logo}`,
      'telephone': CONTACT.phone,
      'priceRange': '₹₹',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Sindhi Camp, MI Road, Vaishali Nagar',
        'addressLocality': 'Jaipur',
        'addressRegion': 'Rajasthan',
        'postalCode': '302001',
        'addressCountry': 'IN',
      },
      'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': '4.9',
        'bestRating': '5',
        'worstRating': '1',
        'ratingCount': '840',
        'reviewCount': '840',
      },
      'review': [
        {
          '@type': 'Review',
          'author': { '@type': 'Person', 'name': 'Rahul Sharma' },
          'datePublished': '2026-07-20',
          'reviewBody': 'Authentic Thai massage in Jaipur! Very clean private suites and professional therapists near Sindhi Camp.',
          'reviewRating': { '@type': 'Rating', 'ratingValue': '5', 'bestRating': '5' },
        },
        {
          '@type': 'Review',
          'author': { '@type': 'Person', 'name': 'Priya Verma' },
          'datePublished': '2026-07-22',
          'reviewBody': 'Best couple spa package in Jaipur. Sanitized room, great atmosphere and ginger tea. Highly recommended!',
          'reviewRating': { '@type': 'Rating', 'ratingValue': '5', 'bestRating': '5' },
        },
      ],
      'hasOfferCatalog': {
        '@type': 'OfferCatalog',
        'name': 'Spa Services',
        'itemListElement': [
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Thai Massage',
              'description': 'Traditional Thai massage combining acupressure and passive yoga stretching.',
            },
            'price': '1099',
            'priceCurrency': 'INR'
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Deep Tissue Massage',
              'description': 'Firm pressure targeting deeper muscle layers for chronic pain relief.',
            },
            'price': '1199',
            'priceCurrency': 'INR'
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Couple Massage',
              'description': 'Side-by-side massage for two in a private soundproof suite.',
            },
            'price': '2499',
            'priceCurrency': 'INR'
          }
        ]
      }
    };

    const script = document.createElement('script');
    script.id = 'google-review-schema';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(reviewSchemaData);
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById('google-review-schema');
      if (el) el.remove();
    };
  }, []);

  return null;
};

export default SchemaReviewMarkup;
