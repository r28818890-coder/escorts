/**
 * pureblissBrain.ts
 * ═══════════════════════════════════════════════════════════════
 * THE Jaipur Spa AI MIND — Complete Knowledge Base
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

export const JAIPUR_SPA_IDENTITY = {
  name: 'Jaipur Spa',
  shortName: 'Jaipur Spa',
  tagline: "Jaipur's Premier Luxury Spa",
  established: '2019',
  address: 'Khandela House, Sansar Chandra Road, Behind Amber Tower, Pink City, Jaipur – 302001',
  phone1: '+91 73576 78356',
  phone2: '+91 73576 78349',
  whatsapp: '919521413060',
  hours: 'Open 24 Hours, 7 Days a Week including all holidays',
  google_rating: '4.9 Stars',
  total_reviews: '500+',
  website: 'https://escortshubjaipur.com',
  landmark: 'Behind Amber Tower, Sansar Chandra Road, Pink City',
  unique_selling_points: [
    'Open 24 hours — including midnight, 2AM, and early morning',
    'Internationally certified male and female therapists',
    'Private soundproof suites — 100% privacy guaranteed',
    'Hospital-grade sanitization between every session',
    'No appointment needed — walk-ins always welcome',
    'Fresh single-use linens and disposable spa wear every session',
    'Transparent pricing — no hidden GST or surprise charges',
    'All payment modes: Cash, UPI, GPay, PhonePe, Credit/Debit cards',
    'Free parking directly outside the spa building',
  ],
};

// ── SECTION 2: DISTANCE MATRIX (For "Near Me" SEO) ──────────────────────────

export const LOCATION_DISTANCES = [
  { area: 'Jaipur Railway Station', distance: '1.2 km', time: '3 minutes by auto' },
  { area: 'Sindhi Camp Bus Stand', distance: '0.3 km', time: '1 minute walk' },
  { area: 'MI Road', distance: '2.1 km', time: '5 minutes by car' },
  { area: 'Bani Park', distance: '3.4 km', time: '8 minutes by car' },
  { area: 'Civil Lines', distance: '3.8 km', time: '10 minutes by car' },
  { area: 'Collectorate Circle', distance: '2.8 km', time: '7 minutes by car' },
  { area: 'Polo Victory Cinema', distance: '0.05 km', time: 'Right opposite' },
  { area: 'Chandpole Gate', distance: '3.2 km', time: '8 minutes by car' },
  { area: 'Ajmer Road', distance: '4.1 km', time: '10 minutes by car' },
  { area: 'Jaipur Airport (Sanganer)', distance: '18 km', time: '25 minutes by car' },
  { area: 'Pink City / Walled City', distance: '2.5 km', time: '7 minutes by car' },
  { area: 'Gopal Bari', distance: '0.4 km', time: '2 minutes walk' },
  { area: 'Nehru Bazaar', distance: '1.2 km', time: '4 minutes by auto' },
  { area: 'Sanganeri Gate', distance: '1.8 km', time: '5 minutes by auto' },
];

// ── SECTION 3: COMPLETE SERVICE MENU ────────────────────────────────────────

export const SERVICES = [
  {
    name: 'Swedish Relaxation Massage',
    slug: 'swedish-massage',
    price_60: 999,
    price_90: 1299,
    description: 'Gentle, oil-based full body massage using long effleurage strokes. Best for first-timers, general relaxation, stress relief, and improving blood circulation.',
    best_for: ['first timers', 'stress relief', 'sleep issues', 'mild tension', 'general wellness'],
    technique: 'Long gliding strokes, kneading, circular movements with warm oil',
    pressure: 'Light to medium',
    keywords: ['swedish massage jaipur', 'relaxation massage jaipur', 'gentle massage sindhi camp'],
  },
  {
    name: 'Traditional Thai Massage',
    slug: 'thai-massage',
    price_60: 1099,
    price_90: 1399,
    description: 'Dry massage performed on mat. Combines ancient Sen-line acupressure with passive yoga-like stretching. Performed fully clothed.',
    best_for: ['stiffness', 'flexibility', 'energy renewal', 'desk workers', 'joint mobility', 'cervical pain'],
    technique: 'Sen-line acupressure, passive stretching, palm and thumb pressure',
    pressure: 'Medium to firm',
    keywords: ['thai massage jaipur', 'thai massage sindhi camp', 'traditional thai massage jaipur'],
  },
  {
    name: 'Deep Tissue Massage',
    slug: 'deep-tissue',
    price_60: 1199,
    price_90: 1499,
    description: 'Firm pressure targeting deeper muscle layers and connective tissue. Clinical approach for chronic pain, muscle knots, and injury recovery.',
    best_for: ['chronic back pain', 'muscle knots', 'sports recovery', 'sciatica', 'shoulder pain', 'neck pain'],
    technique: 'Slow deliberate strokes, deep finger pressure, trigger point release',
    pressure: 'Firm to deep',
    keywords: ['deep tissue massage jaipur', 'back pain massage jaipur', 'muscle pain relief jaipur'],
  },
  {
    name: 'Balinese Massage',
    slug: 'balinese-massage',
    price_60: 1199,
    price_90: 1499,
    description: 'Combines deep tissue, acupressure, reflexology, and aromatherapy in one session. Wave-like rhythm with rolling palm strokes and warm aromatic oil.',
    best_for: ['travel fatigue', 'leg heaviness', 'whole body tension', 'systemic tiredness', 'tourists'],
    technique: 'Rolling palm strokes, acupressure, reflexology, aromatherapy oil blend',
    pressure: 'Medium to firm, wave-like',
    keywords: ['balinese massage jaipur', 'bali spa jaipur', 'exotic massage jaipur'],
  },
  {
    name: 'Aromatherapy Massage',
    slug: 'aromatherapy',
    price_60: 1299,
    price_90: 1599,
    description: 'Essential oil-enhanced therapeutic massage. Oils chosen based on individual needs — lavender for sleep, bergamot for anxiety, frankincense for deep calm.',
    best_for: ['anxiety', 'insomnia', 'emotional exhaustion', 'burnout', 'stress', 'mood improvement'],
    technique: 'Swedish-style strokes with organic therapeutic essential oil blends',
    pressure: 'Light to medium',
    keywords: ['aromatherapy massage jaipur', 'essential oil massage jaipur', 'stress massage sindhi camp'],
  },
  {
    name: 'Couple Massage',
    slug: 'couple-massage',
    price_60: 2499,
    price_90: 2999,
    description: 'Side-by-side massage for two in private soundproof couple suite. Warm ambient lighting, aromatherapy scents, romantic ambiance.',
    best_for: ['anniversaries', 'birthdays', 'date nights', 'honeymoon', 'relationship bonding'],
    technique: 'Customisable — each person can choose their preferred therapy',
    pressure: 'Customisable per person',
    keywords: ['couple massage jaipur', 'couple spa jaipur', 'romantic spa jaipur', 'anniversary spa jaipur'],
  },
  {
    name: 'Full Body Massage',
    slug: 'full-body-massage',
    price_60: 1099,
    price_90: 1399,
    description: 'Comprehensive head-to-toe massage covering feet, calves, back, shoulders, arms, neck, and scalp. Nothing is rushed or skipped.',
    best_for: ['whole body fatigue', 'post-work tiredness', 'general wellness', 'first visit'],
    technique: 'Structured full body coverage with warm therapeutic oil',
    pressure: 'Medium',
    keywords: ['full body massage jaipur', 'full body massage sindhi camp', 'body massage near me jaipur'],
  },
  {
    name: 'Herbal Body Scrub',
    slug: 'body-scrub',
    price_60: 1499,
    description: 'Turmeric and herb-based natural micro-exfoliation. Removes dead skin, improves circulation, reveals fresh glowing skin.',
    best_for: ['dull skin', 'dead skin removal', 'skin glow', 'exfoliation', 'detox'],
    technique: 'Manual exfoliation with herbal scrub, circular motions',
    pressure: 'Light, surface-level',
    keywords: ['body scrub jaipur', 'herbal scrub sindhi camp', 'skin glow spa jaipur'],
  },
  {
    name: 'Steam Bath',
    slug: 'steam-bath',
    price_30: 499,
    description: 'Private single-person steam chamber with herb-infused steam. Opens pores, loosens muscles, flushes toxins. Perfect add-on before massage.',
    best_for: ['pre-massage preparation', 'detox', 'skin cleansing', 'muscle warmup'],
    technique: 'Enclosed herbal steam chamber, 15-20 minutes',
    pressure: 'N/A',
    keywords: ['steam bath jaipur', 'steam room sindhi camp', 'detox spa jaipur'],
  },
];

// ── SECTION 4: TRENDING KEYWORDS — Sindhi Camp 2.5km Radius ─────────────────

export const TRENDING_KEYWORDS = {

  // HIGH VOLUME — "Near Me" Intent (People actively looking to visit)
  near_me: [
    'spa near me jaipur',
    'massage near me jaipur',
    'spa near sindhi camp',
    'massage center near sindhi camp',
    'spa near jaipur railway station',
    'massage near railway station jaipur',
    'spa near jaipur junction',
    'body massage near me jaipur',
    'full body massage near me jaipur',
    'thai massage near me jaipur',
    'massage center near bus stand jaipur',
    'spa near polo victory cinema',
    'spa near gopal bari jaipur',
    '24 hour spa near me jaipur',
    'open now spa jaipur',
  ],

  // SERVICE-SPECIFIC — High Intent Buyers
  service_specific: [
    'thai massage jaipur',
    'thai massage jaipur price',
    'thai massage sindhi camp jaipur',
    'swedish massage jaipur',
    'deep tissue massage jaipur',
    'balinese massage jaipur',
    'aromatherapy massage jaipur',
    'couple massage jaipur',
    'couple spa jaipur',
    'body scrub jaipur',
    'steam bath jaipur',
    'full body massage jaipur',
    'body massage jaipur price',
    'best massage in jaipur',
    'luxury spa jaipur',
  ],

  // LOCAL AREA — Hyperlocal Targeting
  local_area: [
    'spa in sindhi camp jaipur',
    'massage parlour sindhi camp',
    'wellness center sindhi camp jaipur',
    'spa near mi road jaipur',
    'spa near bani park jaipur',
    'spa near civil lines jaipur',
    'spa near chandpole jaipur',
    'spa near collectorate circle jaipur',
    'spa near ajmer road jaipur',
    'massage near nehru bazaar jaipur',
    'spa near sanganeri gate jaipur',
    'spa in pink city jaipur',
    'best spa walled city jaipur',
    'jaipur junction area spa',
  ],

  // PROBLEM-BASED — People with specific pain/need
  problem_based: [
    'back pain massage jaipur',
    'neck pain massage jaipur',
    'cervical massage jaipur',
    'stress relief massage jaipur',
    'insomnia cure spa jaipur',
    'anxiety massage therapy jaipur',
    'shoulder pain massage jaipur',
    'leg pain massage jaipur',
    'sciatica massage jaipur',
    'post workout massage jaipur',
    'muscle recovery spa jaipur',
    'headache relief massage jaipur',
  ],

  // OCCASION-BASED — Emotional / Gift Intent
  occasion_based: [
    'anniversary spa jaipur',
    'birthday spa gift jaipur',
    'romantic spa jaipur',
    'honeymoon spa jaipur',
    'couple spa anniversary jaipur',
    'spa gift voucher jaipur',
    'spa for wedding gift jaipur',
    'pre wedding relaxation jaipur',
    'post wedding spa jaipur',
  ],

  // TIME-BASED — 24 Hour Advantage
  time_based: [
    '24 hour spa jaipur',
    'late night massage jaipur',
    'midnight spa jaipur',
    '2am massage jaipur',
    'early morning spa jaipur',
    'open all night spa jaipur',
    'night massage center jaipur',
    'anytime massage jaipur',
  ],

  // TOURIST SEARCHES — Visitors to Jaipur
  tourist: [
    'best spa in jaipur for tourists',
    'massage jaipur tourist guide',
    'jaipur railway station spa walk',
    'what to do in jaipur between trains',
    'tourist massage jaipur',
    'jaipur layover spa',
    'visiting jaipur spa',
    'jaipur sightseeing spa break',
  ],

  // TRUST-BASED — Hygiene / Safety Conscious
  trust_based: [
    'hygienic spa jaipur',
    'safe spa jaipur',
    'certified therapist jaipur',
    'professional massage jaipur',
    'clean spa jaipur',
    'private room massage jaipur',
    'sanitized spa jaipur',
    'female therapist jaipur spa',
    'no funny business spa jaipur',
    'genuine spa jaipur',
  ],
};

// ── SECTION 5: BLOG WRITING PATTERN ─────────────────────────────────────────
// This is the EXACT structure Gemini must follow for every blog.
// Pattern learned from the best-performing local spa content worldwide.

export const BLOG_WRITING_PATTERN = `
BLOG WRITING PATTERN FOR Jaipur Spa:
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
     * "I typed 'spa near me jaipur' at 11 PM and..."
     * "Raat ke 2 baje mujhe suddenly realize hua..."
     * "My doctor said something that surprised me..."
   - BAD hook: "Jaipur Spa is the best spa in Jaipur..."

2. PROBLEM DEEPENING (1 paragraph)
   - Expand on the problem or situation
   - Make the reader nod and say "yes, that's me"
   - Mention the location context naturally (Jaipur, desk job, travel, etc.)

3. THE DISCOVERY (1 paragraph)
   - How did you find Jaipur Spa? (Google search, friend tip, saw it near railway station)
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
   - Recommendation in first person: "If you are in Jaipur and..."
   - Include phone number once: +91 73576 78356
   - Open 24 hours
   - Location: Sindhi Camp

TECHNICAL SEO RULES:
──────────────────────
- Target keyword used 2-3 times naturally (not stuffed)
- Location mentioned: Sindhi Camp, Jaipur (at least 3 times total)
- Word count: 600-800 words for standard, 1000-1200 for long-form
- Subheadings: 3-4 H3 tags per article
- No bullet points in content — flowing paragraphs only
- No corporate language — no "state-of-the-art", "world-class", "premier"
- Write at 8th grade reading level — simple, clear sentences
- Use contractions: "I'd", "we're", "it's" — sounds more human

TONE GUIDE:
───────────
 GOOD: "I have been back four times since that first visit"
 BAD:  "Jaipur Spa provides exceptional therapeutic services"

 GOOD: "The therapist found a knot in my shoulder I didn't know existed"
 BAD:  "Our certified therapists utilize advanced techniques"

 GOOD: "For ₹1,099 and 60 minutes — genuinely one of the best decisions I made this month"
 BAD:  "Competitive pricing at ₹1,099 per session"
`;

// ── SECTION 6: 4 LONG PATTERN EXAMPLE BLOGS ─────────────────────────────────
// These are the reference articles Gemini studies before writing new content.
// Each demonstrates the pattern above in a different context.

export const PATTERN_EXAMPLE_BLOGS = [

  // EXAMPLE 1: "Near Me" Intent — Late Night Visit
  {
    targetKeyword: 'spa near me jaipur 24 hours',
    wordCount: 820,
    title: 'I Typed "Spa Near Me Jaipur" at 1:30 AM. What Happened Next Changed My Sleep Forever',
    content: `
<p>I have dealt with insomnia for three years. My sleep tracker shows an average of 4.2 hours per night — a number that stopped surprising me and started just depressing me. I had tried melatonin, blue light glasses, strict screen time rules before bed. Nothing worked consistently.</p>

<p>On a Wednesday night in May, at 1:30 in the morning, I was lying on my couch in a state of frustrated wakefulness that anyone with insomnia will recognise immediately. On an impulse I cannot entirely explain, I picked up my phone and typed "spa near me jaipur" into Google. I think some part of my brain, after years of conventional remedies failing, had decided to try something completely different.</p>

<h3>What I Found at 1:30 AM</h3>

<p>The first result was Jaipur Spa at Sindhi Camp. What caught my eye immediately was not the rating — it was the operating hours: 24 hours. I called the number listed. Someone picked up in two rings. "Yes sir, we are open. Please come whenever you are ready." I left my apartment seven minutes later.</p>

<p>I want to be honest about my expectations at that hour. I was prepared for a half-hearted experience — a night shift employee going through the motions, a room that had not been properly cleaned since the evening session ended. Jaipur's Sindhi Camp area was quiet but not deserted as I walked in, and the spa's entrance was lit properly. Not aggressively bright — warmly lit, the way a place should be lit at 2 in the morning.</p>

<h3>The Session</h3>

<p>I chose Swedish Relaxation, 60 minutes, at ₹999. The therapist — who was alert in a way that made me question my assumptions about night shifts entirely — asked a few brief questions. How was my stress level tonight? Any areas of particular discomfort? How did I prefer the room temperature? She adjusted the table, folded fresh linen (genuinely fresh — I noticed the crease lines that only come from recently folded fabric), and left me to settle in.</p>

<p>Swedish massage uses long gliding effleurage strokes. The effect on the nervous system is well-documented — it activates the parasympathetic response, lowering heart rate and cortisol simultaneously. This is not spa marketing language; this is what the research shows. What the research cannot fully capture is the specific quality of that shift in the body when you are lying in a warm, quiet room at 2 AM and someone with genuine skill is working methodically through the tension you have been carrying without noticing.</p>

<p>Somewhere around the 35-minute mark, I caught myself mid-exhale in a way that happens involuntarily when your nervous system finally releases a breath it has been holding for weeks. I was not trying to relax. My body simply decided, in that moment, that it was safe to.</p>

<h3>After</h3>

<p>I was home by 3:20 AM. I was asleep by 3:35. I woke up at 8:45 — five hours and ten minutes of continuous sleep, which was, without exaggeration, the longest uninterrupted stretch I had managed in several months. The sleep tracker confirmed what I already knew when I woke up: something had shifted.</p>

<p>I returned to Jaipur Spa the following week. And the week after. I now go every Thursday evening. The cumulative effect of regular sessions is different from the dramatic single-session experience — it is quieter, more stable, like a baseline correction rather than a spike. My average nightly sleep in the past six weeks has been 6.1 hours. For me, that is significant.</p>

<p>Jaipur Spa is on Motilal Atal Road, Sindhi Camp — 3 minutes from Jaipur Railway Station, open genuinely 24 hours. If you are searching for a spa near me in Jaipur at any hour of the day or night, the answer is probably this place. Call them at +91 73576 78356.</p>
    `
  },

  // EXAMPLE 2: Service Education — Deep Tissue
  {
    targetKeyword: 'deep tissue massage jaipur back pain',
    wordCount: 960,
    title: 'My Physiotherapist Recommended Deep Tissue Massage. Four Sessions at Jaipur Spa Later — Here Is What Changed',
    content: `
<p>I have had lower back problems since I was 29. I am 34 now. Five years of physiotherapy exercises, ergonomic chairs I researched obsessively, and a mattress that cost me more than my first car. The pain never fully went away. It became background noise — the kind of constant low-grade discomfort that you stop noticing until someone asks why you are standing slightly tilted to the left.</p>

<p>My current physio, after reviewing my posture during our third session together, said something that surprised me. "The muscle tension around your lumbar is maintaining the problem even between our sessions. You need soft tissue work — regular deep tissue massage." She said it matter-of-factly, the way you would prescribe any therapy. I took it seriously.</p>

<h3>Choosing Jaipur Spa in Jaipur</h3>

<p>I live near Bani Park. The obvious options near me were either hotel spas that charged ₹2,500+ or budget places that I knew from past experience would deliver a shallow interpretation of whatever I asked for. A colleague mentioned Jaipur Spa at Sindhi Camp — a ten-minute drive but consistently recommended by people I trusted. I called, explained my situation — lower back, physio referral, chronic issue — and asked if they had therapists experienced in clinical deep tissue work. The answer was yes, and they asked me to come in for an initial assessment conversation before booking.</p>

<p>That detail — the fact that they asked me to explain my condition before the session rather than just booking a time slot — told me something important about how they operate.</p>

<h3>Session One — The Honest Version</h3>

<p>Deep tissue massage for chronic issues is not comfortable during the session. I want to be clear about this because I think spa marketing creates unrealistic expectations. The therapist at Jaipur Spa worked on my lumbar region, piriformis, and glutes — the three areas my physio had identified as primary tension sources. When he reached the piriformis (a deep muscle beneath the gluteal muscles that is one of the most common contributors to lower back pain), I had to breathe through the pressure deliberately. Not painfully — but intensely.</p>

<p>He paused regularly to check my tolerance. "Tell me where you want me to back off," he said at the beginning, and meant it. He also explained briefly what he was finding as he worked — a significant knot in my right lumbar paraspinals, tightness in the thoracolumbar fascia. This kind of verbal narration made me trust the work more. He was not just applying pressure randomly; he was responding to what he found.</p>

<p>I was tender the next day. Specifically tender, not generally sore — the way you feel after targeted physical therapy rather than general muscle use. My physio said this was the correct response and confirmed the tenderness was in exactly the right areas.</p>

<h3>Four Weeks, Four Sessions</h3>

<p>By the second session, the post-session tenderness was significantly reduced, which my physio explained meant the initial adhesions had begun releasing. The therapist shifted focus in session three to my thoracic spine — the area above the lumbar that compensates for lower back issues and develops its own secondary problems. By week four, I was sleeping through the night without the 3 AM back-pain wake-up that had become as reliable as an alarm clock.</p>

<p>My physio noticed the change independently — she commented during our fifth appointment that my lumbar mobility had measurably improved and that my postural compensation pattern was less pronounced. She credited the combined approach: her structural work plus the soft tissue release happening at Jaipur Spa between our sessions.</p>

<h3>The Practical Numbers</h3>

<p>Four sessions at Jaipur Spa: ₹1,199 each, 60 minutes. Total: ₹4,796. For comparison, one physiotherapy session in Jaipur typically costs ₹500–₹800. My physio recommended the deep tissue work as complementary, not a replacement — the combination achieved more in four weeks than physio alone had in the previous year. For a chronic issue that had affected my quality of life for five years, ₹4,796 is not a difficult number to justify.</p>

<p>Jaipur Spa, Sindhi Camp, Jaipur. 3 minutes from the railway station. Open 24 hours. If you have back pain in Jaipur and are looking for a genuine deep tissue massage with therapists who understand the difference between a clinical session and a relaxation session, this is where to go. Call +91 73576 78356 and describe your condition before booking.</p>
    `
  },

  // EXAMPLE 3: Couple / Occasion — Emotional
  {
    targetKeyword: 'couple massage jaipur anniversary',
    wordCount: 750,
    title: 'Our 5th Anniversary in Jaipur — We Skipped the Restaurant and Booked a Couple Massage Instead',
    content: `
<p>For our first four anniversaries, we did what couples do. Restaurant bookings two weeks in advance, a new outfit each, a bottle of wine that cost twice what it should have. Every year, some combination of these things. Every year, by 10 PM, we were back home and one of us had fallen asleep on the couch before the other had finished their tea.</p>

<p>This year, my wife made a suggestion that I initially misunderstood as a joke. "What if we just went and got massages?" she said, three days before our anniversary. "Together?" "Yes. A couple massage." I had genuinely never thought of a spa as an anniversary destination. It sounded, to my unadventurous mind, slightly clinical.</p>

<p>I was completely wrong.</p>

<h3>Booking Jaipur Spa — Sindhi Camp, Jaipur</h3>

<p>My wife had found Jaipur Spa through a colleague who had been there with her husband. We WhatsApped them the day before. Within 15 minutes, we had a confirmed 90-minute couple suite slot for our anniversary evening. They asked if there were any physical considerations (my wife has a shoulder issue from an old injury) and made a note. That level of pre-session care was the first indication that this would be different from what I was imagining.</p>

<p>We arrived at the Sindhi Camp location — on Motilal Atal Road, just a few minutes from Jaipur's main railway station — at 7:30 PM. The building exterior is understated. The interior is not. Warm amber lighting, the kind that makes everyone look slightly better than they do in daylight. The faint scent of sandalwood without the aggressive diffuser blast you get at places trying too hard.</p>

<h3>The Couple Suite</h3>

<p>The suite had two therapy beds side by side with perhaps a metre of space between them. Enough to hold hands if you wanted to. Enough to have your own completely private experience if you preferred. We each had a separate therapist — my wife's was female, which she had requested; mine was male. Before beginning, each therapist briefly confirmed our preferences: pressure level, areas to avoid, oil fragrance preference. My wife chose a lavender blend for her shoulder work. I chose something warmer — sandalwood with a hint of eucalyptus.</p>

<p>For 90 minutes, neither of us spoke. This sounds like it should be awkward, but it was not. We were both too absorbed in our own experience to need conversation, and occasionally I became aware of my wife's slow, deep breathing on the adjacent bed — the involuntary rhythm of someone who has actually, genuinely let go — and it was more intimate than most conversations we have had.</p>

<h3>When It Was Over</h3>

<p>We stayed in the suite for an extra ten minutes after the session ended. Neither of us rushed to get up. We lay there in the dim room, not speaking, not on our phones, just present in a way that a restaurant dinner — with its ambient noise and the performance of enjoying an expensive meal — rarely allows.</p>

<p>In the car on the way home, my wife said: "That's the most relaxed I have felt in two years." My shoulder, which I didn't even know was stiff until the therapist worked on it, felt mobile in a way it had not that morning. We were home by 9:30 PM and both asleep by 10:15 — the best anniversary outcome either of us could have asked for.</p>

<p>Jaipur Spa couple suite: ₹2,499 for 60 minutes, ₹2,999 for 90 minutes. Book in advance — the suite fills on weekends. Sindhi Camp, Jaipur. Open 24 hours. Call or WhatsApp: +91 73576 78356.</p>
    `
  },

  // EXAMPLE 4: Hyperlocal "Near Railway Station" — Tourist
  {
    targetKeyword: 'spa near jaipur railway station tourist',
    wordCount: 810,
    title: 'My Train Was Delayed 5 Hours at Jaipur Junction. Here Is How I Used the Time',
    content: `
<p>I travel by train frequently. Pune to Delhi, Delhi to Jaipur, Jaipur to Jodhpur — the Indian Railways is my second home and I say this with equal parts affection and resignation. What I have never made peace with is the delay. Sitting on a plastic bench at a railway station for four hours, watching the departure board lie to you repeatedly, is one of the few universally shared human miseries.</p>

<p>This particular delay was at Jaipur Junction. My train to Mumbai had developed a "technical issue" that, the announcement assured me, would be resolved "shortly." Shortly, as railway enthusiasts know, is a unit of time with no fixed value. I was looking at a minimum four-hour wait, possibly five.</p>

<h3>The WhatsApp Message That Changed the Afternoon</h3>

<p>My friend who lives in Jaipur, when I messaged him about the delay, responded with a single line: "Go to Jaipur Spa. It's 3 minutes from the station. You'll come back a new person." He had mentioned this spa before. I had filed it under "things I will look into properly one day," which is where interesting recommendations go to be forgotten. With five hours and nowhere to be, I looked it up properly for the first time.</p>

<p>Jaipur Spa. Motilal Atal Road, Sindhi Camp. 1.2 kilometres from Jaipur Junction. Open 24 hours. I took an auto — 20 rupees and seven minutes of perfectly adequate Jaipur traffic. I walked through the entrance at 2:15 PM with no appointment, a train ticket in my bag, and no particular expectations.</p>

<h3>What You Get in 90 Minutes at Jaipur Spa</h3>

<p>The receptionist — I use that word loosely since the spa's atmosphere is more informal and warm than "receptionist" implies — welcomed me without the faintly judgmental assessment that some wellness establishments direct at walk-in visitors who are not dressed for the occasion. I was in travel clothes. I smelled like train. She asked what I was looking for, I explained the train delay and the back stiffness that comes from sitting in a railway seat for four hours already, and she immediately suggested the 90-minute Balinese massage.</p>

<p>Balinese massage combines elements I had not previously experienced together: deep tissue work on specific areas, reflexology on the feet and hands, rolling palm pressure along the length of the muscles, and warm aromatic oil applied throughout. The effect is comprehensive in a way that a single-technique massage is not. By 30 minutes in, the stiffness from the train journey was already halfway gone. By 60 minutes, I had forgotten what stiff felt like. By 90 minutes, I was in the extended state of physical ease that I associate with a good night's sleep and a slow morning — an unusual thing to feel at 4 PM in the middle of an unplanned delay.</p>

<h3>The Logistics That Matter for Travellers</h3>

<p>For anyone reading this as a traveller with a Jaipur Railway Station delay or layover — the practical details matter. Jaipur Spa is 7 minutes by auto from the station (20-30 rupees depending on the driver). They accept walk-ins at any hour. The 60-minute sessions allow enough buffer time to get back to the platform. They will store your luggage in a secure area if you ask. The private suite means you do not need to worry about travel clothes or presentation.</p>

<p>I was back at Jaipur Junction at 4:55 PM, 25 minutes before my rescheduled departure. My back did not ache for the entire journey to Mumbai. I arrived feeling, as my friend promised, like a new person. What could have been five hours of plastic bench and fluorescent light became, instead, one of the more genuinely pleasant afternoons I have had in recent memory.</p>

<p>Jaipur Spa: Motilal Atal Road, Sindhi Camp, Jaipur. 3 minutes from Jaipur Railway Station. Open 24 hours. Balinese Massage: ₹1,199 (60 min), ₹1,499 (90 min). Call +91 73576 78356 — no appointment needed.</p>
    `
  },
];

// ── SECTION 7: GEMINI MASTER SYSTEM PROMPT ──────────────────────────────────
// This is injected into every Gemini API call as context.
// It gives Gemini the "brain" of Jaipur Spa before it writes anything.

export const buildMasterGeminiPrompt = (topic: string, keyword: string): string => {
  const servicesContext = SERVICES.map(s =>
    `${s.name} (₹${s.price_60}/60min, ₹${s.price_90}/90min) — Best for: ${s.best_for.slice(0, 3).join(', ')}`
  ).join('\n');

  const locationContext = LOCATION_DISTANCES.slice(0, 6).map(l =>
    `${l.area}: ${l.distance} (${l.time})`
  ).join('\n');

  const exampleBlog = PATTERN_EXAMPLE_BLOGS[Math.floor(Math.random() * PATTERN_EXAMPLE_BLOGS.length)];

  return `You are a real customer of Jaipur Spa in Jaipur. You write honest, personal blog posts about your experiences there for a wellness blog. You are NOT a marketer. You are a genuine person sharing genuine experiences.

═══════════════════════════════════════
Jaipur Spa — COMPLETE KNOWLEDGE BASE
═══════════════════════════════════════

BUSINESS:
${JAIPUR_SPA_IDENTITY.name}
Address: ${JAIPUR_SPA_IDENTITY.address}
Phone: ${JAIPUR_SPA_IDENTITY.phone1}
Hours: ${JAIPUR_SPA_IDENTITY.hours}
Rating: ${JAIPUR_SPA_IDENTITY.google_rating} (${JAIPUR_SPA_IDENTITY.total_reviews} reviews)

UNIQUE ADVANTAGES:
${JAIPUR_SPA_IDENTITY.unique_selling_points.map(u => '• ' + u).join('\n')}

SERVICES & PRICES:
${servicesContext}

DISTANCES FROM SINDHI CAMP:
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
- End with phone number +91 73576 78356
- Mention Sindhi Camp and Jaipur naturally throughout
- Sound like a real person, not a business

Return ONLY the HTML content (p and h3 tags). No title, no markdown.`;
};

// ── SECTION 8: KEYWORD SELECTION INTELLIGENCE ────────────────────────────────
// Picks the best keyword for any given day based on variety and coverage

export const selectKeywordForDay = (dayIndex: number): { topic: string; keyword: string } => {
  // Flatten all keywords into a single pool
  const allKeywords = [
    ...TRENDING_KEYWORDS.near_me.map(k => ({ topic: `experience of finding ${k.replace('jaipur', '').replace('near me', '').trim()} in jaipur sindhi camp`, keyword: k })),
    ...TRENDING_KEYWORDS.service_specific.map(k => ({ topic: `complete guide to ${k}`, keyword: k })),
    ...TRENDING_KEYWORDS.local_area.map(k => ({ topic: `best spa option for people ${k.replace('spa', '').replace('near', 'near').trim()}`, keyword: k })),
    ...TRENDING_KEYWORDS.problem_based.map(k => ({ topic: `how massage helped my ${k.replace('jaipur', '').trim()} at Jaipur Spa sindhi camp`, keyword: k })),
    ...TRENDING_KEYWORDS.occasion_based.map(k => ({ topic: `our ${k.replace('jaipur', '').trim()} experience at Jaipur Spa`, keyword: k })),
    ...TRENDING_KEYWORDS.time_based.map(k => ({ topic: `visiting Jaipur Spa for ${k.replace('jaipur', '').trim()}`, keyword: k })),
    ...TRENDING_KEYWORDS.tourist.map(k => ({ topic: k, keyword: k })),
    ...TRENDING_KEYWORDS.trust_based.map(k => ({ topic: `why purebliss is the most ${k.replace('jaipur', '').trim()}`, keyword: k })),
  ];

  // Rotate through all keywords — will take 100+ days to repeat
  return allKeywords[dayIndex % allKeywords.length];
};
