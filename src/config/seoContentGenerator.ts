// ============================================================
// NOIDA & NCR HYPERLOCAL SEO CONTENT & SCHEMA GENERATOR
// ============================================================

import { PORTAL_CATEGORIES, NOIDA_LOCALITIES, PortalCategory, NoidaLocality } from './portalData';
import { BRAND, CONTACT } from './site';
import { NOIDA_AREAS_DATA, generateSimilarKeywordGroups, getAllAreaKeywords, SimilarKeywordGroup } from '@/data/noidaAreasData';

export interface LocalizedSeoData {
  h1: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  similarKeywordGroups: SimilarKeywordGroup[];
  introText: string;
  landmarkHighlights: string;
  servicesBreakdown: { title: string; desc: string }[];
  pricingOverview: { tier: string; duration: string; description: string }[];
  faqs: { question: string; answer: string }[];
  nearbyLocalities: { name: string; slug: string; distance: string }[];
  geo: { lat: string; lng: string };
  schema: object;
}

// Geo coordinates for Noida & NCR localities
const LOCALITY_GEO: Record<string, { lat: string; lng: string }> = {
  'sector-18': { lat: '28.5708', lng: '77.3261' },
  'sector-62': { lat: '28.6280', lng: '77.3649' },
  'sector-50': { lat: '28.5770', lng: '77.3620' },
  'sector-137': { lat: '28.5135', lng: '77.4042' },
  'sector-18-film-city': { lat: '28.5670', lng: '77.3210' },
  'sector-76-78': { lat: '28.5620', lng: '77.3820' },
  'sector-128': { lat: '28.5270', lng: '77.3680' },
  'sector-142': { lat: '28.4980', lng: '77.4210' },
  'pari-chowk': { lat: '28.4682', lng: '77.5103' },
  'noida-extension': { lat: '28.6040', lng: '77.4370' },
  'knowledge-park': { lat: '28.4610', lng: '77.4980' },
  'indirapuram': { lat: '28.6415', lng: '77.3714' },
  'vaishali': { lat: '28.6447', lng: '77.3392' },
  'vasundhara': { lat: '28.6610', lng: '77.3640' },
  'crossings-republik': { lat: '28.6310', lng: '77.4420' },
  'kaushambi': { lat: '28.6480', lng: '77.3250' },
  'mayur-vihar': { lat: '28.5990', lng: '77.3010' },
  'botanical-garden': { lat: '28.5645', lng: '77.3340' },
};

export function generateLocalizedSeo(category: PortalCategory, locality?: NoidaLocality): LocalizedSeoData {
  const locName = locality ? locality.name : 'Noida';
  const landmark = locality ? locality.landmark : 'Sector 18, Sector 62 & Expressway';
  const geo = locality ? (LOCALITY_GEO[locality.slug] || { lat: '28.5708', lng: '77.3261' }) : { lat: '28.5708', lng: '77.3261' };
  const areaData = locality ? NOIDA_AREAS_DATA[locality.slug] : undefined;

  let h1 = '';
  let metaTitle = '';
  let metaDescription = '';
  let introText = '';
  let landmarkHighlights = '';

  if (category.slug === 'call-girls') {
    if (areaData) {
      h1 = areaData.h1;
      metaTitle = areaData.metaTitle;
      metaDescription = areaData.metaDescription;
      introText = areaData.overview[0];
      landmarkHighlights = `Stationed near ${areaData.metro} and ${areaData.landmarks.join(', ')}. Doorstep outcalls arrive in ${areaData.eta} to ${areaData.hotels.map(h => h.name).join(', ')}.`;
    } else {
      h1 = locality
        ? `Verified Escort Service & Call Girls in ${locName} - VIP Companions (24/7 Outcall)`
        : `Noida Escorts & Call Girls - Top Verified Escort Service & VIP Companions (NCR)`;

      metaTitle = locality
        ? `Noida Escorts in ${locName} 🟢 100% Real Photo 【Zero Advance COD】`
        : `Escorts in Noida 🟢 100% Real Photo | Call Girls in Noida 【Zero Advance COD】`;

      metaDescription = locality
        ? `Looking for verified escort service and call girls in ${locName}? Genuine independent models near ${landmark}. 100% real photo verification, 24/7 hotel outcall & in-call.`
        : `Discover top rated escort service and verified call girls in Noida. Real photo verified independent companions, VIP models, and 24/7 hotel outcall across all 18 Noida & NCR sectors.`;

      introText = `Welcome to the official directory for verified escort services, call girls, and independent companions in ${locName}. Whether you are a business traveler staying at luxury hotels, an IT corporate professional, or a resident looking for sophisticated companionship, our verified models offer discreet 24/7 outcall hospitality with direct WhatsApp confirmation.`;

      landmarkHighlights = `Verified independent models in ${locName} provide swift 15 to 30-minute outcall service across major landmarks including ${landmark}, as well as private sanitized in-call suites. All meetings prioritize mutual respect, discretion, and hygiene standards.`;
    }
  } else if (category.slug === 'adult-meetings') {
    h1 = locality
      ? `Adult Meetings in ${locName} - Casual Dating & Verified Singles`
      : `Adult Meetings in Noida - Casual Dating & Verified Independent Companions`;

    metaTitle = locality
      ? `Adult Meetings in ${locName} 🟢 100% Real Photo 【Zero Advance COD】`
      : `Adult Meetings in Noida 🟢 Verified Dating & Singles 【Zero Advance】`;

    metaDescription = locality
      ? `Connect with verified singles and companions for adult meetings in ${locName} near ${landmark}. 100% genuine photos and discreet private outcall.`
      : `Verified adult meetings, casual dating, and independent companions in Noida. Connect directly in Sector 18, Sector 62 & Expressway.`;

    introText = `Discover verified adult meetings, casual dating, and private companionship in ${locName}. Meet charming local singles and independent companions for relaxed dinners, corporate travel accompaniment, and private suite rendezvous.`;

    landmarkHighlights = areaData
      ? `Companions in ${locName} are stationed near ${areaData.metro} and ${areaData.landmarks.join(', ')}, reaching hotels like ${areaData.hotels[0]?.name || landmark} in ${areaData.eta}.`
      : `Our verified companions in ${locName} are available near ${landmark}, offering complete discretion, professional etiquette, and prompt 20-30 minute hotel outcall visits.`;
  } else if (category.slug === 'russian-escorts') {
    h1 = locality
      ? `Russian Escorts in ${locName} - Elite VIP Foreign Models & Companions`
      : `Russian Escorts in Noida - Elite VIP Foreign Models & Companions`;

    metaTitle = locality
      ? `Russian Escorts in ${locName} 🟢 Real Foreign Models 【Zero Advance】`
      : `Russian Escorts in Noida 🟢 Verified VIP Foreign Models 【Zero Advance】`;

    metaDescription = locality
      ? `Book verified Russian and foreign escorts in ${locName} near ${landmark}. 100% real photos, stunning international models, and fast 20-min hotel outcall.`
      : `Verified Russian escort services in Noida & NCR. Stunning international models and VIP foreign companions in Sector 18, Sector 62, Expressway & Greater Noida.`;

    introText = `Discover elite, breathtaking Russian escorts and international models in ${locName}. Offering world-class companionship, refined etiquette, and unforgettable luxury for high-profile gentlemen and 5-star hotel visits.`;

    landmarkHighlights = areaData
      ? `VIP Russian models in ${locName} arrive in ${areaData.eta} to 5-star hotels like ${areaData.hotels.map(h => h.name).join(', ')} with complete confidentiality.`
      : `Russian VIP models in ${locName} are available for 24/7 private hotel outcalls near ${landmark}, offering complete confidentiality and 20-minute arrival.`;
  } else if (category.slug === 'transsexual') {
    h1 = locality
      ? `Transsexual & TS Escorts in ${locName} - Shemale & Ladyboy Dating`
      : `Transsexual in Noida - Verified TS Escorts & Shemale Dating`;

    metaTitle = locality
      ? `Transsexual in ${locName} - TS Escorts & Shemales | 100% Real Photos`
      : `Transsexual in Noida - TS Escorts, Ladyboys & Shemale Dating | 24/7 Outcall`;

    metaDescription = locality
      ? `Discover verified transsexual escorts, shemales, and ladyboy companions in ${locName}. Real photos, private suites near ${landmark}, and direct WhatsApp contact.`
      : `Meet verified transsexual escorts and TS companions in Noida. Beautiful shemales and ladyboys available for private meetings across prime Noida & NCR localities.`;

    introText = `Explore verified transsexual, ladyboy, and TS escort listings in ${locName}. Meet charming, open-minded, and passionate trans models who provide warm hospitality, private in-call suites, and hotel outcalls with zero judgment.`;

    landmarkHighlights = areaData
      ? `TS companions in ${locName} are stationed near ${areaData.metro} and provide discreet outcalls to hotels near ${areaData.landmarks[0]}.`
      : `TS companions in ${locName} welcome clients with clean private accommodations located near ${landmark}, ensuring full discretion.`;
  } else {
    h1 = locality
      ? `Adult Meetings & Casual Dating in ${locName} - Local Singles (NSA)`
      : `Adult Meetings in Noida - Casual Dating, Local Singles & Erotic Meetups`;

    metaTitle = locality
      ? `Adult Meetings in ${locName} - Local Singles & NSA Dating | Verified`
      : `Adult Meetings in Noida - Casual Dating & Local Singles Hookups | 100% Discreet`;

    metaDescription = locality
      ? `Meet open-minded singles and casual dating partners in ${locName} near ${landmark}. Safe, verified NSA meetups and late-night romance in Noida & NCR.`
      : `Connect with local Noida singles, open-minded couples, and casual dating partners for NSA meetings and discreet dates across Noida & NCR.`;

    introText = `Join the most active adult community in ${locName}. Meet genuine local singles, college students, working professionals, and mature companions for casual dating, coffee dates, and no-strings-attached (NSA) romance.`;

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
      desc: `Prompt 15 to 25-minute outcall arrival at all leading 4-star and 5-star hotels in and around ${locName}, Noida NCR.`,
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

  // Pricing Overview
  const pricingOverview = areaData
    ? areaData.pricing.map((p) => ({
        tier: p.tier,
        duration: `${p.duration} (${p.rate})`,
        description: p.includes,
      }))
    : [
        { tier: 'Quick Session (1 Hour)', duration: '60 Minutes (₹2,500 - ₹4,000)', description: 'Includes in-call / hotel outcall meeting with complete personal attention.' },
        { tier: 'Extended Session (2 Hours)', duration: '120 Minutes (₹4,500 - ₹7,000)', description: 'Ideal for unhurried conversations, dining companionship, and relaxation.' },
        { tier: 'Overnight VIP Package', duration: 'Overnight 8-10 Hrs (₹12,000 - ₹18,000)', description: 'Complete overnight companionship for 5-star hotels and luxury suites.' },
      ];

  // Localized FAQs (Using specific FAQs if locality exists)
  const faqs = areaData && areaData.faqs.length > 0
    ? areaData.faqs
    : [
        {
          question: `How can I contact verified ${category.name.toLowerCase()} in ${locName}?`,
          answer: `You can directly tap the WhatsApp or Call Now button on any profile card in ${locName}. All profiles are verified for instant direct communication with coordinator at ${CONTACT.phoneDisplay}.`,
        },
        {
          question: `What session durations are available for ${category.name.toLowerCase()} in ${locName}?`,
          answer: `In ${locName}, companions offer flexible durations including 1-hour meetings, 2-hour dinner dates, and full-night VIP travel packages.`,
        },
        {
          question: `Is hotel outcall available near ${landmark} in ${locName}?`,
          answer: `Yes, most independent companions provide fast 15-25 minute outcall service to all major hotels, resorts, and private suites across ${locName} and surrounding NCR areas.`,
        },
        {
          question: `Do I need to pay advance money before meeting in ${locName}?`,
          answer: `No! As per our strict safety guidelines, never send advance payments or QR code transfers before meeting in person. Pay directly upon arrival.`,
        },
        {
          question: `Are the profiles and photos in ${locName} 100% real?`,
          answer: `Profiles marked with the green "100% Real" badge have completed phone and image authenticity checks for complete peace of mind.`,
        },
      ];

  // Nearby Localities Matrix
  const nearbyLocalities = areaData && areaData.adjacentSectors.length > 0
    ? areaData.adjacentSectors.map((adj) => ({
        name: adj.name,
        slug: adj.slug,
        distance: '5-15 min drive',
      }))
    : NOIDA_LOCALITIES
        .filter((l) => !locality || l.slug !== locality.slug)
        .slice(0, 8)
        .map((l) => ({
          name: l.name,
          slug: l.slug,
          distance: l.zone === (locality?.zone || 'Central Noida') ? '5-10 min drive' : '15-25 min drive',
        }));

  // JSON-LD Multi-Schema (FAQPage + LocalBusiness + BreadcrumbList)
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': `${BRAND.domain}/${category.slug}${locality ? `/${locality.slug}` : ''}#business`,
        name: `${BRAND.name} - ${category.name} in ${locName}`,
        description: metaDescription,
        url: `${BRAND.domain}/${category.slug}${locality ? `/${locality.slug}` : ''}`,
        telephone: `+${CONTACT.whatsapp1}`,
        image: BRAND.ogImage,
        address: {
          '@type': 'PostalAddress',
          streetAddress: landmark,
          addressLocality: locName,
          addressRegion: 'Uttar Pradesh',
          postalCode: '201301',
          addressCountry: 'IN',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: geo.lat,
          longitude: geo.lng,
        },
        currenciesAccepted: 'INR',
        paymentAccepted: 'Cash, UPI',
        areaServed: {
          '@type': 'City',
          name: `${locName}, Noida NCR`,
        },
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '00:00',
          closes: '23:59',
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `${BRAND.domain}/${category.slug}${locality ? `/${locality.slug}` : ''}#faq`,
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
        '@id': `${BRAND.domain}/${category.slug}${locality ? `/${locality.slug}` : ''}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: `${BRAND.domain}/`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: category.name,
            item: `${BRAND.domain}/${category.slug}`,
          },
          ...(locality
            ? [
                {
                  '@type': 'ListItem',
                  position: 3,
                  name: locality.name,
                  item: `${BRAND.domain}/${category.slug}/${locality.slug}`,
                },
              ]
            : []),
        ],
      },
    ],
  };

  // Similar Keyword Groups & Targeted Keyword Cloud
  let similarKeywordGroups: SimilarKeywordGroup[] = [];
  let keywords: string[] = [];

  if (areaData) {
    similarKeywordGroups = areaData.similarKeywordGroups || generateSimilarKeywordGroups(areaData);
    keywords = getAllAreaKeywords(areaData);
  } else {
    // Category Hub Level Keywords
    const catLower = category.name.toLowerCase();
    similarKeywordGroups = [
      {
        groupName: 'Core Category Searches',
        keywords: [
          `${catLower} in noida`,
          `noida ${catLower} service`,
          `independent ${catLower} noida`,
          `verified ${catLower} noida`,
          `24/7 ${catLower} in noida`,
          `top rated ${catLower} noida`,
          `best ${catLower} service in noida`
        ]
      },
      {
        groupName: 'Sector & Locality Searches',
        keywords: [
          `${catLower} in sector 18 noida`,
          `${catLower} in sector 62 noida`,
          `${catLower} in sector 50 noida`,
          `${catLower} in sector 137 noida`,
          `${catLower} pari chowk greater noida`,
          `${catLower} noida extension`,
          `${catLower} indirapuram ghaziabad`
        ]
      },
      {
        groupName: 'Hotel Outcall Corridors',
        keywords: [
          `hotel outcall ${catLower} noida`,
          `radisson blu noida ${catLower}`,
          `crowne plaza greater noida ${catLower}`,
          `park ascent sector 62 ${catLower}`,
          `5 star hotel outcall in noida`,
          `20 min hotel arrival ${catLower}`
        ]
      },
      {
        groupName: 'Safety & Payment Terms',
        keywords: [
          `cash on delivery ${catLower} noida`,
          `zero advance ${catLower} in noida`,
          `no advance payment ${catLower}`,
          `genuine ${catLower} in noida`,
          `100% real photo ${catLower} noida`,
          `doorstep arrival payment noida`
        ]
      }
    ];
    keywords = similarKeywordGroups.flatMap(g => g.keywords);
  }

  return {
    h1,
    metaTitle,
    metaDescription,
    keywords,
    similarKeywordGroups,
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
