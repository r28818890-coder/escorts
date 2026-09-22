// ============================================================
// JAIPUR CLASSIFIEDS & LUXURY PORTAL DATA (100% NON-COPYRIGHTED & EMOJI-FREE)
// ============================================================

export interface JaipurLocality {
  id: string;
  name: string;
  slug: string;
  landmark: string;
  zone: 'Central' | 'South' | 'West' | 'North' | 'East';
  popular: boolean;
}

export interface PortalCategory {
  id: string;
  name: string;
  slug: string;
  iconName: 'Sparkles' | 'Heart' | 'Users' | 'UserCheck' | 'Shield' | 'Flame';
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

// ── 1. Jaipur Localities (18 Key Areas) ───────────────────────
export const JAIPUR_LOCALITIES: JaipurLocality[] = [
  { id: 'sindhi-camp', name: 'Sindhi Camp', slug: 'sindhi-camp', landmark: 'Near Bus Stand & Metro Gate 2', zone: 'Central', popular: true },
  { id: 'mi-road', name: 'MI Road', slug: 'mi-road', landmark: 'Near Raj Mandir Cinema & Ajmeri Gate', zone: 'Central', popular: true },
  { id: 'vaishali-nagar', name: 'Vaishali Nagar', slug: 'vaishali-nagar', landmark: 'Near Nursery Circle & Amrapali Plaza', zone: 'West', popular: true },
  { id: 'malviya-nagar', name: 'Malviya Nagar', slug: 'malviya-nagar', landmark: 'Near Gaurav Tower & WTP Mall', zone: 'South', popular: true },
  { id: 'c-scheme', name: 'C Scheme', slug: 'c-scheme', landmark: 'Near Ahinsa Circle & Statue Circle', zone: 'Central', popular: true },
  { id: 'raja-park', name: 'Raja Park', slug: 'raja-park', landmark: 'Near LBS College & Panchwati Circle', zone: 'East', popular: true },
  { id: 'mansarovar', name: 'Mansarovar', slug: 'mansarovar', landmark: 'Near VT Road & City Park', zone: 'South', popular: true },
  { id: 'civil-lines', name: 'Civil Lines', slug: 'civil-lines', landmark: 'Near Metro Station & CM House Area', zone: 'Central', popular: true },
  { id: 'bani-park', name: 'Bani Park', slug: 'bani-park', landmark: 'Near Collectorate Circle & Dena Bank', zone: 'Central', popular: true },
  { id: 'tonk-road', name: 'Tonk Road', slug: 'tonk-road', landmark: 'Near Gopalpura Flyover & Durgapura', zone: 'South', popular: true },
  { id: 'jaipur-railway-station', name: 'Jaipur Railway Station', slug: 'jaipur-railway-station', landmark: 'Near Station Road & Hasanpura', zone: 'Central', popular: true },
  { id: 'jagatpura', name: 'Jagatpura', slug: 'jagatpura', landmark: 'Near Mahal Road & Bombay Hospital', zone: 'South', popular: false },
  { id: 'gopalpura', name: 'Gopalpura Bypass', slug: 'gopalpura', landmark: 'Near Riddhi Siddhi & Triveni Nagar', zone: 'South', popular: false },
  { id: 'sodala', name: 'Sodala', slug: 'sodala', landmark: 'Near Ajmer Road Elevated Road', zone: 'West', popular: false },
  { id: 'vidhyadhar-nagar', name: 'Vidhyadhar Nagar', slug: 'vidhyadhar-nagar', landmark: 'Near National Handloom & Sector 2', zone: 'North', popular: false },
  { id: 'jhotwara', name: 'Jhotwara', slug: 'jhotwara', landmark: 'Near Kalwar Road & Panchayat Bhawan', zone: 'North', popular: false },
  { id: 'airport-area', name: 'Airport Area (Sanganer)', slug: 'airport-area', landmark: 'Near Terminal 2 & Marriott Hotel', zone: 'South', popular: true },
  { id: 'ajmer-road', name: 'Ajmer Road', slug: 'ajmer-road', landmark: 'Near 200 Feet Bypass & DPS', zone: 'West', popular: false },
];

// ── 2. Portal Categories (100% Emoji-Free) ───────────────────
export const PORTAL_CATEGORIES: PortalCategory[] = [
  {
    id: 'massages',
    name: 'Massages & Spa',
    slug: 'massages',
    iconName: 'Sparkles',
    tagline: 'Luxury Body Massages & Relaxing Spa in Jaipur',
    description: 'Explore certified independent massage therapists and luxury spa centers in Jaipur. Enjoy therapeutic Thai massage, Swedish body relaxation, deep tissue therapy, B2B oil massage, couple suites, and herbal steam baths in private sanitized rooms across all prime Jaipur localities.',
    seoTitle: 'Best Massage in Jaipur | Luxury Spa & Body Massage Therapists',
    seoDescription: 'Find top rated massage therapists in Jaipur. Thai massage, full body relaxation, deep tissue & luxury spa services in Sindhi Camp, Vaishali Nagar, Malviya Nagar & MI Road Jaipur.',
    subcategories: [
      'Thai Massage',
      'Swedish Massage',
      'Deep Tissue Massage',
      'Aroma Therapy',
      'B2B Body Massage',
      'Couple Spa Suite',
      'Full Body Oil Massage',
      'Steam & Hydro Shower',
      'Ayurvedic Therapy',
    ],
  },
  {
    id: 'call-girls',
    name: 'Call Girls & Escorts',
    slug: 'call-girls',
    iconName: 'Heart',
    tagline: 'Verified Female Escorts & Independent Companions in Jaipur',
    description: 'Browse verified independent female companions, VIP escort models, college models, and professional hostesses in Jaipur. 100% genuine photo profiles with direct WhatsApp and phone contact for dinners, parties, hotel meetings, and private travel companionship.',
    seoTitle: 'Call Girls in Jaipur | Verified Independent Escort Models Jaipur',
    seoDescription: 'Verified Jaipur call girls and independent escort ads. Genuine photos, honest rates, and 24/7 availability in Malviya Nagar, Vaishali Nagar, MI Road, Sindhi Camp & C-Scheme Jaipur.',
    subcategories: [
      'Independent Girls (W4M)',
      'VIP Luxury Escorts',
      'College Models',
      'Corporate Hostesses',
      'Housewives Companions',
      'Hotel Outcall Escorts',
      'Dinner & Event Companions',
      'Russian / Foreigner Models',
    ],
  },
  {
    id: 'male-escorts',
    name: 'Male Escorts & Call Boys',
    slug: 'male-escorts',
    iconName: 'UserCheck',
    tagline: 'Handsome Male Escorts & Fitness Call Boys in Jaipur',
    description: 'Discover handsome male escorts, fitness models, gigolos, and call boys in Jaipur for women, couples, and discerning clients. Friendly, well-groomed, and discreet companions available for private meetings, personal wellness sessions, and social outings.',
    seoTitle: 'Male Escorts in Jaipur | Call Boys & Handsome Gigolos Jaipur',
    seoDescription: 'Find verified male escorts and call boys in Jaipur. Handsome fitness models and gigolo services for women & couples in Vaishali Nagar, Malviya Nagar, Mansarovar & MI Road.',
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
    tagline: 'Sensational Transsexual & TS Escorts in Jaipur',
    description: 'Meet verified transsexual escorts, TS companions, shemale models, and ladyboy escorts in Jaipur. Open-minded, friendly, and passionate trans models available for private dating, erotic meetings, and unique companion experiences.',
    seoTitle: 'Transsexual in Jaipur | TS Escorts & Shemale Dating Jaipur',
    seoDescription: 'Discover verified transsexual and TS escorts in Jaipur. Ladyboys, shemales, and trans dating ads with real photos and direct contact across Jaipur localities.',
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
    tagline: 'Casual Dating, Local Singles & Erotic Meetups in Jaipur',
    description: 'Connect with verified local singles, open-minded couples, and casual dating partners in Jaipur for no-strings-attached (NSA) meetups, late-night romance, private chatting, and consensual adult encounters in safe, discreet environments.',
    seoTitle: 'Adult Meetings in Jaipur | Casual Dating & Local Singles Hookups',
    seoDescription: 'Looking for casual adult dating in Jaipur? Connect with real local singles, girls, boys, and couples for NSA meetings and discreet dates in Jaipur.',
    subcategories: [
      'Casual Dating (NSA)',
      'Local Jaipur Singles',
      'Couple & Swinger Meetups',
      'Discreet Hookups',
      'Late Night Dating',
      'Coffee & Drinks First',
    ],
  },
];

// ── 3. Initial Classified Ads in Jaipur (Using Model & Spa Images) ──
export const INITIAL_CLASSIFIED_ADS: ClassifiedAd[] = [
  // ── MASSAGES & SPA ───────────────────────────────────────────
  {
    id: 'ad-spa-01',
    title: 'Luxury 24/7 Thai & Swedish Body Massage with Steam Bath',
    slug: 'luxury-24-7-thai-swedish-body-massage-sindhi-camp',
    categoryId: 'massages',
    categorySlug: 'massages',
    locality: 'Sindhi Camp',
    localitySlug: 'sindhi-camp',
    city: 'Jaipur',
    phone: '7357678356',
    whatsapp: '917357678356',
    images: ['/images/model_1.jpg', '/jaipur_escorts_club_logo.jpg'],
    isVerified: true,
    isVip: true,
    isOnline: true,
    rating: 4.9,
    reviewsCount: 84,
    services: ['Thai Massage', 'Swedish Massage', 'Deep Tissue', 'Herbal Steam Bath', 'Hydro Shower', 'Private AC Suite'],
    description: 'Experience authentic luxury Thai stretching and Swedish relaxation massage by certified female therapists at Sindhi Camp, Jaipur. Clean, sanitized private suites with attached shower and 24/7 open service. Instant slot confirmation on WhatsApp.',
    postedAt: 'Just now',
    views: 1420,
  },
  {
    id: 'ad-spa-02',
    title: 'Sensual Aromatherapy & Deep Tissue Relaxation in Vaishali Nagar',
    slug: 'sensual-aromatherapy-deep-tissue-vaishali-nagar',
    categoryId: 'massages',
    categorySlug: 'massages',
    locality: 'Vaishali Nagar',
    localitySlug: 'vaishali-nagar',
    city: 'Jaipur',
    phone: '7357678349',
    whatsapp: '917357678349',
    images: ['/images/model_2.jpg', '/jaipur_escorts_club_logo.jpg'],
    isVerified: true,
    isVip: true,
    isOnline: true,
    rating: 4.8,
    reviewsCount: 52,
    services: ['Aromatherapy', 'Deep Tissue', 'Full Body Oil Massage', 'Foot Reflexology', 'Warm Towel Therapy'],
    description: 'Professional wellness therapists offering soothing aromatic essential oil therapies and deep muscle tension release in Vaishali Nagar, Jaipur. Ideal for travelers, business executives, and couples seeking complete mind and body serenity.',
    postedAt: '12 mins ago',
    views: 980,
  },
  {
    id: 'ad-spa-03',
    title: 'Romantic Couple Spa Package with Jacuzzi Suite in Malviya Nagar',
    slug: 'romantic-couple-spa-package-malviya-nagar',
    categoryId: 'massages',
    categorySlug: 'massages',
    locality: 'Malviya Nagar',
    localitySlug: 'malviya-nagar',
    city: 'Jaipur',
    phone: '7357678356',
    whatsapp: '917357678356',
    images: ['/images/model_3.jpg', '/jaipur_escorts_club_logo.jpg'],
    isVerified: true,
    isVip: true,
    isOnline: true,
    rating: 5.0,
    reviewsCount: 68,
    services: ['Couple Massage', 'Candlelight Ambiance', 'Jacuzzi Bath', 'Balinese Massage', 'Complimentary Herbal Tea'],
    description: 'Treat yourself and your partner to Jaipur premier side-by-side couple spa ritual in Malviya Nagar. Includes aromatic oils, candlelit ambiance, private hydro shower, and complete privacy guaranteed.',
    postedAt: '25 mins ago',
    views: 1890,
  },
  {
    id: 'ad-spa-04',
    title: 'Full Body B2B Oil Massage & Stress Release near MI Road',
    slug: 'full-body-b2b-oil-massage-mi-road',
    categoryId: 'massages',
    categorySlug: 'massages',
    locality: 'MI Road',
    localitySlug: 'mi-road',
    city: 'Jaipur',
    phone: '7357678349',
    whatsapp: '917357678349',
    images: ['/images/model_4.jpg', '/jaipur_escorts_club_logo.jpg'],
    isVerified: true,
    isVip: false,
    isOnline: true,
    rating: 4.7,
    reviewsCount: 39,
    services: ['B2B Massage', 'Full Body Massage', 'Organic Oils', 'Head & Back Relief', 'Shower Included'],
    description: 'High-quality therapeutic oil massage by friendly and polite therapists on MI Road Jaipur. Relax after a long working day with specialized spine, neck, and full-body stress relieving therapy.',
    postedAt: '1 hour ago',
    views: 760,
  },

  // ── CALL GIRLS & ESCORTS ──────────────────────────────────────
  {
    id: 'ad-cg-01',
    title: 'Riya - Glamorous Independent VIP Model Available for In-call & Outcall in C-Scheme',
    slug: 'riya-glamorous-independent-vip-model-c-scheme',
    categoryId: 'call-girls',
    categorySlug: 'call-girls',
    locality: 'C Scheme',
    localitySlug: 'c-scheme',
    city: 'Jaipur',
    age: 23,
    phone: '7357678356',
    whatsapp: '917357678356',
    images: ['/images/model_5.jpg', '/images/model_11.jpg', '/jaipur_escorts_club_logo.jpg'],
    isVerified: true,
    isVip: true,
    isOnline: true,
    rating: 4.9,
    reviewsCount: 96,
    services: ['Hotel Outcall', 'Private In-call', 'Dinner Dates', 'Discreet Meetings', 'Weekend Trips', 'English & Hindi Fluent'],
    description: 'Hi gentlemen! I am Riya, a sweet, classy, and educated 23-year-old independent model staying in C-Scheme Jaipur. I love good conversations, pleasant dinner dates, and creating romantic memories with sophisticated individuals. 100% genuine photos and verified identity.',
    postedAt: 'Just now',
    views: 3120,
  },
  {
    id: 'ad-cg-02',
    title: 'Ananya - Charming College Girl & Sweet Companion in Vaishali Nagar',
    slug: 'ananya-charming-college-girl-vaishali-nagar',
    categoryId: 'call-girls',
    categorySlug: 'call-girls',
    locality: 'Vaishali Nagar',
    localitySlug: 'vaishali-nagar',
    city: 'Jaipur',
    age: 21,
    phone: '7357678349',
    whatsapp: '917357678349',
    images: ['/images/model_6.jpg', '/images/model_12.jpg', '/jaipur_escorts_club_logo.jpg'],
    isVerified: true,
    isVip: false,
    isOnline: true,
    rating: 4.8,
    reviewsCount: 41,
    services: ['Friendly Chats', 'Hotel Outcall', 'Private Meetings', 'Shopping Companion', 'Zero Rush Service'],
    description: 'Hello! Ananya here, 21-year-old charming and bubbly companion in Vaishali Nagar Jaipur. Very hygiene conscious, punctual, and genuine. Looking to meet respectful gentlemen for memorable private time and genuine relaxation.',
    postedAt: '8 mins ago',
    views: 2450,
  },
  {
    id: 'ad-cg-03',
    title: 'Simran - Elite 5-Star Hotel Hostess & High Profile Escort in Airport Area',
    slug: 'simran-elite-5-star-hotel-hostess-airport-area',
    categoryId: 'call-girls',
    categorySlug: 'call-girls',
    locality: 'Airport Area (Sanganer)',
    localitySlug: 'airport-area',
    city: 'Jaipur',
    age: 24,
    phone: '7357678356',
    whatsapp: '917357678356',
    images: ['/images/model_unsplash_1.jpg', '/images/model_13.jpg', '/jaipur_escorts_club_logo.jpg'],
    isVerified: true,
    isVip: true,
    isOnline: true,
    rating: 5.0,
    reviewsCount: 114,
    services: ['5-Star Outcall Only', 'Business Events', 'Airport Pickup Meet', 'Luxury Travel Companion', 'Ultra Discreet'],
    description: 'Tall, elegant, and sophisticated 24-year-old VIP companion catering to business delegates, corporate travelers, and luxury hotel guests near Jaipur Airport / Marriott. Complete discretion and royal hospitality guaranteed.',
    postedAt: '18 mins ago',
    views: 4200,
  },
  {
    id: 'ad-cg-04',
    title: 'Pooja - Stunning Independent Companion in Malviya Nagar',
    slug: 'pooja-stunning-independent-companion-malviya-nagar',
    categoryId: 'call-girls',
    categorySlug: 'call-girls',
    locality: 'Malviya Nagar',
    localitySlug: 'malviya-nagar',
    city: 'Jaipur',
    age: 25,
    phone: '7357678349',
    whatsapp: '917357678349',
    images: ['/images/model_7.jpg', '/images/model_14.jpg', '/jaipur_escorts_club_logo.jpg'],
    isVerified: true,
    isVip: false,
    isOnline: true,
    rating: 4.7,
    reviewsCount: 38,
    services: ['Private In-call', 'Hotel Outcall', 'Affectionate Meetings', 'Stress Relief', 'Tea & Coffee Dates'],
    description: 'Warm, mature, and caring 25-year-old companion available in Malviya Nagar near WTP. If you want warmth, non-commercial vibe, and pleasant company with zero attitude, message me on WhatsApp.',
    postedAt: '45 mins ago',
    views: 1980,
  },

  // ── MALE ESCORTS & CALL BOYS ──────────────────────────────────
  {
    id: 'ad-me-01',
    title: 'Tall & Handsome Fitness Model Call Boy for Women & Couples in Mansarovar',
    slug: 'tall-handsome-fitness-call-boy-mansarovar',
    categoryId: 'male-escorts',
    categorySlug: 'male-escorts',
    locality: 'Mansarovar',
    localitySlug: 'mansarovar',
    city: 'Jaipur',
    age: 25,
    phone: '7357678356',
    whatsapp: '917357678356',
    images: ['/images/model_8.jpg', '/jaipur_escorts_club_logo.jpg'],
    isVerified: true,
    isVip: true,
    isOnline: true,
    rating: 4.9,
    reviewsCount: 47,
    services: ['For Single Women', 'For Couples', 'Body Massage', 'Private Hotel Visits', '100% Privacy'],
    description: '25-year-old smart, tall (6ft), muscular, and respectful male escort in Mansarovar Jaipur. Well mannered and discreet. Available for female clients and couples looking for companionship, soothing body massage, and pleasant times.',
    postedAt: '30 mins ago',
    views: 1650,
  },
  {
    id: 'ad-me-02',
    title: 'Polite & Discreet Male Escort & Personal Wellness Therapist in Raja Park',
    slug: 'polite-discreet-male-escort-raja-park',
    categoryId: 'male-escorts',
    categorySlug: 'male-escorts',
    locality: 'Raja Park',
    localitySlug: 'raja-park',
    city: 'Jaipur',
    age: 26,
    phone: '7357678349',
    whatsapp: '917357678349',
    images: ['/images/model_9.jpg', '/jaipur_escorts_club_logo.jpg'],
    isVerified: true,
    isVip: false,
    isOnline: true,
    rating: 4.8,
    reviewsCount: 29,
    services: ['Wellness Therapy', 'Outcall Service', 'Dinner Companionship', 'Discreet Confidential Meetings'],
    description: 'Educated and hygiene-focused 26-year-old male companion in Raja Park Jaipur. Certified in body wellness therapies. Respectful of client boundaries with 100% confidentiality.',
    postedAt: '1 hour ago',
    views: 890,
  },

  // ── TRANSSEXUAL & TS ──────────────────────────────────────────
  {
    id: 'ad-ts-01',
    title: 'Sensational TS Shemale Model & Ladyboy Companion in Sindhi Camp',
    slug: 'sensational-ts-shemale-model-sindhi-camp',
    categoryId: 'transsexual',
    categorySlug: 'transsexual',
    locality: 'Sindhi Camp',
    localitySlug: 'sindhi-camp',
    city: 'Jaipur',
    age: 24,
    phone: '7357678356',
    whatsapp: '917357678356',
    images: ['/images/model_10.jpg', '/images/model_15.jpg', '/jaipur_escorts_club_logo.jpg'],
    isVerified: true,
    isVip: true,
    isOnline: true,
    rating: 4.9,
    reviewsCount: 63,
    services: ['Ladyboy Dates', 'Erotic Massages', 'In-call & Outcall', 'Private Suite Meetings', 'Trans Dating'],
    description: 'Feminine, sensual, and stunning 24-year-old TS model located in Sindhi Camp, Jaipur. Soft spoken, passionate, and open-minded. Real photos and clean private suite available.',
    postedAt: '15 mins ago',
    views: 2840,
  },
  {
    id: 'ad-ts-02',
    title: 'Cute & Friendly Trans Companion for Private Dates in Tonk Road',
    slug: 'cute-friendly-trans-companion-tonk-road',
    categoryId: 'transsexual',
    categorySlug: 'transsexual',
    locality: 'Tonk Road',
    localitySlug: 'tonk-road',
    city: 'Jaipur',
    age: 22,
    phone: '7357678349',
    whatsapp: '917357678349',
    images: ['/images/model_11.jpg', '/jaipur_escorts_club_logo.jpg'],
    isVerified: true,
    isVip: false,
    isOnline: true,
    rating: 4.7,
    reviewsCount: 31,
    services: ['Trans Dating', 'Hotel Outcall', 'Zero Attitude', 'Sweet Conversations', 'Hygiene First'],
    description: 'Young and sweet 22-year-old TS companion on Tonk Road near Gopalpura. Perfect for individuals exploring new fantasies in a secure, non-judgmental environment.',
    postedAt: '50 mins ago',
    views: 1420,
  },

  // ── ADULT MEETINGS ────────────────────────────────────────────
  {
    id: 'ad-am-01',
    title: 'Open Minded Singles & Casual NSA Meetings in Vaishali Nagar',
    slug: 'open-minded-singles-casual-nsa-vaishali-nagar',
    categoryId: 'adult-meetings',
    categorySlug: 'adult-meetings',
    locality: 'Vaishali Nagar',
    localitySlug: 'vaishali-nagar',
    city: 'Jaipur',
    phone: '7357678356',
    whatsapp: '917357678356',
    images: ['/images/model_12.jpg', '/jaipur_escorts_club_logo.jpg'],
    isVerified: true,
    isVip: false,
    isOnline: true,
    rating: 4.8,
    reviewsCount: 88,
    services: ['Casual Dating', 'Coffee First', 'NSA Romance', 'Mutual Respect', 'Local Jaipur Verified'],
    description: 'Looking to connect with verified open-minded singles in Vaishali Nagar for casual dating, pleasant late-night chats, and mutual chemistry without drama or fake profiles.',
    postedAt: '20 mins ago',
    views: 3500,
  },
  {
    id: 'ad-am-02',
    title: 'Discreet Midnight Romance & Private Dates in Malviya Nagar',
    slug: 'discreet-midnight-romance-malviya-nagar',
    categoryId: 'adult-meetings',
    categorySlug: 'adult-meetings',
    locality: 'Malviya Nagar',
    localitySlug: 'malviya-nagar',
    city: 'Jaipur',
    phone: '7357678349',
    whatsapp: '917357678349',
    images: ['/images/model_13.jpg', '/images/model_14.jpg', '/jaipur_escorts_club_logo.jpg'],
    isVerified: true,
    isVip: true,
    isOnline: true,
    rating: 4.9,
    reviewsCount: 75,
    services: ['Single Men & Women', 'Couple Hookups', 'Swinger Chats', 'Discreet Cafe Dates', 'Privacy Guaranteed'],
    description: 'Join Jaipur most active community of adult singles and adventurous couples in Malviya Nagar. Real interactions, safe meetings, and genuine local people.',
    postedAt: '40 mins ago',
    views: 4100,
  },
];

// ── 4. Safety & Scam Prevention Guidelines for Jaipur ──────────
export const SAFETY_TIPS = [
  {
    title: 'Never Pay Full Advance Prior to Meeting',
    desc: 'Always verify the profile and speak directly on phone or WhatsApp before making any arrangements. Beware of unauthorized QR code requests or advance fee demands.',
  },
  {
    title: 'Check Verified Badges',
    desc: 'Profiles with the green "100% Real & Verified" badge have undergone phone authentication and genuine photo confirmation.',
  },
  {
    title: 'Meet in Safe & Verified Places',
    desc: 'For first-time meetings, choose well-known 3-star/5-star hotels, established spa centers, or public coffee shops in central Jaipur areas (C-Scheme, MI Road, Vaishali Nagar).',
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
  JAIPUR_LOCALITIES.find((l) => l.slug === slug);

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
