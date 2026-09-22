// ============================================================
// JAIPUR SPA — SINGLE SOURCE OF TRUTH (100% EMOJI-FREE)
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
  name: 'Jaipur Escorts Club',
  shortName: 'Jaipur Escorts Club',
  legalName: 'Jaipur Escorts Club & Classifieds Portal',
  tagline: "Jaipur's #1 Verified Escorts & VIP Companions Directory",
  subTagline: 'Open 24 Hours • 100% Real Photo Verified • Jaipur, Rajasthan',
  domain: 'https://jaipurescortsclub.online',
  year: '2023',
  logo: '/jaipur_escorts_club_logo.jpg',
  ogImage: 'https://jaipurescortsclub.online/jaipur_escorts_club_logo.jpg',
} as const;

// ── 2. Contact & Location Information ─────────────────────────
export const CONTACT = {
  phone: '7357678356',
  phoneDisplay: '+91 73576 78356',
  phoneHref: 'tel:+917357678356',
  whatsapp1: '917357678356',
  whatsapp2: '917357678349',
  whatsapp1Display: '+91 73576 78356',
  whatsapp2Display: '+91 73576 78349',
  whatsapp1Href: 'https://wa.me/917357678356',
  whatsapp2Href: 'https://wa.me/917357678349',
  email: 'info@jaipurescortsclub.online',
  hours: 'Open 24 Hours, 7 Days a Week',
  address: 'Motilal Atal Rd, Opposite Polo Victory Cinema, Sindhi Camp, Jaipur, Rajasthan 302001',
  addressShort: 'Sindhi Camp, Jaipur, Rajasthan',
  landmark: 'Opposite Polo Victory Cinema, Gate 2 Metro Station (200m from Sindhi Camp Bus Stand)',
  mapLink: 'https://share.google/kHg49RATSkYBvfvxG',
  directReviewLink: 'https://share.google/kHg49RATSkYBvfvxG',
  embedMapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.8!2d75.8016!3d26.9239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sJaipur+Spa!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin',
  geo: { lat: '26.9239', lng: '75.8016' },
} as const;

// ── 3. Spa Services List ──────────────────────────────────────
export const SERVICES_LIST: ImportantServiceItem[] = [
  {
    id: 1,
    title: 'Thai Massage',
    slug: 'thai-massage',
    description: 'Traditional Thai therapy combining acupressure, stretching and energy-line activation for full-body rejuvenation.',
    duration: '60 / 90 / 120 min',
    iconName: 'Sparkles',
  },
  {
    id: 2,
    title: 'Swedish Massage',
    slug: 'swedish-massage',
    description: 'Classic European relaxation massage using long, flowing strokes to ease muscle tension and calm the nervous system.',
    duration: '60 / 90 / 120 min',
    iconName: 'Sparkles',
  },
  {
    id: 3,
    title: 'Deep Tissue Massage',
    slug: 'deep-tissue-massage',
    description: 'Targeted deep-pressure therapy that reaches underlying muscle layers to relieve chronic pain and tight knots.',
    duration: '60 / 90 / 120 min',
    iconName: 'Shield',
  },
  {
    id: 4,
    title: 'Aroma Therapy',
    slug: 'aroma-therapy',
    description: 'A holistic massage enhanced with therapeutic-grade essential oils — lavender, eucalyptus and jasmine — for mind-body harmony.',
    duration: '60 / 90 / 120 min',
    iconName: 'Heart',
  },
  {
    id: 5,
    title: 'Balinese Massage',
    slug: 'balinese-massage',
    description: 'Ancient Indonesian healing technique blending gentle stretches, acupressure and aromatic coconut oil for deep relaxation.',
    duration: '60 / 90 / 120 min',
    iconName: 'Sparkles',
  },
  {
    id: 6,
    title: 'Couple Massage',
    slug: 'couple-massage',
    description: 'Side-by-side luxury massage in our exclusive couple suite — a perfect gift for anniversaries, honeymoons or date nights.',
    duration: '60 / 90 / 120 min',
    iconName: 'Users',
  },
  {
    id: 7,
    title: 'Body Scrub',
    slug: 'body-scrub',
    description: 'A revitalising full-body exfoliation treatment using herbal scrubs to remove dead skin, brighten complexion and soften skin texture.',
    duration: '45 / 60 min',
    iconName: 'Sparkles',
  },
  {
    id: 8,
    title: 'Full Body Massage',
    slug: 'full-body-massage',
    description: 'A comprehensive head-to-toe massage ritual combining multiple techniques to restore energy, reduce stress and improve circulation.',
    duration: '60 / 90 / 120 min',
    iconName: 'Flame',
  },
  {
    id: 9,
    title: 'Steam Bath',
    slug: 'steam-bath',
    description: 'A purifying herbal steam therapy that opens pores, detoxifies the body, relaxes muscles and boosts circulation.',
    duration: '30 / 45 min',
    iconName: 'Sparkles',
  },
];

// ── 4. Hyperlocal Jaipur Areas ─────────────────────────────────
export const JAIPUR_LOCATIONS: LocationItem[] = [
  { id: 1, area: 'Sindhi Camp', slug: 'sindhi-camp', distance: '0 min', landmark: 'Our Main Location' },
  { id: 2, area: 'Jaipur Railway Station', slug: 'jaipur-railway-station', distance: '3 min drive', landmark: 'Near Jaipur Junction' },
  { id: 3, area: 'MI Road', slug: 'mi-road', distance: '5 min drive', landmark: 'Near MI Road Jaipur' },
  { id: 4, area: 'Bani Park', slug: 'bani-park', distance: '8 min drive', landmark: 'Near Bani Park' },
  { id: 5, area: 'Civil Lines', slug: 'civil-lines', distance: '7 min drive', landmark: 'Near Civil Lines Jaipur' },
  { id: 6, area: 'Chandpole', slug: 'chandpole', distance: '6 min drive', landmark: 'Near Chandpole Gate' },
  { id: 7, area: 'Station Road', slug: 'station-road', distance: '4 min drive', landmark: 'Near Station Road' },
  { id: 8, area: 'Polo Victory', slug: 'polo-victory', distance: '1 min walk', landmark: 'Opposite Polo Victory Cinema' },
  { id: 9, area: 'Collectorate Circle', slug: 'collectorate-circle', distance: '10 min drive', landmark: 'Near Collectorate Circle' },
  { id: 10, area: 'C Scheme Jaipur', slug: 'c-scheme', distance: '10 min drive', landmark: 'Near Ahinsa Circle' },
  { id: 11, area: 'Tonk Road & Durgapura', slug: 'tonk-road', distance: '15 min drive', landmark: 'Near Durgapura Flyover' },
];

// ── 5. Spa Statistics & Metrics ────────────────────────────────
export const SPA_STATS = {
  guests: '15,000+',
  therapists: '100%',
  availability: '24/7',
  rating: '4.9',
  experience: '5+ Years',
  services: '9+',
} as const;

// ── 6. WhatsApp Message Templates ─────────────────────────────
export const WA_MESSAGES = {
  general: 'Hello Jaipur Spa! I would like to book a spa appointment.',
  booking: 'Hello! I want to book a massage therapy session at Jaipur Spa, Sindhi Camp Jaipur.',
  thai: 'Hi! I am interested in booking a Thai Massage session at Jaipur Spa Jaipur.',
  couple: 'Hello! I would like to book a Couple Massage package at Jaipur Spa Jaipur.',
} as const;

// ── 7. Site Navigation Hierarchy ───────────────────────────────
export const NAVIGATION = {
  main: [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
  ],
  treatmentCategories: [
    {
      title: 'Relaxation',
      items: [
        { name: 'Thai Massage', path: '/thai-massage' },
        { name: 'Swedish Massage', path: '/swedish-massage' },
        { name: 'Balinese Massage', path: '/balinese-massage' },
      ],
    },
    {
      title: 'Therapeutic',
      items: [
        { name: 'Deep Tissue Massage', path: '/deep-tissue-massage' },
        { name: 'Aroma Therapy', path: '/aroma-therapy' },
        { name: 'Full Body Massage', path: '/full-body-massage' },
      ],
    },
    {
      title: 'Body & Steam',
      items: [
        { name: 'Couple Massage', path: '/couple-massage' },
        { name: 'Body Scrub', path: '/body-scrub' },
        { name: 'Steam Bath', path: '/steam-bath' },
      ],
    },
  ],
  locations: JAIPUR_LOCATIONS.map((loc) => ({
    name: loc.area,
    path: `/${loc.slug}`,
  })),
} as const;

// ── 8. SEO Metadata Defaults ──────────────────────────────────
export const SEO_DEFAULTS = {
  title: "Best Spa in Jaipur - Luxury Thai Massage | Jaipur Spa | Open 24 Hours",
  description: "Jaipur Spa — Premier luxury Thai spa in Sindhi Camp, Jaipur (302001). Certified therapists offering Thai Massage, Swedish, Deep Tissue, Aromatherapy, Couple Spa, Herbal Steam & Hydro Shower. Open 24 hours. Call +91 7357678356.",
  keywords: "Jaipur Spa, spa in Jaipur, Thai massage Jaipur, luxury spa Jaipur, massage near Sindhi Camp, best spa Jaipur, 24 hour spa Jaipur, couple massage Jaipur, Swedish massage Jaipur, deep tissue massage Jaipur, aromatherapy spa Jaipur, Balinese massage Jaipur, full body massage Jaipur, body scrub Jaipur, steam bath Jaipur, Jaipur Spa Sindhi Camp",
} as const;

export default {
  BRAND,
  CONTACT,
  SERVICES_LIST,
  JAIPUR_LOCATIONS,
  SPA_STATS,
  WA_MESSAGES,
  NAVIGATION,
  SEO_DEFAULTS,
};
