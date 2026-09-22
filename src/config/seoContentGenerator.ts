// ============================================================
// JAIPUR HYPERLOCAL SEO CONTENT & SCHEMA GENERATOR (100% EMOJI-FREE)
// ============================================================

import { PORTAL_CATEGORIES, JAIPUR_LOCALITIES, PortalCategory, JaipurLocality } from './portalData';

export interface LocalizedSeoData {
  h1: string;
  metaTitle: string;
  metaDescription: string;
  introText: string;
  landmarkHighlights: string;
  servicesBreakdown: { title: string; desc: string }[];
  pricingOverview: { tier: string; duration: string; description: string }[];
  faqs: { question: string; answer: string }[];
  nearbyLocalities: { name: string; slug: string; distance: string }[];
  geo: { lat: string; lng: string };
  schema: object;
}

// Geo coordinates for Jaipur localities
const LOCALITY_GEO: Record<string, { lat: string; lng: string }> = {
  'sindhi-camp': { lat: '26.9239', lng: '75.8016' },
  'mi-road': { lat: '26.9167', lng: '75.8167' },
  'vaishali-nagar': { lat: '26.9075', lng: '75.7431' },
  'malviya-nagar': { lat: '26.8528', lng: '75.8197' },
  'c-scheme': { lat: '26.9124', lng: '75.8005' },
  'raja-park': { lat: '26.8967', lng: '75.8344' },
  'mansarovar': { lat: '26.8617', lng: '75.7681' },
  'civil-lines': { lat: '26.9038', lng: '75.7878' },
  'bani-park': { lat: '26.9312', lng: '75.7925' },
  'tonk-road': { lat: '26.8722', lng: '75.8008' },
  'jaipur-railway-station': { lat: '26.9196', lng: '75.7878' },
  'jagatpura': { lat: '26.8222', lng: '75.8561' },
  'gopalpura': { lat: '26.8667', lng: '75.7833' },
  'sodala': { lat: '26.9000', lng: '75.7667' },
  'vidhyadhar-nagar': { lat: '26.9667', lng: '75.7833' },
  'jhotwara': { lat: '26.9500', lng: '75.7333' },
  'airport-area': { lat: '26.8242', lng: '75.8122' },
  'ajmer-road': { lat: '26.8833', lng: '75.7167' },
};

export function generateLocalizedSeo(category: PortalCategory, locality?: JaipurLocality): LocalizedSeoData {
  const locName = locality ? locality.name : 'Jaipur';
  const landmark = locality ? locality.landmark : 'Sindhi Camp, MI Road & Vaishali Nagar';
  const geo = locality ? (LOCALITY_GEO[locality.slug] || { lat: '26.9239', lng: '75.8016' }) : { lat: '26.9239', lng: '75.8016' };

  let h1 = '';
  let metaTitle = '';
  let metaDescription = '';
  let introText = '';
  let landmarkHighlights = '';

  if (category.slug === 'call-girls') {
    h1 = locality
      ? `Verified Escort Service & Call Girls in ${locName}, Jaipur - VIP Companions (24/7)`
      : `Jaipur Escorts & Call Girls - Top Verified Escort Service & VIP Companions`;

    metaTitle = locality
      ? `Jaipur Escorts in ${locName} - Verified Call Girls & Escort Service | 24/7 Outcall`
      : `Jaipur Escorts | Verified Call Girls & Escort Service in Jaipur | Skokka`;

    metaDescription = locality
      ? `Looking for verified escort service and call girls in ${locName}, Jaipur? Genuine independent models near ${landmark}. 100% real photo verification, 24/7 hotel outcall & in-call.`
      : `Discover top rated escort service and verified call girls in Jaipur. Real photo verified independent companions, VIP models, and 24/7 hotel outcall across all Jaipur localities.`;

    introText = `Welcome to the official directory for verified escort services, call girls, and independent companions in ${locName}, Jaipur. Whether you are a business traveler staying at 5-star hotels, a tourist exploring the Pink City, or a local resident looking for sophisticated companionship, our verified models offer discrete 24/7 outcall hospitality with direct WhatsApp confirmation.`;

    landmarkHighlights = `Verified independent models in ${locName} provide swift 15 to 30-minute outcall service across major landmarks including ${landmark}, as well as private sanitized in-call suites. All meetings prioritize mutual respect, discretion, and hygiene standards.`;
  } else if (category.slug === 'massages') {
    h1 = locality
      ? `Best Massage & Spa in ${locName}, Jaipur - Thai, Swedish & Couple Spa`
      : `Best Massages in Jaipur - Luxury Thai Spa & Body Massage Therapists`;

    metaTitle = locality
      ? `Massage in ${locName} Jaipur - Luxury Body Spa & Therapists | Open 24/7`
      : `Best Massage in Jaipur - Luxury Thai Spa, Swedish & Body Massage | Jaipur Spa`;

    metaDescription = locality
      ? `Experience relaxing body massage in ${locName}, Jaipur. Traditional Thai massage, Swedish relaxation, deep tissue and steam bath near ${landmark}. Call or WhatsApp now.`
      : `Top rated luxury massage centers and certified therapists in Jaipur. Thai massage, couple spa, deep tissue, and herbal steam bath in Sindhi Camp, Vaishali Nagar & MI Road.`;

    introText = `Discover top-rated wellness therapists and luxury spa sanctuaries in ${locName}, Jaipur. Escape the stress of daily work with signature rejuvenating therapies including authentic Thai acupressure, European Swedish relaxation, deep tissue muscle recovery, B2B oil therapy, and private couple spa suites equipped with hot hydro showers.`;

    landmarkHighlights = `Our featured wellness centers in ${locName} are strategically located near ${landmark}, offering serene private AC rooms, organic therapeutic essential oils, hospital-grade sanitization, and 24-hour appointment booking.`;
  } else if (category.slug === 'male-escorts') {
    h1 = locality
      ? `Male Escorts in ${locName}, Jaipur - Handsome Call Boys & Companions for Women`
      : `Male Escorts in Jaipur - Handsome Call Boys & Fitness Companions for Women`;

    metaTitle = locality
      ? `Male Escorts in ${locName} Jaipur - Verified Call Boys & Companions | 100% Discreet`
      : `Male Escorts in Jaipur - Verified Call Boys for Women & Couples | Skokka Jaipur`;

    metaDescription = locality
      ? `Find handsome, educated male escorts and call boys in ${locName}, Jaipur near ${landmark}. 100% confidential, friendly, and respectful companions for women & couples.`
      : `Verified male escorts and call boys in Jaipur. Handsome fitness models and companion services for female clients and couples in Vaishali Nagar, Malviya Nagar & Mansarovar.`;

    introText = `Connect with handsome, well-groomed, and respectful male escorts and call boys in ${locName}, Jaipur. Catering exclusively to single women, female travelers, and open-minded couples looking for discreet companionship, soothing body wellness, and polite dinner dates.`;

    landmarkHighlights = `Male companions in ${locName} are available for private hotel outcalls near ${landmark}, offering complete confidentiality and respectful personal care.`;
  } else if (category.slug === 'transsexual') {
    h1 = locality
      ? `Transsexual & TS Escorts in ${locName}, Jaipur - Shemale & Ladyboy Dating`
      : `Transsexual in Jaipur - Verified TS Escorts & Shemale Dating`;

    metaTitle = locality
      ? `Transsexual in ${locName} Jaipur - TS Escorts & Shemales | 100% Real Photos`
      : `Transsexual in Jaipur - TS Escorts, Ladyboys & Shemale Dating | Skokka Jaipur`;

    metaDescription = locality
      ? `Discover verified transsexual escorts, shemales, and ladyboy companions in ${locName}, Jaipur. Real photos, private suites near ${landmark}, and direct WhatsApp contact.`
      : `Meet verified transsexual escorts and TS companions in Jaipur. Beautiful shemales and ladyboys available for private meetings across prime Jaipur localities.`;

    introText = `Explore verified transsexual, ladyboy, and TS escort listings in ${locName}, Jaipur. Meet charming, open-minded, and passionate trans models who provide warm hospitality, private in-call suites, and hotel outcalls with zero judgment.`;

    landmarkHighlights = `TS companions in ${locName} welcome clients with clean private accommodations located near ${landmark}, ensuring full discretion.`;
  } else {
    h1 = locality
      ? `Adult Meetings & Casual Dating in ${locName}, Jaipur - Local Singles (NSA)`
      : `Adult Meetings in Jaipur - Casual Dating, Local Singles & Erotic Meetups`;

    metaTitle = locality
      ? `Adult Meetings in ${locName} Jaipur - Local Singles & NSA Dating | Verified`
      : `Adult Meetings in Jaipur - Casual Dating & Local Singles Hookups | Skokka Jaipur`;

    metaDescription = locality
      ? `Meet open-minded singles and casual dating partners in ${locName}, Jaipur near ${landmark}. Safe, verified NSA meetups and late-night romance in Jaipur.`
      : `Connect with local Jaipur singles, open-minded couples, and casual dating partners for NSA meetings and discreet dates across Jaipur.`;

    introText = `Join the most active adult community in ${locName}, Jaipur. Meet genuine local singles, college students, working professionals, and mature companions for casual dating, coffee dates, and no-strings-attached (NSA) romance.`;

    landmarkHighlights = `Find singles residing in ${locName} near ${landmark} ready for quick chats, evening drinks, and memorable private dates.`;
  }

  // Localized Services Breakdown
  const servicesBreakdown = [
    {
      title: `Private In-Call Suites in ${locName}`,
      desc: `Sanitized, air-conditioned private rooms with attached shower and fresh linens located conveniently near ${landmark}.`,
    },
    {
      title: `Hotel & Residential Outcall in ${locName}`,
      desc: `Prompt 20 to 30-minute outcall arrival at all leading 3-star, 4-star, and 5-star hotels in and around ${locName}, Jaipur.`,
    },
    {
      title: `100% Direct Contact & Real Photo Verification`,
      desc: `Direct interaction with individual advertisers via verified WhatsApp numbers and phone calls. 100% genuine photo verified profiles.`,
    },
    {
      title: `Discreet & Confidential Hospitality`,
      desc: `Your identity, phone number, and personal details remain 100% private and confidential throughout your experience.`,
    },
  ];

  // Pricing Overview (Durations only, rate-free)
  const pricingOverview = [
    { tier: 'Quick Session (1 Hour)', duration: '60 Minutes', description: 'Includes in-call / hotel outcall meeting with complete personal attention.' },
    { tier: 'Extended Session (2 Hours)', duration: '120 Minutes', description: 'Ideal for unhurried conversations, dining companionship, and relaxation.' },
    { tier: 'Overnight VIP Package', duration: 'Overnight (8-10 Hrs)', description: 'Complete overnight companionship for 5-star hotels and private suites.' },
  ];

  // 5 Localized FAQs
  const faqs = [
    {
      question: `How can I contact verified ${category.name.toLowerCase()} in ${locName}, Jaipur?`,
      answer: `You can directly tap the WhatsApp or Call Now button on any profile card in ${locName}. All profiles are verified for instant direct communication.`,
    },
    {
      question: `What session durations are available for ${category.name.toLowerCase()} in ${locName}?`,
      answer: `In ${locName}, Jaipur, companions offer flexible durations including 1-hour meetings, 2-hour dinner dates, and full-night VIP travel packages.`,
    },
    {
      question: `Is hotel outcall available near ${landmark} in ${locName}?`,
      answer: `Yes, most independent companions provide fast 15-30 minute outcall service to all major hotels, resorts, and private suites across ${locName}, Jaipur.`,
    },
    {
      question: `Do I need to pay advance money before meeting in ${locName}?`,
      answer: `No! As per our safety guidelines, never send full advance payments or QR code transfers before meeting in person. Pay directly upon meeting.`,
    },
    {
      question: `Are the profiles and photos in ${locName} 100% real?`,
      answer: `Profiles marked with the green "Real & Verified" badge have completed phone and image authenticity checks for complete peace of mind.`,
    },
  ];

  // Nearby Localities Matrix
  const nearbyLocalities = JAIPUR_LOCALITIES
    .filter((l) => !locality || l.slug !== locality.slug)
    .slice(0, 8)
    .map((l) => ({
      name: l.name,
      slug: l.slug,
      distance: l.zone === (locality?.zone || 'Central') ? '5-10 min drive' : '15-20 min drive',
    }));

  // JSON-LD Multi-Schema (FAQPage + LocalBusiness + AggregateRating + BreadcrumbList)
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': `https://jaipurescortsclub.online/${category.slug}${locality ? `/${locality.slug}` : ''}#business`,
        name: `Jaipur Escorts Club - ${category.name} in ${locName}`,
        description: metaDescription,
        url: `https://jaipurescortsclub.online/${category.slug}${locality ? `/${locality.slug}` : ''}`,
        telephone: '+917357678356',
        priceRange: 'INR INR',
        image: 'https://jaipurescortsclub.online/jaipur_escorts_club_logo.jpg',
        address: {
          '@type': 'PostalAddress',
          streetAddress: landmark,
          addressLocality: locName,
          addressRegion: 'Rajasthan',
          postalCode: '302001',
          addressCountry: 'IN',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: geo.lat,
          longitude: geo.lng,
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '348',
          bestRating: '5',
          worstRating: '1',
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `https://jaipurescortsclub.online/${category.slug}${locality ? `/${locality.slug}` : ''}#faq`,
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `https://jaipurescortsclub.online/${category.slug}${locality ? `/${locality.slug}` : ''}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://jaipurescortsclub.online/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: `${category.name} Jaipur`,
            item: `https://jaipurescortsclub.online/${category.slug}`,
          },
          ...(locality
            ? [
                {
                  '@type': 'ListItem',
                  position: 3,
                  name: `${locName} Jaipur`,
                  item: `https://jaipurescortsclub.online/${category.slug}/${locality.slug}`,
                },
              ]
            : []),
        ],
      },
    ],
  };

  return {
    h1,
    metaTitle,
    metaDescription,
    introText,
    landmarkHighlights,
    servicesBreakdown,
    pricingOverview,
    faqs,
    nearbyLocalities,
    geo,
    schema,
  };
}
