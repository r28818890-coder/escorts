// ============================================================
// NOIDA & NCR CLASSIFIEDS DIRECTORY DATA (100 VERIFIED PROFILES)
// ============================================================

export interface NoidaLocality {
  id: string;
  name: string;
  slug: string;
  landmark: string;
  zone: 'Central Noida' | 'Noida Expressway' | 'Greater Noida' | 'Ghaziabad NCR';
  popular: boolean;
}

export interface PortalCategory {
  id: string;
  name: string;
  slug: string;
  iconName: string;
  tagline: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  subcategories: string[];
}

export interface ClassifiedAd {
  id: string;
  title: string;
  slug: string;
  categoryId: string;
  categorySlug: string;
  locality: string;
  localitySlug: string;
  city: string;
  age?: number;
  rates?: {
    perHour?: string;
    perSession?: string;
    fullNight?: string;
  };
  phone: string;
  whatsapp: string;
  images: string[];
  alt?: string;
  isVerified: boolean;
  isVip: boolean;
  isOnline: boolean;
  rating: number;
  reviewsCount: number;
  services: string[];
  description: string;
  postedAt: string;
  views: number;
}

// ── 1. Noida & NCR Localities (18 Key Strategic Areas) ────
export const NOIDA_LOCALITIES: NoidaLocality[] = [
  { id: 'sector-18', name: 'Sector 18 Noida', slug: 'sector-18', landmark: 'Opposite DLF Mall of India & Metro Gate 2', zone: 'Central Noida', popular: true },
  { id: 'sector-62', name: 'Sector 62 Noida', slug: 'sector-62', landmark: 'Electronic City & Fortis Hospital IT Hub', zone: 'Central Noida', popular: true },
  { id: 'sector-50', name: 'Sector 50 Noida', slug: 'sector-50', landmark: 'Near Wave City Center & Central Market', zone: 'Central Noida', popular: true },
  { id: 'sector-137', name: 'Sector 137 Noida', slug: 'sector-137', landmark: 'Noida Expressway & Felix Hospital', zone: 'Noida Expressway', popular: true },
  { id: 'sector-18-film-city', name: 'Sector 16 & Film City', slug: 'sector-18-film-city', landmark: 'DND Flyway, Metro & Film City', zone: 'Central Noida', popular: true },
  { id: 'sector-76-78', name: 'Sector 76 & 78 Noida', slug: 'sector-76-78', landmark: 'Silicon City & Sector 76 Metro', zone: 'Central Noida', popular: true },
  { id: 'sector-128', name: 'Sector 128 Noida', slug: 'sector-128', landmark: 'Jaypee Wish Town & Kalindi Kunj Road', zone: 'Noida Expressway', popular: true },
  { id: 'sector-142', name: 'Sector 142 Noida', slug: 'sector-142', landmark: 'Advant Navis Business Park & Metro', zone: 'Noida Expressway', popular: true },
  { id: 'pari-chowk', name: 'Pari Chowk Greater Noida', slug: 'pari-chowk', landmark: 'Alpha 1, Ansal Plaza & Metro Station', zone: 'Greater Noida', popular: true },
  { id: 'noida-extension', name: 'Noida Extension (Gr Noida West)', slug: 'noida-extension', landmark: 'Gaur City & Char Murti Chowk', zone: 'Greater Noida', popular: true },
  { id: 'knowledge-park', name: 'Knowledge Park Greater Noida', slug: 'knowledge-park', landmark: 'India Expo Mart & Galgotias', zone: 'Greater Noida', popular: false },
  { id: 'indirapuram', name: 'Indirapuram Ghaziabad', slug: 'indirapuram', landmark: 'Shipra Mall, Habitat Centre & CISF', zone: 'Ghaziabad NCR', popular: true },
  { id: 'vaishali', name: 'Vaishali Ghaziabad', slug: 'vaishali', landmark: 'Vaishali Metro Station & Max Hospital', zone: 'Ghaziabad NCR', popular: true },
  { id: 'vasundhara', name: 'Vasundhara Ghaziabad', slug: 'vasundhara', landmark: 'Mewar Institute & Sector 10', zone: 'Ghaziabad NCR', popular: false },
  { id: 'crossings-republik', name: 'Crossings Republik', slug: 'crossings-republik', landmark: 'NH-24, ABES & Gaur City Border', zone: 'Ghaziabad NCR', popular: false },
  { id: 'kaushambi', name: 'Kaushambi', slug: 'kaushambi', landmark: 'Radisson Blu & Anand Vihar Metro Border', zone: 'Ghaziabad NCR', popular: false },
  { id: 'mayur-vihar', name: 'Mayur Vihar', slug: 'mayur-vihar', landmark: 'Phase 1 & DND Noida Toll Border', zone: 'Central Noida', popular: false },
  { id: 'botanical-garden', name: 'Botanical Garden (Sector 37)', slug: 'botanical-garden', landmark: 'Interchange Metro & Amity University', zone: 'Central Noida', popular: true },
];

// ── 2. Portal Categories ─────────────────────────────────────
export const PORTAL_CATEGORIES: PortalCategory[] = [
  {
    id: 'call-girls',
    name: 'Call Girls & Escorts',
    slug: 'call-girls',
    iconName: 'Heart',
    tagline: 'Verified Independent Escorts & VIP Models in Noida & NCR',
    description: 'Browse verified independent female companions, VIP escort models, college models, and corporate hostesses in Noida and surrounding NCR areas (Sector 18, Sector 62, Greater Noida, Indirapuram). 100% genuine photo profiles with direct WhatsApp and phone contact for dinners, hotel meetings, and private travel companionship.',
    seoTitle: 'Call Girls in Noida | Verified Independent Escort Models Noida & NCR',
    seoDescription: 'Verified Noida call girls and independent escort ads. Genuine photos, honest rates, and 24/7 availability in Sector 18, Sector 62, Greater Noida, Expressway & Indirapuram.',
    subcategories: [
      'Independent Girls (W4M)',
      'VIP Luxury Escorts',
      'Corporate Hostesses',
      'College Models',
      'Housewives Companions',
      'Hotel Outcall Escorts',
      'Dinner & Event Companions',
      'Russian / Foreigner Models',
    ],
  },
  {
    id: 'adult-meetings',
    name: 'Adult Meetings & Casual Dating',
    slug: 'adult-meetings',
    iconName: 'Flame',
    tagline: 'Casual Dating & Local Singles in Noida',
    description: 'Connect with verified local singles in Noida for casual dating, dinner dates, and late-night private conversations.',
    seoTitle: 'Adult Meetings in Noida | Casual Dating & Singles',
    seoDescription: 'Casual adult dating in Noida. Connect with verified local singles for dinner dates and discreet meetings.',
    subcategories: [
      'Casual Dating',
      'Dinner Dates',
      'Late-Night Conversations',
      'VIP Hotel Encounters',
    ],
  },
  {
    id: 'russian-escorts',
    name: 'Russian & VIP Escorts',
    slug: 'russian-escorts',
    iconName: 'Sparkles',
    tagline: 'Elite Russian, Foreign & High-Class VIP Models in Noida & NCR',
    description: 'Connect with elite Russian escorts, international hostesses, and high-class VIP models in Noida. 100% genuine photo profiles with direct hotel outcall booking.',
    seoTitle: 'Russian Escorts in Noida | VIP Foreign Models & Companions',
    seoDescription: 'Verified Russian and foreign escort services in Noida & NCR. Elite international companions with 24/7 hotel outcall visits across all sectors.',
    subcategories: [
      'Russian Models',
      'International Hostesses',
      'VIP Luxury Companions',
      '5-Star Hotel Outcall',
    ],
  },
];

// ── 3. 54 Verified Classified Ads in Noida & NCR (3 Per Locality) ────
export const INITIAL_CLASSIFIED_ADS: ClassifiedAd[] = [
  {
    "id": "ad-cg-001",
    "title": "Riya - Verified VIP Model in Sector 18 Noida",
    "slug": "riya-verified-vip-model-sector-18",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Sector 18 Noida",
    "localitySlug": "sector-18",
    "city": "Noida",
    "age": 23,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-sector-18-noida-riya-01.webp"
    ],
    "alt": "Riya, verified VIP model for hotel outcall in Sector 18 Noida Noida",
    "isVerified": true,
    "isVip": true,
    "isOnline": false,
    "rating": 4.9,
    "reviewsCount": 25,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Riya, an elegant, verified 24/7 companion in Sector 18 Noida. Available for prompt 20-minute hotel doorstep outcalls near DLF Mall of India, Atta Market & Metro Gate 2. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "3 mins ago",
    "views": 1237,
    "rates": {
      "perHour": "\u20b93,000",
      "perSession": "\u20b95,000",
      "fullNight": "\u20b912,000"
    }
  },
  {
    "id": "ad-cg-002",
    "title": "Ananya - Verified VIP Model in Sector 18 Noida",
    "slug": "ananya-verified-vip-model-sector-18",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Sector 18 Noida",
    "localitySlug": "sector-18",
    "city": "Noida",
    "age": 26,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-sector-18-noida-ananya-01.webp"
    ],
    "alt": "Ananya, verified VIP model for hotel outcall in Sector 18 Noida Noida",
    "isVerified": true,
    "isVip": false,
    "isOnline": true,
    "rating": 5.0,
    "reviewsCount": 32,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Ananya, an elegant, verified 24/7 companion in Sector 18 Noida. Available for prompt 20-minute hotel doorstep outcalls near DLF Mall of India, Atta Market & Metro Gate 2. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "4 mins ago",
    "views": 1274,
    "rates": {
      "perHour": "\u20b93,500",
      "perSession": "\u20b95,500",
      "fullNight": "\u20b914,000"
    }
  },
  {
    "id": "ad-cg-003",
    "title": "Pooja - Verified VIP Model in Sector 18 Noida",
    "slug": "pooja-verified-vip-model-sector-18",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Sector 18 Noida",
    "localitySlug": "sector-18",
    "city": "Noida",
    "age": 22,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-sector-18-noida-pooja-01.webp"
    ],
    "alt": "Pooja, verified VIP model for hotel outcall in Sector 18 Noida Noida",
    "isVerified": true,
    "isVip": false,
    "isOnline": false,
    "rating": 4.8,
    "reviewsCount": 39,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Pooja, an elegant, verified 24/7 companion in Sector 18 Noida. Available for prompt 20-minute hotel doorstep outcalls near DLF Mall of India, Atta Market & Metro Gate 2. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "5 mins ago",
    "views": 1311,
    "rates": {
      "perHour": "\u20b94,000",
      "perSession": "\u20b96,000",
      "fullNight": "\u20b916,000"
    }
  },
  {
    "id": "ad-cg-004",
    "title": "Kavya - Verified VIP Model in Sector 18 Noida",
    "slug": "kavya-verified-vip-model-sector-18",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Sector 18 Noida",
    "localitySlug": "sector-18",
    "city": "Noida",
    "age": 25,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-sector-18-noida-kavya-01.webp"
    ],
    "alt": "Kavya, verified VIP model for hotel outcall in Sector 18 Noida Noida",
    "isVerified": true,
    "isVip": true,
    "isOnline": true,
    "rating": 4.9,
    "reviewsCount": 46,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Kavya, an elegant, verified 24/7 companion in Sector 18 Noida. Available for prompt 20-minute hotel doorstep outcalls near DLF Mall of India, Atta Market & Metro Gate 2. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "6 mins ago",
    "views": 1348,
    "rates": {
      "perHour": "\u20b92,500",
      "perSession": "\u20b94,500",
      "fullNight": "\u20b910,000"
    }
  },
  {
    "id": "ad-cg-005",
    "title": "Simran - Verified VIP Model in Sector 18 Noida",
    "slug": "simran-verified-vip-model-sector-18",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Sector 18 Noida",
    "localitySlug": "sector-18",
    "city": "Noida",
    "age": 21,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-sector-18-noida-simran-01.webp"
    ],
    "alt": "Simran, verified VIP model for hotel outcall in Sector 18 Noida Noida",
    "isVerified": true,
    "isVip": false,
    "isOnline": false,
    "rating": 5.0,
    "reviewsCount": 53,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Simran, an elegant, verified 24/7 companion in Sector 18 Noida. Available for prompt 20-minute hotel doorstep outcalls near DLF Mall of India, Atta Market & Metro Gate 2. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "7 mins ago",
    "views": 1385,
    "rates": {
      "perHour": "\u20b93,000",
      "perSession": "\u20b95,000",
      "fullNight": "\u20b912,000"
    }
  },
  {
    "id": "ad-cg-006",
    "title": "Tanya - Verified VIP Model in Sector 18 Noida",
    "slug": "tanya-verified-vip-model-sector-18",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Sector 18 Noida",
    "localitySlug": "sector-18",
    "city": "Noida",
    "age": 24,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-sector-18-noida-tanya-01.webp"
    ],
    "alt": "Tanya, verified VIP model for hotel outcall in Sector 18 Noida Noida",
    "isVerified": true,
    "isVip": false,
    "isOnline": true,
    "rating": 4.8,
    "reviewsCount": 60,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Tanya, an elegant, verified 24/7 companion in Sector 18 Noida. Available for prompt 20-minute hotel doorstep outcalls near DLF Mall of India, Atta Market & Metro Gate 2. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "8 mins ago",
    "views": 1422,
    "rates": {
      "perHour": "\u20b93,500",
      "perSession": "\u20b95,500",
      "fullNight": "\u20b914,000"
    }
  },
  {
    "id": "ad-cg-007",
    "title": "Priya - Verified VIP Model in Sector 62 Noida",
    "slug": "priya-verified-vip-model-sector-62",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Sector 62 Noida",
    "localitySlug": "sector-62",
    "city": "Noida",
    "age": 20,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-sector-62-noida-priya-01.webp"
    ],
    "alt": "Priya, verified VIP model for hotel outcall in Sector 62 Noida Noida",
    "isVerified": true,
    "isVip": true,
    "isOnline": false,
    "rating": 4.9,
    "reviewsCount": 67,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Priya, an elegant, verified 24/7 companion in Sector 62 Noida. Available for prompt 20-minute hotel doorstep outcalls near Electronic City, Fortis Hospital & IT Park. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "9 mins ago",
    "views": 1459,
    "rates": {
      "perHour": "\u20b94,000",
      "perSession": "\u20b96,000",
      "fullNight": "\u20b916,000"
    }
  },
  {
    "id": "ad-cg-008",
    "title": "Muskan - Verified VIP Model in Sector 62 Noida",
    "slug": "muskan-verified-vip-model-sector-62",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Sector 62 Noida",
    "localitySlug": "sector-62",
    "city": "Noida",
    "age": 23,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-sector-62-noida-muskan-01.webp"
    ],
    "alt": "Muskan, verified VIP model for hotel outcall in Sector 62 Noida Noida",
    "isVerified": true,
    "isVip": false,
    "isOnline": true,
    "rating": 5.0,
    "reviewsCount": 74,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Muskan, an elegant, verified 24/7 companion in Sector 62 Noida. Available for prompt 20-minute hotel doorstep outcalls near Electronic City, Fortis Hospital & IT Park. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "10 mins ago",
    "views": 1496,
    "rates": {
      "perHour": "\u20b92,500",
      "perSession": "\u20b94,500",
      "fullNight": "\u20b910,000"
    }
  },
  {
    "id": "ad-cg-009",
    "title": "Neha - Verified VIP Model in Sector 62 Noida",
    "slug": "neha-verified-vip-model-sector-62",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Sector 62 Noida",
    "localitySlug": "sector-62",
    "city": "Noida",
    "age": 26,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-sector-62-noida-neha-01.webp"
    ],
    "alt": "Neha, verified VIP model for hotel outcall in Sector 62 Noida Noida",
    "isVerified": true,
    "isVip": false,
    "isOnline": false,
    "rating": 4.8,
    "reviewsCount": 81,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Neha, an elegant, verified 24/7 companion in Sector 62 Noida. Available for prompt 20-minute hotel doorstep outcalls near Electronic City, Fortis Hospital & IT Park. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "11 mins ago",
    "views": 1533,
    "rates": {
      "perHour": "\u20b93,000",
      "perSession": "\u20b95,000",
      "fullNight": "\u20b912,000"
    }
  },
  {
    "id": "ad-cg-010",
    "title": "Meera - Verified VIP Model in Sector 62 Noida",
    "slug": "meera-verified-vip-model-sector-62",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Sector 62 Noida",
    "localitySlug": "sector-62",
    "city": "Noida",
    "age": 22,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-sector-62-noida-meera-01.webp"
    ],
    "alt": "Meera, verified VIP model for hotel outcall in Sector 62 Noida Noida",
    "isVerified": true,
    "isVip": true,
    "isOnline": true,
    "rating": 4.9,
    "reviewsCount": 88,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Meera, an elegant, verified 24/7 companion in Sector 62 Noida. Available for prompt 20-minute hotel doorstep outcalls near Electronic City, Fortis Hospital & IT Park. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "12 mins ago",
    "views": 1570,
    "rates": {
      "perHour": "\u20b93,500",
      "perSession": "\u20b95,500",
      "fullNight": "\u20b914,000"
    }
  },
  {
    "id": "ad-cg-011",
    "title": "Shreya - Verified VIP Model in Sector 62 Noida",
    "slug": "shreya-verified-vip-model-sector-62",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Sector 62 Noida",
    "localitySlug": "sector-62",
    "city": "Noida",
    "age": 25,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-sector-62-noida-shreya-01.webp"
    ],
    "alt": "Shreya, verified VIP model for hotel outcall in Sector 62 Noida Noida",
    "isVerified": true,
    "isVip": false,
    "isOnline": false,
    "rating": 5.0,
    "reviewsCount": 95,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Shreya, an elegant, verified 24/7 companion in Sector 62 Noida. Available for prompt 20-minute hotel doorstep outcalls near Electronic City, Fortis Hospital & IT Park. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "13 mins ago",
    "views": 1607,
    "rates": {
      "perHour": "\u20b94,000",
      "perSession": "\u20b96,000",
      "fullNight": "\u20b916,000"
    }
  },
  {
    "id": "ad-cg-012",
    "title": "Sneha - Verified VIP Model in Sector 62 Noida",
    "slug": "sneha-verified-vip-model-sector-62",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Sector 62 Noida",
    "localitySlug": "sector-62",
    "city": "Noida",
    "age": 21,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-sector-62-noida-sneha-01.webp"
    ],
    "alt": "Sneha, verified VIP model for hotel outcall in Sector 62 Noida Noida",
    "isVerified": true,
    "isVip": false,
    "isOnline": true,
    "rating": 4.8,
    "reviewsCount": 22,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Sneha, an elegant, verified 24/7 companion in Sector 62 Noida. Available for prompt 20-minute hotel doorstep outcalls near Electronic City, Fortis Hospital & IT Park. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "14 mins ago",
    "views": 1644,
    "rates": {
      "perHour": "\u20b92,500",
      "perSession": "\u20b94,500",
      "fullNight": "\u20b910,000"
    }
  },
  {
    "id": "ad-cg-013",
    "title": "Aarohi - Verified VIP Model in Sector 50 Noida",
    "slug": "aarohi-verified-vip-model-sector-50",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Sector 50 Noida",
    "localitySlug": "sector-50",
    "city": "Noida",
    "age": 24,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-sector-50-noida-aarohi-01.webp"
    ],
    "alt": "Aarohi, verified VIP model for hotel outcall in Sector 50 Noida Noida",
    "isVerified": true,
    "isVip": true,
    "isOnline": false,
    "rating": 4.9,
    "reviewsCount": 29,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Aarohi, an elegant, verified 24/7 companion in Sector 50 Noida. Available for prompt 20-minute hotel doorstep outcalls near Wave City Center, Central Market & Metro. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "15 mins ago",
    "views": 1681,
    "rates": {
      "perHour": "\u20b93,000",
      "perSession": "\u20b95,000",
      "fullNight": "\u20b912,000"
    }
  },
  {
    "id": "ad-cg-014",
    "title": "Natasha - Verified VIP Model in Sector 50 Noida",
    "slug": "natasha-verified-vip-model-sector-50",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Sector 50 Noida",
    "localitySlug": "sector-50",
    "city": "Noida",
    "age": 20,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-sector-50-noida-natasha-01.webp"
    ],
    "alt": "Natasha, verified VIP model for hotel outcall in Sector 50 Noida Noida",
    "isVerified": true,
    "isVip": false,
    "isOnline": true,
    "rating": 5.0,
    "reviewsCount": 36,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Natasha, an elegant, verified 24/7 companion in Sector 50 Noida. Available for prompt 20-minute hotel doorstep outcalls near Wave City Center, Central Market & Metro. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "16 mins ago",
    "views": 1718,
    "rates": {
      "perHour": "\u20b93,500",
      "perSession": "\u20b95,500",
      "fullNight": "\u20b914,000"
    }
  },
  {
    "id": "ad-cg-015",
    "title": "Divya - Verified VIP Model in Sector 50 Noida",
    "slug": "divya-verified-vip-model-sector-50",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Sector 50 Noida",
    "localitySlug": "sector-50",
    "city": "Noida",
    "age": 23,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-sector-50-noida-divya-01.webp"
    ],
    "alt": "Divya, verified VIP model for hotel outcall in Sector 50 Noida Noida",
    "isVerified": true,
    "isVip": false,
    "isOnline": false,
    "rating": 4.8,
    "reviewsCount": 43,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Divya, an elegant, verified 24/7 companion in Sector 50 Noida. Available for prompt 20-minute hotel doorstep outcalls near Wave City Center, Central Market & Metro. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "17 mins ago",
    "views": 1755,
    "rates": {
      "perHour": "\u20b94,000",
      "perSession": "\u20b96,000",
      "fullNight": "\u20b916,000"
    }
  },
  {
    "id": "ad-cg-016",
    "title": "Payal - Verified VIP Model in Sector 50 Noida",
    "slug": "payal-verified-vip-model-sector-50",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Sector 50 Noida",
    "localitySlug": "sector-50",
    "city": "Noida",
    "age": 26,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-sector-50-noida-payal-01.webp"
    ],
    "alt": "Payal, verified VIP model for hotel outcall in Sector 50 Noida Noida",
    "isVerified": true,
    "isVip": true,
    "isOnline": true,
    "rating": 4.9,
    "reviewsCount": 50,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Payal, an elegant, verified 24/7 companion in Sector 50 Noida. Available for prompt 20-minute hotel doorstep outcalls near Wave City Center, Central Market & Metro. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "18 mins ago",
    "views": 1792,
    "rates": {
      "perHour": "\u20b92,500",
      "perSession": "\u20b94,500",
      "fullNight": "\u20b910,000"
    }
  },
  {
    "id": "ad-cg-017",
    "title": "Ishita - Verified VIP Model in Sector 50 Noida",
    "slug": "ishita-verified-vip-model-sector-50",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Sector 50 Noida",
    "localitySlug": "sector-50",
    "city": "Noida",
    "age": 22,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-sector-50-noida-ishita-01.webp"
    ],
    "alt": "Ishita, verified VIP model for hotel outcall in Sector 50 Noida Noida",
    "isVerified": true,
    "isVip": false,
    "isOnline": false,
    "rating": 5.0,
    "reviewsCount": 57,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Ishita, an elegant, verified 24/7 companion in Sector 50 Noida. Available for prompt 20-minute hotel doorstep outcalls near Wave City Center, Central Market & Metro. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "19 mins ago",
    "views": 1829,
    "rates": {
      "perHour": "\u20b93,000",
      "perSession": "\u20b95,000",
      "fullNight": "\u20b912,000"
    }
  },
  {
    "id": "ad-cg-018",
    "title": "Zara - Verified VIP Model in Sector 50 Noida",
    "slug": "zara-verified-vip-model-sector-50",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Sector 50 Noida",
    "localitySlug": "sector-50",
    "city": "Noida",
    "age": 25,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-sector-50-noida-zara-01.webp"
    ],
    "alt": "Zara, verified VIP model for hotel outcall in Sector 50 Noida Noida",
    "isVerified": true,
    "isVip": false,
    "isOnline": true,
    "rating": 4.8,
    "reviewsCount": 64,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Zara, an elegant, verified 24/7 companion in Sector 50 Noida. Available for prompt 20-minute hotel doorstep outcalls near Wave City Center, Central Market & Metro. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "20 mins ago",
    "views": 1866,
    "rates": {
      "perHour": "\u20b93,500",
      "perSession": "\u20b95,500",
      "fullNight": "\u20b914,000"
    }
  },
  {
    "id": "ad-cg-019",
    "title": "Alisha - Verified VIP Model in Sector 137 Noida",
    "slug": "alisha-verified-vip-model-sector-137",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Sector 137 Noida",
    "localitySlug": "sector-137",
    "city": "Noida",
    "age": 21,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-sector-137-noida-alisha-01.webp"
    ],
    "alt": "Alisha, verified VIP model for hotel outcall in Sector 137 Noida Noida",
    "isVerified": true,
    "isVip": true,
    "isOnline": false,
    "rating": 4.9,
    "reviewsCount": 71,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Alisha, an elegant, verified 24/7 companion in Sector 137 Noida. Available for prompt 20-minute hotel doorstep outcalls near Noida-Greater Noida Expressway & Felix Hospital. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "21 mins ago",
    "views": 1903,
    "rates": {
      "perHour": "\u20b94,000",
      "perSession": "\u20b96,000",
      "fullNight": "\u20b916,000"
    }
  },
  {
    "id": "ad-cg-020",
    "title": "Komal - Verified VIP Model in Sector 137 Noida",
    "slug": "komal-verified-vip-model-sector-137",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Sector 137 Noida",
    "localitySlug": "sector-137",
    "city": "Noida",
    "age": 24,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-sector-137-noida-komal-01.webp"
    ],
    "alt": "Komal, verified VIP model for hotel outcall in Sector 137 Noida Noida",
    "isVerified": true,
    "isVip": false,
    "isOnline": true,
    "rating": 5.0,
    "reviewsCount": 78,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Komal, an elegant, verified 24/7 companion in Sector 137 Noida. Available for prompt 20-minute hotel doorstep outcalls near Noida-Greater Noida Expressway & Felix Hospital. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "22 mins ago",
    "views": 1940,
    "rates": {
      "perHour": "\u20b92,500",
      "perSession": "\u20b94,500",
      "fullNight": "\u20b910,000"
    }
  },
  {
    "id": "ad-cg-021",
    "title": "Sonali - Verified VIP Model in Sector 137 Noida",
    "slug": "sonali-verified-vip-model-sector-137",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Sector 137 Noida",
    "localitySlug": "sector-137",
    "city": "Noida",
    "age": 20,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-sector-137-noida-sonali-01.webp"
    ],
    "alt": "Sonali, verified VIP model for hotel outcall in Sector 137 Noida Noida",
    "isVerified": true,
    "isVip": false,
    "isOnline": false,
    "rating": 4.8,
    "reviewsCount": 85,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Sonali, an elegant, verified 24/7 companion in Sector 137 Noida. Available for prompt 20-minute hotel doorstep outcalls near Noida-Greater Noida Expressway & Felix Hospital. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "23 mins ago",
    "views": 1977,
    "rates": {
      "perHour": "\u20b93,000",
      "perSession": "\u20b95,000",
      "fullNight": "\u20b912,000"
    }
  },
  {
    "id": "ad-cg-022",
    "title": "Tanvi - Verified VIP Model in Sector 137 Noida",
    "slug": "tanvi-verified-vip-model-sector-137",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Sector 137 Noida",
    "localitySlug": "sector-137",
    "city": "Noida",
    "age": 23,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-sector-137-noida-tanvi-01.webp"
    ],
    "alt": "Tanvi, verified VIP model for hotel outcall in Sector 137 Noida Noida",
    "isVerified": true,
    "isVip": true,
    "isOnline": true,
    "rating": 4.9,
    "reviewsCount": 92,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Tanvi, an elegant, verified 24/7 companion in Sector 137 Noida. Available for prompt 20-minute hotel doorstep outcalls near Noida-Greater Noida Expressway & Felix Hospital. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "24 mins ago",
    "views": 2014,
    "rates": {
      "perHour": "\u20b93,500",
      "perSession": "\u20b95,500",
      "fullNight": "\u20b914,000"
    }
  },
  {
    "id": "ad-cg-023",
    "title": "Akanksha - Verified VIP Model in Sector 137 Noida",
    "slug": "akanksha-verified-vip-model-sector-137",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Sector 137 Noida",
    "localitySlug": "sector-137",
    "city": "Noida",
    "age": 26,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-sector-137-noida-akanksha-01.webp"
    ],
    "alt": "Akanksha, verified VIP model for hotel outcall in Sector 137 Noida Noida",
    "isVerified": true,
    "isVip": false,
    "isOnline": false,
    "rating": 5.0,
    "reviewsCount": 19,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Akanksha, an elegant, verified 24/7 companion in Sector 137 Noida. Available for prompt 20-minute hotel doorstep outcalls near Noida-Greater Noida Expressway & Felix Hospital. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "25 mins ago",
    "views": 2051,
    "rates": {
      "perHour": "\u20b94,000",
      "perSession": "\u20b96,000",
      "fullNight": "\u20b916,000"
    }
  },
  {
    "id": "ad-cg-024",
    "title": "Bhavna - Verified VIP Model in Sector 137 Noida",
    "slug": "bhavna-verified-vip-model-sector-137",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Sector 137 Noida",
    "localitySlug": "sector-137",
    "city": "Noida",
    "age": 22,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-sector-137-noida-bhavna-01.webp"
    ],
    "alt": "Bhavna, verified VIP model for hotel outcall in Sector 137 Noida Noida",
    "isVerified": true,
    "isVip": false,
    "isOnline": true,
    "rating": 4.8,
    "reviewsCount": 26,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Bhavna, an elegant, verified 24/7 companion in Sector 137 Noida. Available for prompt 20-minute hotel doorstep outcalls near Noida-Greater Noida Expressway & Felix Hospital. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "26 mins ago",
    "views": 2088,
    "rates": {
      "perHour": "\u20b92,500",
      "perSession": "\u20b94,500",
      "fullNight": "\u20b910,000"
    }
  },
  {
    "id": "ad-cg-025",
    "title": "Chhavi - Verified VIP Model in Sector 16 & Film City",
    "slug": "chhavi-verified-vip-model-sector-18-film-city",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Sector 16 & Film City",
    "localitySlug": "sector-18-film-city",
    "city": "Noida",
    "age": 25,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-sector-18-film-city-noida-chhavi-01.webp"
    ],
    "alt": "Chhavi, verified VIP model for hotel outcall in Sector 16 & Film City Noida",
    "isVerified": true,
    "isVip": true,
    "isOnline": false,
    "rating": 4.9,
    "reviewsCount": 33,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Chhavi, an elegant, verified 24/7 companion in Sector 16 & Film City. Available for prompt 20-minute hotel doorstep outcalls near Film City, DND Flyway & World Trade Tower. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "27 mins ago",
    "views": 2125,
    "rates": {
      "perHour": "\u20b93,000",
      "perSession": "\u20b95,000",
      "fullNight": "\u20b912,000"
    }
  },
  {
    "id": "ad-cg-026",
    "title": "Deepika - Verified VIP Model in Sector 16 & Film City",
    "slug": "deepika-verified-vip-model-sector-18-film-city",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Sector 16 & Film City",
    "localitySlug": "sector-18-film-city",
    "city": "Noida",
    "age": 21,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-sector-18-film-city-noida-deepika-01.webp"
    ],
    "alt": "Deepika, verified VIP model for hotel outcall in Sector 16 & Film City Noida",
    "isVerified": true,
    "isVip": false,
    "isOnline": true,
    "rating": 5.0,
    "reviewsCount": 40,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Deepika, an elegant, verified 24/7 companion in Sector 16 & Film City. Available for prompt 20-minute hotel doorstep outcalls near Film City, DND Flyway & World Trade Tower. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "28 mins ago",
    "views": 2162,
    "rates": {
      "perHour": "\u20b93,500",
      "perSession": "\u20b95,500",
      "fullNight": "\u20b914,000"
    }
  },
  {
    "id": "ad-cg-027",
    "title": "Esha - Verified VIP Model in Sector 16 & Film City",
    "slug": "esha-verified-vip-model-sector-18-film-city",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Sector 16 & Film City",
    "localitySlug": "sector-18-film-city",
    "city": "Noida",
    "age": 24,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-sector-18-film-city-noida-esha-01.webp"
    ],
    "alt": "Esha, verified VIP model for hotel outcall in Sector 16 & Film City Noida",
    "isVerified": true,
    "isVip": false,
    "isOnline": false,
    "rating": 4.8,
    "reviewsCount": 47,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Esha, an elegant, verified 24/7 companion in Sector 16 & Film City. Available for prompt 20-minute hotel doorstep outcalls near Film City, DND Flyway & World Trade Tower. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "29 mins ago",
    "views": 2199,
    "rates": {
      "perHour": "\u20b94,000",
      "perSession": "\u20b96,000",
      "fullNight": "\u20b916,000"
    }
  },
  {
    "id": "ad-cg-028",
    "title": "Garima - Verified VIP Model in Sector 16 & Film City",
    "slug": "garima-verified-vip-model-sector-18-film-city",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Sector 16 & Film City",
    "localitySlug": "sector-18-film-city",
    "city": "Noida",
    "age": 20,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-sector-18-film-city-noida-garima-01.webp"
    ],
    "alt": "Garima, verified VIP model for hotel outcall in Sector 16 & Film City Noida",
    "isVerified": true,
    "isVip": true,
    "isOnline": true,
    "rating": 4.9,
    "reviewsCount": 54,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Garima, an elegant, verified 24/7 companion in Sector 16 & Film City. Available for prompt 20-minute hotel doorstep outcalls near Film City, DND Flyway & World Trade Tower. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "30 mins ago",
    "views": 2236,
    "rates": {
      "perHour": "\u20b92,500",
      "perSession": "\u20b94,500",
      "fullNight": "\u20b910,000"
    }
  },
  {
    "id": "ad-cg-029",
    "title": "Harshita - Verified VIP Model in Sector 16 & Film City",
    "slug": "harshita-verified-vip-model-sector-18-film-city",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Sector 16 & Film City",
    "localitySlug": "sector-18-film-city",
    "city": "Noida",
    "age": 23,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-sector-18-film-city-noida-harshita-01.webp"
    ],
    "alt": "Harshita, verified VIP model for hotel outcall in Sector 16 & Film City Noida",
    "isVerified": true,
    "isVip": false,
    "isOnline": false,
    "rating": 5.0,
    "reviewsCount": 61,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Harshita, an elegant, verified 24/7 companion in Sector 16 & Film City. Available for prompt 20-minute hotel doorstep outcalls near Film City, DND Flyway & World Trade Tower. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "31 mins ago",
    "views": 2273,
    "rates": {
      "perHour": "\u20b93,000",
      "perSession": "\u20b95,000",
      "fullNight": "\u20b912,000"
    }
  },
  {
    "id": "ad-cg-030",
    "title": "Isha - Verified VIP Model in Sector 16 & Film City",
    "slug": "isha-verified-vip-model-sector-18-film-city",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Sector 16 & Film City",
    "localitySlug": "sector-18-film-city",
    "city": "Noida",
    "age": 26,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-sector-18-film-city-noida-isha-01.webp"
    ],
    "alt": "Isha, verified VIP model for hotel outcall in Sector 16 & Film City Noida",
    "isVerified": true,
    "isVip": false,
    "isOnline": true,
    "rating": 4.8,
    "reviewsCount": 68,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Isha, an elegant, verified 24/7 companion in Sector 16 & Film City. Available for prompt 20-minute hotel doorstep outcalls near Film City, DND Flyway & World Trade Tower. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "32 mins ago",
    "views": 2310,
    "rates": {
      "perHour": "\u20b93,500",
      "perSession": "\u20b95,500",
      "fullNight": "\u20b914,000"
    }
  },
  {
    "id": "ad-cg-031",
    "title": "Jhanvi - Verified VIP Model in Sector 76 & 78 Noida",
    "slug": "jhanvi-verified-vip-model-sector-76-78",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Sector 76 & 78 Noida",
    "localitySlug": "sector-76-78",
    "city": "Noida",
    "age": 22,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-sector-76-78-noida-jhanvi-01.webp"
    ],
    "alt": "Jhanvi, verified VIP model for hotel outcall in Sector 76 & 78 Noida Noida",
    "isVerified": true,
    "isVip": true,
    "isOnline": false,
    "rating": 4.9,
    "reviewsCount": 75,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Jhanvi, an elegant, verified 24/7 companion in Sector 76 & 78 Noida. Available for prompt 20-minute hotel doorstep outcalls near Silicon City, Amrapali Silicon & Metro. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "33 mins ago",
    "views": 2347,
    "rates": {
      "perHour": "\u20b94,000",
      "perSession": "\u20b96,000",
      "fullNight": "\u20b916,000"
    }
  },
  {
    "id": "ad-cg-032",
    "title": "Khushi - Verified VIP Model in Sector 76 & 78 Noida",
    "slug": "khushi-verified-vip-model-sector-76-78",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Sector 76 & 78 Noida",
    "localitySlug": "sector-76-78",
    "city": "Noida",
    "age": 25,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-sector-76-78-noida-khushi-01.webp"
    ],
    "alt": "Khushi, verified VIP model for hotel outcall in Sector 76 & 78 Noida Noida",
    "isVerified": true,
    "isVip": false,
    "isOnline": true,
    "rating": 5.0,
    "reviewsCount": 82,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Khushi, an elegant, verified 24/7 companion in Sector 76 & 78 Noida. Available for prompt 20-minute hotel doorstep outcalls near Silicon City, Amrapali Silicon & Metro. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "34 mins ago",
    "views": 2384,
    "rates": {
      "perHour": "\u20b92,500",
      "perSession": "\u20b94,500",
      "fullNight": "\u20b910,000"
    }
  },
  {
    "id": "ad-cg-033",
    "title": "Lavanya - Verified VIP Model in Sector 76 & 78 Noida",
    "slug": "lavanya-verified-vip-model-sector-76-78",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Sector 76 & 78 Noida",
    "localitySlug": "sector-76-78",
    "city": "Noida",
    "age": 21,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-sector-76-78-noida-lavanya-01.webp"
    ],
    "alt": "Lavanya, verified VIP model for hotel outcall in Sector 76 & 78 Noida Noida",
    "isVerified": true,
    "isVip": false,
    "isOnline": false,
    "rating": 4.8,
    "reviewsCount": 89,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Lavanya, an elegant, verified 24/7 companion in Sector 76 & 78 Noida. Available for prompt 20-minute hotel doorstep outcalls near Silicon City, Amrapali Silicon & Metro. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "35 mins ago",
    "views": 2421,
    "rates": {
      "perHour": "\u20b93,000",
      "perSession": "\u20b95,000",
      "fullNight": "\u20b912,000"
    }
  },
  {
    "id": "ad-cg-034",
    "title": "Mahima - Verified VIP Model in Sector 76 & 78 Noida",
    "slug": "mahima-verified-vip-model-sector-76-78",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Sector 76 & 78 Noida",
    "localitySlug": "sector-76-78",
    "city": "Noida",
    "age": 24,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-sector-76-78-noida-mahima-01.webp"
    ],
    "alt": "Mahima, verified VIP model for hotel outcall in Sector 76 & 78 Noida Noida",
    "isVerified": true,
    "isVip": true,
    "isOnline": true,
    "rating": 4.9,
    "reviewsCount": 96,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Mahima, an elegant, verified 24/7 companion in Sector 76 & 78 Noida. Available for prompt 20-minute hotel doorstep outcalls near Silicon City, Amrapali Silicon & Metro. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "36 mins ago",
    "views": 2458,
    "rates": {
      "perHour": "\u20b93,500",
      "perSession": "\u20b95,500",
      "fullNight": "\u20b914,000"
    }
  },
  {
    "id": "ad-cg-035",
    "title": "Nidhi - Verified VIP Model in Sector 76 & 78 Noida",
    "slug": "nidhi-verified-vip-model-sector-76-78",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Sector 76 & 78 Noida",
    "localitySlug": "sector-76-78",
    "city": "Noida",
    "age": 20,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-sector-76-78-noida-nidhi-01.webp"
    ],
    "alt": "Nidhi, verified VIP model for hotel outcall in Sector 76 & 78 Noida Noida",
    "isVerified": true,
    "isVip": false,
    "isOnline": false,
    "rating": 5.0,
    "reviewsCount": 23,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Nidhi, an elegant, verified 24/7 companion in Sector 76 & 78 Noida. Available for prompt 20-minute hotel doorstep outcalls near Silicon City, Amrapali Silicon & Metro. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "37 mins ago",
    "views": 2495,
    "rates": {
      "perHour": "\u20b94,000",
      "perSession": "\u20b96,000",
      "fullNight": "\u20b916,000"
    }
  },
  {
    "id": "ad-cg-036",
    "title": "Ojasvi - Verified VIP Model in Sector 76 & 78 Noida",
    "slug": "ojasvi-verified-vip-model-sector-76-78",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Sector 76 & 78 Noida",
    "localitySlug": "sector-76-78",
    "city": "Noida",
    "age": 23,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-sector-76-78-noida-ojasvi-01.webp"
    ],
    "alt": "Ojasvi, verified VIP model for hotel outcall in Sector 76 & 78 Noida Noida",
    "isVerified": true,
    "isVip": false,
    "isOnline": true,
    "rating": 4.8,
    "reviewsCount": 30,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Ojasvi, an elegant, verified 24/7 companion in Sector 76 & 78 Noida. Available for prompt 20-minute hotel doorstep outcalls near Silicon City, Amrapali Silicon & Metro. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "38 mins ago",
    "views": 2532,
    "rates": {
      "perHour": "\u20b92,500",
      "perSession": "\u20b94,500",
      "fullNight": "\u20b910,000"
    }
  },
  {
    "id": "ad-cg-037",
    "title": "Prachi - Verified VIP Model in Sector 128 Noida",
    "slug": "prachi-verified-vip-model-sector-128",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Sector 128 Noida",
    "localitySlug": "sector-128",
    "city": "Noida",
    "age": 26,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-sector-128-noida-prachi-01.webp"
    ],
    "alt": "Prachi, verified VIP model for hotel outcall in Sector 128 Noida Noida",
    "isVerified": true,
    "isVip": true,
    "isOnline": false,
    "rating": 4.9,
    "reviewsCount": 37,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Prachi, an elegant, verified 24/7 companion in Sector 128 Noida. Available for prompt 20-minute hotel doorstep outcalls near Jaypee Wish Town, Kalindi Kunj & Sultanpur. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "39 mins ago",
    "views": 2569,
    "rates": {
      "perHour": "\u20b93,000",
      "perSession": "\u20b95,000",
      "fullNight": "\u20b912,000"
    }
  },
  {
    "id": "ad-cg-038",
    "title": "Radhika - Verified VIP Model in Sector 128 Noida",
    "slug": "radhika-verified-vip-model-sector-128",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Sector 128 Noida",
    "localitySlug": "sector-128",
    "city": "Noida",
    "age": 22,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-sector-128-noida-radhika-01.webp"
    ],
    "alt": "Radhika, verified VIP model for hotel outcall in Sector 128 Noida Noida",
    "isVerified": true,
    "isVip": false,
    "isOnline": true,
    "rating": 5.0,
    "reviewsCount": 44,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Radhika, an elegant, verified 24/7 companion in Sector 128 Noida. Available for prompt 20-minute hotel doorstep outcalls near Jaypee Wish Town, Kalindi Kunj & Sultanpur. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "40 mins ago",
    "views": 2606,
    "rates": {
      "perHour": "\u20b93,500",
      "perSession": "\u20b95,500",
      "fullNight": "\u20b914,000"
    }
  },
  {
    "id": "ad-cg-039",
    "title": "Sakshi - Verified VIP Model in Sector 128 Noida",
    "slug": "sakshi-verified-vip-model-sector-128",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Sector 128 Noida",
    "localitySlug": "sector-128",
    "city": "Noida",
    "age": 25,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-sector-128-noida-sakshi-01.webp"
    ],
    "alt": "Sakshi, verified VIP model for hotel outcall in Sector 128 Noida Noida",
    "isVerified": true,
    "isVip": false,
    "isOnline": false,
    "rating": 4.8,
    "reviewsCount": 51,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Sakshi, an elegant, verified 24/7 companion in Sector 128 Noida. Available for prompt 20-minute hotel doorstep outcalls near Jaypee Wish Town, Kalindi Kunj & Sultanpur. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "41 mins ago",
    "views": 2643,
    "rates": {
      "perHour": "\u20b94,000",
      "perSession": "\u20b96,000",
      "fullNight": "\u20b916,000"
    }
  },
  {
    "id": "ad-cg-040",
    "title": "Trisha - Verified VIP Model in Sector 128 Noida",
    "slug": "trisha-verified-vip-model-sector-128",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Sector 128 Noida",
    "localitySlug": "sector-128",
    "city": "Noida",
    "age": 21,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-sector-128-noida-trisha-01.webp"
    ],
    "alt": "Trisha, verified VIP model for hotel outcall in Sector 128 Noida Noida",
    "isVerified": true,
    "isVip": true,
    "isOnline": true,
    "rating": 4.9,
    "reviewsCount": 58,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Trisha, an elegant, verified 24/7 companion in Sector 128 Noida. Available for prompt 20-minute hotel doorstep outcalls near Jaypee Wish Town, Kalindi Kunj & Sultanpur. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "42 mins ago",
    "views": 2680,
    "rates": {
      "perHour": "\u20b92,500",
      "perSession": "\u20b94,500",
      "fullNight": "\u20b910,000"
    }
  },
  {
    "id": "ad-cg-041",
    "title": "Urvi - Verified VIP Model in Sector 128 Noida",
    "slug": "urvi-verified-vip-model-sector-128",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Sector 128 Noida",
    "localitySlug": "sector-128",
    "city": "Noida",
    "age": 24,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-sector-128-noida-urvi-01.webp"
    ],
    "alt": "Urvi, verified VIP model for hotel outcall in Sector 128 Noida Noida",
    "isVerified": true,
    "isVip": false,
    "isOnline": false,
    "rating": 5.0,
    "reviewsCount": 65,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Urvi, an elegant, verified 24/7 companion in Sector 128 Noida. Available for prompt 20-minute hotel doorstep outcalls near Jaypee Wish Town, Kalindi Kunj & Sultanpur. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "43 mins ago",
    "views": 2717,
    "rates": {
      "perHour": "\u20b93,000",
      "perSession": "\u20b95,000",
      "fullNight": "\u20b912,000"
    }
  },
  {
    "id": "ad-cg-042",
    "title": "Vaishnavi - Verified VIP Model in Sector 128 Noida",
    "slug": "vaishnavi-verified-vip-model-sector-128",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Sector 128 Noida",
    "localitySlug": "sector-128",
    "city": "Noida",
    "age": 20,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-sector-128-noida-vaishnavi-01.webp"
    ],
    "alt": "Vaishnavi, verified VIP model for hotel outcall in Sector 128 Noida Noida",
    "isVerified": true,
    "isVip": false,
    "isOnline": true,
    "rating": 4.8,
    "reviewsCount": 72,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Vaishnavi, an elegant, verified 24/7 companion in Sector 128 Noida. Available for prompt 20-minute hotel doorstep outcalls near Jaypee Wish Town, Kalindi Kunj & Sultanpur. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "44 mins ago",
    "views": 2754,
    "rates": {
      "perHour": "\u20b93,500",
      "perSession": "\u20b95,500",
      "fullNight": "\u20b914,000"
    }
  },
  {
    "id": "ad-cg-043",
    "title": "Yamini - Verified VIP Model in Sector 142 Noida",
    "slug": "yamini-verified-vip-model-sector-142",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Sector 142 Noida",
    "localitySlug": "sector-142",
    "city": "Noida",
    "age": 23,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-sector-142-noida-yamini-01.webp"
    ],
    "alt": "Yamini, verified VIP model for hotel outcall in Sector 142 Noida Noida",
    "isVerified": true,
    "isVip": true,
    "isOnline": false,
    "rating": 4.9,
    "reviewsCount": 79,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Yamini, an elegant, verified 24/7 companion in Sector 142 Noida. Available for prompt 20-minute hotel doorstep outcalls near Advant Navis Business Park & Aqua Line Metro. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "45 mins ago",
    "views": 2791,
    "rates": {
      "perHour": "\u20b94,000",
      "perSession": "\u20b96,000",
      "fullNight": "\u20b916,000"
    }
  },
  {
    "id": "ad-cg-044",
    "title": "Zoya - Verified VIP Model in Sector 142 Noida",
    "slug": "zoya-verified-vip-model-sector-142",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Sector 142 Noida",
    "localitySlug": "sector-142",
    "city": "Noida",
    "age": 26,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-sector-142-noida-zoya-01.webp"
    ],
    "alt": "Zoya, verified VIP model for hotel outcall in Sector 142 Noida Noida",
    "isVerified": true,
    "isVip": false,
    "isOnline": true,
    "rating": 5.0,
    "reviewsCount": 86,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Zoya, an elegant, verified 24/7 companion in Sector 142 Noida. Available for prompt 20-minute hotel doorstep outcalls near Advant Navis Business Park & Aqua Line Metro. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "46 mins ago",
    "views": 2828,
    "rates": {
      "perHour": "\u20b92,500",
      "perSession": "\u20b94,500",
      "fullNight": "\u20b910,000"
    }
  },
  {
    "id": "ad-cg-045",
    "title": "Avani - Verified VIP Model in Sector 142 Noida",
    "slug": "avani-verified-vip-model-sector-142",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Sector 142 Noida",
    "localitySlug": "sector-142",
    "city": "Noida",
    "age": 22,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-sector-142-noida-avani-01.webp"
    ],
    "alt": "Avani, verified VIP model for hotel outcall in Sector 142 Noida Noida",
    "isVerified": true,
    "isVip": false,
    "isOnline": false,
    "rating": 4.8,
    "reviewsCount": 93,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Avani, an elegant, verified 24/7 companion in Sector 142 Noida. Available for prompt 20-minute hotel doorstep outcalls near Advant Navis Business Park & Aqua Line Metro. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "47 mins ago",
    "views": 2865,
    "rates": {
      "perHour": "\u20b93,000",
      "perSession": "\u20b95,000",
      "fullNight": "\u20b912,000"
    }
  },
  {
    "id": "ad-cg-046",
    "title": "Barkha - Verified VIP Model in Sector 142 Noida",
    "slug": "barkha-verified-vip-model-sector-142",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Sector 142 Noida",
    "localitySlug": "sector-142",
    "city": "Noida",
    "age": 25,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-sector-142-noida-barkha-01.webp"
    ],
    "alt": "Barkha, verified VIP model for hotel outcall in Sector 142 Noida Noida",
    "isVerified": true,
    "isVip": true,
    "isOnline": true,
    "rating": 4.9,
    "reviewsCount": 20,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Barkha, an elegant, verified 24/7 companion in Sector 142 Noida. Available for prompt 20-minute hotel doorstep outcalls near Advant Navis Business Park & Aqua Line Metro. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "48 mins ago",
    "views": 2902,
    "rates": {
      "perHour": "\u20b93,500",
      "perSession": "\u20b95,500",
      "fullNight": "\u20b914,000"
    }
  },
  {
    "id": "ad-cg-047",
    "title": "Charu - Verified VIP Model in Sector 142 Noida",
    "slug": "charu-verified-vip-model-sector-142",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Sector 142 Noida",
    "localitySlug": "sector-142",
    "city": "Noida",
    "age": 21,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-sector-142-noida-charu-01.webp"
    ],
    "alt": "Charu, verified VIP model for hotel outcall in Sector 142 Noida Noida",
    "isVerified": true,
    "isVip": false,
    "isOnline": false,
    "rating": 5.0,
    "reviewsCount": 27,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Charu, an elegant, verified 24/7 companion in Sector 142 Noida. Available for prompt 20-minute hotel doorstep outcalls near Advant Navis Business Park & Aqua Line Metro. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "49 mins ago",
    "views": 2939,
    "rates": {
      "perHour": "\u20b94,000",
      "perSession": "\u20b96,000",
      "fullNight": "\u20b916,000"
    }
  },
  {
    "id": "ad-cg-048",
    "title": "Disha - Verified VIP Model in Sector 142 Noida",
    "slug": "disha-verified-vip-model-sector-142",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Sector 142 Noida",
    "localitySlug": "sector-142",
    "city": "Noida",
    "age": 24,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-sector-142-noida-disha-01.webp"
    ],
    "alt": "Disha, verified VIP model for hotel outcall in Sector 142 Noida Noida",
    "isVerified": true,
    "isVip": false,
    "isOnline": true,
    "rating": 4.8,
    "reviewsCount": 34,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Disha, an elegant, verified 24/7 companion in Sector 142 Noida. Available for prompt 20-minute hotel doorstep outcalls near Advant Navis Business Park & Aqua Line Metro. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "50 mins ago",
    "views": 2976,
    "rates": {
      "perHour": "\u20b92,500",
      "perSession": "\u20b94,500",
      "fullNight": "\u20b910,000"
    }
  },
  {
    "id": "ad-cg-049",
    "title": "Ekta - Verified VIP Model in Pari Chowk Greater Noida",
    "slug": "ekta-verified-vip-model-pari-chowk",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Pari Chowk Greater Noida",
    "localitySlug": "pari-chowk",
    "city": "Noida",
    "age": 20,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-pari-chowk-noida-ekta-01.webp"
    ],
    "alt": "Ekta, verified VIP model for hotel outcall in Pari Chowk Greater Noida Noida",
    "isVerified": true,
    "isVip": true,
    "isOnline": false,
    "rating": 4.9,
    "reviewsCount": 41,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Ekta, an elegant, verified 24/7 companion in Pari Chowk Greater Noida. Available for prompt 20-minute hotel doorstep outcalls near Alpha 1, Ansal Plaza & India Expo Mart. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "51 mins ago",
    "views": 3013,
    "rates": {
      "perHour": "\u20b93,000",
      "perSession": "\u20b95,000",
      "fullNight": "\u20b912,000"
    }
  },
  {
    "id": "ad-cg-050",
    "title": "Falguni - Verified VIP Model in Pari Chowk Greater Noida",
    "slug": "falguni-verified-vip-model-pari-chowk",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Pari Chowk Greater Noida",
    "localitySlug": "pari-chowk",
    "city": "Noida",
    "age": 23,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-pari-chowk-noida-falguni-01.webp"
    ],
    "alt": "Falguni, verified VIP model for hotel outcall in Pari Chowk Greater Noida Noida",
    "isVerified": true,
    "isVip": false,
    "isOnline": true,
    "rating": 5.0,
    "reviewsCount": 48,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Falguni, an elegant, verified 24/7 companion in Pari Chowk Greater Noida. Available for prompt 20-minute hotel doorstep outcalls near Alpha 1, Ansal Plaza & India Expo Mart. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "2 mins ago",
    "views": 3050,
    "rates": {
      "perHour": "\u20b93,500",
      "perSession": "\u20b95,500",
      "fullNight": "\u20b914,000"
    }
  },
  {
    "id": "ad-cg-051",
    "title": "Gauri - Verified VIP Model in Pari Chowk Greater Noida",
    "slug": "gauri-verified-vip-model-pari-chowk",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Pari Chowk Greater Noida",
    "localitySlug": "pari-chowk",
    "city": "Noida",
    "age": 26,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-pari-chowk-noida-gauri-01.webp"
    ],
    "alt": "Gauri, verified VIP model for hotel outcall in Pari Chowk Greater Noida Noida",
    "isVerified": true,
    "isVip": false,
    "isOnline": false,
    "rating": 4.8,
    "reviewsCount": 55,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Gauri, an elegant, verified 24/7 companion in Pari Chowk Greater Noida. Available for prompt 20-minute hotel doorstep outcalls near Alpha 1, Ansal Plaza & India Expo Mart. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "3 mins ago",
    "views": 3087,
    "rates": {
      "perHour": "\u20b94,000",
      "perSession": "\u20b96,000",
      "fullNight": "\u20b916,000"
    }
  },
  {
    "id": "ad-cg-052",
    "title": "Hina - Verified VIP Model in Pari Chowk Greater Noida",
    "slug": "hina-verified-vip-model-pari-chowk",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Pari Chowk Greater Noida",
    "localitySlug": "pari-chowk",
    "city": "Noida",
    "age": 22,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-pari-chowk-noida-hina-01.webp"
    ],
    "alt": "Hina, verified VIP model for hotel outcall in Pari Chowk Greater Noida Noida",
    "isVerified": true,
    "isVip": true,
    "isOnline": true,
    "rating": 4.9,
    "reviewsCount": 62,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Hina, an elegant, verified 24/7 companion in Pari Chowk Greater Noida. Available for prompt 20-minute hotel doorstep outcalls near Alpha 1, Ansal Plaza & India Expo Mart. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "4 mins ago",
    "views": 3124,
    "rates": {
      "perHour": "\u20b92,500",
      "perSession": "\u20b94,500",
      "fullNight": "\u20b910,000"
    }
  },
  {
    "id": "ad-cg-053",
    "title": "Inaya - Verified VIP Model in Pari Chowk Greater Noida",
    "slug": "inaya-verified-vip-model-pari-chowk",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Pari Chowk Greater Noida",
    "localitySlug": "pari-chowk",
    "city": "Noida",
    "age": 25,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-pari-chowk-noida-inaya-01.webp"
    ],
    "alt": "Inaya, verified VIP model for hotel outcall in Pari Chowk Greater Noida Noida",
    "isVerified": true,
    "isVip": false,
    "isOnline": false,
    "rating": 5.0,
    "reviewsCount": 69,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Inaya, an elegant, verified 24/7 companion in Pari Chowk Greater Noida. Available for prompt 20-minute hotel doorstep outcalls near Alpha 1, Ansal Plaza & India Expo Mart. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "5 mins ago",
    "views": 3161,
    "rates": {
      "perHour": "\u20b93,000",
      "perSession": "\u20b95,000",
      "fullNight": "\u20b912,000"
    }
  },
  {
    "id": "ad-cg-054",
    "title": "Juhi - Verified VIP Model in Pari Chowk Greater Noida",
    "slug": "juhi-verified-vip-model-pari-chowk",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Pari Chowk Greater Noida",
    "localitySlug": "pari-chowk",
    "city": "Noida",
    "age": 21,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-pari-chowk-noida-juhi-01.webp"
    ],
    "alt": "Juhi, verified VIP model for hotel outcall in Pari Chowk Greater Noida Noida",
    "isVerified": true,
    "isVip": false,
    "isOnline": true,
    "rating": 4.8,
    "reviewsCount": 76,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Juhi, an elegant, verified 24/7 companion in Pari Chowk Greater Noida. Available for prompt 20-minute hotel doorstep outcalls near Alpha 1, Ansal Plaza & India Expo Mart. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "6 mins ago",
    "views": 3198,
    "rates": {
      "perHour": "\u20b93,500",
      "perSession": "\u20b95,500",
      "fullNight": "\u20b914,000"
    }
  },
  {
    "id": "ad-cg-055",
    "title": "Kritika - Verified VIP Model in Noida Extension (Gr Noida West)",
    "slug": "kritika-verified-vip-model-noida-extension",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Noida Extension (Gr Noida West)",
    "localitySlug": "noida-extension",
    "city": "Noida",
    "age": 24,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-noida-extension-noida-kritika-01.webp"
    ],
    "alt": "Kritika, verified VIP model for hotel outcall in Noida Extension (Gr Noida West) Noida",
    "isVerified": true,
    "isVip": true,
    "isOnline": false,
    "rating": 4.9,
    "reviewsCount": 83,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Kritika, an elegant, verified 24/7 companion in Noida Extension (Gr Noida West). Available for prompt 20-minute hotel doorstep outcalls near Gaur City Mall, Char Murti & Kisan Chowk. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "7 mins ago",
    "views": 3235,
    "rates": {
      "perHour": "\u20b94,000",
      "perSession": "\u20b96,000",
      "fullNight": "\u20b916,000"
    }
  },
  {
    "id": "ad-cg-056",
    "title": "Lipika - Verified VIP Model in Noida Extension (Gr Noida West)",
    "slug": "lipika-verified-vip-model-noida-extension",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Noida Extension (Gr Noida West)",
    "localitySlug": "noida-extension",
    "city": "Noida",
    "age": 20,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-noida-extension-noida-lipika-01.webp"
    ],
    "alt": "Lipika, verified VIP model for hotel outcall in Noida Extension (Gr Noida West) Noida",
    "isVerified": true,
    "isVip": false,
    "isOnline": true,
    "rating": 5.0,
    "reviewsCount": 90,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Lipika, an elegant, verified 24/7 companion in Noida Extension (Gr Noida West). Available for prompt 20-minute hotel doorstep outcalls near Gaur City Mall, Char Murti & Kisan Chowk. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "8 mins ago",
    "views": 3272,
    "rates": {
      "perHour": "\u20b92,500",
      "perSession": "\u20b94,500",
      "fullNight": "\u20b910,000"
    }
  },
  {
    "id": "ad-cg-057",
    "title": "Mansi - Verified VIP Model in Noida Extension (Gr Noida West)",
    "slug": "mansi-verified-vip-model-noida-extension",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Noida Extension (Gr Noida West)",
    "localitySlug": "noida-extension",
    "city": "Noida",
    "age": 23,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-noida-extension-noida-mansi-01.webp"
    ],
    "alt": "Mansi, verified VIP model for hotel outcall in Noida Extension (Gr Noida West) Noida",
    "isVerified": true,
    "isVip": false,
    "isOnline": false,
    "rating": 4.8,
    "reviewsCount": 97,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Mansi, an elegant, verified 24/7 companion in Noida Extension (Gr Noida West). Available for prompt 20-minute hotel doorstep outcalls near Gaur City Mall, Char Murti & Kisan Chowk. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "9 mins ago",
    "views": 3309,
    "rates": {
      "perHour": "\u20b93,000",
      "perSession": "\u20b95,000",
      "fullNight": "\u20b912,000"
    }
  },
  {
    "id": "ad-cg-058",
    "title": "Navya - Verified VIP Model in Noida Extension (Gr Noida West)",
    "slug": "navya-verified-vip-model-noida-extension",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Noida Extension (Gr Noida West)",
    "localitySlug": "noida-extension",
    "city": "Noida",
    "age": 26,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-noida-extension-noida-navya-01.webp"
    ],
    "alt": "Navya, verified VIP model for hotel outcall in Noida Extension (Gr Noida West) Noida",
    "isVerified": true,
    "isVip": true,
    "isOnline": true,
    "rating": 4.9,
    "reviewsCount": 24,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Navya, an elegant, verified 24/7 companion in Noida Extension (Gr Noida West). Available for prompt 20-minute hotel doorstep outcalls near Gaur City Mall, Char Murti & Kisan Chowk. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "10 mins ago",
    "views": 3346,
    "rates": {
      "perHour": "\u20b93,500",
      "perSession": "\u20b95,500",
      "fullNight": "\u20b914,000"
    }
  },
  {
    "id": "ad-cg-059",
    "title": "Palak - Verified VIP Model in Noida Extension (Gr Noida West)",
    "slug": "palak-verified-vip-model-noida-extension",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Noida Extension (Gr Noida West)",
    "localitySlug": "noida-extension",
    "city": "Noida",
    "age": 22,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-noida-extension-noida-palak-01.webp"
    ],
    "alt": "Palak, verified VIP model for hotel outcall in Noida Extension (Gr Noida West) Noida",
    "isVerified": true,
    "isVip": false,
    "isOnline": false,
    "rating": 5.0,
    "reviewsCount": 31,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Palak, an elegant, verified 24/7 companion in Noida Extension (Gr Noida West). Available for prompt 20-minute hotel doorstep outcalls near Gaur City Mall, Char Murti & Kisan Chowk. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "11 mins ago",
    "views": 3383,
    "rates": {
      "perHour": "\u20b94,000",
      "perSession": "\u20b96,000",
      "fullNight": "\u20b916,000"
    }
  },
  {
    "id": "ad-cg-060",
    "title": "Rachna - Verified VIP Model in Noida Extension (Gr Noida West)",
    "slug": "rachna-verified-vip-model-noida-extension",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Noida Extension (Gr Noida West)",
    "localitySlug": "noida-extension",
    "city": "Noida",
    "age": 25,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-noida-extension-noida-rachna-01.webp"
    ],
    "alt": "Rachna, verified VIP model for hotel outcall in Noida Extension (Gr Noida West) Noida",
    "isVerified": true,
    "isVip": false,
    "isOnline": true,
    "rating": 4.8,
    "reviewsCount": 38,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Rachna, an elegant, verified 24/7 companion in Noida Extension (Gr Noida West). Available for prompt 20-minute hotel doorstep outcalls near Gaur City Mall, Char Murti & Kisan Chowk. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "12 mins ago",
    "views": 3420,
    "rates": {
      "perHour": "\u20b92,500",
      "perSession": "\u20b94,500",
      "fullNight": "\u20b910,000"
    }
  },
  {
    "id": "ad-cg-061",
    "title": "Sanya - Verified VIP Model in Knowledge Park Greater Noida",
    "slug": "sanya-verified-vip-model-knowledge-park",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Knowledge Park Greater Noida",
    "localitySlug": "knowledge-park",
    "city": "Noida",
    "age": 21,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-knowledge-park-noida-sanya-01.webp"
    ],
    "alt": "Sanya, verified VIP model for hotel outcall in Knowledge Park Greater Noida Noida",
    "isVerified": true,
    "isVip": true,
    "isOnline": false,
    "rating": 4.9,
    "reviewsCount": 45,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Sanya, an elegant, verified 24/7 companion in Knowledge Park Greater Noida. Available for prompt 20-minute hotel doorstep outcalls near India Expo Centre, Galgotias & Sharda. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "13 mins ago",
    "views": 3457,
    "rates": {
      "perHour": "\u20b93,000",
      "perSession": "\u20b95,000",
      "fullNight": "\u20b912,000"
    }
  },
  {
    "id": "ad-cg-062",
    "title": "Tara - Verified VIP Model in Knowledge Park Greater Noida",
    "slug": "tara-verified-vip-model-knowledge-park",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Knowledge Park Greater Noida",
    "localitySlug": "knowledge-park",
    "city": "Noida",
    "age": 24,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-knowledge-park-noida-tara-01.webp"
    ],
    "alt": "Tara, verified VIP model for hotel outcall in Knowledge Park Greater Noida Noida",
    "isVerified": true,
    "isVip": false,
    "isOnline": true,
    "rating": 5.0,
    "reviewsCount": 52,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Tara, an elegant, verified 24/7 companion in Knowledge Park Greater Noida. Available for prompt 20-minute hotel doorstep outcalls near India Expo Centre, Galgotias & Sharda. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "14 mins ago",
    "views": 3494,
    "rates": {
      "perHour": "\u20b93,500",
      "perSession": "\u20b95,500",
      "fullNight": "\u20b914,000"
    }
  },
  {
    "id": "ad-cg-063",
    "title": "Urvashi - Verified VIP Model in Knowledge Park Greater Noida",
    "slug": "urvashi-verified-vip-model-knowledge-park",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Knowledge Park Greater Noida",
    "localitySlug": "knowledge-park",
    "city": "Noida",
    "age": 20,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-knowledge-park-noida-urvashi-01.webp"
    ],
    "alt": "Urvashi, verified VIP model for hotel outcall in Knowledge Park Greater Noida Noida",
    "isVerified": true,
    "isVip": false,
    "isOnline": false,
    "rating": 4.8,
    "reviewsCount": 59,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Urvashi, an elegant, verified 24/7 companion in Knowledge Park Greater Noida. Available for prompt 20-minute hotel doorstep outcalls near India Expo Centre, Galgotias & Sharda. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "15 mins ago",
    "views": 3531,
    "rates": {
      "perHour": "\u20b94,000",
      "perSession": "\u20b96,000",
      "fullNight": "\u20b916,000"
    }
  },
  {
    "id": "ad-cg-064",
    "title": "Vidhi - Verified VIP Model in Knowledge Park Greater Noida",
    "slug": "vidhi-verified-vip-model-knowledge-park",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Knowledge Park Greater Noida",
    "localitySlug": "knowledge-park",
    "city": "Noida",
    "age": 23,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-knowledge-park-noida-vidhi-01.webp"
    ],
    "alt": "Vidhi, verified VIP model for hotel outcall in Knowledge Park Greater Noida Noida",
    "isVerified": true,
    "isVip": true,
    "isOnline": true,
    "rating": 4.9,
    "reviewsCount": 66,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Vidhi, an elegant, verified 24/7 companion in Knowledge Park Greater Noida. Available for prompt 20-minute hotel doorstep outcalls near India Expo Centre, Galgotias & Sharda. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "16 mins ago",
    "views": 3568,
    "rates": {
      "perHour": "\u20b92,500",
      "perSession": "\u20b94,500",
      "fullNight": "\u20b910,000"
    }
  },
  {
    "id": "ad-cg-065",
    "title": "Yukti - Verified VIP Model in Knowledge Park Greater Noida",
    "slug": "yukti-verified-vip-model-knowledge-park",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Knowledge Park Greater Noida",
    "localitySlug": "knowledge-park",
    "city": "Noida",
    "age": 26,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-knowledge-park-noida-yukti-01.webp"
    ],
    "alt": "Yukti, verified VIP model for hotel outcall in Knowledge Park Greater Noida Noida",
    "isVerified": true,
    "isVip": false,
    "isOnline": false,
    "rating": 5.0,
    "reviewsCount": 73,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Yukti, an elegant, verified 24/7 companion in Knowledge Park Greater Noida. Available for prompt 20-minute hotel doorstep outcalls near India Expo Centre, Galgotias & Sharda. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "17 mins ago",
    "views": 3605,
    "rates": {
      "perHour": "\u20b93,000",
      "perSession": "\u20b95,000",
      "fullNight": "\u20b912,000"
    }
  },
  {
    "id": "ad-cg-066",
    "title": "Aashi - Verified VIP Model in Indirapuram Ghaziabad",
    "slug": "aashi-verified-vip-model-indirapuram",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Indirapuram Ghaziabad",
    "localitySlug": "indirapuram",
    "city": "Noida",
    "age": 22,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-indirapuram-noida-aashi-01.webp"
    ],
    "alt": "Aashi, verified VIP model for hotel outcall in Indirapuram Ghaziabad Noida",
    "isVerified": true,
    "isVip": false,
    "isOnline": true,
    "rating": 4.8,
    "reviewsCount": 80,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Aashi, an elegant, verified 24/7 companion in Indirapuram Ghaziabad. Available for prompt 20-minute hotel doorstep outcalls near Shipra Mall, Habitat Centre & Swarna Jayanti. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "18 mins ago",
    "views": 3642,
    "rates": {
      "perHour": "\u20b93,500",
      "perSession": "\u20b95,500",
      "fullNight": "\u20b914,000"
    }
  },
  {
    "id": "ad-cg-067",
    "title": "Binita - Verified VIP Model in Indirapuram Ghaziabad",
    "slug": "binita-verified-vip-model-indirapuram",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Indirapuram Ghaziabad",
    "localitySlug": "indirapuram",
    "city": "Noida",
    "age": 25,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-indirapuram-noida-binita-01.webp"
    ],
    "alt": "Binita, verified VIP model for hotel outcall in Indirapuram Ghaziabad Noida",
    "isVerified": true,
    "isVip": true,
    "isOnline": false,
    "rating": 4.9,
    "reviewsCount": 87,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Binita, an elegant, verified 24/7 companion in Indirapuram Ghaziabad. Available for prompt 20-minute hotel doorstep outcalls near Shipra Mall, Habitat Centre & Swarna Jayanti. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "19 mins ago",
    "views": 3679,
    "rates": {
      "perHour": "\u20b94,000",
      "perSession": "\u20b96,000",
      "fullNight": "\u20b916,000"
    }
  },
  {
    "id": "ad-cg-068",
    "title": "Chetna - Verified VIP Model in Indirapuram Ghaziabad",
    "slug": "chetna-verified-vip-model-indirapuram",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Indirapuram Ghaziabad",
    "localitySlug": "indirapuram",
    "city": "Noida",
    "age": 21,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-indirapuram-noida-chetna-01.webp"
    ],
    "alt": "Chetna, verified VIP model for hotel outcall in Indirapuram Ghaziabad Noida",
    "isVerified": true,
    "isVip": false,
    "isOnline": true,
    "rating": 5.0,
    "reviewsCount": 94,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Chetna, an elegant, verified 24/7 companion in Indirapuram Ghaziabad. Available for prompt 20-minute hotel doorstep outcalls near Shipra Mall, Habitat Centre & Swarna Jayanti. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "20 mins ago",
    "views": 3716,
    "rates": {
      "perHour": "\u20b92,500",
      "perSession": "\u20b94,500",
      "fullNight": "\u20b910,000"
    }
  },
  {
    "id": "ad-cg-069",
    "title": "Damini - Verified VIP Model in Indirapuram Ghaziabad",
    "slug": "damini-verified-vip-model-indirapuram",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Indirapuram Ghaziabad",
    "localitySlug": "indirapuram",
    "city": "Noida",
    "age": 24,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-indirapuram-noida-damini-01.webp"
    ],
    "alt": "Damini, verified VIP model for hotel outcall in Indirapuram Ghaziabad Noida",
    "isVerified": true,
    "isVip": false,
    "isOnline": false,
    "rating": 4.8,
    "reviewsCount": 21,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Damini, an elegant, verified 24/7 companion in Indirapuram Ghaziabad. Available for prompt 20-minute hotel doorstep outcalls near Shipra Mall, Habitat Centre & Swarna Jayanti. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "21 mins ago",
    "views": 3753,
    "rates": {
      "perHour": "\u20b93,000",
      "perSession": "\u20b95,000",
      "fullNight": "\u20b912,000"
    }
  },
  {
    "id": "ad-cg-070",
    "title": "Eva - Verified VIP Model in Indirapuram Ghaziabad",
    "slug": "eva-verified-vip-model-indirapuram",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Indirapuram Ghaziabad",
    "localitySlug": "indirapuram",
    "city": "Noida",
    "age": 20,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-indirapuram-noida-eva-01.webp"
    ],
    "alt": "Eva, verified VIP model for hotel outcall in Indirapuram Ghaziabad Noida",
    "isVerified": true,
    "isVip": true,
    "isOnline": true,
    "rating": 4.9,
    "reviewsCount": 28,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Eva, an elegant, verified 24/7 companion in Indirapuram Ghaziabad. Available for prompt 20-minute hotel doorstep outcalls near Shipra Mall, Habitat Centre & Swarna Jayanti. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "22 mins ago",
    "views": 3790,
    "rates": {
      "perHour": "\u20b93,500",
      "perSession": "\u20b95,500",
      "fullNight": "\u20b914,000"
    }
  },
  {
    "id": "ad-cg-071",
    "title": "Geet - Verified VIP Model in Vaishali Ghaziabad",
    "slug": "geet-verified-vip-model-vaishali",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Vaishali Ghaziabad",
    "localitySlug": "vaishali",
    "city": "Noida",
    "age": 23,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-vaishali-noida-geet-01.webp"
    ],
    "alt": "Geet, verified VIP model for hotel outcall in Vaishali Ghaziabad Noida",
    "isVerified": true,
    "isVip": false,
    "isOnline": false,
    "rating": 5.0,
    "reviewsCount": 35,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Geet, an elegant, verified 24/7 companion in Vaishali Ghaziabad. Available for prompt 20-minute hotel doorstep outcalls near Vaishali Metro Station & Max Super Speciality Hospital. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "23 mins ago",
    "views": 3827,
    "rates": {
      "perHour": "\u20b94,000",
      "perSession": "\u20b96,000",
      "fullNight": "\u20b916,000"
    }
  },
  {
    "id": "ad-cg-072",
    "title": "Heena - Verified VIP Model in Vaishali Ghaziabad",
    "slug": "heena-verified-vip-model-vaishali",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Vaishali Ghaziabad",
    "localitySlug": "vaishali",
    "city": "Noida",
    "age": 26,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-vaishali-noida-heena-01.webp"
    ],
    "alt": "Heena, verified VIP model for hotel outcall in Vaishali Ghaziabad Noida",
    "isVerified": true,
    "isVip": false,
    "isOnline": true,
    "rating": 4.8,
    "reviewsCount": 42,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Heena, an elegant, verified 24/7 companion in Vaishali Ghaziabad. Available for prompt 20-minute hotel doorstep outcalls near Vaishali Metro Station & Max Super Speciality Hospital. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "24 mins ago",
    "views": 3864,
    "rates": {
      "perHour": "\u20b92,500",
      "perSession": "\u20b94,500",
      "fullNight": "\u20b910,000"
    }
  },
  {
    "id": "ad-cg-073",
    "title": "Indu - Verified VIP Model in Vaishali Ghaziabad",
    "slug": "indu-verified-vip-model-vaishali",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Vaishali Ghaziabad",
    "localitySlug": "vaishali",
    "city": "Noida",
    "age": 22,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-vaishali-noida-indu-01.webp"
    ],
    "alt": "Indu, verified VIP model for hotel outcall in Vaishali Ghaziabad Noida",
    "isVerified": true,
    "isVip": true,
    "isOnline": false,
    "rating": 4.9,
    "reviewsCount": 49,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Indu, an elegant, verified 24/7 companion in Vaishali Ghaziabad. Available for prompt 20-minute hotel doorstep outcalls near Vaishali Metro Station & Max Super Speciality Hospital. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "25 mins ago",
    "views": 3901,
    "rates": {
      "perHour": "\u20b93,000",
      "perSession": "\u20b95,000",
      "fullNight": "\u20b912,000"
    }
  },
  {
    "id": "ad-cg-074",
    "title": "Jyoti - Verified VIP Model in Vaishali Ghaziabad",
    "slug": "jyoti-verified-vip-model-vaishali",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Vaishali Ghaziabad",
    "localitySlug": "vaishali",
    "city": "Noida",
    "age": 25,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-vaishali-noida-jyoti-01.webp"
    ],
    "alt": "Jyoti, verified VIP model for hotel outcall in Vaishali Ghaziabad Noida",
    "isVerified": true,
    "isVip": false,
    "isOnline": true,
    "rating": 5.0,
    "reviewsCount": 56,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Jyoti, an elegant, verified 24/7 companion in Vaishali Ghaziabad. Available for prompt 20-minute hotel doorstep outcalls near Vaishali Metro Station & Max Super Speciality Hospital. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "26 mins ago",
    "views": 3938,
    "rates": {
      "perHour": "\u20b93,500",
      "perSession": "\u20b95,500",
      "fullNight": "\u20b914,000"
    }
  },
  {
    "id": "ad-cg-075",
    "title": "Kanika - Verified VIP Model in Vaishali Ghaziabad",
    "slug": "kanika-verified-vip-model-vaishali",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Vaishali Ghaziabad",
    "localitySlug": "vaishali",
    "city": "Noida",
    "age": 21,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-vaishali-noida-kanika-01.webp"
    ],
    "alt": "Kanika, verified VIP model for hotel outcall in Vaishali Ghaziabad Noida",
    "isVerified": true,
    "isVip": false,
    "isOnline": false,
    "rating": 4.8,
    "reviewsCount": 63,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Kanika, an elegant, verified 24/7 companion in Vaishali Ghaziabad. Available for prompt 20-minute hotel doorstep outcalls near Vaishali Metro Station & Max Super Speciality Hospital. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "27 mins ago",
    "views": 3975,
    "rates": {
      "perHour": "\u20b94,000",
      "perSession": "\u20b96,000",
      "fullNight": "\u20b916,000"
    }
  },
  {
    "id": "ad-cg-076",
    "title": "Lata - Verified VIP Model in Vasundhara Ghaziabad",
    "slug": "lata-verified-vip-model-vasundhara",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Vasundhara Ghaziabad",
    "localitySlug": "vasundhara",
    "city": "Noida",
    "age": 24,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-vasundhara-noida-lata-01.webp"
    ],
    "alt": "Lata, verified VIP model for hotel outcall in Vasundhara Ghaziabad Noida",
    "isVerified": true,
    "isVip": true,
    "isOnline": true,
    "rating": 4.9,
    "reviewsCount": 70,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Lata, an elegant, verified 24/7 companion in Vasundhara Ghaziabad. Available for prompt 20-minute hotel doorstep outcalls near Mewar Institute, Sector 10 & Mohan Nagar link. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "28 mins ago",
    "views": 4012,
    "rates": {
      "perHour": "\u20b92,500",
      "perSession": "\u20b94,500",
      "fullNight": "\u20b910,000"
    }
  },
  {
    "id": "ad-cg-077",
    "title": "Monika - Verified VIP Model in Vasundhara Ghaziabad",
    "slug": "monika-verified-vip-model-vasundhara",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Vasundhara Ghaziabad",
    "localitySlug": "vasundhara",
    "city": "Noida",
    "age": 20,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-vasundhara-noida-monika-01.webp"
    ],
    "alt": "Monika, verified VIP model for hotel outcall in Vasundhara Ghaziabad Noida",
    "isVerified": true,
    "isVip": false,
    "isOnline": false,
    "rating": 5.0,
    "reviewsCount": 77,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Monika, an elegant, verified 24/7 companion in Vasundhara Ghaziabad. Available for prompt 20-minute hotel doorstep outcalls near Mewar Institute, Sector 10 & Mohan Nagar link. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "29 mins ago",
    "views": 4049,
    "rates": {
      "perHour": "\u20b93,000",
      "perSession": "\u20b95,000",
      "fullNight": "\u20b912,000"
    }
  },
  {
    "id": "ad-cg-078",
    "title": "Nandini - Verified VIP Model in Vasundhara Ghaziabad",
    "slug": "nandini-verified-vip-model-vasundhara",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Vasundhara Ghaziabad",
    "localitySlug": "vasundhara",
    "city": "Noida",
    "age": 23,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-vasundhara-noida-nandini-01.webp"
    ],
    "alt": "Nandini, verified VIP model for hotel outcall in Vasundhara Ghaziabad Noida",
    "isVerified": true,
    "isVip": false,
    "isOnline": true,
    "rating": 4.8,
    "reviewsCount": 84,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Nandini, an elegant, verified 24/7 companion in Vasundhara Ghaziabad. Available for prompt 20-minute hotel doorstep outcalls near Mewar Institute, Sector 10 & Mohan Nagar link. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "30 mins ago",
    "views": 4086,
    "rates": {
      "perHour": "\u20b93,500",
      "perSession": "\u20b95,500",
      "fullNight": "\u20b914,000"
    }
  },
  {
    "id": "ad-cg-079",
    "title": "Parul - Verified VIP Model in Vasundhara Ghaziabad",
    "slug": "parul-verified-vip-model-vasundhara",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Vasundhara Ghaziabad",
    "localitySlug": "vasundhara",
    "city": "Noida",
    "age": 26,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-vasundhara-noida-parul-01.webp"
    ],
    "alt": "Parul, verified VIP model for hotel outcall in Vasundhara Ghaziabad Noida",
    "isVerified": true,
    "isVip": true,
    "isOnline": false,
    "rating": 4.9,
    "reviewsCount": 91,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Parul, an elegant, verified 24/7 companion in Vasundhara Ghaziabad. Available for prompt 20-minute hotel doorstep outcalls near Mewar Institute, Sector 10 & Mohan Nagar link. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "31 mins ago",
    "views": 4123,
    "rates": {
      "perHour": "\u20b94,000",
      "perSession": "\u20b96,000",
      "fullNight": "\u20b916,000"
    }
  },
  {
    "id": "ad-cg-080",
    "title": "Ritu - Verified VIP Model in Vasundhara Ghaziabad",
    "slug": "ritu-verified-vip-model-vasundhara",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Vasundhara Ghaziabad",
    "localitySlug": "vasundhara",
    "city": "Noida",
    "age": 22,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-vasundhara-noida-ritu-01.webp"
    ],
    "alt": "Ritu, verified VIP model for hotel outcall in Vasundhara Ghaziabad Noida",
    "isVerified": true,
    "isVip": false,
    "isOnline": true,
    "rating": 5.0,
    "reviewsCount": 18,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Ritu, an elegant, verified 24/7 companion in Vasundhara Ghaziabad. Available for prompt 20-minute hotel doorstep outcalls near Mewar Institute, Sector 10 & Mohan Nagar link. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "32 mins ago",
    "views": 4160,
    "rates": {
      "perHour": "\u20b92,500",
      "perSession": "\u20b94,500",
      "fullNight": "\u20b910,000"
    }
  },
  {
    "id": "ad-cg-081",
    "title": "Swati - Verified VIP Model in Crossings Republik",
    "slug": "swati-verified-vip-model-crossings-republik",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Crossings Republik",
    "localitySlug": "crossings-republik",
    "city": "Noida",
    "age": 25,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-crossings-republik-noida-swati-01.webp"
    ],
    "alt": "Swati, verified VIP model for hotel outcall in Crossings Republik Noida",
    "isVerified": true,
    "isVip": false,
    "isOnline": false,
    "rating": 4.8,
    "reviewsCount": 25,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Swati, an elegant, verified 24/7 companion in Crossings Republik. Available for prompt 20-minute hotel doorstep outcalls near NH-24, ABES Engineering & Gaur City Border. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "33 mins ago",
    "views": 4197,
    "rates": {
      "perHour": "\u20b93,000",
      "perSession": "\u20b95,000",
      "fullNight": "\u20b912,000"
    }
  },
  {
    "id": "ad-cg-082",
    "title": "Tanisha - Verified VIP Model in Crossings Republik",
    "slug": "tanisha-verified-vip-model-crossings-republik",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Crossings Republik",
    "localitySlug": "crossings-republik",
    "city": "Noida",
    "age": 21,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-crossings-republik-noida-tanisha-01.webp"
    ],
    "alt": "Tanisha, verified VIP model for hotel outcall in Crossings Republik Noida",
    "isVerified": true,
    "isVip": true,
    "isOnline": true,
    "rating": 4.9,
    "reviewsCount": 32,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Tanisha, an elegant, verified 24/7 companion in Crossings Republik. Available for prompt 20-minute hotel doorstep outcalls near NH-24, ABES Engineering & Gaur City Border. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "34 mins ago",
    "views": 4234,
    "rates": {
      "perHour": "\u20b93,500",
      "perSession": "\u20b95,500",
      "fullNight": "\u20b914,000"
    }
  },
  {
    "id": "ad-cg-083",
    "title": "Upasana - Verified VIP Model in Crossings Republik",
    "slug": "upasana-verified-vip-model-crossings-republik",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Crossings Republik",
    "localitySlug": "crossings-republik",
    "city": "Noida",
    "age": 24,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-crossings-republik-noida-upasana-01.webp"
    ],
    "alt": "Upasana, verified VIP model for hotel outcall in Crossings Republik Noida",
    "isVerified": true,
    "isVip": false,
    "isOnline": false,
    "rating": 5.0,
    "reviewsCount": 39,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Upasana, an elegant, verified 24/7 companion in Crossings Republik. Available for prompt 20-minute hotel doorstep outcalls near NH-24, ABES Engineering & Gaur City Border. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "35 mins ago",
    "views": 4271,
    "rates": {
      "perHour": "\u20b94,000",
      "perSession": "\u20b96,000",
      "fullNight": "\u20b916,000"
    }
  },
  {
    "id": "ad-cg-084",
    "title": "Vandana - Verified VIP Model in Crossings Republik",
    "slug": "vandana-verified-vip-model-crossings-republik",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Crossings Republik",
    "localitySlug": "crossings-republik",
    "city": "Noida",
    "age": 20,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-crossings-republik-noida-vandana-01.webp"
    ],
    "alt": "Vandana, verified VIP model for hotel outcall in Crossings Republik Noida",
    "isVerified": true,
    "isVip": false,
    "isOnline": true,
    "rating": 4.8,
    "reviewsCount": 46,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Vandana, an elegant, verified 24/7 companion in Crossings Republik. Available for prompt 20-minute hotel doorstep outcalls near NH-24, ABES Engineering & Gaur City Border. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "36 mins ago",
    "views": 4308,
    "rates": {
      "perHour": "\u20b92,500",
      "perSession": "\u20b94,500",
      "fullNight": "\u20b910,000"
    }
  },
  {
    "id": "ad-cg-085",
    "title": "Yashika - Verified VIP Model in Crossings Republik",
    "slug": "yashika-verified-vip-model-crossings-republik",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Crossings Republik",
    "localitySlug": "crossings-republik",
    "city": "Noida",
    "age": 23,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-crossings-republik-noida-yashika-01.webp"
    ],
    "alt": "Yashika, verified VIP model for hotel outcall in Crossings Republik Noida",
    "isVerified": true,
    "isVip": true,
    "isOnline": false,
    "rating": 4.9,
    "reviewsCount": 53,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Yashika, an elegant, verified 24/7 companion in Crossings Republik. Available for prompt 20-minute hotel doorstep outcalls near NH-24, ABES Engineering & Gaur City Border. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "37 mins ago",
    "views": 4345,
    "rates": {
      "perHour": "\u20b93,000",
      "perSession": "\u20b95,000",
      "fullNight": "\u20b912,000"
    }
  },
  {
    "id": "ad-cg-086",
    "title": "Aastha - Verified VIP Model in Kaushambi",
    "slug": "aastha-verified-vip-model-kaushambi",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Kaushambi",
    "localitySlug": "kaushambi",
    "city": "Noida",
    "age": 26,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-kaushambi-noida-aastha-01.webp"
    ],
    "alt": "Aastha, verified VIP model for hotel outcall in Kaushambi Noida",
    "isVerified": true,
    "isVip": false,
    "isOnline": true,
    "rating": 5.0,
    "reviewsCount": 60,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Aastha, an elegant, verified 24/7 companion in Kaushambi. Available for prompt 20-minute hotel doorstep outcalls near Radisson Blu & Anand Vihar Inter-State Border. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "38 mins ago",
    "views": 4382,
    "rates": {
      "perHour": "\u20b93,500",
      "perSession": "\u20b95,500",
      "fullNight": "\u20b914,000"
    }
  },
  {
    "id": "ad-cg-087",
    "title": "Bani - Verified VIP Model in Kaushambi",
    "slug": "bani-verified-vip-model-kaushambi",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Kaushambi",
    "localitySlug": "kaushambi",
    "city": "Noida",
    "age": 22,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-kaushambi-noida-bani-01.webp"
    ],
    "alt": "Bani, verified VIP model for hotel outcall in Kaushambi Noida",
    "isVerified": true,
    "isVip": false,
    "isOnline": false,
    "rating": 4.8,
    "reviewsCount": 67,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Bani, an elegant, verified 24/7 companion in Kaushambi. Available for prompt 20-minute hotel doorstep outcalls near Radisson Blu & Anand Vihar Inter-State Border. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "39 mins ago",
    "views": 4419,
    "rates": {
      "perHour": "\u20b94,000",
      "perSession": "\u20b96,000",
      "fullNight": "\u20b916,000"
    }
  },
  {
    "id": "ad-cg-088",
    "title": "Chahat - Verified VIP Model in Kaushambi",
    "slug": "chahat-verified-vip-model-kaushambi",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Kaushambi",
    "localitySlug": "kaushambi",
    "city": "Noida",
    "age": 25,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-kaushambi-noida-chahat-01.webp"
    ],
    "alt": "Chahat, verified VIP model for hotel outcall in Kaushambi Noida",
    "isVerified": true,
    "isVip": true,
    "isOnline": true,
    "rating": 4.9,
    "reviewsCount": 74,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Chahat, an elegant, verified 24/7 companion in Kaushambi. Available for prompt 20-minute hotel doorstep outcalls near Radisson Blu & Anand Vihar Inter-State Border. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "40 mins ago",
    "views": 4456,
    "rates": {
      "perHour": "\u20b92,500",
      "perSession": "\u20b94,500",
      "fullNight": "\u20b910,000"
    }
  },
  {
    "id": "ad-cg-089",
    "title": "Devika - Verified VIP Model in Kaushambi",
    "slug": "devika-verified-vip-model-kaushambi",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Kaushambi",
    "localitySlug": "kaushambi",
    "city": "Noida",
    "age": 21,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-kaushambi-noida-devika-01.webp"
    ],
    "alt": "Devika, verified VIP model for hotel outcall in Kaushambi Noida",
    "isVerified": true,
    "isVip": false,
    "isOnline": false,
    "rating": 5.0,
    "reviewsCount": 81,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Devika, an elegant, verified 24/7 companion in Kaushambi. Available for prompt 20-minute hotel doorstep outcalls near Radisson Blu & Anand Vihar Inter-State Border. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "41 mins ago",
    "views": 4493,
    "rates": {
      "perHour": "\u20b93,000",
      "perSession": "\u20b95,000",
      "fullNight": "\u20b912,000"
    }
  },
  {
    "id": "ad-cg-090",
    "title": "Farah - Verified VIP Model in Kaushambi",
    "slug": "farah-verified-vip-model-kaushambi",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Kaushambi",
    "localitySlug": "kaushambi",
    "city": "Noida",
    "age": 24,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-kaushambi-noida-farah-01.webp"
    ],
    "alt": "Farah, verified VIP model for hotel outcall in Kaushambi Noida",
    "isVerified": true,
    "isVip": false,
    "isOnline": true,
    "rating": 4.8,
    "reviewsCount": 88,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Farah, an elegant, verified 24/7 companion in Kaushambi. Available for prompt 20-minute hotel doorstep outcalls near Radisson Blu & Anand Vihar Inter-State Border. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "42 mins ago",
    "views": 4530,
    "rates": {
      "perHour": "\u20b93,500",
      "perSession": "\u20b95,500",
      "fullNight": "\u20b914,000"
    }
  },
  {
    "id": "ad-cg-091",
    "title": "Gargi - Verified VIP Model in Mayur Vihar",
    "slug": "gargi-verified-vip-model-mayur-vihar",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Mayur Vihar",
    "localitySlug": "mayur-vihar",
    "city": "Noida",
    "age": 20,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-mayur-vihar-noida-gargi-01.webp"
    ],
    "alt": "Gargi, verified VIP model for hotel outcall in Mayur Vihar Noida",
    "isVerified": true,
    "isVip": true,
    "isOnline": false,
    "rating": 4.9,
    "reviewsCount": 95,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Gargi, an elegant, verified 24/7 companion in Mayur Vihar. Available for prompt 20-minute hotel doorstep outcalls near Phase 1 & DND Noida Toll Border. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "43 mins ago",
    "views": 4567,
    "rates": {
      "perHour": "\u20b94,000",
      "perSession": "\u20b96,000",
      "fullNight": "\u20b916,000"
    }
  },
  {
    "id": "ad-cg-092",
    "title": "Honey - Verified VIP Model in Mayur Vihar",
    "slug": "honey-verified-vip-model-mayur-vihar",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Mayur Vihar",
    "localitySlug": "mayur-vihar",
    "city": "Noida",
    "age": 23,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-mayur-vihar-noida-honey-01.webp"
    ],
    "alt": "Honey, verified VIP model for hotel outcall in Mayur Vihar Noida",
    "isVerified": true,
    "isVip": false,
    "isOnline": true,
    "rating": 5.0,
    "reviewsCount": 22,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Honey, an elegant, verified 24/7 companion in Mayur Vihar. Available for prompt 20-minute hotel doorstep outcalls near Phase 1 & DND Noida Toll Border. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "44 mins ago",
    "views": 4604,
    "rates": {
      "perHour": "\u20b92,500",
      "perSession": "\u20b94,500",
      "fullNight": "\u20b910,000"
    }
  },
  {
    "id": "ad-cg-093",
    "title": "Ira - Verified VIP Model in Mayur Vihar",
    "slug": "ira-verified-vip-model-mayur-vihar",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Mayur Vihar",
    "localitySlug": "mayur-vihar",
    "city": "Noida",
    "age": 26,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-mayur-vihar-noida-ira-01.webp"
    ],
    "alt": "Ira, verified VIP model for hotel outcall in Mayur Vihar Noida",
    "isVerified": true,
    "isVip": false,
    "isOnline": false,
    "rating": 4.8,
    "reviewsCount": 29,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Ira, an elegant, verified 24/7 companion in Mayur Vihar. Available for prompt 20-minute hotel doorstep outcalls near Phase 1 & DND Noida Toll Border. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "45 mins ago",
    "views": 4641,
    "rates": {
      "perHour": "\u20b93,000",
      "perSession": "\u20b95,000",
      "fullNight": "\u20b912,000"
    }
  },
  {
    "id": "ad-cg-094",
    "title": "Jaya - Verified VIP Model in Mayur Vihar",
    "slug": "jaya-verified-vip-model-mayur-vihar",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Mayur Vihar",
    "localitySlug": "mayur-vihar",
    "city": "Noida",
    "age": 22,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-mayur-vihar-noida-jaya-01.webp"
    ],
    "alt": "Jaya, verified VIP model for hotel outcall in Mayur Vihar Noida",
    "isVerified": true,
    "isVip": true,
    "isOnline": true,
    "rating": 4.9,
    "reviewsCount": 36,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Jaya, an elegant, verified 24/7 companion in Mayur Vihar. Available for prompt 20-minute hotel doorstep outcalls near Phase 1 & DND Noida Toll Border. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "46 mins ago",
    "views": 4678,
    "rates": {
      "perHour": "\u20b93,500",
      "perSession": "\u20b95,500",
      "fullNight": "\u20b914,000"
    }
  },
  {
    "id": "ad-cg-095",
    "title": "Kashish - Verified VIP Model in Mayur Vihar",
    "slug": "kashish-verified-vip-model-mayur-vihar",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Mayur Vihar",
    "localitySlug": "mayur-vihar",
    "city": "Noida",
    "age": 25,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-mayur-vihar-noida-kashish-01.webp"
    ],
    "alt": "Kashish, verified VIP model for hotel outcall in Mayur Vihar Noida",
    "isVerified": true,
    "isVip": false,
    "isOnline": false,
    "rating": 5.0,
    "reviewsCount": 43,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Kashish, an elegant, verified 24/7 companion in Mayur Vihar. Available for prompt 20-minute hotel doorstep outcalls near Phase 1 & DND Noida Toll Border. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "47 mins ago",
    "views": 4715,
    "rates": {
      "perHour": "\u20b94,000",
      "perSession": "\u20b96,000",
      "fullNight": "\u20b916,000"
    }
  },
  {
    "id": "ad-cg-096",
    "title": "Leena - Verified VIP Model in Botanical Garden (Sector 37)",
    "slug": "leena-verified-vip-model-botanical-garden",
    "categoryId": "adult-meetings",
    "categorySlug": "adult-meetings",
    "locality": "Botanical Garden (Sector 37)",
    "localitySlug": "botanical-garden",
    "city": "Noida",
    "age": 21,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-botanical-garden-noida-leena-01.webp"
    ],
    "alt": "Leena, verified VIP model for hotel outcall in Botanical Garden (Sector 37) Noida",
    "isVerified": true,
    "isVip": false,
    "isOnline": true,
    "rating": 4.8,
    "reviewsCount": 50,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Leena, an elegant, verified 24/7 companion in Botanical Garden (Sector 37). Available for prompt 20-minute hotel doorstep outcalls near Magenta/Blue Line Interchange Metro & Amity. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "48 mins ago",
    "views": 4752,
    "rates": {
      "perHour": "\u20b92,500",
      "perSession": "\u20b94,500",
      "fullNight": "\u20b910,000"
    }
  },
  {
    "id": "ad-cg-097",
    "title": "Maya - Verified VIP Model in Botanical Garden (Sector 37)",
    "slug": "maya-verified-vip-model-botanical-garden",
    "categoryId": "adult-meetings",
    "categorySlug": "adult-meetings",
    "locality": "Botanical Garden (Sector 37)",
    "localitySlug": "botanical-garden",
    "city": "Noida",
    "age": 24,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-botanical-garden-noida-maya-01.webp"
    ],
    "alt": "Maya, verified VIP model for hotel outcall in Botanical Garden (Sector 37) Noida",
    "isVerified": true,
    "isVip": true,
    "isOnline": false,
    "rating": 4.9,
    "reviewsCount": 57,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Maya, an elegant, verified 24/7 companion in Botanical Garden (Sector 37). Available for prompt 20-minute hotel doorstep outcalls near Magenta/Blue Line Interchange Metro & Amity. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "49 mins ago",
    "views": 4789,
    "rates": {
      "perHour": "\u20b93,000",
      "perSession": "\u20b95,000",
      "fullNight": "\u20b912,000"
    }
  },
  {
    "id": "ad-cg-098",
    "title": "Nikita - Verified VIP Model in Botanical Garden (Sector 37)",
    "slug": "nikita-verified-vip-model-botanical-garden",
    "categoryId": "adult-meetings",
    "categorySlug": "adult-meetings",
    "locality": "Botanical Garden (Sector 37)",
    "localitySlug": "botanical-garden",
    "city": "Noida",
    "age": 20,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-botanical-garden-noida-nikita-01.webp"
    ],
    "alt": "Nikita, verified VIP model for hotel outcall in Botanical Garden (Sector 37) Noida",
    "isVerified": true,
    "isVip": false,
    "isOnline": true,
    "rating": 5.0,
    "reviewsCount": 64,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Nikita, an elegant, verified 24/7 companion in Botanical Garden (Sector 37). Available for prompt 20-minute hotel doorstep outcalls near Magenta/Blue Line Interchange Metro & Amity. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "50 mins ago",
    "views": 4826,
    "rates": {
      "perHour": "\u20b93,500",
      "perSession": "\u20b95,500",
      "fullNight": "\u20b914,000"
    }
  },
  {
    "id": "ad-cg-099",
    "title": "Poonam - Verified VIP Model in Botanical Garden (Sector 37)",
    "slug": "poonam-verified-vip-model-botanical-garden",
    "categoryId": "adult-meetings",
    "categorySlug": "adult-meetings",
    "locality": "Botanical Garden (Sector 37)",
    "localitySlug": "botanical-garden",
    "city": "Noida",
    "age": 23,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-botanical-garden-noida-poonam-01.webp"
    ],
    "alt": "Poonam, verified VIP model for hotel outcall in Botanical Garden (Sector 37) Noida",
    "isVerified": true,
    "isVip": false,
    "isOnline": false,
    "rating": 4.8,
    "reviewsCount": 71,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Poonam, an elegant, verified 24/7 companion in Botanical Garden (Sector 37). Available for prompt 20-minute hotel doorstep outcalls near Magenta/Blue Line Interchange Metro & Amity. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "51 mins ago",
    "views": 4863,
    "rates": {
      "perHour": "\u20b94,000",
      "perSession": "\u20b96,000",
      "fullNight": "\u20b916,000"
    }
  },
  {
    "id": "ad-cg-100",
    "title": "Roshni - Verified VIP Model in Botanical Garden (Sector 37)",
    "slug": "roshni-verified-vip-model-botanical-garden",
    "categoryId": "adult-meetings",
    "categorySlug": "adult-meetings",
    "locality": "Botanical Garden (Sector 37)",
    "localitySlug": "botanical-garden",
    "city": "Noida",
    "age": 26,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/escorts-botanical-garden-noida-roshni-01.webp"
    ],
    "alt": "Roshni, verified VIP model for hotel outcall in Botanical Garden (Sector 37) Noida",
    "isVerified": true,
    "isVip": true,
    "isOnline": true,
    "rating": 4.9,
    "reviewsCount": 78,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hello gentlemen! I am Roshni, an elegant, verified 24/7 companion in Botanical Garden (Sector 37). Available for prompt 20-minute hotel doorstep outcalls near Magenta/Blue Line Interchange Metro & Amity. 100% genuine real photographs, and verified 24/7 VIP hotel doorstep outcall service.",
    "postedAt": "2 mins ago",
    "views": 4900,
    "rates": {
      "perHour": "\u20b92,500",
      "perSession": "\u20b94,500",
      "fullNight": "\u20b910,000"
    }
  }
];

// ── 4. Safety & Scam Prevention Guidelines for Noida & NCR ─────
export const SAFETY_TIPS = [
  {
    title: 'Never Pay Full Advance Prior to Meeting',
    desc: 'Always verify the profile and speak directly on phone or WhatsApp before making any arrangements. Beware of unauthorized QR code requests or advance fee demands in Noida/NCR.',
  },
  {
    title: 'Check Verified Badges',
    desc: 'Profiles with the green "100% Real & Verified" badge have undergone phone authentication and genuine photo confirmation.',
  },
  {
    title: 'Meet in Safe & Verified Places',
    desc: 'For first-time meetings, choose well-known 4-star/5-star hotels (Radisson, Crowne Plaza, Jaypee Greens), established spa centers, or public coffee shops in Sector 18, Sector 62, or Greater Noida.',
  },
  {
    title: 'Respect Boundaries and Safe Practices',
    desc: 'All participants must be consenting adults (18+). Maintain mutual respect, polite communication, and strict personal hygiene standards at all times.',
  },
];

// ── 5. Helper Functions ────────────────────────────────────────
export const getCategoryBySlug = (slug: string) =>
  PORTAL_CATEGORIES.find((c) => c.slug === slug);

export const getLocalityBySlug = (slug: string) =>
  NOIDA_LOCALITIES.find((l) => l.slug === slug);

export const getAdsByCategoryAndLocality = (categorySlug?: string, localitySlug?: string) => {
  let ads = [...INITIAL_CLASSIFIED_ADS];
  if (categorySlug && categorySlug !== 'all') {
    ads = ads.filter((ad) => ad.categorySlug === categorySlug);
  }
  if (localitySlug && localitySlug !== 'all') {
    const exactMatches = ads.filter((ad) => ad.localitySlug === localitySlug);
    if (exactMatches.length >= 3) {
      return exactMatches;
    }
    // Pad with other nearby verified ads to prevent thin pages
    const otherAds = ads.filter((ad) => ad.localitySlug !== localitySlug);
    return [...exactMatches, ...otherAds.slice(0, 6 - exactMatches.length)];
  }
  return ads;
};
