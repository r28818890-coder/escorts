/**
 * pureblissBrain.ts
 * ═══════════════════════════════════════════════════════════════
 * THE Escorts Hub Noida AI MIND — Complete Knowledge Base
 * ═══════════════════════════════════════════════════════════════
 *
 * This is the central intelligence that powers all AI features:
 * — Daily blog generation (Gemini gets this as context)
 * — Chatbot responses
 * — SEO content decisions
 * — Keyword targeting strategy
 *
 * Think of this as the "40-year experienced spa owner's brain"
 * encoded into a structured knowledge system.
 */

// ── SECTION 1: BUSINESS IDENTITY ────────────────────────────────────────────

export const NOIDA_SPA_IDENTITY = {
  name: 'Escorts Hub Noida',
  shortName: 'Escorts Hub Noida',
  tagline: "Noida's #1 Verified Call Girl & Escorts Service Directory",
  established: '2020',
  address: 'Sector 18, Noida, Gautam Buddha Nagar, Uttar Pradesh 201301',
  phone1: '+91 8218125815',
  phone2: '+91 8218125815',
  whatsapp: '918218125815',
  hours: 'Open 24 Hours, 7 Days a Week',
  google_rating: '4.95 Stars',
  total_reviews: '1,200+',
  website: 'https://wenoidaescorts.com',
  landmark: 'Opposite DLF Mall of India & Sector 18 Metro Gate 2',
  unique_selling_points: [
    'Open 24 hours — 15 to 25 min hotel doorstep outcall arrival',
    '100% verified real photos & biometric phone verification',
    'Zero advance payment required — direct payment upon meeting',
    'Complete privacy and strict customer confidentiality',
    'Elite Indian, Russian, European, and foreign models',
    'Transparent pricing with full right of refusal at the door',
  ],
};

export const JAIPUR_SPA_IDENTITY = NOIDA_SPA_IDENTITY;

// ── SECTION 2: DISTANCE MATRIX (For "Near Me" SEO) ──────────────────────────

export const LOCATION_DISTANCES = [
  { area: 'Sector 18 Metro Gate 2', distance: '0.2 km', time: '1 minute walk' },
  { area: 'DLF Mall of India', distance: '0.3 km', time: '2 minutes walk' },
  { area: 'Sector 62 IT Hub', distance: '8.5 km', time: '12 minutes by car' },
  { area: 'Botanical Garden Interchange', distance: '1.8 km', time: '4 minutes by metro' },
  { area: 'Film City Sector 16A', distance: '1.5 km', time: '3 minutes by car' },
  { area: 'Sector 50 Central Noida', distance: '4.5 km', time: '8 minutes by car' },
  { area: 'Noida-Greater Noida Expressway', distance: '3.2 km', time: '6 minutes by car' },
  { area: 'Sector 137 Metro Station', distance: '9.8 km', time: '14 minutes by car' },
  { area: 'Pari Chowk Greater Noida', distance: '22 km', time: '25 minutes by expressway' },
  { area: 'Indirapuram Shipra Mall', distance: '11 km', time: '18 minutes by car' },
];

// ── SECTION 3: COMPLETE SERVICE MENU ────────────────────────────────────────

export const SERVICES = [
  {
    name: 'VIP Hotel Outcall Service',
    slug: 'vip-hotel-outcall',
    price_60: 2500,
    price_90: 3500,
    description: 'Fast 20-30 minute doorstep outcall visits to 4-star and 5-star luxury hotels across Sector 18, Sector 62, and Noida Expressway. 100% verified genuine companions.',
    best_for: ['hotel guests', 'business travelers', 'private relaxation', 'discreet visits', 'luxury stays'],
    technique: 'Direct room arrival with full privacy and professional etiquette',
    pressure: 'Premium VIP',
    keywords: ['hotel outcall escorts noida', 'sector 18 hotel escorts', 'noida 24/7 outcall companions'],
  },
  {
    name: 'Private In-Call Companion',
    slug: 'private-incall',
    price_60: 2500,
    price_90: 3500,
    description: 'Discreet and secure private residential apartment in-calls with warm hospitality, hygiene, and complete anonymity.',
    best_for: ['privacy', 'safe encounters', 'relaxed atmosphere', 'in-call visits'],
    technique: 'Private sanitized suites in prime residential hubs',
    pressure: 'Elite',
    keywords: ['incall escorts noida', 'private apartment companions noida'],
  },
  {
    name: 'Russian & Foreign Escorts',
    slug: 'russian-escorts',
    price_60: 7000,
    price_90: 10000,
    description: 'High-class Russian, European, and international companion models available for upscale hotel meetings and exclusive dinner dates.',
    best_for: ['international models', 'vip events', '5-star suites', 'executive dates'],
    technique: 'International elegance and glamorous accompaniment',
    pressure: 'Ultra Luxury',
    keywords: ['russian escorts noida', 'foreign companion models noida', 'vip russian call girls noida'],
  },
  {
    name: 'Dinner & Social Dates',
    slug: 'dinner-dates',
    price_60: 4000,
    price_90: 6000,
    description: 'Charming, articulate escorts to accompany clients to fine dining, private parties, business dinners, and social events across Delhi NCR.',
    best_for: ['business dinners', 'corporate events', 'fine dining', 'social gatherings'],
    technique: 'Sophisticated social etiquette and engaging conversation',
    pressure: 'Executive',
    keywords: ['dinner date escorts noida', 'corporate companions noida'],
  },
  {
    name: 'Celebrity & Air Hostess Models',
    slug: 'celebrity-models',
    price_60: 5000,
    price_90: 7500,
    description: 'Top-tier verified fashion models, college girls, and air hostess companions offering elite companionship.',
    best_for: ['glamour', 'high profile clients', 'luxury dates'],
    technique: 'Celebrity-grade glamour and discreet accompaniment',
    pressure: 'Exclusive',
    keywords: ['air hostess escorts noida', 'celebrity models noida'],
  },
  {
    name: 'Full Night Luxury Accompaniment',
    slug: 'full-night-stay',
    price_60: 12000,
    price_90: 16000,
    description: 'Unhurried all-night companion booking for 5-star hotels and private suites with full confidentiality.',
    best_for: ['overnight stays', 'weekend luxury', 'unhurried companionship'],
    technique: 'Overnight luxury stay with dedicated companion',
    pressure: 'Premier',
    keywords: ['full night escorts noida', 'overnight hotel companion noida'],
  },
];

// ── SECTION 4: TRENDING KEYWORDS — Noida & NCR High Intent ──────────────────

export const TRENDING_KEYWORDS = {
  // HIGH VOLUME — "Near Me" Intent
  near_me: [
    'call girl noida',
    'escorts service noida',
    'call girls near sector 18 noida',
    'escorts near sector 62 noida',
    'call girls near noida expressway',
    'hotel outcall escorts noida',
    'call girls near sector 50 noida',
    'escorts near pari chowk greater noida',
    'independent call girl noida',
    'russian escorts noida',
    '24 hour call girl noida',
    'open now escorts noida',
  ],

  // SERVICE-SPECIFIC — High Intent Buyers
  service_specific: [
    'hotel outcall escorts noida',
    '5 star hotel call girl noida',
    'russian escorts service noida',
    'dinner date companion noida',
    'independent escorts noida',
    'celebrity models noida',
    'air hostess call girls noida',
    'full night escorts noida',
    'private incall escorts noida',
    'vip escorts service noida',
    'cash on delivery call girl noida',
    'real photo verified escorts noida',
  ],

  // LOCAL AREA — Hyperlocal Targeting
  local_area: [
    'call girl sector 18 noida',
    'escorts sector 62 noida',
    'call girl sector 50 noida',
    'escorts sector 137 expressway',
    'call girl sector 142 advant',
    'escorts sector 128 jaypee',
    'call girl sector 76 noida',
    'escorts botanical garden noida',
    'call girl film city sector 16',
    'escorts pari chowk greater noida',
    'call girl noida extension',
    'escorts indirapuram ghaziabad',
  ],

  // TRUST & SAFETY
  trust_based: [
    'safe escorts noida',
    'verified call girl noida',
    'genuine escorts noida',
    'zero advance escorts noida',
    'cash on delivery call girls noida',
    'real photos call girl noida',
    'discreet escorts service noida',
  ],
};

// ── SECTION 5: BLOG WRITING PATTERN ─────────────────────────────────────────
// This is the EXACT structure Gemini must follow for every blog.
// Pattern learned from the best-performing local spa content worldwide.

export const BLOG_WRITING_PATTERN = `
BLOG WRITING PATTERN FOR Escorts Hub Noida:
════════════════════════════════════════

GOLDEN RULE: Every blog must feel like a real person sharing a real experience.
Never sound like marketing copy. Always sound like a friend giving genuine advice.

STRUCTURE (Follow in exact order):
────────────────────────────────────

1. HOOK OPENING (First paragraph — most important)
   - Start with a relatable problem, situation, or emotion
   - Use "I" voice — personal narrative
   - Create immediate connection with the reader
   - Examples of good hooks:
     * "My neck had been stiff for three weeks..."
     * "I typed 'spa near me noida' at 11 PM and..."
     * "Raat ke 2 baje mujhe suddenly realize hua..."
     * "My doctor said something that surprised me..."
   - BAD hook: "Escorts Hub Noida is the best spa in Noida..."

2. PROBLEM DEEPENING (1 paragraph)
   - Expand on the problem or situation
   - Make the reader nod and say "yes, that's me"
   - Mention the location context naturally (Noida, desk job, travel, etc.)

3. THE DISCOVERY (1 paragraph)
   - How did you find Escorts Hub Noida? (Google search, friend tip, saw it near railway station)
   - First impression — walking in, ambience, staff greeting
   - Be specific and sensory — what did you see, smell, feel?

4. THE EXPERIENCE (2-3 paragraphs — the meat of the article)
   - Use H3 subheadings for each key point
   - Describe the therapy in detail — what happened, what you felt
   - Include factual/educational content about the therapy (science, technique)
   - Mention the therapist's approach and professionalism
   - Include a specific moment that made the biggest impression

5. THE RESULT (1 paragraph)
   - What changed after the session?
   - Be specific — "I slept for 9 hours straight" not "I felt better"
   - Include physical AND emotional results

6. PRACTICAL INFORMATION (woven naturally, not as a list)
   - Price mentioned casually in context
   - Hours mentioned as a benefit ("they are open at 2AM which is why I could...")
   - Location as a benefit ("3 minutes from the station meant...")

7. CALL TO ACTION (Final paragraph — soft, not pushy)
   - Recommendation in first person: "If you are in Noida and..."
   - Include phone number once: +91 8218125815
   - Open 24 hours
   - Location: Sector 18

TECHNICAL SEO RULES:
──────────────────────
- Target keyword used 2-3 times naturally (not stuffed)
- Location mentioned: Sector 18, Noida (at least 3 times total)
- Word count: 600-800 words for standard, 1000-1200 for long-form
- Subheadings: 3-4 H3 tags per article
- No bullet points in content — flowing paragraphs only
- No corporate language — no "state-of-the-art", "world-class", "premier"
- Write at 8th grade reading level — simple, clear sentences
- Use contractions: "I'd", "we're", "it's" — sounds more human

TONE GUIDE:
───────────
 GOOD: "I have been back four times since that first visit"
 BAD:  "Escorts Hub Noida provides exceptional therapeutic services"

 GOOD: "The therapist found a knot in my shoulder I didn't know existed"
 BAD:  "Our certified therapists utilize advanced techniques"

 GOOD: "For ₹1,099 and 60 minutes — genuinely one of the best decisions I made this month"
 BAD:  "Competitive pricing at ₹1,099 per session"
`;

// ── SECTION 6: 4 LONG PATTERN EXAMPLE BLOGS ─────────────────────────────────
// These are the reference articles AI studies before writing new content.
// Each demonstrates the pattern above in a different context.

export const PATTERN_EXAMPLE_BLOGS = [

  // EXAMPLE 1: "Near Me" Intent — 5-Star Hotel Outcall in Sector 18
  {
    targetKeyword: 'hotel outcall escorts sector 18 noida',
    wordCount: 820,
    title: 'Staying at Sector 18 Noida — Why I Choose Escorts Hub Noida for Discreet Hotel Outcall Service',
    content: `
<p>As someone who spends 15 to 20 nights a month traveling across Delhi NCR for corporate consultations, hotel rooms can become dreadfully monotonous. After a ten-hour day of client reviews and board presentations in Noida, going back to an empty suite is draining. Last month, while staying near DLF Mall of India in Sector 18, I decided to seek professional companionship.</p>

<p>I have encountered plenty of unreliable classifieds in the past — fake galleries, demanding advance UPI payments, or sending someone who looked nothing like their profile. Finding Escorts Hub Noida completely changed my standard for adult companionship in Gautam Buddha Nagar.</p>

<h3>The WhatsApp Booking Process — Zero Advance Required</h3>

<p>I reached out directly via WhatsApp to their dispatch desk. What immediately established confidence was their transparency: zero advance payment. They sent a catalog of currently available companions stationed within a 3-kilometer radius of Sector 18. Each profile contained verified high-resolution images, exact age, height, and transparent hourly rates.</p>

<p>I selected an attractive, articulate corporate model and provided my hotel name. The coordinator provided a realistic 25-minute ETA and sent regular transit milestones.</p>

<h3>Punctual Doorstep Arrival</h3>

<p>At precisely 22 minutes, my doorbell rang. When I opened the door, the relief was immediate — she looked even more stunning in person than her photographs. Dressed elegantly in smart-casual attire, she carried herself with effortless charm and poise. We settled the session payment directly in cash, completely eliminating any financial awkwardness or digital footprint.</p>

<p>Over the next two hours, the companionship was seamless, warm, and completely unhurried. Whether enjoying conversation over a glass of wine or sharing intimate private moments, she was engaging, attentive, and extraordinarily affectionate.</p>

<h3>Discretion and Peace of Mind</h3>

<p>In high-profile corporate roles, privacy is non-negotiable. Escorts Hub Noida understands this thoroughly. No personal credentials were demanded, no registration forms, and zero unsolicited follow-up messages. If you are staying at any luxury hotel in Sector 18 Noida and value verified authenticity and absolute discretion, call +91 8218125815.</p>
    `
  },

  // EXAMPLE 2: Corporate & VIP Dinner Accompaniment
  {
    targetKeyword: 'russian escorts noida corporate dinner',
    wordCount: 880,
    title: 'Hosting a Corporate Dinner in Sector 62 IT Hub — Booking a Sophisticated Russian Companion',
    content: `
<p>Entertaining executive delegates and business partners requires more than just booking a table at a fine dining restaurant. It requires social finesse, elegance, and engaging presence. When our regional tech summit concluded in Sector 62 Noida, I wanted an articulate, glamorous companion to accompany me to dinner at Gardens Galleria.</p>

<p>I contacted Escorts Hub Noida regarding their VIP international and Russian companion roster. The coordination team understood the exact social etiquette required for high-end dining and corporate accompaniment.</p>

<h3>Impeccable Presentation and Etiquette</h3>

<p>My companion arrived on time at our designated meeting point. She was tall, poised, spoke fluent English, and had an instinctive understanding of executive social dynamics. During dinner, she contributed effortlessly to discussions, demonstrating cultural awareness and charm that made the entire evening an absolute pleasure.</p>

<p>After dinner, we retreated to the hotel lounge for private drinks. Her warm warmth, gentle attentiveness, and magnetic energy turned what would have been a routine business evening into an unforgettable luxury experience.</p>

<h3>Transparent and Fair Rates</h3>

<p>Elite international companionship in Delhi NCR often comes with opaque pricing. Escorts Hub Noida keeps everything crystal clear: ₹7,000 for 1-hour hotel outcalls and ₹10,000 for relaxed 90-minute or extended evening bookings. No hidden transportation surcharges, no unexpected demands.</p>

<p>For executive travelers and discerning gentlemen seeking world-class international models in Sector 62 and Noida Expressway, reach out directly at +91 8218125815.</p>
    `
  },

  // EXAMPLE 3: Late Night 24-Hour Outcall on Noida Expressway
  {
    targetKeyword: '24 hour call girl noida expressway',
    wordCount: 810,
    title: 'Late Night Arrival on Noida Expressway: A Flawless 20-Minute Outcall Experience with Zero Advance',
    content: `
<p>My flight into Delhi was delayed by three hours, meaning by the time my cab pulled up to my serviced apartment near Sector 137 on Noida-Greater Noida Expressway, it was past 1:30 AM. Exhausted, jet-lagged, and restless, I needed someone warm and comforting to unwind with.</p>

<p>Most local services shut down or stop answering phones after midnight. Escorts Hub Noida operates genuinely 24 hours a day, 7 days a week. When I called at 1:45 AM, the coordinator answered on the second ring with total professionalism.</p>

<h3>Swift Expressway Transit</h3>

<p>Because their roster maintains active verified companions stationed near major expressway nodes (Sector 137, Sector 142 Advant, and Sector 128), I did not have to wait for someone traveling from central Delhi. She reached my building within 20 minutes flat.</p>

<p>She arrived freshly groomed, warm, and radiating positive energy. From the moment she stepped inside, all the residual travel stress completely evaporated. We spent the night in unhurried comfort, enjoying quiet conversation and tender, passionate intimacy.</p>

<p>Escorts Hub Noida on Noida Expressway provides true 24/7 reliability. When you need genuine companionship at 2 AM with cash on delivery, WhatsApp or call +91 8218125815.</p>
    `
  },

  // EXAMPLE 4: Greater Noida & Pari Chowk
  {
    targetKeyword: 'call girl pari chowk greater noida',
    wordCount: 840,
    title: 'Attending the India Expo Mart at Pari Chowk: Safe, Cash-on-Delivery Companionship in Greater Noida',
    content: `
<p>Exhibiting at the India Expo Centre & Mart in Greater Noida is an exhilarating yet physically draining experience. After standing on exhibition floors for three days straight, meeting hundreds of vendors and buyers, evening relaxation becomes essential.</p>

<p>Greater Noida can sometimes feel slightly isolated compared to central Noida or South Delhi. Finding trusted, safe companion services that deliver prompt doorstep outcalls to hotels near Pari Chowk and Knowledge Park used to be challenging.</p>

<h3>Dedicated Greater Noida Outcall Roster</h3>

<p>Escorts Hub Noida maintains a dedicated fleet and companion network specifically covering Pari Chowk, Alpha 1, Jaypee Greens, and the Expressway corridor. I booked a stunning college-age companion for an unhurried evening in my hotel suite.</p>

<p>She arrived in 25 minutes, verified her profile on arrival, and ensured a comfortable, relaxed, and deeply satisfying session. The zero advance payment policy guarantees complete peace of mind — you never risk a single rupee until your companion is safely inside your room.</p>

<p>If you are visiting Greater Noida for trade shows, events, or leisurely stays, save their verified contact: +91 8218125815. Open 24/7 with direct cash payment upon arrival.</p>
    `
  },
];

// ── SECTION 7: GEMINI MASTER SYSTEM PROMPT ──────────────────────────────────
// This is injected into every Gemini API call as context.
// It gives Gemini the "brain" of Escorts Hub Noida before it writes anything.

export const buildMasterGeminiPrompt = (topic: string, keyword: string): string => {
  const servicesContext = SERVICES.map(s =>
    `${s.name} (₹${s.price_60}/60min, ₹${s.price_90}/90min) — Best for: ${s.best_for.slice(0, 3).join(', ')}`
  ).join('\n');

  const locationContext = LOCATION_DISTANCES.slice(0, 6).map(l =>
    `${l.area}: ${l.distance} (${l.time})`
  ).join('\n');

  const exampleBlog = PATTERN_EXAMPLE_BLOGS[Math.floor(Math.random() * PATTERN_EXAMPLE_BLOGS.length)];

  return `You are a real executive client of Escorts Hub Noida in Noida. You write honest, personal blog posts about your experiences there for a luxury lifestyle and companionship guide. You are NOT an aggressive marketer. You are an executive client sharing genuine experiences.

═══════════════════════════════════════
Escorts Hub Noida — COMPLETE KNOWLEDGE BASE
═══════════════════════════════════════

BUSINESS:
${NOIDA_SPA_IDENTITY.name}
Address: ${NOIDA_SPA_IDENTITY.address}
Phone: ${NOIDA_SPA_IDENTITY.phone1}
Hours: ${NOIDA_SPA_IDENTITY.hours}
Rating: ${NOIDA_SPA_IDENTITY.google_rating} (${NOIDA_SPA_IDENTITY.total_reviews} reviews)

UNIQUE ADVANTAGES:
${NOIDA_SPA_IDENTITY.unique_selling_points.map(u => '• ' + u).join('\n')}

SERVICES & PRICES:
${servicesContext}

DISTANCES FROM SECTOR 18 HUB:
${locationContext}

═══════════════════════════════════════
EXACT WRITING PATTERN TO FOLLOW:
═══════════════════════════════════════
${BLOG_WRITING_PATTERN}

═══════════════════════════════════════
REFERENCE EXAMPLE (Study this pattern):
═══════════════════════════════════════
Title: ${exampleBlog.title}
Target Keyword: ${exampleBlog.targetKeyword}

${exampleBlog.content.trim().substring(0, 1200)}...

[End of example — now write your own using this same structure]

═══════════════════════════════════════
YOUR TASK:
═══════════════════════════════════════
Write a new blog post about: "${topic}"
Primary keyword to include naturally 2-3 times: "${keyword}"

Requirements:
- 650-850 words
- First person narrative ("I", "we", "my")
- 3-4 H3 subheadings
- Flowing paragraphs (no bullet points)
- End with phone number +91 8218125815
- Mention Sector 18 and Noida naturally throughout
- Sound like a real person, not a business

Return ONLY the HTML content (p and h3 tags). No title, no markdown.`;
};

// ── SECTION 8: KEYWORD SELECTION INTELLIGENCE ────────────────────────────────
// Picks the best keyword for any given day based on variety and coverage

export const selectKeywordForDay = (dayIndex: number): { topic: string; keyword: string } => {
  const allKeywords = [
    ...TRENDING_KEYWORDS.near_me.map(k => ({ topic: `verified guide to ${k}`, keyword: k })),
    ...TRENDING_KEYWORDS.service_specific.map(k => ({ topic: `how to book ${k}`, keyword: k })),
    ...TRENDING_KEYWORDS.local_area.map(k => ({ topic: `best options for ${k}`, keyword: k })),
    ...TRENDING_KEYWORDS.trust_based.map(k => ({ topic: `safety protocols for ${k}`, keyword: k })),
  ];

  return allKeywords[dayIndex % allKeywords.length];
};
