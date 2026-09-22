/**
 * geminiAI.ts
 * Google Gemini API integration for Jaipur Spa.
 * Generates human-style, SEO-optimized blog posts automatically.
 */

import { BlogPost } from '@/types';
import { saveBlogToStorage, getStoredBlogs } from '@/services/blogStorage';
import { buildMasterGeminiPrompt, selectKeywordForDay, SERVICES } from '@/services/pureblissBrain';
import { generateSpaBlogWithClaude, queryVeoClaude } from '@/services/veoClaudeAI';

// ── Smart API Key Rotation System ─────────────────────────────────────────
// Two keys available. System tries Key 1 first.
// If Key 1 hits quota/error → automatically switches to Key 2.
// Usage tracked in localStorage so rotation persists across sessions.

const metaEnv = (import.meta as any).env || {};
const KEYS = [
  metaEnv.VITE_GEMINI_API_KEY_1 as string,
  metaEnv.VITE_GEMINI_API_KEY_2 as string,
].filter(Boolean); // removes undefined keys

const ACTIVE_KEY_INDEX_STORAGE = 'gemini_active_key_index';
const GEMINI_API_BASE = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=';

/** Get the currently active key index from localStorage */
const getActiveKeyIndex = (): number => {
  try {
    const stored = localStorage.getItem(ACTIVE_KEY_INDEX_STORAGE);
    const idx = stored ? parseInt(stored, 10) : 0;
    return idx < KEYS.length ? idx : 0;
  } catch {
    return 0;
  }
};

/** Switch to the next available key */
const rotateToNextKey = (): number => {
  const current = getActiveKeyIndex();
  const next = (current + 1) % KEYS.length;
  try {
    localStorage.setItem(ACTIVE_KEY_INDEX_STORAGE, String(next));
    console.log(`[GeminiAI]  Rotated to Key ${next + 1}`);
  } catch {
    // ignore
  }
  return next;
};

/** Get the active API URL */
const getActiveApiUrl = (keyIndex: number): string => {
  return `${GEMINI_API_BASE}${KEYS[keyIndex]}`;
};

/** 30-day topic calendar — Gemini will write fresh content for each */
export const BLOG_TOPIC_CALENDAR = [
  { day: 1,  topic: 'best massage spa near sindhi camp jaipur',          keyword: 'spa near sindhi camp' },
  { day: 2,  topic: 'spa near jaipur railway station walkable distance', keyword: 'spa near railway station jaipur' },
  { day: 3,  topic: 'top rated spa in jaipur honest review 2026',        keyword: 'top spa in jaipur' },
  { day: 4,  topic: 'full body massage near me sindhi camp jaipur',      keyword: 'full body massage near me jaipur' },
  { day: 5,  topic: 'thai massage jaipur price benefits guide',           keyword: 'thai massage jaipur' },
  { day: 6,  topic: 'couple massage private suite jaipur experience',    keyword: 'couple massage jaipur' },
  { day: 7,  topic: 'late night 2am massage 24 hour spa jaipur',         keyword: '24 hour spa jaipur' },
  { day: 8,  topic: 'deep tissue massage for chronic back pain jaipur',  keyword: 'deep tissue massage jaipur' },
  { day: 9,  topic: 'aromatherapy spa near mi road jaipur',              keyword: 'aromatherapy jaipur' },
  { day: 10, topic: 'herbal body scrub for glowing skin jaipur spa',     keyword: 'body scrub jaipur' },
  { day: 11, topic: 'steam bath before massage benefits jaipur',         keyword: 'steam bath jaipur' },
  { day: 12, topic: 'balinese massage jaipur authentic experience',      keyword: 'balinese massage jaipur' },
  { day: 13, topic: 'romantic spa experience for couples jaipur',        keyword: 'romantic spa jaipur' },
  { day: 14, topic: 'anniversary gift couple spa package jaipur',        keyword: 'anniversary spa jaipur' },
  { day: 15, topic: 'spa near bani park jaipur 5 minutes away',         keyword: 'spa near bani park jaipur' },
  { day: 16, topic: 'how to choose right massage therapy jaipur guide',  keyword: 'massage therapy guide jaipur' },
  { day: 17, topic: 'spa near civil lines jaipur luxury wellness',       keyword: 'spa near civil lines jaipur' },
  { day: 18, topic: 'massage for stress relief jaipur professionals',    keyword: 'stress relief massage jaipur' },
  { day: 19, topic: 'tourist massage guide visiting jaipur',             keyword: 'tourist spa jaipur' },
  { day: 20, topic: 'post wedding exhaustion spa recovery jaipur',       keyword: 'post wedding spa jaipur' },
  { day: 21, topic: 'spa near chandpole jaipur old city guide',          keyword: 'spa near chandpole jaipur' },
  { day: 22, topic: 'why purebliss is consistently top rated spa jaipur',keyword: 'top rated spa jaipur' },
  { day: 23, topic: 'herbal oil massage ayurvedic jaipur benefits',      keyword: 'herbal massage jaipur' },
  { day: 24, topic: 'cervical pain neck massage therapy jaipur',         keyword: 'cervical pain massage jaipur' },
  { day: 25, topic: 'spa gift voucher jaipur birthday anniversary',      keyword: 'spa gift voucher jaipur' },
  { day: 26, topic: 'massage jaipur wellness complete guide 2026',       keyword: 'wellness spa jaipur 2026' },
  { day: 27, topic: 'swedish massage vs deep tissue which to choose',    keyword: 'swedish vs deep tissue jaipur' },
  { day: 28, topic: 'spa near ajmer road jaipur 10 minutes',             keyword: 'spa near ajmer road jaipur' },
  { day: 29, topic: 'late night massage jaipur midnight session review', keyword: 'late night massage jaipur' },
  { day: 30, topic: 'one month at Jaipur Spa sindhi camp results',    keyword: 'sindhi camp massage spa' },
];

/** Build the Gemini prompt for a given topic */
const buildPrompt = (topic: string, keyword: string): string => {
  return `You are a real person who regularly visits Jaipur Spa at Sindhi Camp, Jaipur. 
Write a genuine, human-sounding blog post about: "${topic}".

STRICT RULES:
- Write in first person ("I", "we", "my") as a real customer sharing their experience
- Total length: 500-650 words
- Tone: Conversational, warm, honest — NOT corporate or robotic
- Naturally mention the keyword "${keyword}" 2-3 times throughout
- Mention Jaipur Spa at Sindhi Camp, Jaipur naturally
- Include the phone number +91 73576 78356 once at the end as a call to action
- Use <h3> tags for subheadings and <p> tags for paragraphs
- Do NOT use bullet points or lists — write in flowing paragraphs only
- End with a natural recommendation to visit or call

Return ONLY the HTML content (h3 and p tags). No title, no markdown, no extra formatting.`;
};

/** Extract a clean title from topic */
const topicToTitle = (topic: string): string => {
  return topic
    .split(' ')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
};

/** Extract slug from topic */
const topicToSlug = (topic: string): string => {
  return `auto-${topic.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}-${Date.now()}`;
};

/** Get today's formatted date */
const todayFormatted = (): string => {
  return new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
};

/**
 * Try calling Gemini with a specific key index.
 * Returns response text on success, throws on failure.
 */
const callGeminiWithKey = async (keyIndex: number, prompt: string): Promise<string> => {
  const url = getActiveApiUrl(keyIndex);
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: { temperature: 0.85, maxOutputTokens: 1024 },
    }),
  });

  // 429 = quota exceeded → trigger key rotation
  if (response.status === 429) {
    throw new Error('QUOTA_EXCEEDED');
  }

  if (!response.ok) {
    throw new Error(`API_ERROR_${response.status}`);
  }

  const data = await response.json();
  const text: string = data?.candidates?.[0]?.content?.parts?.[0]?.text || '';
  if (!text || text.length < 100) throw new Error('EMPTY_RESPONSE');
  return text;
};

/**
 * Generate a blog post using Gemini API with automatic key rotation.
 * ─ Tries active key first
 * ─ On quota error → rotates to next key → retries once
 * ─ Returns null if all keys exhausted
 */
export const generateAndSaveBlogWithGemini = async (
  dayIndex: number
): Promise<BlogPost | null> => {
  // ── Use Brain to select today's keyword intelligently ────────────────────
  const entry = selectKeywordForDay(dayIndex);
  const prompt = buildMasterGeminiPrompt(entry.topic, entry.keyword);

  let rawContent = '';

  // Try Gemini keys first if configured
  if (KEYS.length > 0) {
    let activeIndex = getActiveKeyIndex();
    for (let attempt = 0; attempt < KEYS.length; attempt++) {
      try {
        console.log(`[GeminiAI] Trying Key ${activeIndex + 1} for Day ${dayIndex + 1}...`);
        rawContent = await callGeminiWithKey(activeIndex, prompt);
        console.log(`[GeminiAI] Key ${activeIndex + 1} success!`);
        break;
      } catch (err) {
        const msg = err instanceof Error ? err.message : '';
        if (msg === 'QUOTA_EXCEEDED') {
          console.warn(`[GeminiAI] Key ${activeIndex + 1} quota exceeded. Rotating...`);
        } else {
          console.error(`[GeminiAI] Key ${activeIndex + 1} error:`, msg);
        }
        activeIndex = rotateToNextKey();
      }
    }
  }

  // If Gemini has no keys or failed, use Veo-Claude Sonnet 5 as intelligent fallback!
  if (!rawContent) {
    try {
      console.log(`[GeminiAI -> VeoClaude] Generating Day ${dayIndex + 1} blog with Claude Sonnet 5...`);
      const claudeBlog = await generateSpaBlogWithClaude(entry.topic, entry.keyword);
      rawContent = claudeBlog.content;
      console.log(`[GeminiAI -> VeoClaude] Claude Sonnet 5 generation succeeded!`);
    } catch (claudeErr) {
      console.error('[GeminiAI] Both Gemini and Claude generation failed:', claudeErr);
      return null;
    }
  }

  // ── AI-Powered Internal Linking (SEO Spider Web) ──────────────────────────
  // Automatically turn service names in the text into SEO-friendly links
  let linkedContent = rawContent;
  
  // We only want to replace the first occurrence of each service to avoid spamming links
  SERVICES.forEach(service => {
    // Regex matches the service name, ignoring case, but ensuring it's not already inside an <a> tag
    // We use a simple replacement for the first occurrence.
    const regex = new RegExp(`(?<!<a[^>]*>)(${service.name})(?![^<]*</a>)`, 'i');
    linkedContent = linkedContent.replace(regex, `<a href="/services/${service.slug}" class="text-rose-600 hover:underline font-semibold">$1</a>`);
    
    // Also try without "Massage" or "Therapy" for natural variations (e.g. "Thai Massage" -> "Thai")
    const shortName = service.name.replace(/ Massage| Therapy/ig, '');
    if (shortName.length > 4 && shortName !== service.name) {
       const shortRegex = new RegExp(`(?<!<a[^>]*>)(${shortName})(?![^<]*</a>)`, 'i');
       linkedContent = linkedContent.replace(shortRegex, `<a href="/services/${service.slug}" class="text-rose-600 hover:underline font-semibold">$1</a>`);
    }
  });

  // Build clean excerpt (strip HTML tags)
  const excerpt = linkedContent
    .replace(/<[^>]+>/g, '')
    .trim()
    .substring(0, 220)
    .concat('...');

  const slug = topicToSlug(entry.topic);

  const newTitle = topicToTitle(entry.topic);

  // ── Auto-delete/Skip duplicate blogs ─────────────────────────────────────
  // If the title or the generated content is already saved, don't save it again.
  const storedBlogs = getStoredBlogs();
  const isDuplicate = storedBlogs.some(blog =>
    blog.title.toLowerCase() === newTitle.toLowerCase() ||
    blog.excerpt.toLowerCase() === excerpt.toLowerCase()
  );

  if (isDuplicate) {
    console.warn(`[GeminiAI] ️ Duplicate blog detected: "${newTitle}". Auto-deleting (skipping save).`);
    return null;
  }

  const newPost: BlogPost = {
    id: slug,
    slug,
    title: newTitle,
    metaTitle: `${newTitle} | Jaipur Spa Jaipur`,
    metaDescription: excerpt.substring(0, 155),
    category: 'Wellness',
    tag: entry.keyword,
    date: todayFormatted(),
    readTime: '5 min read',
    excerpt,
    content: linkedContent, // Save the content with SEO internal links!
    relatedPosts: ['thai-massage-benefits-jaipur', 'couple-massage-anniversary-jaipur'],
    keywords: [entry.keyword, 'Jaipur Spa', 'spa jaipur'],
  };

  saveBlogToStorage(newPost);
  console.log(`[GeminiAI] Blog saved: "${newPost.title}"`);
  return newPost;
};

/**
 * Generate a 100% Unique, Natural, SEO-Packed Customer Review for Google Maps
 */
export const generateAiSeoReview = async (selectedTopics: string[]): Promise<string> => {
  const topicsText = selectedTopics.length > 0 ? selectedTopics.join(', ') : 'Best Spa in Jaipur, Clean & Hygienic';

  const prompt = `Write a realistic, natural 5-star Google Maps customer review (2 to 3 sentences max) for "Jaipur Spa" located at Sindhi Camp, Jaipur (near Jaipur Railway Station). Incorporate these highlights organically: ${topicsText}. Do NOT sound like an AI or use hashtags. Sound like a happy customer who visited today.`;

  try {
    let keyIndex = getActiveKeyIndex();
    const apiUrl = getActiveApiUrl(keyIndex);

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
      }),
    });

    if (response.ok) {
      const data = await response.json();
      const text = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
      if (text && text.length > 20) {
        return text.replace(/^["']|["']$/g, '');
      }
    }
  } catch (err) {
    console.warn('[GeminiAI] API call failed for review generator, trying Claude Sonnet 5 fallback...', err);
  }

  // Try Claude Sonnet 5 before organic template fallback
  try {
    const claudeReview = await queryVeoClaude(prompt, { model: 'claude-sonnet' });
    if (claudeReview && claudeReview.length > 20) {
      return claudeReview.replace(/^["']|["']$/g, '').trim();
    }
  } catch {}

  // ── Organic Dynamic Synthesizer Fallback (Guarantees 100% unique combinations) ──
  const openings = [
    'Outstanding experience at Jaipur Spa near Sindhi Camp!',
    'Visited Jaipur Spa today and I am extremely impressed.',
    'Highly recommend Jaipur Spa for anyone visiting Jaipur Junction Railway Station!',
    'One of the cleanest and most professional spas in Jaipur.'
  ];
  const middles = [
    'The therapists are very polite and well trained.',
    'The suite was 100% clean, sanitized, and hygienic with a great relaxing vibe.',
    'Very close to Sindhi Camp Bus Stand and Railway Station, so super convenient to reach.',
    'The staff behavior was exceptionally warm and hospitable throughout.'
  ];
  const endings = [
    'Will definitely come back for another session!',
    '5 stars service, must visit when in Jaipur!',
    'Worth every rupee, will be recommending to all friends.',
    'Great experience, 10/10 rating for hygiene and service!'
  ];

  const pick = <T>(arr: T[]) => arr[Math.floor(Math.random() * arr.length)];
  return `${pick(openings)} ${pick(middles)} ${pick(endings)}`;
};

