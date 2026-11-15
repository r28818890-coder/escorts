/**
 * veoClaudeAI.ts
 * Advanced Client & Service for Veo AI Free Engine (Claude Sonnet 5, Claude Opus 5, GPT-5.6 Terra, Gemini 3.7 Flash)
 * Tailored for We Noida Escorts (https://escortshubnoida.com)
 * Zero API Key requirement with support for multi-turn sessions, thinking mode, and web search grounding.
 */

import { BRAND, CONTACT } from '@/config/site';

export interface VeoModelMeta {
  label: string;
  preference: string;
  thinkingPreference: string | null;
}

export const VEO_MODELS: Record<string, VeoModelMeta> = {
  'claude': { label: 'Claude Sonnet 5', preference: 'claude50sonnet', thinkingPreference: 'claude50sonnetthinking' },
  'claude-sonnet': { label: 'Claude Sonnet 5', preference: 'claude50sonnet', thinkingPreference: 'claude50sonnetthinking' },
  'claude-opus': { label: 'Claude Opus 5', preference: 'claude50opus', thinkingPreference: 'claude50opusthinking' },
  'gpt-terra': { label: 'GPT-5.6 Terra', preference: 'gpt56_terra', thinkingPreference: 'gpt56_terra_thinking' },
  'gpt-sol': { label: 'GPT-5.6 Sol', preference: 'gpt56_sol', thinkingPreference: 'gpt56_sol_thinking' },
  'gemini': { label: 'Gemini 3.7 Flash', preference: 'gemini37flash', thinkingPreference: 'gemini37flashthinking' },
  'kimi': { label: 'Kimi K3', preference: 'kimik3', thinkingPreference: 'kimik3thinking' },
  'grok': { label: 'Grok 4.5', preference: 'grok45medium', thinkingPreference: null },
  'nemotron': { label: 'Nemotron 3 Ultra', preference: 'nv_nemotron_3_ultra', thinkingPreference: null }
};

export interface VeoQueryOptions {
  model?: keyof typeof VEO_MODELS | string;
  thinking?: boolean;
  webSearch?: boolean;
  sessionId?: string;
  isRelated?: boolean;
  userName?: string;
  timeout?: number;
  messages?: Array<{ role: 'user' | 'assistant' | 'system'; content: string }>;
}

export interface ChatSession {
  id: string;
  frontend_uuid: string;
  messages: Array<{ role: 'user' | 'assistant'; content: string }>;
  createdAt: number;
  updatedAt: number;
}

const sessions = new Map<string, ChatSession>();

/**
 * Get or initialize a multi-turn chat session
 */
export function getOrCreateSession(sessionId: string = 'default'): ChatSession {
  if (!sessions.has(sessionId)) {
    sessions.set(sessionId, {
      id: sessionId,
      frontend_uuid: 'veo-jec-' + Date.now() + '-' + Math.random().toString(36).slice(2, 9),
      messages: [],
      createdAt: Date.now(),
      updatedAt: Date.now()
    });
  }
  return sessions.get(sessionId)!;
}

export function clearSession(sessionId: string = 'default'): void {
  sessions.delete(sessionId);
}

/**
 * Parses raw SSE response chunks from Veo Proxy
 */
function parseSseText(sseText: string): string {
  const lines = sseText.split(/\r?\n/);
  const state: { fields: Record<string, { chunksByIndex: Record<number, string>; usesChunks: boolean; fullText: string }>; order: string[] } = {
    fields: {},
    order: []
  };

  const getFieldState = (key: string) => {
    if (!state.fields[key]) {
      state.fields[key] = { chunksByIndex: {}, usesChunks: false, fullText: '' };
      state.order.push(key);
    }
    return state.fields[key];
  };

  for (const line of lines) {
    if (line.startsWith('data:')) {
      const dataStr = line.slice(5).trim();
      if (!dataStr || dataStr === '[DONE]') continue;
      try {
        const json = JSON.parse(dataStr);
        if (!json || !Array.isArray(json.blocks)) continue;

        for (const b of json.blocks) {
          if (b.markdown_block || b.ask_text_block) {
            const key = b.markdown_block ? 'markdown_block' : 'ask_text_block';
            const val = b.markdown_block || b.ask_text_block;
            const txt = typeof val === 'string' ? val : (val?.markdown || val?.answer || val?.text || null);
            if (txt !== null) {
              const fs = getFieldState(key);
              if (!fs.usesChunks) fs.fullText = txt;
            }
            continue;
          }

          if (!b.diff_block || !Array.isArray(b.diff_block.patches)) continue;
          const field = b.diff_block.field || 'field';
          const fs = getFieldState(field);

          for (const p of b.diff_block.patches) {
            if (!p) continue;
            const path = p.path || '';
            const chunkMatch = /^\/chunks\/(\d+)$/.exec(path);
            if (chunkMatch && typeof p.value === 'string') {
              fs.chunksByIndex[Number(chunkMatch[1])] = p.value;
              fs.usesChunks = true;
            } else if ((path === '' || path == null) && p.value && Array.isArray(p.value.chunks)) {
              for (let c = 0; c < p.value.chunks.length; c++) {
                fs.chunksByIndex[c] = p.value.chunks[c];
              }
              fs.usesChunks = true;
            } else {
              const val = p.value;
              const txt = typeof val === 'string' ? val : (val ? (val.markdown || val.answer || val.text || null) : null);
              if (txt !== null) {
                if (p.op === 'append') fs.fullText = (fs.fullText || '') + txt;
                else fs.fullText = txt;
              }
            }
          }
        }
      } catch {
        // Skip unparseable lines
      }
    }
  }

  let out = '';
  for (const key of state.order) {
    const fs = state.fields[key];
    if (fs.usesChunks) {
      const indices = Object.keys(fs.chunksByIndex).map(Number).sort((a, b) => a - b);
      for (const idx of indices) out += fs.chunksByIndex[idx];
    } else {
      out += fs.fullText || '';
    }
  }

  let cleaned = out.trim();
  cleaned = cleaned.replace(/[ \t]?\[\d{1,3}(?:\s*,\s*\d{1,3})*\](?:[ \t]?\[\d{1,3}(?:\s*,\s*\d{1,3})*\])*/g, '');
  cleaned = cleaned.replace(/^(?:DONE)?WORKFLOW_COMPLETED\s*/gi, '').replace(/^DONE\s*/gi, '').trim();

  return cleaned || out.trim();
}

/**
 * Execute raw prompt via Veo AI backend
 */
export async function queryVeoClaude(
  prompt: string | Array<{ role: string; content: string }>,
  options: VeoQueryOptions = {}
): Promise<string> {
  const promptText = Array.isArray(prompt)
    ? prompt.map(m => `${m.role ? m.role.toUpperCase() : 'USER'}: ${m.content}`).join('\n\n')
    : String(prompt);

  const modelKey = (options.model || 'claude-sonnet').toLowerCase();
  const modelMeta = VEO_MODELS[modelKey] || VEO_MODELS['claude-sonnet'];

  const isThinking = !!options.thinking;
  const modelPreference = (isThinking && modelMeta.thinkingPreference)
    ? modelMeta.thinkingPreference
    : modelMeta.preference;

  const modelLabel = isThinking ? `${modelMeta.label} (Thinking)` : modelMeta.label;
  const payload = {
    model_preference: modelPreference,
    prompt: prompt,
    messages: options.messages || [],
    frontend_uuid: options.sessionId ? getOrCreateSession(options.sessionId).frontend_uuid : 'veo-jec-web-' + Date.now(),
    is_related: options.isRelated || false,
    user_name: options.userName || 'Guest User',
    web_search: options.webSearch !== undefined ? options.webSearch : true
  };

  const controller = new AbortController();
  const timeoutMs = options.timeout || 30000;
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch('https://veoaifree.com/wp-content/themes/really-simple-child/veo-proxy.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'text/event-stream'
      },
      body: JSON.stringify(payload),
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`Veo AI Proxy responded with HTTP ${response.status} ${response.statusText}`);
    }

    const rawText = await response.text();
    const parsed = parseSseText(rawText);

    if (!parsed) {
      throw new Error('Empty response received from Veo AI Engine');
    }

    return parsed;
  } catch (error: any) {
    clearTimeout(timeoutId);
    if (error.name === 'AbortError') {
      throw new Error(`Veo AI request timed out after ${timeoutMs}ms`);
    }
    throw error;
  }
}

export const askClaudeAI = queryVeoClaude;

/**
 * Multi-turn chat with conversation memory
 */
export async function chatVeoClaude(
  userMessage: string,
  options: VeoQueryOptions = {}
): Promise<string> {
  const sessionId = options.sessionId || 'default';
  const session = getOrCreateSession(sessionId);

  const historyMessages = session.messages.map(m => ({
    role: m.role as 'user' | 'assistant',
    content: m.content
  }));

  const response = await queryVeoClaude(userMessage, {
    ...options,
    sessionId,
    isRelated: historyMessages.length > 0,
    messages: historyMessages as any
  });

  session.messages.push({ role: 'user', content: userMessage });
  session.messages.push({ role: 'assistant', content: response });
  session.updatedAt = Date.now();

  return response;
}

// ─── DOMAIN SPECIALIZATIONS FOR ESCORTS HUB NOIDA ─────────────────────────

const JEC_MASTER_CONTEXT = `
You are the Official VIP Concierge & AI Assistant for "${BRAND.name}" (${BRAND.domain}), Noida's #1 premier directory of 100% verified escort models, independent call girls, Russian companions, and VIP hostesses.

Directory Highlights:
- Official Portal: ${BRAND.domain}/
- Contact / WhatsApp Hotline: ${CONTACT.phoneDisplay} (${CONTACT.phone})
- Service Area: Noida & NCR 24 Hours (Sector 18, Sector 62, Sector 50, Sector 137, Sector 76-78, Pari Chowk, Indirapuram, Vaishali, Botanical Garden, Noida Expressway, etc.)
- Available Categories:
  * VIP High Profile Escorts & Models
  * Russian & Foreign Companions
  * College Girls & Independent Models
  * Hotel Outcall & Resort Accompaniment in 3-star, 4-star, and 5-star luxury hotels
- Strict Safety Rules:
  * 100% Real Photo Verification.
  * Direct WhatsApp confirmation.
  * Strictly for adults (18+).
  * Direct payment to companion upon meeting.

Tone & Instructions:
- Always be courteous, respectful, polite, and responsive in English or Hindi/Hinglish.
- Provide concise, practical guidance on categories, localities, and safe direct WhatsApp booking at ${CONTACT.phoneDisplay}.
- Maintain discreet, professional language. Keep responses under 2-3 short paragraphs.
`;

/**
 * Answer customer inquiries in SmartBot with Claude Sonnet 5
 */
export async function answerSpaInquiryWithClaude(
  userMessage: string,
  chatHistory: Array<{ role: 'user' | 'assistant'; content: string }> = []
): Promise<string> {
  const formattedPrompt = `${JEC_MASTER_CONTEXT}

Previous conversation:
${chatHistory.map(m => `${m.role.toUpperCase()}: ${m.content}`).join('\n')}

User Question: "${userMessage}"

Provide a courteous, accurate, and helpful response for We Noida Escorts:`;

  return await queryVeoClaude(formattedPrompt, {
    model: 'claude-sonnet',
    thinking: false,
    webSearch: false
  });
}

/**
 * Generate high-ranking SEO directory guide with Claude Sonnet 5
 */
export async function generateSpaBlogWithClaude(
  topic: string,
  targetKeyword: string
): Promise<{ title: string; slug: string; excerpt: string; content: string; metaDescription: string; tags: string[] }> {
  const prompt = `${JEC_MASTER_CONTEXT}

Task: Write a high-ranking, 100% human-sounding city guide & classifieds article.
Topic: "${topic}"
Target Keyword: "${targetKeyword}"

Requirements:
1. Authentic, informative perspective for adult travellers and visitors in Noida.
2. Word count: 500 - 650 words.
3. Natural integration of "${targetKeyword}" 2-3 times.
4. Clean HTML format using <h3> subheadings and <p> paragraphs.
5. Emphasize verified profiles, safe hotel outcalls in Noida, and WhatsApp booking at ${CONTACT.phoneDisplay}.
6. Output in JSON format with keys: title, slug, excerpt, content, metaDescription, tags.

Return ONLY the JSON object.`;

  const safeSlug = topic.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

  try {
    const rawResult = await queryVeoClaude(prompt, {
      model: 'claude-sonnet',
      thinking: true
    });

    const jsonMatch = rawResult.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      const parsed = JSON.parse(jsonMatch[0]);
      return {
        title: parsed.title || topic,
        slug: parsed.slug || safeSlug,
        excerpt: parsed.excerpt || `Read our verified guide on ${topic} at ${BRAND.name}, Noida.`,
        content: parsed.content || `<p>${rawResult}</p>`,
        metaDescription: parsed.metaDescription || `Explore verified models and tips for ${topic} at ${BRAND.name}, Noida.`,
        tags: Array.isArray(parsed.tags) ? parsed.tags : [targetKeyword, BRAND.name, 'Noida Directory']
      };
    }
  } catch (err) {
    console.warn('[VeoClaudeAI] JSON parse failed, formatting raw content', err);
  }

  return {
    title: topic.replace(/\b\w/g, l => l.toUpperCase()),
    slug: safeSlug,
    excerpt: `Discover our verified guide on ${topic} at ${BRAND.name}, Noida.`,
    content: `<p>Welcome to ${BRAND.name}, the leading verified directory in Noida. Whether you are visiting the Pink City for business or leisure, our platform connects you with authentic, photo-verified independent models across Sindhi Camp, MI Road, Vaishali Nagar, and Malviya Nagar.</p><h3>Why Choose Verified Profiles</h3><p>We prioritize guest safety, privacy, and genuine photo authentication. All outcall arrangements at reputed hotels and private suites are coordinated with discretion.</p><h3>Contact & Coordination</h3><p>For instant profile availability and booking details, connect directly on WhatsApp at ${CONTACT.phoneDisplay}.</p>`,
    metaDescription: `Discover verified companions and tips on ${topic} at ${BRAND.name} Noida.`,
    tags: [targetKeyword, BRAND.name, 'Noida Escorts']
  };
}

/**
 * Generate authentic customer review with Claude
 */
export async function generateSpaReviewWithClaude(
  serviceName: string = 'VIP Companion',
  areaName: string = 'Sindhi Camp'
): Promise<{ reviewerName: string; rating: number; reviewText: string; date: string }> {
  const prompt = `Write an authentic 5-star review for "${serviceName}" at We Noida Escorts located in "${areaName}", Noida.
Praise the prompt WhatsApp communication, 100% verified real photos, and professional discreet service.
Return JSON with keys: reviewerName, rating (number 5), reviewText, date ("2 days ago").`;

  try {
    const raw = await queryVeoClaude(prompt, { model: 'claude-sonnet' });
    const match = raw.match(/\{[\s\S]*\}/);
    if (match) {
      return JSON.parse(match[0]);
    }
  } catch {}

  return {
    reviewerName: 'Rohit K. (Verified Client)',
    rating: 5,
    reviewText: `Excellent experience with We Noida Escorts in ${areaName}. The profile was 100% genuine as shown in photos, communication was quick over WhatsApp, and service was discreet and professional.`,
    date: 'Just now'
  };
}
