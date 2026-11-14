// ============================================================
// NOIDA & NCR CLASSIFIEDS DIRECTORY DATA
// ============================================================

export interface JaipurLocality {
  id: string;
  name: string;
  slug: string;
  landmark: string;
  zone: 'Central Noida' | 'Noida Expressway' | 'Greater Noida' | 'Ghaziabad NCR';
  popular: boolean;
}

export type NoidaLocality = JaipurLocality;

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
export const NOIDA_LOCALITIES: JaipurLocality[] = [
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

export const JAIPUR_LOCALITIES = NOIDA_LOCALITIES;

// ── 2. Portal Categories (100% Emoji-Free) ───────────────────
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
    id: 'massages',
    name: 'Massages & Luxury Spa',
    slug: 'massages',
    iconName: 'Sparkles',
    tagline: 'Luxury Body Massages & Relaxing Spa in Noida & NCR',
    description: 'Explore certified independent massage therapists and luxury spa centers in Noida. Enjoy therapeutic Thai massage, Swedish body relaxation, deep tissue therapy, B2B oil massage, couple suites, and herbal steam baths in private sanitized rooms across all prime Noida sectors and Greater Noida.',
    seoTitle: 'Best Massage in Noida | Luxury Spa & Body Massage Therapists',
    seoDescription: 'Find top rated massage therapists in Noida. Thai massage, full body relaxation, deep tissue & luxury spa services in Sector 18, Sector 62, Expressway & Indirapuram.',
    subcategories: [
      'Thai Massage',
      'Swedish Massage',
      'Deep Tissue Massage',
      'Aroma Therapy',
      'B2B Body Massage',
      'Couple Spa Suite',
      'Full Body Oil Massage',
      'Steam & Hydro Shower',
      'Corporate Stress Therapy',
    ],
  },
  {
    id: 'male-escorts',
    name: 'Male Escorts & Call Boys',
    slug: 'male-escorts',
    iconName: 'UserCheck',
    tagline: 'Handsome Male Escorts & Fitness Call Boys in Noida',
    description: 'Discover handsome male escorts, fitness models, gigolos, and call boys in Noida for women, couples, and discerning clients. Friendly, well-groomed, and discreet companions available for private meetings, personal wellness sessions, and social outings.',
    seoTitle: 'Male Escorts in Noida | Call Boys & Handsome Gigolos Noida & NCR',
    seoDescription: 'Find verified male escorts and call boys in Noida. Handsome fitness models and gigolo services for women & couples in Sector 18, Sector 62, Greater Noida & Indirapuram.',
    subcategories: [
      'Call Boys for Women',
      'Male Escorts for Couples',
      'Fitness & Gym Models',
      'Discreet Gigolos',
      'Male Wellness Companions',
      'Private Hotel Outcall',
    ],
  },
  {
    id: 'transsexual',
    name: 'Transsexual & TS Dating',
    slug: 'transsexual',
    iconName: 'Users',
    tagline: 'Sensational Transsexual & TS Escorts in Noida & NCR',
    description: 'Meet verified transsexual escorts, TS companions, shemale models, and ladyboy escorts in Noida and NCR. Open-minded, friendly, and passionate trans models available for private dating, erotic meetings, and unique companion experiences.',
    seoTitle: 'Transsexual in Noida | TS Escorts & Shemale Dating Noida & NCR',
    seoDescription: 'Discover verified transsexual and TS escorts in Noida. Ladyboys, shemales, and trans dating ads with real photos and direct contact across Noida & Greater Noida.',
    subcategories: [
      'TS Escorts',
      'Shemale Models',
      'Ladyboy Companions',
      'Crossdresser Meetings',
      'Trans Dating & Hookups',
    ],
  },
  {
    id: 'adult-meetings',
    name: 'Adult Meetings & Casual Dating',
    slug: 'adult-meetings',
    iconName: 'Flame',
    tagline: 'Casual Dating, Local Singles & Erotic Meetups in Noida',
    description: 'Connect with verified local singles, open-minded couples, and casual dating partners in Noida for no-strings-attached (NSA) meetups, late-night romance, private chatting, and consensual adult encounters in safe, discreet environments.',
    seoTitle: 'Adult Meetings in Noida | Casual Dating & Local Singles Hookups',
    seoDescription: 'Looking for casual adult dating in Noida? Connect with real local singles, girls, boys, and couples for NSA meetings and discreet dates in Noida & NCR.',
    subcategories: [
      'Casual Dating (NSA)',
      'Local Noida Singles',
      'Couple & Swinger Meetups',
      'Discreet Hookups',
      'Late Night Dating',
      'Coffee & Drinks First',
    ],
  },
];

// ── 3. Initial Classified Ads in Noida & NCR ─────────────
export const INITIAL_CLASSIFIED_ADS: ClassifiedAd[] = [
  // ── CALL GIRLS & ESCORTS ──────────────────────────────────────
  {
    id: 'ad-cg-01',
    title: 'Riya - Glamorous Independent VIP Model Available for In-call & Outcall in Sector 18 Noida',
    slug: 'riya-glamorous-independent-vip-model-sector-18-noida',
    categoryId: 'call-girls',
    categorySlug: 'call-girls',
    locality: 'Sector 18 Noida',
    localitySlug: 'sector-18',
    city: 'Noida',
    age: 23,
    phone: '9521413060',
    whatsapp: '919521413060',
    images: ['/images/model_5.jpg', '/images/model_11.jpg', '/ecj-mark.svg'],
    isVerified: true,
    isVip: true,
    isOnline: true,
    rating: 4.95,
    reviewsCount: 124,
    services: ['5-Star Hotel Outcall', 'Private In-call', 'Dinner Dates', 'Discreet Meetings', 'Weekend Trips', 'English & Hindi Fluent'],
    description: 'Hi gentlemen! I am Riya, a sweet, classy, and educated 23-year-old independent model staying near Sector 18 Noida (DLF Mall of India). I love good conversations, pleasant dinner dates, and creating romantic memories with sophisticated individuals. 100% genuine photos and verified identity.',
    postedAt: 'Just now',
    views: 4320,
    rates: {
      perHour: '₹3,000',
      perSession: '₹5,000',
      fullNight: '₹15,000',
    },
  },
  {
    id: 'ad-cg-02',
    title: 'Ananya - Charming Corporate Companion & Sweet Escort in Sector 62 IT Hub',
    slug: 'ananya-charming-corporate-companion-sector-62-noida',
    categoryId: 'call-girls',
    categorySlug: 'call-girls',
    locality: 'Sector 62 Noida',
    localitySlug: 'sector-62',
    city: 'Noida',
    age: 22,
    phone: '9521413060',
    whatsapp: '919521413060',
    images: ['/images/model_6.jpg', '/images/model_12.jpg', '/ecj-mark.svg'],
    isVerified: true,
    isVip: false,
    isOnline: true,
    rating: 4.85,
    reviewsCount: 88,
    services: ['Friendly Chats', 'Hotel Outcall', 'Private Meetings', 'Corporate Dates', 'Zero Rush Service'],
    description: 'Hello! Ananya here, 22-year-old charming and bubbly companion in Sector 62 Noida. Very hygiene conscious, punctual, and genuine. Looking to meet respectful executives and gentlemen for memorable private time and relaxation after corporate hours.',
    postedAt: '8 mins ago',
    views: 3150,
    rates: {
      perHour: '₹2,500',
      perSession: '₹4,500',
      fullNight: '₹12,000',
    },
  },
  {
    id: 'ad-cg-03',
    title: 'Simran - Elite 5-Star Hotel Hostess & High Profile Escort on Noida Expressway',
    slug: 'simran-elite-5-star-hotel-hostess-sector-137-expressway',
    categoryId: 'call-girls',
    categorySlug: 'call-girls',
    locality: 'Sector 137 Noida',
    localitySlug: 'sector-137',
    city: 'Noida',
    age: 24,
    phone: '9521413060',
    whatsapp: '919521413060',
    images: ['/images/model_unsplash_1.jpg', '/images/model_13.jpg', '/ecj-mark.svg'],
    isVerified: true,
    isVip: true,
    isOnline: true,
    rating: 5.0,
    reviewsCount: 142,
    services: ['5-Star Outcall Only', 'Business Events', 'Airport Pickup Meet', 'Luxury Travel Companion', 'Ultra Discreet'],
    description: 'Tall, elegant, and sophisticated 24-year-old VIP companion catering to business delegates, corporate travelers, and luxury hotel guests along Noida Expressway and Advant Navis. Complete discretion and royal hospitality guaranteed.',
    postedAt: '18 mins ago',
    views: 5200,
    rates: {
      perHour: '₹4,000',
      perSession: '₹7,000',
      fullNight: '₹20,000',
    },
  },
  {
    id: 'ad-cg-04',
    title: 'Pooja - Stunning Independent Companion in Greater Noida Pari Chowk',
    slug: 'pooja-stunning-independent-companion-pari-chowk-greater-noida',
    categoryId: 'call-girls',
    categorySlug: 'call-girls',
    locality: 'Pari Chowk Greater Noida',
    localitySlug: 'pari-chowk',
    city: 'Greater Noida',
    age: 25,
    phone: '9521413060',
    whatsapp: '919521413060',
    images: ['/images/model_7.jpg', '/images/model_14.jpg', '/ecj-mark.svg'],
    isVerified: true,
    isVip: false,
    isOnline: true,
    rating: 4.8,
    reviewsCount: 65,
    services: ['Private In-call', 'Hotel Outcall', 'Affectionate Meetings', 'Expo Mart Visits', 'Tea & Coffee Dates'],
    description: 'Warm, mature, and caring 25-year-old companion available near Pari Chowk and India Expo Mart in Greater Noida. If you want warmth, non-commercial vibe, and pleasant company with zero attitude, message me on WhatsApp.',
    postedAt: '45 mins ago',
    views: 2980,
    rates: {
      perHour: '₹2,500',
      perSession: '₹4,000',
      fullNight: '₹12,000',
    },
  },
  {
    id: 'ad-cg-05',
    title: 'Kavya - Seductive VIP Companion in Indirapuram (NCR Region)',
    slug: 'kavya-seductive-vip-companion-indirapuram-ghaziabad',
    categoryId: 'call-girls',
    categorySlug: 'call-girls',
    locality: 'Indirapuram Ghaziabad',
    localitySlug: 'indirapuram',
    city: 'Ghaziabad',
    age: 23,
    phone: '9521413060',
    whatsapp: '919521413060',
    images: ['/images/model_1.jpg', '/ecj-mark.svg'],
    isVerified: true,
    isVip: true,
    isOnline: true,
    rating: 4.9,
    reviewsCount: 78,
    services: ['Shipra Mall Meetings', 'Doorstep Outcall', 'Private In-call', 'Late Night Dating', '100% Confidential'],
    description: 'Passionate and open-minded 23-year-old companion located in Indirapuram near Shipra Mall, near Noida Sector 62. Available for quick outcalls to Sector 62, Sector 18, and Vaishali.',
    postedAt: '1 hour ago',
    views: 3410,
    rates: {
      perHour: '₹2,800',
      perSession: '₹5,000',
      fullNight: '₹14,000',
    },
  },
  {
    id: 'ad-cg-06',
    title: 'Meera - Elegant College Model in Noida Extension (Gaur City)',
    slug: 'meera-elegant-college-model-noida-extension',
    categoryId: 'call-girls',
    categorySlug: 'call-girls',
    locality: 'Noida Extension (Gr Noida West)',
    localitySlug: 'noida-extension',
    city: 'Greater Noida West',
    age: 21,
    phone: '9521413060',
    whatsapp: '919521413060',
    images: ['/images/model_2.jpg', '/ecj-mark.svg'],
    isVerified: true,
    isVip: false,
    isOnline: true,
    rating: 4.75,
    reviewsCount: 56,
    services: ['Gaur City Outcall', 'In-call Suite', 'Friendly Companion', 'Weekend Trips', 'Genuine Photos'],
    description: 'Charming 21-year-old student companion living near Gaur City in Greater Noida West. Friendly, down to earth, and polite. Direct WhatsApp contact with genuine picture verification.',
    postedAt: '1.5 hours ago',
    views: 2650,
    rates: {
      perHour: '₹2,500',
      perSession: '₹4,500',
      fullNight: '₹11,000',
    },
  },

  // ── MASSAGES & SPA ───────────────────────────────────────────
  {
    id: 'ad-spa-01',
    title: 'Luxury 24/7 Thai & Swedish Body Massage with Steam Bath in Sector 18 Noida',
    slug: 'luxury-24-7-thai-swedish-body-massage-sector-18-noida',
    categoryId: 'massages',
    categorySlug: 'massages',
    locality: 'Sector 18 Noida',
    localitySlug: 'sector-18',
    city: 'Noida',
    phone: '9521413060',
    whatsapp: '919521413060',
    images: ['/images/model_3.jpg', '/ecj-mark.svg'],
    isVerified: true,
    isVip: true,
    isOnline: true,
    rating: 4.95,
    reviewsCount: 112,
    services: ['Thai Massage', 'Swedish Massage', 'Deep Tissue', 'Herbal Steam Bath', 'Hydro Shower', 'Private AC Suite'],
    description: 'Experience authentic luxury Thai stretching and Swedish relaxation massage by certified female therapists in Sector 18 Noida. Clean, sanitized private suites with attached shower and 24/7 open service. Instant slot confirmation on WhatsApp.',
    postedAt: 'Just now',
    views: 2820,
    rates: {
      perHour: '₹2,000',
      perSession: '₹3,500',
    },
  },
  {
    id: 'ad-spa-02',
    title: 'Sensual Aromatherapy & Deep Tissue Relaxation in Sector 50 Noida',
    slug: 'sensual-aromatherapy-deep-tissue-sector-50-noida',
    categoryId: 'massages',
    categorySlug: 'massages',
    locality: 'Sector 50 Noida',
    localitySlug: 'sector-50',
    city: 'Noida',
    phone: '9521413060',
    whatsapp: '919521413060',
    images: ['/images/model_4.jpg', '/ecj-mark.svg'],
    isVerified: true,
    isVip: false,
    isOnline: true,
    rating: 4.8,
    reviewsCount: 64,
    services: ['Aromatherapy', 'Deep Tissue', 'Full Body Oil Massage', 'Foot Reflexology', 'Warm Towel Therapy'],
    description: 'Professional wellness therapists offering soothing aromatic essential oil therapies and deep muscle tension release in Sector 50 Noida. Ideal for corporate travelers, business executives, and couples seeking complete mind and body serenity.',
    postedAt: '12 mins ago',
    views: 1980,
    rates: {
      perHour: '₹2,200',
      perSession: '₹3,800',
    },
  },

  // ── MALE ESCORTS & CALL BOYS ──────────────────────────────────
  {
    id: 'ad-me-01',
    title: 'Tall & Handsome Fitness Model Call Boy for Women & Couples in Sector 18 Noida',
    slug: 'tall-handsome-fitness-call-boy-sector-18-noida',
    categoryId: 'male-escorts',
    categorySlug: 'male-escorts',
    locality: 'Sector 18 Noida',
    localitySlug: 'sector-18',
    city: 'Noida',
    age: 25,
    phone: '9521413060',
    whatsapp: '919521413060',
    images: ['/images/model_8.jpg', '/ecj-mark.svg'],
    isVerified: true,
    isVip: true,
    isOnline: true,
    rating: 4.9,
    reviewsCount: 52,
    services: ['For Single Women', 'For Couples', 'Body Massage', 'Private Hotel Visits', '100% Privacy'],
    description: '25-year-old smart, tall (6ft), muscular, and respectful male escort in Sector 18 Noida. Well mannered and discreet. Available for female clients and couples looking for companionship, soothing body massage, and pleasant times in Noida & NCR.',
    postedAt: '30 mins ago',
    views: 2150,
    rates: {
      perHour: '₹2,500',
      perSession: '₹4,500',
    },
  },

  // ── TRANSSEXUAL & TS ──────────────────────────────────────────
  {
    id: 'ad-ts-01',
    title: 'Sensational TS Shemale Model & Ladyboy Companion in Sector 62 Noida',
    slug: 'sensational-ts-shemale-model-sector-62-noida',
    categoryId: 'transsexual',
    categorySlug: 'transsexual',
    locality: 'Sector 62 Noida',
    localitySlug: 'sector-62',
    city: 'Noida',
    age: 24,
    phone: '9521413060',
    whatsapp: '919521413060',
    images: ['/images/model_10.jpg', '/images/model_15.jpg', '/ecj-mark.svg'],
    isVerified: true,
    isVip: true,
    isOnline: true,
    rating: 4.9,
    reviewsCount: 71,
    services: ['Ladyboy Dates', 'Erotic Massages', 'In-call & Outcall', 'Private Suite Meetings', 'Trans Dating'],
    description: 'Feminine, sensual, and stunning 24-year-old TS model located in Sector 62 Noida. Soft spoken, passionate, and open-minded. Real photos and clean private suite available for discreet encounters in Noida.',
    postedAt: '15 mins ago',
    views: 3340,
    rates: {
      perHour: '₹3,000',
      perSession: '₹5,000',
    },
  },

  // ── ADULT MEETINGS ────────────────────────────────────────────
  {
    id: 'ad-am-01',
    title: 'Open Minded Singles & Casual NSA Meetings in Sector 18 & Expressway Noida',
    slug: 'open-minded-singles-casual-nsa-sector-18-noida',
    categoryId: 'adult-meetings',
    categorySlug: 'adult-meetings',
    locality: 'Sector 18 Noida',
    localitySlug: 'sector-18',
    city: 'Noida',
    phone: '9521413060',
    whatsapp: '919521413060',
    images: ['/images/model_12.jpg', '/ecj-mark.svg'],
    isVerified: true,
    isVip: false,
    isOnline: true,
    rating: 4.85,
    reviewsCount: 94,
    services: ['Casual Dating', 'Coffee First', 'NSA Romance', 'Mutual Respect', 'Local Noida Verified'],
    description: 'Looking to connect with verified open-minded singles in Sector 18 Noida and Expressway for casual dating, pleasant late-night chats, and mutual chemistry without drama or fake profiles.',
    postedAt: '20 mins ago',
    views: 4200,
    rates: {
      perHour: '₹2,000',
    },
  },
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
    ads = ads.filter((ad) => ad.localitySlug === localitySlug);
  }
  return ads;
};
