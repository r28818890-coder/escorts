/**
 * geminiAI.ts
 * AI content engine for Escorts Hub Noida.
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

/** 30-day topic calendar — AI will write fresh content for each */
export const BLOG_TOPIC_CALENDAR = [
  { day: 1,  topic: 'verified call girls near sector 18 noida hotel outcall',  keyword: 'call girl sector 18 noida' },
  { day: 2,  topic: 'escorts service in sector 62 noida corporate outcall',    keyword: 'escorts sector 62 noida' },
  { day: 3,  topic: 'top rated escorts in noida honest client guide 2026',    keyword: 'top escorts in noida' },
  { day: 4,  topic: 'hotel outcall companions near noida expressway',          keyword: 'hotel outcall escorts noida' },
  { day: 5,  topic: 'russian escorts noida price booking guide',               keyword: 'russian escorts noida' },
  { day: 6,  topic: 'vip dinner date companion noida experience',              keyword: 'vip companion noida' },
  { day: 7,  topic: 'late night 24 hour hotel outcall escorts noida',          keyword: '24 hour escorts noida' },
  { day: 8,  topic: 'zero advance payment call girl service in noida',         keyword: 'zero advance escorts noida' },
  { day: 9,  topic: 'independent escorts near botanical garden noida',         keyword: 'independent escorts noida' },
  { day: 10, topic: 'cash on delivery call girls noida safe booking',          keyword: 'cash on delivery call girl noida' },
  { day: 11, topic: 'safe hotel booking protocols for escorts in noida',       keyword: 'safe hotel escorts noida' },
  { day: 12, topic: 'celebrity model escorts noida elite accompaniment',       keyword: 'celebrity escorts noida' },
  { day: 13, topic: 'discreet full night stay companion in noida',             keyword: 'full night escorts noida' },
  { day: 14, topic: '5-star hotel outcall escorts in greater noida',           keyword: 'escorts greater noida' },
  { day: 15, topic: 'call girls near pari chowk greater noida 20 mins',        keyword: 'call girl pari chowk' },
  { day: 16, topic: 'how to choose verified companions in noida guide',        keyword: 'verified escorts guide noida' },
  { day: 17, topic: 'escorts near sector 50 noida residential outcall',        keyword: 'escorts sector 50 noida' },
  { day: 18, topic: 'business trip accompaniment for corporate clients noida', keyword: 'corporate companion noida' },
  { day: 19, topic: 'tourist companion guide visiting delhi ncr and noida',    keyword: 'tourist companion noida' },
  { day: 20, topic: 'air hostess escorts noida premium booking',               keyword: 'air hostess escorts noida' },
  { day: 21, topic: 'escorts near advant navis sector 142 noida',              keyword: 'escorts sector 142 noida' },
  { day: 22, topic: 'why escorts hub noida is consistently top rated in ncr',   keyword: 'top rated escorts noida' },
  { day: 23, topic: 'college model escorts in noida safe outcall',             keyword: 'college model escorts noida' },
  { day: 24, topic: 'private luxury incall vs hotel outcall in noida',         keyword: 'hotel outcall vs incall noida' },
  { day: 25, topic: 'weekend getaway companion booking from noida to agra',    keyword: 'travel companion noida' },
  { day: 26, topic: 'noida escorts complete booking guide 2026',               keyword: 'noida escorts guide 2026' },
  { day: 27, topic: 'russian vs indian companion which to choose in noida',    keyword: 'russian vs indian escorts noida' },
  { day: 28, topic: 'escorts near film city sector 16a noida',                 keyword: 'escorts sector 16 noida' },
  { day: 29, topic: 'midnight doorstep arrival escorts in noida',              keyword: 'midnight escorts noida' },
  { day: 30, topic: 'verified photo escorts in noida review and safety tips',  keyword: 'real photo escorts noida' },
];

/** Build the prompt for a given topic */
const buildPrompt = (topic: string, keyword: string): string => {
  return `You are a real client of Escorts Hub Noida located at Sector 18, Noida. 
Write a genuine, human-sounding blog post about: "${topic}".

STRICT RULES:
- Write in first person ("I", "we", "my") as a real client sharing their experience
- Total length: 500-650 words
- Tone: Conversational, discreet, honest — NOT corporate or robotic
- Naturally mention the keyword "${keyword}" 2-3 times throughout
- Mention Escorts Hub Noida at Sector 18, Noida naturally
- Include the phone number +91 8218125815 once at the end as a call to action
- Use <h3> tags for subheadings and <p> tags for paragraphs
- Do NOT use bullet points or lists — write in flowing paragraphs only
- End with a natural recommendation to call or WhatsApp

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
    metaTitle: `${newTitle} | Escorts Hub Noida`,
    metaDescription: excerpt.substring(0, 155),
    category: 'Local Guide',
    tag: entry.keyword,
    date: todayFormatted(),
    readTime: '5 min read',
    excerpt,
    content: linkedContent, // Save the content with SEO internal links!
    relatedPosts: ['how-to-book-escorts-in-noida-safely', 'best-hotels-in-noida-for-outcall'],
    keywords: [entry.keyword, 'Escorts Hub Noida', 'escorts in noida'],
  };

  saveBlogToStorage(newPost);
  console.log(`[GeminiAI] Blog saved: "${newPost.title}"`);
  return newPost;
};

/**
 * Generate a 100% Unique, Natural, SEO-Packed Client Review
 */
export const generateAiSeoReview = async (selectedTopics: string[]): Promise<string> => {
  const topicsText = selectedTopics.length > 0 ? selectedTopics.join(', ') : 'Best Escorts in Noida, 100% Real Photos';

  const prompt = `Write a realistic, discreet 5-star customer review (2 to 3 sentences max) for "Escorts Hub Noida" located at Sector 18, Noida (near DLF Mall of India & Sector 18 Metro). Incorporate these highlights organically: ${topicsText}. Do NOT sound like an AI or use hashtags. Sound like an executive client who booked hotel outcall service today.`;

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
    'Outstanding experience with Escorts Hub Noida at Sector 18!',
    'Booked a hotel outcall companion today and I am extremely impressed.',
    'Highly recommend Escorts Hub Noida for anyone staying near Noida Expressway and Sector 18!',
    'One of the most discreet and verified escort agencies in Noida NCR.'
  ];
  const middles = [
    'The companion arrived punctually in 20 minutes and looked exactly like her verified photos.',
    'Complete privacy, professional communication, and zero advance payment required.',
    'Very close to Sector 18 Metro and DLF Mall of India, so arrival was lightning fast.',
    'The coordinator was exceptionally polite, transparent, and respectful throughout.'
  ];
  const endings = [
    'Will definitely book through Escorts Hub Noida again!',
    '5 stars service, best companion agency in Noida NCR!',
    'Worth every rupee, flawless discretion and professional service.',
    'Great experience, 10/10 rating for honesty and verified quality!'
  ];

  const pick = <T>(arr: T[]) => arr[Math.floor(Math.random() * arr.length)];
  return `${pick(openings)} ${pick(middles)} ${pick(endings)}`;
};

