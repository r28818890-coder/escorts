import { PAGES_CONTENT } from '@/pages/serviceContent';
import { SERVICES_LIST, NOIDA_LOCATIONS, CONTACT, BRAND, SPA_STATS } from '@/config/site';
import { PORTAL_CATEGORIES, NOIDA_LOCALITIES, INITIAL_CLASSIFIED_ADS } from '@/config/portalData';
import { BLOG_POSTS } from '@/pages/Insights';
import { runCompetitorSeoAnalysis } from '@/services/competitorSeoEngine';
import { runWeeklyAutoImprovementCycle } from '@/services/autoImprovementAI';
import { runAiRankTrackerAudit } from '@/services/aiRankTrackerAI';
import { dispatchAiAlertNotification, getAlertWhatsAppUrl, checkSystemAccessStatus } from '@/services/aiAlertDispatcherAI';

export interface SmartBotReply {
  response: string;
  options: string[];
  action?: 'book' | 'whatsapp' | 'admin-login' | 'admin-logout' | 'seo-audit' | 'seo-autofix' | 'none';
}

const contains = (text: string, terms: string[]) => terms.some(term => text.includes(term));

// Secure admin authentication
export const ADMIN_TRIGGER = 'admin-saddam';
export const ADMIN_PASSWORD = 'Sadd@1111';
const ADMIN_PASS_HASH = 'U2FkZEAxMTEx';

export const isAdminTrigger = (text: string) => text.trim().toLowerCase() === ADMIN_TRIGGER;
export const isAdminPasswordCheck = (text: string) => {
  try {
    return typeof btoa !== 'undefined' ? btoa(text.trim()) === ADMIN_PASS_HASH : text.trim() === 'Sadd@1111';
  } catch {
    return false;
  }
};

/**
 * Natural Human Guide Article Generator (Admin Only)
 */
const generateAiBlogArticle = (userTopic: string) => {
  const fallbackTopics = [
    'How to Choose Verified Escorts & Companions Safely in Noida',
    'VIP Outcall Etiquette in Luxury 5-Star Hotels in Noida',
    'Sector 18 & Film City Verified Companions Booking Guide',
    'Sector 62 IT Hub & Expressway Independent Models Guide'
  ];

  let clean = userTopic
    .replace(/[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}]/gu, '')
    .replace(/\b(write|another|create|generate|make|blog|ai|article|likho|bnao|bna|about|on|for|outranking)\b/gi, '')
    .replace(/[^a-zA-Z0-9\s]/g, '')
    .replace(/\s+/g, ' ')
    .trim();

  if (!clean || clean.length < 3) {
    clean = fallbackTopics[Math.floor(Math.random() * fallbackTopics.length)];
  } else {
    clean = clean.charAt(0).toUpperCase() + clean.slice(1);
  }

  const slug = `guide-${clean.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}-${Date.now()}`;
  const id = `blog-${Date.now()}`;

  const newPost = {
    id,
    slug,
    title: `${clean} — Official We Noida Escorts Guide`,
    metaTitle: `${clean} | ${BRAND.name}`,
    metaDescription: `Read our comprehensive guide on ${clean}. Verified profiles, genuine photos, and direct WhatsApp contact in Noida & NCR.`,
    category: 'VIP Guide',
    tag: 'Verified Directory',
    date: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
    readTime: '5 min read',
    excerpt: `Planning an evening or hotel stay in Noida? Here is an authentic guide on ${clean.toLowerCase()} with 100% verified profiles.`,
    content: `
      <p>Welcome to ${BRAND.name}, Noida's trusted platform for verified companion profiles. Whether you reside in Noida or are visiting for travel, our directory features verified independent models across central and luxury hotel zones.</p>
      <h3>Safety & Real Verification</h3>
      <p>We ensure that all profiles uploaded have undergone direct phone authentication. Never pay unauthorized advance fees or deposit requests to unverified contacts.</p>
      <h3>Discreet Outcalls in Noida & NCR</h3>
      <p>Independent companions are available for outcall appointments at all major 3-star, 4-star, and 5-star hotels across Sector 18, Sector 62, Greater Noida, and Noida Expressway.</p>
      <p>For immediate assistance and genuine photos, contact our manager on WhatsApp at ${CONTACT.phoneDisplay}.</p>
    `,
    relatedPosts: ['safety-guide-noida', 'hotel-outcall-guide'],
    keywords: [clean, BRAND.name, 'Noida Escorts']
  };

  BLOG_POSTS.unshift(newPost);
  return newPost;
};

/**
 * Master We Noida Escorts Rule Engine
 */
export const generateSmartBotResponse = (message: string, isAdminMode: boolean = false): SmartBotReply => {
  const normalized = message.toLowerCase().replace(/^[0-9]+\.\s*/, '').trim();

  // ── 0. ADMIN ONLY: AI BLOG GENERATION ─────────────────────────────────
  if (contains(normalized, ['write blog', 'create blog', 'generate blog', 'blog likho', 'blog bnao', 'blog banao', 'make blog', 'write article', 'article likho', 'write ai blog', 'ai blog', '️ write ai blog'])) {
    if (!isAdminMode) {
      return {
        response: `Blog Creation is an Admin Feature. Authenticate using 'admin-saddam' to access this control.`,
        options: ['Verified Models', 'Check Rates & Packages', 'Noida Localities'],
        action: 'none'
      };
    }
    const post = generateAiBlogArticle(normalized);
    return {
      response: ` GUIDE ARTICLE CREATED & PUBLISHED!\n\n` +
        ` Title: ${post.title}\n` +
        ` Category: ${post.category}\n` +
        ` Excerpt: ${post.excerpt}\n\n` +
        `This guide has been dynamically added to ${BRAND.name} directory!`,
      options: ['️ Write Another AI Blog', ' Audit SEO & Fix', ' Outrank Competitors', ' Lock Admin Mode'],
      action: 'none'
    };
  }

  // ── 0.1 ADMIN ONLY: COMPETITOR OUTRANKING & RANK INQUIRIES ─────────────
  if (contains(normalized, ['competitor', 'outrank', 'rank 1', 'rank #1', 'top on google', 'google ranking', 'google score', 'google 1st', 'seo rank', 'how to rank', 'rank check'])) {
    if (!isAdminMode) {
      return {
        response: `Competitor Intelligence & Rank Tracking is an Admin Control. Authenticate using 'admin-saddam' to view live Google positions.`,
        options: ['Verified Models', 'Check Rates & Packages', 'Noida Localities'],
        action: 'none'
      };
    }
    const report = runCompetitorSeoAnalysis();
    const rankData = runAiRankTrackerAudit();

    return {
      response: ` REAL-TIME GOOGLE SERP DOMINANCE REPORT (${rankData.scanTime}):\n\n` +
        ` Portal: ${BRAND.name} (${BRAND.domain})\n` +
        ` Overall Google Rank: #1 Across Noida Classifieds\n` +
        ` Total Tracked Keywords: ${rankData.totalTrackedKeywords} | Rank #1 Keywords: ${rankData.position1Keywords}\n` +
        ` Average Position: ${rankData.averagePosition}\n` +
        ` E-E-A-T Score: ${report.rankingScore}/100\n\n` +
        ` Analyzed Competitors: ${report.competitorsAnalyzed.join(', ')}\n` +
        ` Action: ${report.actionTaken}`,
      options: [' Audit SEO & Fix', '️ Write AI Blog', ' Outrank Competitors', ' Lock Admin Mode'],
      action: 'none'
    };
  }

  // ── 1. DIRECT WHATSAPP ACTION ──────────────────────────────────────────
  if (contains(normalized, ['book on whatsapp', 'open whatsapp', 'whatsapp me', 'whatsapp par book', 'send whatsapp', 'book whatsapp', 'whatsapp'])) {
    return {
      response: `Connecting you to We Noida Escorts coordinator on WhatsApp for verified model photos and availability...`,
      options: ['Verified Models', 'Check Rates & Packages', 'Noida Localities'],
      action: 'whatsapp'
    };
  }

  // ── 2. ADMIN MODE ──────────────────────────────────────────────────────
  if (isAdminTrigger(normalized)) {
    return {
      response: ` Admin Access Triggered. Please enter Admin Password:`,
      options: [],
      action: 'admin-login'
    };
  }

  if (contains(normalized, ['logout admin', 'lock admin', 'lock admin mode'])) {
    return {
      response: ` Admin Mode Locked.`,
      options: ['Verified Models', 'Check Rates & Packages', 'Noida Localities'],
      action: 'admin-logout'
    };
  }

  if (isAdminMode && contains(normalized, ['seo', 'audit', 'check website', 'analyze', 'fix seo', 'auto-fix', 'autofix'])) {
    if (contains(normalized, ['fix seo', 'auto-fix', 'autofix', 'apply fix'])) {
      return {
        response: `Running 1-Click Live SEO Auto-Fix...`,
        options: ['Run Audit Again', ' Lock Admin Mode'],
        action: 'seo-autofix'
      };
    }
    return {
      response: `Running Live SEO Audit...`,
      options: ['️ Apply 1-Click SEO Fix', ' Lock Admin Mode'],
      action: 'seo-audit'
    };
  }

  // ── 3. GREETINGS & INTRO ───────────────────────────────────────────────
  if (contains(normalized, ['hi', 'hello', 'hey', 'namaste', 'hlo', 'good morning', 'good evening', 'good afternoon', 'start'])) {
    return {
      response: `Hello & Welcome to ${BRAND.name}! \n\nI am your VIP AI Assistant. How can I help you connect with verified models and companions in Noida & NCR today?`,
      options: ['Verified Models', 'Check Rates & Packages', 'Noida Localities', 'Book on WhatsApp'],
      action: 'none'
    };
  }

  if (contains(normalized, ['thank', 'thanks', 'dhanyawad', 'shukriya', 'ok', 'okay', 'great', 'nice', 'good'])) {
    return {
      response: `You're welcome! Feel free to ask about any category, or click below to connect directly on WhatsApp with our coordinator.`,
      options: ['Book on WhatsApp', 'Verified Models', 'Noida Localities'],
      action: 'none'
    };
  }

  // ── 4. CATEGORIES & MODELS ─────────────────────────────────────────────
  if (contains(normalized, ['model', 'models', 'profile', 'profiles', 'russian', 'college', 'vip', 'independent', 'air hostess', 'celebrity', 'photos', 'pics', 'verified'])) {
    return {
      response: ` 100% Real Photo Verified Categories at ${BRAND.name}:\n\n` +
        `• VIP High Profile Models — Elegant, polished companions for corporate dinners, travel, & hotel stays.\n` +
        `• Russian & Foreign Companions — Fair, tall, glamorous international models in Noida.\n` +
        `• Independent Call Girls — Authentic, friendly, and discreet companions.\n` +
        `• College & Young Models — Energetic, charming, and fun-loving.\n\n` +
        `All profiles are photo-verified with direct WhatsApp availability!`,
      options: ['Book on WhatsApp', 'Check Rates & Packages', 'Noida Localities'],
      action: 'none'
    };
  }

  // ── 5. RATES & PACKAGES ────────────────────────────────────────────────
  if (contains(normalized, ['price', 'rate', 'rates', 'cost', 'fee', 'charge', 'kitna', 'kitne', 'how much', 'paisa', 'rupees', 'check rates', 'packages', 'package', 'full night', 'shot'])) {
    return {
      response: ` Standard Directory Rates in Noida & NCR:\n\n` +
        `• 1–2 Hours Short Visit / Dinner Date: Starting from ₹2,500 – ₹4,000\n` +
        `• Half Night Outcall: Starting from ₹5,000 – ₹8,000\n` +
        `• Full Night VIP Companion: Starting from ₹8,000 – ₹15,000+\n` +
        `• Russian / Foreign VIP Models: Custom quotes on WhatsApp\n\n` +
        ` Direct Payment upon meeting. Zero advance fee policy!`,
      options: ['Book on WhatsApp', 'Verified Models', 'Noida Localities'],
      action: 'none'
    };
  }

  // ── 6. LOCALITIES & HOTEL OUTCALLS ────────────────────────────────────
  if (contains(normalized, ['location', 'where', 'address', 'noida', 'sector 18', 'sector 62', 'sector 50', 'sector 137', 'expressway', 'pari chowk', 'indirapuram', 'vaishali', 'hotel', 'resort', 'outcall', 'incall', 'botanical garden'])) {
    return {
      response: ` 24/7 Outcall Services Across Noida & NCR:\n\n` +
        `We provide 30-45 minute fast outcalls to all 3-star, 4-star, & 5-star hotels and luxury private apartments in:\n\n` +
        `• Sector 18 & Film City Zone (DLF Mall of India, Radisson)\n` +
        `• Sector 62 & Electronic City IT Hub\n` +
        `• Sector 137 & Greater Noida Expressway Corridor\n` +
        `• Pari Chowk & Greater Noida Knowledge Park\n` +
        `• Indirapuram & Vaishali Ghaziabad\n\n` +
        `Discreet, safe, and confidential doorstep arrival.`,
      options: ['Book on WhatsApp', 'Verified Models', 'Check Rates & Packages'],
      action: 'none'
    };
  }

  // ── 7. SAFETY & ANTI-SCAM RULES ────────────────────────────────────────
  if (contains(normalized, ['safety', 'scam', 'fraud', 'advance', 'advance payment', 'safe', 'privacy', 'discreet', 'secure', 'real', 'fake'])) {
    return {
      response: ` Strict Safety & Scam Prevention Guidelines:\n\n` +
        ` 1. NEVER pay online advance fees or QR codes before meeting.\n` +
        ` 2. Verify model photos directly on WhatsApp (${CONTACT.phoneDisplay}).\n` +
        ` 3. Payment is made directly in cash or UPI to the companion upon arrival.\n` +
        ` 4. 100% strict client confidentiality & privacy guaranteed.\n` +
        ` 5. Strictly restricted to consenting adults (18+).`,
      options: ['Book on WhatsApp', 'Verified Models', 'Noida Localities'],
      action: 'none'
    };
  }

  // ── 8. DEFAULT FALLBACK ────────────────────────────────────────────────
  return {
    response: `Welcome to ${BRAND.name}! I am your VIP Concierge. I can help you with verified model profiles, rates, hotel outcall timings, or safe WhatsApp bookings in Noida & NCR. What would you like to know?`,
    options: ['Verified Models', 'Check Rates & Packages', 'Noida Localities', 'Book on WhatsApp'],
    action: 'none'
  };
};
