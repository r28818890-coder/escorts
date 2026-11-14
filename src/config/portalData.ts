// ============================================================
// NOIDA & NCR CLASSIFIEDS DIRECTORY DATA (54 VERIFIED PROFILES)
// ============================================================

export interface NoidaLocality {
  id: string;
  name: string;
  slug: string;
  landmark: string;
  zone: 'Central Noida' | 'Noida Expressway' | 'Greater Noida' | 'Ghaziabad NCR';
  popular: boolean;
}

export type JaipurLocality = NoidaLocality;

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

export const JAIPUR_LOCALITIES = NOIDA_LOCALITIES;

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
    id: 'massages',
    name: 'Massages & Luxury Spa',
    slug: 'massages',
    iconName: 'Sparkles',
    tagline: 'Authentic Thai Body Massage, Swedish Therapy & Spa Relaxation',
    description: 'Explore verified massage services and wellness spa treatments in Noida & NCR. Rejuvenating Thai massage, deep tissue therapy, aromatherapy, and couple spa sessions in sanitized private suites or hotel doorstep visits.',
    seoTitle: 'Massage in Noida | Body Spa & Thai Relaxation Services',
    seoDescription: 'Authentic body massage and spa services in Noida. Relaxing Thai, Swedish, and deep tissue therapies across Sector 18, 62, Greater Noida, and Indirapuram.',
    subcategories: [
      'Thai Traditional Massage',
      'Swedish Body Massage',
      'Deep Tissue Therapy',
      'Aromatherapy Session',
      'Couple Suite Spa',
      'Doorstep Hotel Visits',
    ],
  },
  {
    id: 'male-escorts',
    name: 'Male Escorts & Call Boys',
    slug: 'male-escorts',
    iconName: 'UserCheck',
    tagline: 'Handsome Fitness Models & VIP Companions for Women & Couples',
    description: 'Discover polite, athletic, and verified male companions in Noida for women, couples, and private social events. Absolute discretion, respectful behavior, and direct WhatsApp booking.',
    seoTitle: 'Male Escorts in Noida | Call Boys & Fitness Companions',
    seoDescription: 'Verified male escort services in Noida & NCR. Handsome call boys, fitness models, and respectful companions for private dates and hotel visits.',
    subcategories: [
      'Fitness Models (M4W)',
      'VIP Male Companions',
      'Couples Accompaniment',
      'Dinner & Party Dates',
    ],
  },
  {
    id: 'transsexual',
    name: 'Transsexual & TS Escorts',
    slug: 'transsexual',
    iconName: 'Users',
    tagline: 'Discreet Ladyboy & Trans Companions in Noida',
    description: 'Connect with verified trans and ladyboy companions in Noida for private dates, hotel outcalls, and open-minded adult conversations.',
    seoTitle: 'Transsexual Escorts in Noida | TS Companions & Dating',
    seoDescription: 'Verified transsexual escorts in Noida. Real photos and direct contact across Noida, Greater Noida & Ghaziabad.',
    subcategories: [
      'TS Escorts',
      'Ladyboy Companions',
      'Discreet Dating',
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
      'Coffee First',
    ],
  },
];

// ── 3. 54 Verified Classified Ads in Noida & NCR (3 Per Locality) ────
export const INITIAL_CLASSIFIED_ADS: ClassifiedAd[] = [
  {
    "id": "ad-cg-01",
    "title": "Riya - Glamorous VIP Model Available in Sector 18 Noida",
    "slug": "riya-glamorous-vip-model-sector-18",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Sector 18 Noida",
    "localitySlug": "sector-18",
    "city": "Noida",
    "age": 23,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/model_unsplash_1.jpg",
      "/images/model_4.jpg",
      "/ecj-mark.svg"
    ],
    "isVerified": true,
    "isVip": true,
    "isOnline": true,
    "rating": 4.9,
    "reviewsCount": 82,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hi gentlemen! I am Riya, a sweet, classy, and educated 23-year-old companion. I love pleasant dinner dates, good conversations, and creating romantic memories with sophisticated individuals. 100% genuine photos and verified identity. Staying near DLF Mall of India & Radisson Blu with fast 20-30 minute doorstep outcall service.",
    "postedAt": "6 mins ago",
    "views": 2897,
    "rates": {
      "perHour": "\u20b93,000",
      "perSession": "\u20b95,000",
      "fullNight": "\u20b915,000"
    }
  },
  {
    "id": "ad-cg-02",
    "title": "Ananya - Charming Corporate Hostess Available in Sector 18 Noida",
    "slug": "ananya-charming-corporate-hostess-sector-18",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Sector 18 Noida",
    "localitySlug": "sector-18",
    "city": "Noida",
    "age": 22,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/model_1.jpg",
      "/images/model_5.jpg",
      "/ecj-mark.svg"
    ],
    "isVerified": true,
    "isVip": false,
    "isOnline": true,
    "rating": 4.95,
    "reviewsCount": 99,
    "services": [
      "Hotel Outcall",
      "Corporate Dates",
      "Friendly Chats",
      "Zero Rush Service"
    ],
    "description": "Hello! Ananya here, 22-year-old charming and articulate companion. Very hygiene conscious, punctual, and genuine. Looking to meet respectful executives and gentlemen for memorable private time after corporate hours. Staying near DLF Mall of India & Radisson Blu with fast 20-30 minute doorstep outcall service.",
    "postedAt": "7 mins ago",
    "views": 2994,
    "rates": {
      "perHour": "\u20b93,000",
      "perSession": "\u20b95,000",
      "fullNight": "\u20b915,000"
    }
  },
  {
    "id": "ad-cg-03",
    "title": "Simran - Elite 5-Star Hotel Hostess Available in Sector 18 Noida",
    "slug": "simran-elite-5-star-hotel-hostess-sector-18",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Sector 18 Noida",
    "localitySlug": "sector-18",
    "city": "Noida",
    "age": 24,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/model_2.jpg",
      "/images/model_6.jpg",
      "/ecj-mark.svg"
    ],
    "isVerified": true,
    "isVip": true,
    "isOnline": true,
    "rating": 4.85,
    "reviewsCount": 116,
    "services": [
      "Luxury Hotel Outcall",
      "Full Night Companion",
      "English Fluent",
      "VIP Escort"
    ],
    "description": "Greetings! Simran here, a high-profile 24-year-old luxury companion available for 5-star hotel visits and executive dinner accompaniment. Professional attitude, discreet, and refined manners guaranteed. Staying near DLF Mall of India & Radisson Blu with fast 20-30 minute doorstep outcall service.",
    "postedAt": "8 mins ago",
    "views": 3091,
    "rates": {
      "perHour": "\u20b96,000",
      "perSession": "\u20b910,000",
      "fullNight": "\u20b925,000"
    }
  },
  {
    "id": "ad-cg-04",
    "title": "Tanya - Independent College Girl Available in Sector 62 Noida",
    "slug": "tanya-independent-college-girl-sector-62",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Sector 62 Noida",
    "localitySlug": "sector-62",
    "city": "Noida",
    "age": 21,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/model_3.jpg",
      "/images/model_7.jpg",
      "/ecj-mark.svg"
    ],
    "isVerified": true,
    "isVip": false,
    "isOnline": true,
    "rating": 4.9,
    "reviewsCount": 133,
    "services": [
      "Coffee First",
      "Incall & Outcall",
      "Casual Dating",
      "Weekend Companion"
    ],
    "description": "Hey! Tanya here, a friendly and cheerful 21-year-old independent student. I enjoy light-hearted conversations, movies, and romantic evening companionship with polite and respectful gentlemen. Staying near Electronic City & Fortis Hospital IT Hub with fast 20-30 minute doorstep outcall service.",
    "postedAt": "9 mins ago",
    "views": 3188,
    "rates": {
      "perHour": "\u20b92,500",
      "perSession": "\u20b94,500",
      "fullNight": "\u20b912,000"
    }
  },
  {
    "id": "ad-cg-05",
    "title": "Priya - Sophisticated Luxury Companion Available in Sector 62 Noida",
    "slug": "priya-sophisticated-luxury-companion-sector-62",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Sector 62 Noida",
    "localitySlug": "sector-62",
    "city": "Noida",
    "age": 25,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/model_4.jpg",
      "/images/model_8.jpg",
      "/ecj-mark.svg"
    ],
    "isVerified": true,
    "isVip": true,
    "isOnline": true,
    "rating": 4.95,
    "reviewsCount": 150,
    "services": [
      "Hotel Doorstep Outcall",
      "Event Hostess",
      "Travel Companion",
      "Discreet Romance"
    ],
    "description": "Hello! I am Priya, a 25-year-old elegant independent companion. Known for warm hospitality, captivating smiles, and complete confidentiality. Available 24/7 for hotel outcalls. Staying near Electronic City & Fortis Hospital IT Hub with fast 20-30 minute doorstep outcall service.",
    "postedAt": "10 mins ago",
    "views": 3285,
    "rates": {
      "perHour": "\u20b93,000",
      "perSession": "\u20b95,000",
      "fullNight": "\u20b915,000"
    }
  },
  {
    "id": "ad-cg-06",
    "title": "Natasha - Glamorous Russian Model Available in Sector 62 Noida",
    "slug": "natasha-glamorous-russian-model-sector-62",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Sector 62 Noida",
    "localitySlug": "sector-62",
    "city": "Noida",
    "age": 24,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/model_5.jpg",
      "/images/model_9.jpg",
      "/ecj-mark.svg"
    ],
    "isVerified": true,
    "isVip": false,
    "isOnline": true,
    "rating": 4.85,
    "reviewsCount": 167,
    "services": [
      "International Model",
      "VIP Suite Visits",
      "Discreet Meetings",
      "English Fluent"
    ],
    "description": "Hello gentlemen! Natasha here, 24-year-old glamorous European companion available for luxury stays and exclusive dates. Tall, fair, elegant, and completely discreet. Staying near Electronic City & Fortis Hospital IT Hub with fast 20-30 minute doorstep outcall service.",
    "postedAt": "11 mins ago",
    "views": 3382,
    "rates": {
      "perHour": "\u20b96,000",
      "perSession": "\u20b910,000",
      "fullNight": "\u20b925,000"
    }
  },
  {
    "id": "ad-cg-07",
    "title": "Sneha - Warm Housewife Companion Available in Sector 50 Noida",
    "slug": "sneha-warm-housewife-companion-sector-50",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Sector 50 Noida",
    "localitySlug": "sector-50",
    "city": "Noida",
    "age": 26,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/model_6.jpg",
      "/images/model_10.jpg",
      "/ecj-mark.svg"
    ],
    "isVerified": true,
    "isVip": true,
    "isOnline": true,
    "rating": 4.9,
    "reviewsCount": 69,
    "services": [
      "Private Meetings",
      "Emotional Connection",
      "Zero Rush Service",
      "Hotel Outcall"
    ],
    "description": "Namaste! Sneha here, 26-year-old mature and caring companion. If you seek peaceful companionship, attentive listening, and sincere warmth, connect with me directly on WhatsApp. Staying near Wave City Center & Central Market with fast 20-30 minute doorstep outcall service.",
    "postedAt": "12 mins ago",
    "views": 3479,
    "rates": {
      "perHour": "\u20b93,000",
      "perSession": "\u20b95,000",
      "fullNight": "\u20b915,000"
    }
  },
  {
    "id": "ad-cg-08",
    "title": "Elena - VIP Foreign Companion Available in Sector 50 Noida",
    "slug": "elena-vip-foreign-companion-sector-50",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Sector 50 Noida",
    "localitySlug": "sector-50",
    "city": "Noida",
    "age": 23,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/model_7.jpg",
      "/images/model_11.jpg",
      "/ecj-mark.svg"
    ],
    "isVerified": true,
    "isVip": false,
    "isOnline": true,
    "rating": 4.95,
    "reviewsCount": 86,
    "services": [
      "5-Star Outcall",
      "Fine Dining Hostess",
      "Luxury Lifestyle",
      "Discreet Service"
    ],
    "description": "Hi! Elena here, 23-year-old European model visiting Noida. Sophisticated, charming, and looking forward to meeting polite gentlemen for memorable luxury hotel dates. Staying near Wave City Center & Central Market with fast 20-30 minute doorstep outcall service.",
    "postedAt": "13 mins ago",
    "views": 3576,
    "rates": {
      "perHour": "\u20b93,000",
      "perSession": "\u20b95,000",
      "fullNight": "\u20b915,000"
    }
  },
  {
    "id": "ad-cg-09",
    "title": "Kavya - Articulate Business Hostess Available in Sector 50 Noida",
    "slug": "kavya-articulate-business-hostess-sector-50",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Sector 50 Noida",
    "localitySlug": "sector-50",
    "city": "Noida",
    "age": 24,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/model_8.jpg",
      "/images/model_12.jpg",
      "/ecj-mark.svg"
    ],
    "isVerified": true,
    "isVip": true,
    "isOnline": true,
    "rating": 4.85,
    "reviewsCount": 103,
    "services": [
      "Dinner Dates",
      "Corporate Travel",
      "VIP Outcall",
      "Fluent Communication"
    ],
    "description": "Hello! Kavya here, a 24-year-old educated and well-spoken corporate companion. Perfect companion for business events, dinner meetings, and relaxing hotel stays. Staying near Wave City Center & Central Market with fast 20-30 minute doorstep outcall service.",
    "postedAt": "14 mins ago",
    "views": 3673,
    "rates": {
      "perHour": "\u20b93,000",
      "perSession": "\u20b95,000",
      "fullNight": "\u20b915,000"
    }
  },
  {
    "id": "ad-cg-10",
    "title": "Divya - Glamorous Evening Companion Available in Sector 137 Noida",
    "slug": "divya-glamorous-evening-companion-sector-137",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Sector 137 Noida",
    "localitySlug": "sector-137",
    "city": "Noida",
    "age": 25,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/model_9.jpg",
      "/images/model_13.jpg",
      "/ecj-mark.svg"
    ],
    "isVerified": true,
    "isVip": false,
    "isOnline": true,
    "rating": 4.9,
    "reviewsCount": 120,
    "services": [
      "Doorstep Delivery",
      "Discreet Suite Visits",
      "Full Night Stay",
      "Sweet Nature"
    ],
    "description": "Hi! Divya here, a gorgeous 25-year-old model. Passionate about music, fine dining, and making every private moment memorable and romantic. Staying near Noida Expressway & Felix Hospital with fast 20-30 minute doorstep outcall service.",
    "postedAt": "15 mins ago",
    "views": 3770,
    "rates": {
      "perHour": "\u20b93,000",
      "perSession": "\u20b95,000",
      "fullNight": "\u20b915,000"
    }
  },
  {
    "id": "ad-cg-11",
    "title": "Shreya - Youthful College Model Available in Sector 137 Noida",
    "slug": "shreya-youthful-college-model-sector-137",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Sector 137 Noida",
    "localitySlug": "sector-137",
    "city": "Noida",
    "age": 21,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/model_10.jpg",
      "/images/model_14.jpg",
      "/ecj-mark.svg"
    ],
    "isVerified": true,
    "isVip": true,
    "isOnline": true,
    "rating": 4.95,
    "reviewsCount": 137,
    "services": [
      "Weekend Dates",
      "Coffee & Movies",
      "Hotel Outcall",
      "Friendly Vibe"
    ],
    "description": "Hey! Shreya here, a lively 21-year-old companion. Easy-going, fun, and looking for genuine gentlemen to spend quality evenings together. Staying near Noida Expressway & Felix Hospital with fast 20-30 minute doorstep outcall service.",
    "postedAt": "16 mins ago",
    "views": 3867,
    "rates": {
      "perHour": "\u20b92,500",
      "perSession": "\u20b94,500",
      "fullNight": "\u20b912,000"
    }
  },
  {
    "id": "ad-cg-12",
    "title": "Aisha - High Profile Air Hostess Escort Available in Sector 137 Noida",
    "slug": "aisha-high-profile-air-hostess-escort-sector-137",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Sector 137 Noida",
    "localitySlug": "sector-137",
    "city": "Noida",
    "age": 24,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/model_11.jpg",
      "/images/model_15.jpg",
      "/ecj-mark.svg"
    ],
    "isVerified": true,
    "isVip": false,
    "isOnline": true,
    "rating": 4.85,
    "reviewsCount": 154,
    "services": [
      "Executive Stays",
      "Airport Transfers",
      "5-Star Outcall",
      "Sophisticated"
    ],
    "description": "Greetings! Aisha here, a stylish 24-year-old cabin crew hostess available during transit and layovers in Noida. Well-mannered, elegant, and discreet. Staying near Noida Expressway & Felix Hospital with fast 20-30 minute doorstep outcall service.",
    "postedAt": "17 mins ago",
    "views": 3964,
    "rates": {
      "perHour": "\u20b93,000",
      "perSession": "\u20b95,000",
      "fullNight": "\u20b915,000"
    }
  },
  {
    "id": "ad-cg-13",
    "title": "Pooja - Mature Independent Escort Available in Sector 16 & Film City",
    "slug": "pooja-mature-independent-escort-sector-18-film-city",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Sector 16 & Film City",
    "localitySlug": "sector-18-film-city",
    "city": "Noida",
    "age": 26,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/model_12.jpg",
      "/images/model_unsplash_1.jpg",
      "/ecj-mark.svg"
    ],
    "isVerified": true,
    "isVip": true,
    "isOnline": true,
    "rating": 4.9,
    "reviewsCount": 171,
    "services": [
      "Private In-call",
      "Hotel Outcall",
      "Friendly Chat",
      "Relaxing Massage"
    ],
    "description": "Hello! Pooja here, 26-year-old warm-hearted companion. Ideal for stress-free evenings, genuine conversations, and complete relaxation after a long workday. Staying near Film City & DND Flyway with fast 20-30 minute doorstep outcall service.",
    "postedAt": "18 mins ago",
    "views": 4061,
    "rates": {
      "perHour": "\u20b93,000",
      "perSession": "\u20b95,000",
      "fullNight": "\u20b915,000"
    }
  },
  {
    "id": "ad-cg-14",
    "title": "Ishita - Modern Fashion Stylist Companion Available in Sector 16 & Film City",
    "slug": "ishita-modern-fashion-stylist-companion-sector-18-film-city",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Sector 16 & Film City",
    "localitySlug": "sector-18-film-city",
    "city": "Noida",
    "age": 23,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/model_13.jpg",
      "/images/model_1.jpg",
      "/ecj-mark.svg"
    ],
    "isVerified": true,
    "isVip": false,
    "isOnline": true,
    "rating": 4.95,
    "reviewsCount": 73,
    "services": [
      "Cocktail Dates",
      "Party Accompaniment",
      "Hotel Outcall",
      "VIP Discreet"
    ],
    "description": "Hi gentlemen! Ishita here, 23-year-old stylish companion who loves fashion, fine wine, and sophisticated company. Guaranteed authentic photos and sincere smiles. Staying near Film City & DND Flyway with fast 20-30 minute doorstep outcall service.",
    "postedAt": "19 mins ago",
    "views": 4158,
    "rates": {
      "perHour": "\u20b93,000",
      "perSession": "\u20b95,000",
      "fullNight": "\u20b915,000"
    }
  },
  {
    "id": "ad-cg-15",
    "title": "Muskan - Sweet College Student Available in Sector 16 & Film City",
    "slug": "muskan-sweet-college-student-sector-18-film-city",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Sector 16 & Film City",
    "localitySlug": "sector-18-film-city",
    "city": "Noida",
    "age": 22,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/model_14.jpg",
      "/images/model_2.jpg",
      "/ecj-mark.svg"
    ],
    "isVerified": true,
    "isVip": true,
    "isOnline": true,
    "rating": 4.85,
    "reviewsCount": 90,
    "services": [
      "Incall/Outcall",
      "Coffee Dates",
      "Weekend Outings",
      "Affectionate"
    ],
    "description": "Namaste! Muskan here, a gentle and polite 22-year-old college girl. Always punctual, hygiene-conscious, and respectful. Available for 24/7 hotel outcall bookings. Staying near Film City & DND Flyway with fast 20-30 minute doorstep outcall service.",
    "postedAt": "20 mins ago",
    "views": 4255,
    "rates": {
      "perHour": "\u20b92,500",
      "perSession": "\u20b94,500",
      "fullNight": "\u20b912,000"
    }
  },
  {
    "id": "ad-cg-16",
    "title": "Pallavi - Luxury Hotel Outcall Hostess Available in Sector 76 & 78 Noida",
    "slug": "pallavi-luxury-hotel-outcall-hostess-sector-76-78",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Sector 76 & 78 Noida",
    "localitySlug": "sector-76-78",
    "city": "Noida",
    "age": 25,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/model_15.jpg",
      "/images/model_3.jpg",
      "/ecj-mark.svg"
    ],
    "isVerified": true,
    "isVip": false,
    "isOnline": true,
    "rating": 4.9,
    "reviewsCount": 107,
    "services": [
      "Full Night Companion",
      "Executive Dinner",
      "Discreet Protocol",
      "COD Payment"
    ],
    "description": "Hello! Pallavi here, 25-year-old independent model. Dedicated to providing warm, unhurried, and refined companionship for discerning travelers in Noida. Staying near Silicon City & Sector 76 Metro with fast 20-30 minute doorstep outcall service.",
    "postedAt": "21 mins ago",
    "views": 4352,
    "rates": {
      "perHour": "\u20b93,000",
      "perSession": "\u20b95,000",
      "fullNight": "\u20b915,000"
    }
  },
  {
    "id": "ad-cg-17",
    "title": "Meera - Classy Independent Companion Available in Sector 76 & 78 Noida",
    "slug": "meera-classy-independent-companion-sector-76-78",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Sector 76 & 78 Noida",
    "localitySlug": "sector-76-78",
    "city": "Noida",
    "age": 27,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/model_unsplash_1.jpg",
      "/images/model_4.jpg",
      "/ecj-mark.svg"
    ],
    "isVerified": true,
    "isVip": true,
    "isOnline": true,
    "rating": 4.95,
    "reviewsCount": 124,
    "services": [
      "Private Suite Visit",
      "Late Night Dates",
      "Discreet Romance",
      "Friendly Nature"
    ],
    "description": "Hello gentlemen! Meera here, a 27-year-old mature companion offering genuine warmth, great conversation, and memorable private moments. Staying near Silicon City & Sector 76 Metro with fast 20-30 minute doorstep outcall service.",
    "postedAt": "22 mins ago",
    "views": 4449,
    "rates": {
      "perHour": "\u20b93,000",
      "perSession": "\u20b95,000",
      "fullNight": "\u20b915,000"
    }
  },
  {
    "id": "ad-cg-18",
    "title": "Alina - Russian VIP Hostess Available in Sector 76 & 78 Noida",
    "slug": "alina-russian-vip-hostess-sector-76-78",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Sector 76 & 78 Noida",
    "localitySlug": "sector-76-78",
    "city": "Noida",
    "age": 24,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/model_1.jpg",
      "/images/model_5.jpg",
      "/ecj-mark.svg"
    ],
    "isVerified": true,
    "isVip": false,
    "isOnline": true,
    "rating": 4.85,
    "reviewsCount": 141,
    "services": [
      "5-Star Hotel Outcall",
      "Luxury Dinner",
      "English Fluent",
      "Top Rated"
    ],
    "description": "Hello! Alina here, a stunning 24-year-old international model in Noida. Available for 5-star hotel outcall visits with complete discretion and professionalism. Staying near Silicon City & Sector 76 Metro with fast 20-30 minute doorstep outcall service.",
    "postedAt": "23 mins ago",
    "views": 4546,
    "rates": {
      "perHour": "\u20b96,000",
      "perSession": "\u20b910,000",
      "fullNight": "\u20b925,000"
    }
  },
  {
    "id": "ad-cg-19",
    "title": "Riya - Glamorous VIP Model Available in Sector 128 Noida",
    "slug": "riya-glamorous-vip-model-sector-128",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Sector 128 Noida",
    "localitySlug": "sector-128",
    "city": "Noida",
    "age": 23,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/model_2.jpg",
      "/images/model_6.jpg",
      "/ecj-mark.svg"
    ],
    "isVerified": true,
    "isVip": true,
    "isOnline": true,
    "rating": 4.9,
    "reviewsCount": 158,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hi gentlemen! I am Riya, a sweet, classy, and educated 23-year-old companion. I love pleasant dinner dates, good conversations, and creating romantic memories with sophisticated individuals. 100% genuine photos and verified identity. Staying near Jaypee Wish Town & Kalindi Kunj Road with fast 20-30 minute doorstep outcall service.",
    "postedAt": "24 mins ago",
    "views": 4643,
    "rates": {
      "perHour": "\u20b93,000",
      "perSession": "\u20b95,000",
      "fullNight": "\u20b915,000"
    }
  },
  {
    "id": "ad-cg-20",
    "title": "Ananya - Charming Corporate Hostess Available in Sector 128 Noida",
    "slug": "ananya-charming-corporate-hostess-sector-128",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Sector 128 Noida",
    "localitySlug": "sector-128",
    "city": "Noida",
    "age": 22,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/model_3.jpg",
      "/images/model_7.jpg",
      "/ecj-mark.svg"
    ],
    "isVerified": true,
    "isVip": false,
    "isOnline": true,
    "rating": 4.95,
    "reviewsCount": 175,
    "services": [
      "Hotel Outcall",
      "Corporate Dates",
      "Friendly Chats",
      "Zero Rush Service"
    ],
    "description": "Hello! Ananya here, 22-year-old charming and articulate companion. Very hygiene conscious, punctual, and genuine. Looking to meet respectful executives and gentlemen for memorable private time after corporate hours. Staying near Jaypee Wish Town & Kalindi Kunj Road with fast 20-30 minute doorstep outcall service.",
    "postedAt": "25 mins ago",
    "views": 4740,
    "rates": {
      "perHour": "\u20b93,000",
      "perSession": "\u20b95,000",
      "fullNight": "\u20b915,000"
    }
  },
  {
    "id": "ad-cg-21",
    "title": "Simran - Elite 5-Star Hotel Hostess Available in Sector 128 Noida",
    "slug": "simran-elite-5-star-hotel-hostess-sector-128",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Sector 128 Noida",
    "localitySlug": "sector-128",
    "city": "Noida",
    "age": 24,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/model_4.jpg",
      "/images/model_8.jpg",
      "/ecj-mark.svg"
    ],
    "isVerified": true,
    "isVip": true,
    "isOnline": true,
    "rating": 4.85,
    "reviewsCount": 77,
    "services": [
      "Luxury Hotel Outcall",
      "Full Night Companion",
      "English Fluent",
      "VIP Escort"
    ],
    "description": "Greetings! Simran here, a high-profile 24-year-old luxury companion available for 5-star hotel visits and executive dinner accompaniment. Professional attitude, discreet, and refined manners guaranteed. Staying near Jaypee Wish Town & Kalindi Kunj Road with fast 20-30 minute doorstep outcall service.",
    "postedAt": "26 mins ago",
    "views": 4837,
    "rates": {
      "perHour": "\u20b96,000",
      "perSession": "\u20b910,000",
      "fullNight": "\u20b925,000"
    }
  },
  {
    "id": "ad-cg-22",
    "title": "Tanya - Independent College Girl Available in Sector 142 Noida",
    "slug": "tanya-independent-college-girl-sector-142",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Sector 142 Noida",
    "localitySlug": "sector-142",
    "city": "Noida",
    "age": 21,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/model_5.jpg",
      "/images/model_9.jpg",
      "/ecj-mark.svg"
    ],
    "isVerified": true,
    "isVip": false,
    "isOnline": true,
    "rating": 4.9,
    "reviewsCount": 94,
    "services": [
      "Coffee First",
      "Incall & Outcall",
      "Casual Dating",
      "Weekend Companion"
    ],
    "description": "Hey! Tanya here, a friendly and cheerful 21-year-old independent student. I enjoy light-hearted conversations, movies, and romantic evening companionship with polite and respectful gentlemen. Staying near Advant Navis Business Park with fast 20-30 minute doorstep outcall service.",
    "postedAt": "27 mins ago",
    "views": 4934,
    "rates": {
      "perHour": "\u20b92,500",
      "perSession": "\u20b94,500",
      "fullNight": "\u20b912,000"
    }
  },
  {
    "id": "ad-cg-23",
    "title": "Priya - Sophisticated Luxury Companion Available in Sector 142 Noida",
    "slug": "priya-sophisticated-luxury-companion-sector-142",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Sector 142 Noida",
    "localitySlug": "sector-142",
    "city": "Noida",
    "age": 25,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/model_6.jpg",
      "/images/model_10.jpg",
      "/ecj-mark.svg"
    ],
    "isVerified": true,
    "isVip": true,
    "isOnline": true,
    "rating": 4.95,
    "reviewsCount": 111,
    "services": [
      "Hotel Doorstep Outcall",
      "Event Hostess",
      "Travel Companion",
      "Discreet Romance"
    ],
    "description": "Hello! I am Priya, a 25-year-old elegant independent companion. Known for warm hospitality, captivating smiles, and complete confidentiality. Available 24/7 for hotel outcalls. Staying near Advant Navis Business Park with fast 20-30 minute doorstep outcall service.",
    "postedAt": "28 mins ago",
    "views": 5031,
    "rates": {
      "perHour": "\u20b93,000",
      "perSession": "\u20b95,000",
      "fullNight": "\u20b915,000"
    }
  },
  {
    "id": "ad-cg-24",
    "title": "Natasha - Glamorous Russian Model Available in Sector 142 Noida",
    "slug": "natasha-glamorous-russian-model-sector-142",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Sector 142 Noida",
    "localitySlug": "sector-142",
    "city": "Noida",
    "age": 24,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/model_7.jpg",
      "/images/model_11.jpg",
      "/ecj-mark.svg"
    ],
    "isVerified": true,
    "isVip": false,
    "isOnline": true,
    "rating": 4.85,
    "reviewsCount": 128,
    "services": [
      "International Model",
      "VIP Suite Visits",
      "Discreet Meetings",
      "English Fluent"
    ],
    "description": "Hello gentlemen! Natasha here, 24-year-old glamorous European companion available for luxury stays and exclusive dates. Tall, fair, elegant, and completely discreet. Staying near Advant Navis Business Park with fast 20-30 minute doorstep outcall service.",
    "postedAt": "29 mins ago",
    "views": 5128,
    "rates": {
      "perHour": "\u20b96,000",
      "perSession": "\u20b910,000",
      "fullNight": "\u20b925,000"
    }
  },
  {
    "id": "ad-cg-25",
    "title": "Sneha - Warm Housewife Companion Available in Pari Chowk Greater Noida",
    "slug": "sneha-warm-housewife-companion-pari-chowk",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Pari Chowk Greater Noida",
    "localitySlug": "pari-chowk",
    "city": "Noida",
    "age": 26,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/model_8.jpg",
      "/images/model_12.jpg",
      "/ecj-mark.svg"
    ],
    "isVerified": true,
    "isVip": true,
    "isOnline": true,
    "rating": 4.9,
    "reviewsCount": 145,
    "services": [
      "Private Meetings",
      "Emotional Connection",
      "Zero Rush Service",
      "Hotel Outcall"
    ],
    "description": "Namaste! Sneha here, 26-year-old mature and caring companion. If you seek peaceful companionship, attentive listening, and sincere warmth, connect with me directly on WhatsApp. Staying near Alpha 1 & Ansal Plaza with fast 20-30 minute doorstep outcall service.",
    "postedAt": "30 mins ago",
    "views": 5225,
    "rates": {
      "perHour": "\u20b93,000",
      "perSession": "\u20b95,000",
      "fullNight": "\u20b915,000"
    }
  },
  {
    "id": "ad-cg-26",
    "title": "Elena - VIP Foreign Companion Available in Pari Chowk Greater Noida",
    "slug": "elena-vip-foreign-companion-pari-chowk",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Pari Chowk Greater Noida",
    "localitySlug": "pari-chowk",
    "city": "Noida",
    "age": 23,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/model_9.jpg",
      "/images/model_13.jpg",
      "/ecj-mark.svg"
    ],
    "isVerified": true,
    "isVip": false,
    "isOnline": true,
    "rating": 4.95,
    "reviewsCount": 162,
    "services": [
      "5-Star Outcall",
      "Fine Dining Hostess",
      "Luxury Lifestyle",
      "Discreet Service"
    ],
    "description": "Hi! Elena here, 23-year-old European model visiting Noida. Sophisticated, charming, and looking forward to meeting polite gentlemen for memorable luxury hotel dates. Staying near Alpha 1 & Ansal Plaza with fast 20-30 minute doorstep outcall service.",
    "postedAt": "31 mins ago",
    "views": 5322,
    "rates": {
      "perHour": "\u20b93,000",
      "perSession": "\u20b95,000",
      "fullNight": "\u20b915,000"
    }
  },
  {
    "id": "ad-cg-27",
    "title": "Kavya - Articulate Business Hostess Available in Pari Chowk Greater Noida",
    "slug": "kavya-articulate-business-hostess-pari-chowk",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Pari Chowk Greater Noida",
    "localitySlug": "pari-chowk",
    "city": "Noida",
    "age": 24,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/model_10.jpg",
      "/images/model_14.jpg",
      "/ecj-mark.svg"
    ],
    "isVerified": true,
    "isVip": true,
    "isOnline": true,
    "rating": 4.85,
    "reviewsCount": 179,
    "services": [
      "Dinner Dates",
      "Corporate Travel",
      "VIP Outcall",
      "Fluent Communication"
    ],
    "description": "Hello! Kavya here, a 24-year-old educated and well-spoken corporate companion. Perfect companion for business events, dinner meetings, and relaxing hotel stays. Staying near Alpha 1 & Ansal Plaza with fast 20-30 minute doorstep outcall service.",
    "postedAt": "32 mins ago",
    "views": 5419,
    "rates": {
      "perHour": "\u20b93,000",
      "perSession": "\u20b95,000",
      "fullNight": "\u20b915,000"
    }
  },
  {
    "id": "ad-cg-28",
    "title": "Divya - Glamorous Evening Companion Available in Noida Extension (Gr Noida West)",
    "slug": "divya-glamorous-evening-companion-noida-extension",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Noida Extension (Gr Noida West)",
    "localitySlug": "noida-extension",
    "city": "Noida",
    "age": 25,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/model_11.jpg",
      "/images/model_15.jpg",
      "/ecj-mark.svg"
    ],
    "isVerified": true,
    "isVip": false,
    "isOnline": true,
    "rating": 4.9,
    "reviewsCount": 81,
    "services": [
      "Doorstep Delivery",
      "Discreet Suite Visits",
      "Full Night Stay",
      "Sweet Nature"
    ],
    "description": "Hi! Divya here, a gorgeous 25-year-old model. Passionate about music, fine dining, and making every private moment memorable and romantic. Staying near Gaur City & Char Murti with fast 20-30 minute doorstep outcall service.",
    "postedAt": "33 mins ago",
    "views": 5516,
    "rates": {
      "perHour": "\u20b93,000",
      "perSession": "\u20b95,000",
      "fullNight": "\u20b915,000"
    }
  },
  {
    "id": "ad-cg-29",
    "title": "Shreya - Youthful College Model Available in Noida Extension (Gr Noida West)",
    "slug": "shreya-youthful-college-model-noida-extension",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Noida Extension (Gr Noida West)",
    "localitySlug": "noida-extension",
    "city": "Noida",
    "age": 21,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/model_12.jpg",
      "/images/model_unsplash_1.jpg",
      "/ecj-mark.svg"
    ],
    "isVerified": true,
    "isVip": true,
    "isOnline": true,
    "rating": 4.95,
    "reviewsCount": 98,
    "services": [
      "Weekend Dates",
      "Coffee & Movies",
      "Hotel Outcall",
      "Friendly Vibe"
    ],
    "description": "Hey! Shreya here, a lively 21-year-old companion. Easy-going, fun, and looking for genuine gentlemen to spend quality evenings together. Staying near Gaur City & Char Murti with fast 20-30 minute doorstep outcall service.",
    "postedAt": "34 mins ago",
    "views": 5613,
    "rates": {
      "perHour": "\u20b92,500",
      "perSession": "\u20b94,500",
      "fullNight": "\u20b912,000"
    }
  },
  {
    "id": "ad-cg-30",
    "title": "Aisha - High Profile Air Hostess Escort Available in Noida Extension (Gr Noida West)",
    "slug": "aisha-high-profile-air-hostess-escort-noida-extension",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Noida Extension (Gr Noida West)",
    "localitySlug": "noida-extension",
    "city": "Noida",
    "age": 24,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/model_13.jpg",
      "/images/model_1.jpg",
      "/ecj-mark.svg"
    ],
    "isVerified": true,
    "isVip": false,
    "isOnline": true,
    "rating": 4.85,
    "reviewsCount": 115,
    "services": [
      "Executive Stays",
      "Airport Transfers",
      "5-Star Outcall",
      "Sophisticated"
    ],
    "description": "Greetings! Aisha here, a stylish 24-year-old cabin crew hostess available during transit and layovers in Noida. Well-mannered, elegant, and discreet. Staying near Gaur City & Char Murti with fast 20-30 minute doorstep outcall service.",
    "postedAt": "35 mins ago",
    "views": 5710,
    "rates": {
      "perHour": "\u20b93,000",
      "perSession": "\u20b95,000",
      "fullNight": "\u20b915,000"
    }
  },
  {
    "id": "ad-cg-31",
    "title": "Pooja - Mature Independent Escort Available in Knowledge Park Greater Noida",
    "slug": "pooja-mature-independent-escort-knowledge-park",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Knowledge Park Greater Noida",
    "localitySlug": "knowledge-park",
    "city": "Noida",
    "age": 26,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/model_14.jpg",
      "/images/model_2.jpg",
      "/ecj-mark.svg"
    ],
    "isVerified": true,
    "isVip": true,
    "isOnline": true,
    "rating": 4.9,
    "reviewsCount": 132,
    "services": [
      "Private In-call",
      "Hotel Outcall",
      "Friendly Chat",
      "Relaxing Massage"
    ],
    "description": "Hello! Pooja here, 26-year-old warm-hearted companion. Ideal for stress-free evenings, genuine conversations, and complete relaxation after a long workday. Staying near India Expo Mart & Galgotias with fast 20-30 minute doorstep outcall service.",
    "postedAt": "36 mins ago",
    "views": 5807,
    "rates": {
      "perHour": "\u20b93,000",
      "perSession": "\u20b95,000",
      "fullNight": "\u20b915,000"
    }
  },
  {
    "id": "ad-cg-32",
    "title": "Ishita - Modern Fashion Stylist Companion Available in Knowledge Park Greater Noida",
    "slug": "ishita-modern-fashion-stylist-companion-knowledge-park",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Knowledge Park Greater Noida",
    "localitySlug": "knowledge-park",
    "city": "Noida",
    "age": 23,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/model_15.jpg",
      "/images/model_3.jpg",
      "/ecj-mark.svg"
    ],
    "isVerified": true,
    "isVip": false,
    "isOnline": true,
    "rating": 4.95,
    "reviewsCount": 149,
    "services": [
      "Cocktail Dates",
      "Party Accompaniment",
      "Hotel Outcall",
      "VIP Discreet"
    ],
    "description": "Hi gentlemen! Ishita here, 23-year-old stylish companion who loves fashion, fine wine, and sophisticated company. Guaranteed authentic photos and sincere smiles. Staying near India Expo Mart & Galgotias with fast 20-30 minute doorstep outcall service.",
    "postedAt": "37 mins ago",
    "views": 5904,
    "rates": {
      "perHour": "\u20b93,000",
      "perSession": "\u20b95,000",
      "fullNight": "\u20b915,000"
    }
  },
  {
    "id": "ad-cg-33",
    "title": "Muskan - Sweet College Student Available in Knowledge Park Greater Noida",
    "slug": "muskan-sweet-college-student-knowledge-park",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Knowledge Park Greater Noida",
    "localitySlug": "knowledge-park",
    "city": "Noida",
    "age": 22,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/model_unsplash_1.jpg",
      "/images/model_4.jpg",
      "/ecj-mark.svg"
    ],
    "isVerified": true,
    "isVip": true,
    "isOnline": true,
    "rating": 4.85,
    "reviewsCount": 166,
    "services": [
      "Incall/Outcall",
      "Coffee Dates",
      "Weekend Outings",
      "Affectionate"
    ],
    "description": "Namaste! Muskan here, a gentle and polite 22-year-old college girl. Always punctual, hygiene-conscious, and respectful. Available for 24/7 hotel outcall bookings. Staying near India Expo Mart & Galgotias with fast 20-30 minute doorstep outcall service.",
    "postedAt": "38 mins ago",
    "views": 6001,
    "rates": {
      "perHour": "\u20b92,500",
      "perSession": "\u20b94,500",
      "fullNight": "\u20b912,000"
    }
  },
  {
    "id": "ad-cg-34",
    "title": "Pallavi - Luxury Hotel Outcall Hostess Available in Indirapuram Ghaziabad",
    "slug": "pallavi-luxury-hotel-outcall-hostess-indirapuram",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Indirapuram Ghaziabad",
    "localitySlug": "indirapuram",
    "city": "Noida",
    "age": 25,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/model_1.jpg",
      "/images/model_5.jpg",
      "/ecj-mark.svg"
    ],
    "isVerified": true,
    "isVip": false,
    "isOnline": true,
    "rating": 4.9,
    "reviewsCount": 68,
    "services": [
      "Full Night Companion",
      "Executive Dinner",
      "Discreet Protocol",
      "COD Payment"
    ],
    "description": "Hello! Pallavi here, 25-year-old independent model. Dedicated to providing warm, unhurried, and refined companionship for discerning travelers in Noida. Staying near Shipra Mall & Habitat Centre with fast 20-30 minute doorstep outcall service.",
    "postedAt": "39 mins ago",
    "views": 6098,
    "rates": {
      "perHour": "\u20b93,000",
      "perSession": "\u20b95,000",
      "fullNight": "\u20b915,000"
    }
  },
  {
    "id": "ad-cg-35",
    "title": "Meera - Classy Independent Companion Available in Indirapuram Ghaziabad",
    "slug": "meera-classy-independent-companion-indirapuram",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Indirapuram Ghaziabad",
    "localitySlug": "indirapuram",
    "city": "Noida",
    "age": 27,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/model_2.jpg",
      "/images/model_6.jpg",
      "/ecj-mark.svg"
    ],
    "isVerified": true,
    "isVip": true,
    "isOnline": true,
    "rating": 4.95,
    "reviewsCount": 85,
    "services": [
      "Private Suite Visit",
      "Late Night Dates",
      "Discreet Romance",
      "Friendly Nature"
    ],
    "description": "Hello gentlemen! Meera here, a 27-year-old mature companion offering genuine warmth, great conversation, and memorable private moments. Staying near Shipra Mall & Habitat Centre with fast 20-30 minute doorstep outcall service.",
    "postedAt": "40 mins ago",
    "views": 6195,
    "rates": {
      "perHour": "\u20b93,000",
      "perSession": "\u20b95,000",
      "fullNight": "\u20b915,000"
    }
  },
  {
    "id": "ad-cg-36",
    "title": "Alina - Russian VIP Hostess Available in Indirapuram Ghaziabad",
    "slug": "alina-russian-vip-hostess-indirapuram",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Indirapuram Ghaziabad",
    "localitySlug": "indirapuram",
    "city": "Noida",
    "age": 24,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/model_3.jpg",
      "/images/model_7.jpg",
      "/ecj-mark.svg"
    ],
    "isVerified": true,
    "isVip": false,
    "isOnline": true,
    "rating": 4.85,
    "reviewsCount": 102,
    "services": [
      "5-Star Hotel Outcall",
      "Luxury Dinner",
      "English Fluent",
      "Top Rated"
    ],
    "description": "Hello! Alina here, a stunning 24-year-old international model in Noida. Available for 5-star hotel outcall visits with complete discretion and professionalism. Staying near Shipra Mall & Habitat Centre with fast 20-30 minute doorstep outcall service.",
    "postedAt": "41 mins ago",
    "views": 6292,
    "rates": {
      "perHour": "\u20b96,000",
      "perSession": "\u20b910,000",
      "fullNight": "\u20b925,000"
    }
  },
  {
    "id": "ad-cg-37",
    "title": "Riya - Glamorous VIP Model Available in Vaishali Ghaziabad",
    "slug": "riya-glamorous-vip-model-vaishali",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Vaishali Ghaziabad",
    "localitySlug": "vaishali",
    "city": "Noida",
    "age": 23,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/model_4.jpg",
      "/images/model_8.jpg",
      "/ecj-mark.svg"
    ],
    "isVerified": true,
    "isVip": true,
    "isOnline": true,
    "rating": 4.9,
    "reviewsCount": 119,
    "services": [
      "5-Star Hotel Outcall",
      "Dinner Dates",
      "Private In-call",
      "Discreet Meetings"
    ],
    "description": "Hi gentlemen! I am Riya, a sweet, classy, and educated 23-year-old companion. I love pleasant dinner dates, good conversations, and creating romantic memories with sophisticated individuals. 100% genuine photos and verified identity. Staying near Vaishali Metro & Max Hospital with fast 20-30 minute doorstep outcall service.",
    "postedAt": "42 mins ago",
    "views": 2889,
    "rates": {
      "perHour": "\u20b93,000",
      "perSession": "\u20b95,000",
      "fullNight": "\u20b915,000"
    }
  },
  {
    "id": "ad-cg-38",
    "title": "Ananya - Charming Corporate Hostess Available in Vaishali Ghaziabad",
    "slug": "ananya-charming-corporate-hostess-vaishali",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Vaishali Ghaziabad",
    "localitySlug": "vaishali",
    "city": "Noida",
    "age": 22,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/model_5.jpg",
      "/images/model_9.jpg",
      "/ecj-mark.svg"
    ],
    "isVerified": true,
    "isVip": false,
    "isOnline": true,
    "rating": 4.95,
    "reviewsCount": 136,
    "services": [
      "Hotel Outcall",
      "Corporate Dates",
      "Friendly Chats",
      "Zero Rush Service"
    ],
    "description": "Hello! Ananya here, 22-year-old charming and articulate companion. Very hygiene conscious, punctual, and genuine. Looking to meet respectful executives and gentlemen for memorable private time after corporate hours. Staying near Vaishali Metro & Max Hospital with fast 20-30 minute doorstep outcall service.",
    "postedAt": "43 mins ago",
    "views": 2986,
    "rates": {
      "perHour": "\u20b93,000",
      "perSession": "\u20b95,000",
      "fullNight": "\u20b915,000"
    }
  },
  {
    "id": "ad-cg-39",
    "title": "Simran - Elite 5-Star Hotel Hostess Available in Vaishali Ghaziabad",
    "slug": "simran-elite-5-star-hotel-hostess-vaishali",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Vaishali Ghaziabad",
    "localitySlug": "vaishali",
    "city": "Noida",
    "age": 24,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/model_6.jpg",
      "/images/model_10.jpg",
      "/ecj-mark.svg"
    ],
    "isVerified": true,
    "isVip": true,
    "isOnline": true,
    "rating": 4.85,
    "reviewsCount": 153,
    "services": [
      "Luxury Hotel Outcall",
      "Full Night Companion",
      "English Fluent",
      "VIP Escort"
    ],
    "description": "Greetings! Simran here, a high-profile 24-year-old luxury companion available for 5-star hotel visits and executive dinner accompaniment. Professional attitude, discreet, and refined manners guaranteed. Staying near Vaishali Metro & Max Hospital with fast 20-30 minute doorstep outcall service.",
    "postedAt": "44 mins ago",
    "views": 3083,
    "rates": {
      "perHour": "\u20b96,000",
      "perSession": "\u20b910,000",
      "fullNight": "\u20b925,000"
    }
  },
  {
    "id": "ad-cg-40",
    "title": "Tanya - Independent College Girl Available in Vasundhara Ghaziabad",
    "slug": "tanya-independent-college-girl-vasundhara",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Vasundhara Ghaziabad",
    "localitySlug": "vasundhara",
    "city": "Noida",
    "age": 21,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/model_7.jpg",
      "/images/model_11.jpg",
      "/ecj-mark.svg"
    ],
    "isVerified": true,
    "isVip": false,
    "isOnline": true,
    "rating": 4.9,
    "reviewsCount": 170,
    "services": [
      "Coffee First",
      "Incall & Outcall",
      "Casual Dating",
      "Weekend Companion"
    ],
    "description": "Hey! Tanya here, a friendly and cheerful 21-year-old independent student. I enjoy light-hearted conversations, movies, and romantic evening companionship with polite and respectful gentlemen. Staying near Mewar Institute & Sector 10 with fast 20-30 minute doorstep outcall service.",
    "postedAt": "45 mins ago",
    "views": 3180,
    "rates": {
      "perHour": "\u20b92,500",
      "perSession": "\u20b94,500",
      "fullNight": "\u20b912,000"
    }
  },
  {
    "id": "ad-cg-41",
    "title": "Priya - Sophisticated Luxury Companion Available in Vasundhara Ghaziabad",
    "slug": "priya-sophisticated-luxury-companion-vasundhara",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Vasundhara Ghaziabad",
    "localitySlug": "vasundhara",
    "city": "Noida",
    "age": 25,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/model_8.jpg",
      "/images/model_12.jpg",
      "/ecj-mark.svg"
    ],
    "isVerified": true,
    "isVip": true,
    "isOnline": true,
    "rating": 4.95,
    "reviewsCount": 72,
    "services": [
      "Hotel Doorstep Outcall",
      "Event Hostess",
      "Travel Companion",
      "Discreet Romance"
    ],
    "description": "Hello! I am Priya, a 25-year-old elegant independent companion. Known for warm hospitality, captivating smiles, and complete confidentiality. Available 24/7 for hotel outcalls. Staying near Mewar Institute & Sector 10 with fast 20-30 minute doorstep outcall service.",
    "postedAt": "46 mins ago",
    "views": 3277,
    "rates": {
      "perHour": "\u20b93,000",
      "perSession": "\u20b95,000",
      "fullNight": "\u20b915,000"
    }
  },
  {
    "id": "ad-cg-42",
    "title": "Natasha - Glamorous Russian Model Available in Vasundhara Ghaziabad",
    "slug": "natasha-glamorous-russian-model-vasundhara",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Vasundhara Ghaziabad",
    "localitySlug": "vasundhara",
    "city": "Noida",
    "age": 24,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/model_9.jpg",
      "/images/model_13.jpg",
      "/ecj-mark.svg"
    ],
    "isVerified": true,
    "isVip": false,
    "isOnline": true,
    "rating": 4.85,
    "reviewsCount": 89,
    "services": [
      "International Model",
      "VIP Suite Visits",
      "Discreet Meetings",
      "English Fluent"
    ],
    "description": "Hello gentlemen! Natasha here, 24-year-old glamorous European companion available for luxury stays and exclusive dates. Tall, fair, elegant, and completely discreet. Staying near Mewar Institute & Sector 10 with fast 20-30 minute doorstep outcall service.",
    "postedAt": "47 mins ago",
    "views": 3374,
    "rates": {
      "perHour": "\u20b96,000",
      "perSession": "\u20b910,000",
      "fullNight": "\u20b925,000"
    }
  },
  {
    "id": "ad-cg-43",
    "title": "Sneha - Warm Housewife Companion Available in Crossings Republik",
    "slug": "sneha-warm-housewife-companion-crossings-republik",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Crossings Republik",
    "localitySlug": "crossings-republik",
    "city": "Noida",
    "age": 26,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/model_10.jpg",
      "/images/model_14.jpg",
      "/ecj-mark.svg"
    ],
    "isVerified": true,
    "isVip": true,
    "isOnline": true,
    "rating": 4.9,
    "reviewsCount": 106,
    "services": [
      "Private Meetings",
      "Emotional Connection",
      "Zero Rush Service",
      "Hotel Outcall"
    ],
    "description": "Namaste! Sneha here, 26-year-old mature and caring companion. If you seek peaceful companionship, attentive listening, and sincere warmth, connect with me directly on WhatsApp. Staying near NH-24 & ABES Engineering with fast 20-30 minute doorstep outcall service.",
    "postedAt": "48 mins ago",
    "views": 3471,
    "rates": {
      "perHour": "\u20b93,000",
      "perSession": "\u20b95,000",
      "fullNight": "\u20b915,000"
    }
  },
  {
    "id": "ad-cg-44",
    "title": "Elena - VIP Foreign Companion Available in Crossings Republik",
    "slug": "elena-vip-foreign-companion-crossings-republik",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Crossings Republik",
    "localitySlug": "crossings-republik",
    "city": "Noida",
    "age": 23,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/model_11.jpg",
      "/images/model_15.jpg",
      "/ecj-mark.svg"
    ],
    "isVerified": true,
    "isVip": false,
    "isOnline": true,
    "rating": 4.95,
    "reviewsCount": 123,
    "services": [
      "5-Star Outcall",
      "Fine Dining Hostess",
      "Luxury Lifestyle",
      "Discreet Service"
    ],
    "description": "Hi! Elena here, 23-year-old European model visiting Noida. Sophisticated, charming, and looking forward to meeting polite gentlemen for memorable luxury hotel dates. Staying near NH-24 & ABES Engineering with fast 20-30 minute doorstep outcall service.",
    "postedAt": "49 mins ago",
    "views": 3568,
    "rates": {
      "perHour": "\u20b93,000",
      "perSession": "\u20b95,000",
      "fullNight": "\u20b915,000"
    }
  },
  {
    "id": "ad-cg-45",
    "title": "Kavya - Articulate Business Hostess Available in Crossings Republik",
    "slug": "kavya-articulate-business-hostess-crossings-republik",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Crossings Republik",
    "localitySlug": "crossings-republik",
    "city": "Noida",
    "age": 24,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/model_12.jpg",
      "/images/model_unsplash_1.jpg",
      "/ecj-mark.svg"
    ],
    "isVerified": true,
    "isVip": true,
    "isOnline": true,
    "rating": 4.85,
    "reviewsCount": 140,
    "services": [
      "Dinner Dates",
      "Corporate Travel",
      "VIP Outcall",
      "Fluent Communication"
    ],
    "description": "Hello! Kavya here, a 24-year-old educated and well-spoken corporate companion. Perfect companion for business events, dinner meetings, and relaxing hotel stays. Staying near NH-24 & ABES Engineering with fast 20-30 minute doorstep outcall service.",
    "postedAt": "5 mins ago",
    "views": 3665,
    "rates": {
      "perHour": "\u20b93,000",
      "perSession": "\u20b95,000",
      "fullNight": "\u20b915,000"
    }
  },
  {
    "id": "ad-cg-46",
    "title": "Divya - Glamorous Evening Companion Available in Kaushambi",
    "slug": "divya-glamorous-evening-companion-kaushambi",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Kaushambi",
    "localitySlug": "kaushambi",
    "city": "Noida",
    "age": 25,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/model_13.jpg",
      "/images/model_1.jpg",
      "/ecj-mark.svg"
    ],
    "isVerified": true,
    "isVip": false,
    "isOnline": true,
    "rating": 4.9,
    "reviewsCount": 157,
    "services": [
      "Doorstep Delivery",
      "Discreet Suite Visits",
      "Full Night Stay",
      "Sweet Nature"
    ],
    "description": "Hi! Divya here, a gorgeous 25-year-old model. Passionate about music, fine dining, and making every private moment memorable and romantic. Staying near Radisson Blu & Anand Vihar Border with fast 20-30 minute doorstep outcall service.",
    "postedAt": "6 mins ago",
    "views": 3762,
    "rates": {
      "perHour": "\u20b93,000",
      "perSession": "\u20b95,000",
      "fullNight": "\u20b915,000"
    }
  },
  {
    "id": "ad-cg-47",
    "title": "Shreya - Youthful College Model Available in Kaushambi",
    "slug": "shreya-youthful-college-model-kaushambi",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Kaushambi",
    "localitySlug": "kaushambi",
    "city": "Noida",
    "age": 21,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/model_14.jpg",
      "/images/model_2.jpg",
      "/ecj-mark.svg"
    ],
    "isVerified": true,
    "isVip": true,
    "isOnline": true,
    "rating": 4.95,
    "reviewsCount": 174,
    "services": [
      "Weekend Dates",
      "Coffee & Movies",
      "Hotel Outcall",
      "Friendly Vibe"
    ],
    "description": "Hey! Shreya here, a lively 21-year-old companion. Easy-going, fun, and looking for genuine gentlemen to spend quality evenings together. Staying near Radisson Blu & Anand Vihar Border with fast 20-30 minute doorstep outcall service.",
    "postedAt": "7 mins ago",
    "views": 3859,
    "rates": {
      "perHour": "\u20b92,500",
      "perSession": "\u20b94,500",
      "fullNight": "\u20b912,000"
    }
  },
  {
    "id": "ad-cg-48",
    "title": "Aisha - High Profile Air Hostess Escort Available in Kaushambi",
    "slug": "aisha-high-profile-air-hostess-escort-kaushambi",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Kaushambi",
    "localitySlug": "kaushambi",
    "city": "Noida",
    "age": 24,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/model_15.jpg",
      "/images/model_3.jpg",
      "/ecj-mark.svg"
    ],
    "isVerified": true,
    "isVip": false,
    "isOnline": true,
    "rating": 4.85,
    "reviewsCount": 76,
    "services": [
      "Executive Stays",
      "Airport Transfers",
      "5-Star Outcall",
      "Sophisticated"
    ],
    "description": "Greetings! Aisha here, a stylish 24-year-old cabin crew hostess available during transit and layovers in Noida. Well-mannered, elegant, and discreet. Staying near Radisson Blu & Anand Vihar Border with fast 20-30 minute doorstep outcall service.",
    "postedAt": "8 mins ago",
    "views": 3956,
    "rates": {
      "perHour": "\u20b93,000",
      "perSession": "\u20b95,000",
      "fullNight": "\u20b915,000"
    }
  },
  {
    "id": "ad-cg-49",
    "title": "Pooja - Mature Independent Escort Available in Mayur Vihar",
    "slug": "pooja-mature-independent-escort-mayur-vihar",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Mayur Vihar",
    "localitySlug": "mayur-vihar",
    "city": "Noida",
    "age": 26,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/model_unsplash_1.jpg",
      "/images/model_4.jpg",
      "/ecj-mark.svg"
    ],
    "isVerified": true,
    "isVip": true,
    "isOnline": true,
    "rating": 4.9,
    "reviewsCount": 93,
    "services": [
      "Private In-call",
      "Hotel Outcall",
      "Friendly Chat",
      "Relaxing Massage"
    ],
    "description": "Hello! Pooja here, 26-year-old warm-hearted companion. Ideal for stress-free evenings, genuine conversations, and complete relaxation after a long workday. Staying near Phase 1 & DND Noida Toll Border with fast 20-30 minute doorstep outcall service.",
    "postedAt": "9 mins ago",
    "views": 4053,
    "rates": {
      "perHour": "\u20b93,000",
      "perSession": "\u20b95,000",
      "fullNight": "\u20b915,000"
    }
  },
  {
    "id": "ad-cg-50",
    "title": "Ishita - Modern Fashion Stylist Companion Available in Mayur Vihar",
    "slug": "ishita-modern-fashion-stylist-companion-mayur-vihar",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Mayur Vihar",
    "localitySlug": "mayur-vihar",
    "city": "Noida",
    "age": 23,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/model_1.jpg",
      "/images/model_5.jpg",
      "/ecj-mark.svg"
    ],
    "isVerified": true,
    "isVip": false,
    "isOnline": true,
    "rating": 4.95,
    "reviewsCount": 110,
    "services": [
      "Cocktail Dates",
      "Party Accompaniment",
      "Hotel Outcall",
      "VIP Discreet"
    ],
    "description": "Hi gentlemen! Ishita here, 23-year-old stylish companion who loves fashion, fine wine, and sophisticated company. Guaranteed authentic photos and sincere smiles. Staying near Phase 1 & DND Noida Toll Border with fast 20-30 minute doorstep outcall service.",
    "postedAt": "10 mins ago",
    "views": 4150,
    "rates": {
      "perHour": "\u20b93,000",
      "perSession": "\u20b95,000",
      "fullNight": "\u20b915,000"
    }
  },
  {
    "id": "ad-cg-51",
    "title": "Muskan - Sweet College Student Available in Mayur Vihar",
    "slug": "muskan-sweet-college-student-mayur-vihar",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Mayur Vihar",
    "localitySlug": "mayur-vihar",
    "city": "Noida",
    "age": 22,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/model_2.jpg",
      "/images/model_6.jpg",
      "/ecj-mark.svg"
    ],
    "isVerified": true,
    "isVip": true,
    "isOnline": true,
    "rating": 4.85,
    "reviewsCount": 127,
    "services": [
      "Incall/Outcall",
      "Coffee Dates",
      "Weekend Outings",
      "Affectionate"
    ],
    "description": "Namaste! Muskan here, a gentle and polite 22-year-old college girl. Always punctual, hygiene-conscious, and respectful. Available for 24/7 hotel outcall bookings. Staying near Phase 1 & DND Noida Toll Border with fast 20-30 minute doorstep outcall service.",
    "postedAt": "11 mins ago",
    "views": 4247,
    "rates": {
      "perHour": "\u20b92,500",
      "perSession": "\u20b94,500",
      "fullNight": "\u20b912,000"
    }
  },
  {
    "id": "ad-cg-52",
    "title": "Pallavi - Luxury Hotel Outcall Hostess Available in Botanical Garden (Sector 37)",
    "slug": "pallavi-luxury-hotel-outcall-hostess-botanical-garden",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Botanical Garden (Sector 37)",
    "localitySlug": "botanical-garden",
    "city": "Noida",
    "age": 25,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/model_3.jpg",
      "/images/model_7.jpg",
      "/ecj-mark.svg"
    ],
    "isVerified": true,
    "isVip": false,
    "isOnline": true,
    "rating": 4.9,
    "reviewsCount": 144,
    "services": [
      "Full Night Companion",
      "Executive Dinner",
      "Discreet Protocol",
      "COD Payment"
    ],
    "description": "Hello! Pallavi here, 25-year-old independent model. Dedicated to providing warm, unhurried, and refined companionship for discerning travelers in Noida. Staying near Interchange Metro & Amity University with fast 20-30 minute doorstep outcall service.",
    "postedAt": "12 mins ago",
    "views": 4344,
    "rates": {
      "perHour": "\u20b93,000",
      "perSession": "\u20b95,000",
      "fullNight": "\u20b915,000"
    }
  },
  {
    "id": "ad-cg-53",
    "title": "Meera - Classy Independent Companion Available in Botanical Garden (Sector 37)",
    "slug": "meera-classy-independent-companion-botanical-garden",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Botanical Garden (Sector 37)",
    "localitySlug": "botanical-garden",
    "city": "Noida",
    "age": 27,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/model_4.jpg",
      "/images/model_8.jpg",
      "/ecj-mark.svg"
    ],
    "isVerified": true,
    "isVip": true,
    "isOnline": true,
    "rating": 4.95,
    "reviewsCount": 161,
    "services": [
      "Private Suite Visit",
      "Late Night Dates",
      "Discreet Romance",
      "Friendly Nature"
    ],
    "description": "Hello gentlemen! Meera here, a 27-year-old mature companion offering genuine warmth, great conversation, and memorable private moments. Staying near Interchange Metro & Amity University with fast 20-30 minute doorstep outcall service.",
    "postedAt": "13 mins ago",
    "views": 4441,
    "rates": {
      "perHour": "\u20b93,000",
      "perSession": "\u20b95,000",
      "fullNight": "\u20b915,000"
    }
  },
  {
    "id": "ad-cg-54",
    "title": "Alina - Russian VIP Hostess Available in Botanical Garden (Sector 37)",
    "slug": "alina-russian-vip-hostess-botanical-garden",
    "categoryId": "call-girls",
    "categorySlug": "call-girls",
    "locality": "Botanical Garden (Sector 37)",
    "localitySlug": "botanical-garden",
    "city": "Noida",
    "age": 24,
    "phone": "8218125815",
    "whatsapp": "918218125815",
    "images": [
      "/images/model_5.jpg",
      "/images/model_9.jpg",
      "/ecj-mark.svg"
    ],
    "isVerified": true,
    "isVip": false,
    "isOnline": true,
    "rating": 4.85,
    "reviewsCount": 178,
    "services": [
      "5-Star Hotel Outcall",
      "Luxury Dinner",
      "English Fluent",
      "Top Rated"
    ],
    "description": "Hello! Alina here, a stunning 24-year-old international model in Noida. Available for 5-star hotel outcall visits with complete discretion and professionalism. Staying near Interchange Metro & Amity University with fast 20-30 minute doorstep outcall service.",
    "postedAt": "14 mins ago",
    "views": 4538,
    "rates": {
      "perHour": "\u20b96,000",
      "perSession": "\u20b910,000",
      "fullNight": "\u20b925,000"
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
