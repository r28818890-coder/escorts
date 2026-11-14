// ============================================================
// NOIDA & NCR HYPERLOCAL SEO CONTENT & SCHEMA GENERATOR
// ============================================================

import { PORTAL_CATEGORIES, NOIDA_LOCALITIES, PortalCategory, JaipurLocality } from './portalData';
import { BRAND, CONTACT } from './site';

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

export function generateLocalizedSeo(category: PortalCategory, locality?: JaipurLocality): LocalizedSeoData {
  const locName = locality ? locality.name : 'Noida';
  const landmark = locality ? locality.landmark : 'Sector 18, Sector 62 & Expressway';
  const geo = locality ? (LOCALITY_GEO[locality.slug] || { lat: '28.5708', lng: '77.3261' }) : { lat: '28.5708', lng: '77.3261' };

  let h1 = '';
  let metaTitle = '';
  let metaDescription = '';
  let introText = '';
  let landmarkHighlights = '';

  if (category.slug === 'call-girls') {
    h1 = locality
      ? `Verified Escort Service & Call Girls in ${locName} - VIP Companions (24/7 Outcall)`
      : `Noida Escorts & Call Girls - Top Verified Escort Service & VIP Companions (NCR)`;

    metaTitle = locality
      ? `Noida Escorts in ${locName} - Verified Call Girls & Escort Service | 24/7 Outcall`
      : `Noida Escorts | Verified Call Girls & Escort Service in Noida & NCR`;

    metaDescription = locality
      ? `Looking for verified escort service and call girls in ${locName}? Genuine independent models near ${landmark}. 100% real photo verification, 24/7 hotel outcall & in-call.`
      : `Discover top rated escort service and verified call girls in Noida. Real photo verified independent companions, VIP models, and 24/7 hotel outcall across all 18 Noida & NCR sectors.`;

    introText = `Welcome to the official directory for verified escort services, call girls, and independent companions in ${locName}. Whether you are a business traveler staying at 5-star hotels (Radisson, Crowne Plaza, Jaypee), an IT corporate professional, or a resident looking for sophisticated companionship, our verified models offer discreet 24/7 outcall hospitality with direct WhatsApp confirmation.`;

    landmarkHighlights = `Verified independent models in ${locName} provide swift 15 to 30-minute outcall service across major landmarks including ${landmark}, as well as private sanitized in-call suites. All meetings prioritize mutual respect, discretion, and hygiene standards.`;
  } else if (category.slug === 'massages') {
    h1 = locality
      ? `Best Massage & Spa in ${locName} - Thai, Swedish & Couple Spa`
      : `Best Massages in Noida - Luxury Thai Spa & Body Massage Therapists (24/7)`;

    metaTitle = locality
      ? `Massage in ${locName} - Luxury Body Spa & Therapists | Open 24/7`
      : `Best Massage in Noida - Luxury Thai Spa, Swedish & Body Massage | 24 Hours`;

    metaDescription = locality
      ? `Experience relaxing body massage in ${locName}. Traditional Thai massage, Swedish relaxation, deep tissue and steam bath near ${landmark}. Call or WhatsApp now.`
      : `Top rated luxury massage centers and certified therapists in Noida. Thai massage, couple spa, deep tissue, and herbal steam bath in Sector 18, Sector 62 & Expressway.`;

    introText = `Discover top-rated wellness therapists and luxury spa sanctuaries in ${locName}. Escape corporate stress with signature rejuvenating therapies including authentic Thai acupressure, European Swedish relaxation, deep tissue muscle recovery, B2B oil therapy, and private couple spa suites equipped with hot hydro showers.`;

    landmarkHighlights = `Our featured wellness centers in ${locName} are strategically located near ${landmark}, offering serene private AC rooms, organic therapeutic essential oils, hospital-grade sanitization, and 24-hour appointment booking.`;
  } else if (category.slug === 'male-escorts') {
    h1 = locality
      ? `Male Escorts in ${locName} - Handsome Call Boys & Companions for Women`
      : `Male Escorts in Noida - Handsome Call Boys & Fitness Companions for Women`;

    metaTitle = locality
      ? `Male Escorts in ${locName} - Verified Call Boys & Companions | 100% Discreet`
      : `Male Escorts in Noida - Verified Call Boys for Women & Couples | 24/7 Outcall`;

    metaDescription = locality
      ? `Find handsome, educated male escorts and call boys in ${locName} near ${landmark}. 100% confidential, friendly, and respectful companions for women & couples.`
      : `Verified male escorts and call boys in Noida. Handsome fitness models and companion services for female clients and couples in Sector 18, Sector 62 & Greater Noida.`;

    introText = `Connect with handsome, well-groomed, and respectful male escorts and call boys in ${locName}. Catering exclusively to single women, female travelers, and open-minded couples looking for discreet companionship, soothing body wellness, and polite dinner dates.`;

    landmarkHighlights = `Male companions in ${locName} are available for private hotel outcalls near ${landmark}, offering complete confidentiality and respectful personal care.`;
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

    landmarkHighlights = `TS companions in ${locName} welcome clients with clean private accommodations located near ${landmark}, ensuring full discretion.`;
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
      desc: `Prompt 20 to 30-minute outcall arrival at all leading 3-star, 4-star, and 5-star hotels in and around ${locName}, Noida NCR.`,
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
  const pricingOverview = [
    { tier: 'Quick Session (1 Hour)', duration: '60 Minutes', description: 'Includes in-call / hotel outcall meeting with complete personal attention.' },
    { tier: 'Extended Session (2 Hours)', duration: '120 Minutes', description: 'Ideal for unhurried conversations, dining companionship, and relaxation.' },
    { tier: 'Overnight VIP Package', duration: 'Overnight (8-10 Hrs)', description: 'Complete overnight companionship for 5-star hotels and luxury suites.' },
  ];

  // 5 Localized FAQs
  const faqs = [
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
      answer: `Yes, most independent companions provide fast 15-30 minute outcall service to all major hotels, resorts, and private suites across ${locName} and surrounding NCR areas.`,
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
  const nearbyLocalities = NOIDA_LOCALITIES
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
        priceRange: '₹₹',
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
            name: `${category.name} Noida`,
            item: `${BRAND.domain}/${category.slug}`,
          },
          ...(locality
            ? [
                {
                  '@type': 'ListItem',
                  position: 3,
                  name: `${locName}`,
                  item: `${BRAND.domain}/${category.slug}/${locality.slug}`,
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
