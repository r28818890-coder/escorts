// ============================================================
// NOIDA & NCR COMPANIONS — SINGLE SOURCE OF TRUTH
// ============================================================

export interface ImportantServiceItem {
  id: number;
  title: string;
  slug: string;
  description: string;
  duration: string;
  iconName: string;
}

export interface LocationItem {
  id: number;
  area: string;
  slug: string;
  distance: string;
  landmark: string;
}

// ── 1. Brand Identity ─────────────────────────────────────────
export const BRAND = {
  name: 'Escorts Hub Noida',
  shortName: 'Escorts Hub Noida',
  legalName: 'Escorts Hub Noida Classifieds & Directory',
  tagline: "Noida's #1 Verified Call Girl & Escorts Service Directory",
  subTagline: 'Open 24 Hours • 100% Real Photo Verified • 24/7 Hotel Outcalls in Noida & NCR',
  domain: 'https://wenoidaescorts.com',
  year: '2026',
  logo: '/ecj-logo.svg',
  ogImage: 'https://wenoidaescorts.com/ecj-og-image.png',
} as const;

// ── 2. Contact & Location Information ─────────────────────────
export const CONTACT = {
  phone: '9999999999',
  phoneDisplay: '+91 99999 99999',
  phoneHref: 'tel:+919999999999',
  whatsapp1: '918218125815',
  whatsapp2: '918218125815',
  whatsapp1Display: '+91 8218125815',
  whatsapp2Display: '+91 8218125815',
  whatsapp1Href: 'https://wa.me/918218125815',
  whatsapp2Href: 'https://wa.me/918218125815',
  email: 'r28818890@gmail.com',
  hours: 'Open 24 Hours, 7 Days a Week',
  address: 'Sector 18, Noida, Gautam Buddha Nagar, Uttar Pradesh 201301',
  addressShort: 'Sector 18, Noida (NCR)',
  landmark: 'Near DLF Mall of India & Sector 18 Metro Gate 2',
  mapLink: 'https://www.google.com/maps/search/?api=1&query=Sector+18%2C+Noida%2C+Uttar+Pradesh+201301',
  directReviewLink: 'https://www.google.com/maps/search/?api=1&query=Sector+18%2C+Noida%2C+Uttar+Pradesh+201301',
  embedMapSrc: 'https://www.google.com/maps?q=Sector+18%2C+Noida%2C+Uttar+Pradesh+201301&output=embed',
  geo: { lat: '28.5708', lng: '77.3211' },
} as const;

// ── 3. VIP Companion Services List ───────────────────────────
export const SERVICES_LIST: ImportantServiceItem[] = [
  {
    id: 1,
    title: 'VIP Hotel Outcall',
    slug: 'vip-hotel-outcall',
    description: 'Direct 24/7 prompt 20-minute hotel room visits to luxury 4-star and 5-star hotels across Noida and expressway corridors.',
    duration: '1-3 hrs / Full Night',
    iconName: 'Sparkles',
  },
  {
    id: 2,
    title: 'Private In-Call Companion',
    slug: 'private-incall',
    description: 'Discreet, safe, and hygienic private apartment in-call accompaniment with complete anonymity and warm hospitality.',
    duration: '1-2 hrs / Overnight',
    iconName: 'Shield',
  },
  {
    id: 3,
    title: 'Russian & Foreign Models',
    slug: 'russian-escorts',
    description: 'High-class European, Russian, and international hostesses offering elite companionship for corporate events and luxury suites.',
    duration: '2-4 hrs / Full Night',
    iconName: 'Heart',
  },
  {
    id: 4,
    title: 'Dinner & Social Dates',
    slug: 'dinner-dates',
    description: 'Sophisticated, charming escorts for business dinners, fine dining at DLF Mall of India, and corporate cocktail evenings.',
    duration: 'Evening / Event',
    iconName: 'Sparkles',
  },
  {
    id: 5,
    title: 'Celebrity & Air Hostess Models',
    slug: 'celebrity-models',
    description: 'Exclusive tier of verified runway models, college beauties, and cabin crew companions for discerning clients.',
    duration: '2-3 hrs / Full Night',
    iconName: 'Users',
  },
  {
    id: 6,
    title: 'Full Night Luxury Accompaniment',
    slug: 'full-night-stay',
    description: 'Complete unhurried overnight luxury companionship in 5-star hotel suites with total discretion and relaxed ambiance.',
    duration: 'Full Night (8-10 hrs)',
    iconName: 'Flame',
  },
];

// ── 4. Hyperlocal Noida & NCR Locations ───────────────────────
export const NOIDA_LOCATIONS: LocationItem[] = [
  { id: 1, area: 'Sector 18 Noida', slug: 'sector-18', distance: '0 min', landmark: 'Opposite DLF Mall of India & Metro Gate 2' },
  { id: 2, area: 'Sector 62 Noida', slug: 'sector-62', distance: '10 min drive', landmark: 'Electronic City & Fortis Hospital' },
  { id: 3, area: 'Sector 50 Noida', slug: 'sector-50', distance: '7 min drive', landmark: 'Near Wave City Center & Central Market' },
  { id: 4, area: 'Sector 137 Noida', slug: 'sector-137', distance: '12 min drive', landmark: 'Expressway & Felix Hospital' },
  { id: 5, area: 'Sector 15 & 16 (Film City)', slug: 'sector-18-film-city', distance: '4 min drive', landmark: 'DND Flyway & Film City' },
  { id: 6, area: 'Sector 76 & 78 Noida', slug: 'sector-76-78', distance: '9 min drive', landmark: 'Silicon City & Metro Station' },
  { id: 7, area: 'Sector 128 Noida', slug: 'sector-128', distance: '14 min drive', landmark: 'Jaypee Wish Town & Sultanpur' },
  { id: 8, area: 'Sector 142 Noida', slug: 'sector-142', distance: '15 min drive', landmark: 'Advant Navis Business Park' },
  { id: 9, area: 'Pari Chowk Greater Noida', slug: 'pari-chowk', distance: '20 min drive', landmark: 'Alpha 1 & Ansal Plaza' },
  { id: 10, area: 'Noida Extension (Gr Noida West)', slug: 'noida-extension', distance: '15 min drive', landmark: 'Gaur City & Char Murti' },
  { id: 11, area: 'Knowledge Park Greater Noida', slug: 'knowledge-park', distance: '25 min drive', landmark: 'India Expo Mart & Galgotias' },
  { id: 12, area: 'Indirapuram Ghaziabad', slug: 'indirapuram', distance: '10 min drive', landmark: 'Shipra Mall & Swarna Jayanti Park' },
  { id: 13, area: 'Vaishali Ghaziabad', slug: 'vaishali', distance: '12 min drive', landmark: 'Vaishali Metro & Max Hospital' },
  { id: 14, area: 'Vasundhara Ghaziabad', slug: 'vasundhara', distance: '15 min drive', landmark: 'Mewar Institute & Sector 10' },
  { id: 15, area: 'Crossings Republik', slug: 'crossings-republik', distance: '18 min drive', landmark: 'NH-24 & ABES Engineering' },
  { id: 16, area: 'Kaushambi', slug: 'kaushambi', distance: '14 min drive', landmark: 'Radisson Blu & Anand Vihar Border' },
  { id: 17, area: 'Mayur Vihar', slug: 'mayur-vihar', distance: '8 min drive', landmark: 'Phase 1 & DND Noida Border' },
  { id: 18, area: 'Botanical Garden (Sector 37)', slug: 'botanical-garden', distance: '5 min drive', landmark: 'Interchange Metro & Amity University' },
];

// ── 5. Directory Statistics & Metrics ──────────────────────────
export const SPA_STATS = {
  guests: '25,000+',
  therapists: '100% Real',
  availability: '24/7 Doorstep',
  rating: '4.95',
  experience: '6+ Years',
  services: '18+ Locations',
} as const;

// ── 6. WhatsApp Message Templates ─────────────────────────────
export const WA_MESSAGES = {
  general: 'Hello Escorts Hub Noida! I would like to make an inquiry for Noida & NCR.',
  booking: 'Hello! I want to book a verified appointment with Escorts Hub Noida in Sector 18 / NCR.',
  thai: 'Hi! I am interested in booking an appointment with Escorts Hub Noida.',
  couple: 'Hello! I would like to book a VIP appointment with Escorts Hub Noida.',
} as const;

// ── 7. Site Navigation Hierarchy ───────────────────────────────
export const NAVIGATION = {
  main: [
    { name: 'Home', path: '/' },
    { name: 'Categories', path: '/call-girls' },
    { name: 'Noida Areas', path: '/noida-areas' },
    { name: 'Safety Guide', path: '/safety-guide' },
    { name: 'Contact', path: '/contact' },
  ],
  services: SERVICES_LIST.map((svc) => ({
    name: svc.title,
    path: `/services/${svc.slug}`,
  })),
  footer: [
    {
      title: 'Directory',
      items: [
        { name: 'Call Girls & Escorts', path: '/call-girls' },
        { name: 'VIP Hotel Outcalls', path: '/services/vip-hotel-outcall' },
        { name: 'Russian Escorts', path: '/russian-escorts' },
        { name: 'Transsexual Dating', path: '/transsexual' },
        { name: 'Adult Meetings', path: '/adult-meetings' },
      ],
    },
    {
      title: 'Company',
      items: [
        { name: 'About Us', path: '/about' },
        { name: 'Contact', path: '/contact' },
        { name: 'Privacy Policy', path: '/privacy' },
        { name: 'Terms of Service', path: '/terms' },
        { name: 'Refund Policy', path: '/refund' },
      ],
    },
    {
      title: 'NCR Areas',
      items: [
        { name: 'Sector 18 Noida', path: '/call-girls/sector-18' },
        { name: 'Sector 62 Noida', path: '/call-girls/sector-62' },
        { name: 'Greater Noida Pari Chowk', path: '/call-girls/pari-chowk' },
        { name: 'Indirapuram Ghaziabad', path: '/call-girls/indirapuram' },
        { name: 'Noida Expressway (137)', path: '/call-girls/sector-137' },
      ],
    },
  ],
  locations: NOIDA_LOCATIONS.map((loc) => ({
    name: loc.area,
    path: `/${loc.slug}`,
  })),
} as const;

// ── 8. SEO Metadata Defaults ──────────────────────────────────
export const SEO_DEFAULTS = {
  title: "Escorts in Noida | Verified 24/7 Hotel Outcall",
  description: "Escorts Hub Noida — 100% Real photo verified companions & independent call girls in Noida Sector 18, Sector 62, Greater Noida, Expressway & Indirapuram. 24/7 hotel outcall visits.",
  keywords: "Escorts in Noida, call girls Noida, Noida Sector 18 escorts, Sector 62 call girls, Greater Noida escorts, Pari Chowk call girls, Noida Extension escorts, Indirapuram escorts, Vaishali call girls, VIP companions Noida, 24 hour hotel outcall Noida",
} as const;

export default {
  BRAND,
  CONTACT,
  SERVICES_LIST,
  NOIDA_LOCATIONS,
  SPA_STATS,
  WA_MESSAGES,
  NAVIGATION,
  SEO_DEFAULTS,
};
