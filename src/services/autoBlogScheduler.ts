import { BLOG_POSTS } from '@/pages/Insights';
import { BlogPost } from '@/types';

const NOIDA_SEO_TARGETS = [
  { area: 'Sector 18', therapy: 'VIP Hotel Outcall Service', keywords: ['Escorts Sector 18', 'Call Girls near Sector 18 Noida', '24 Hour Outcall Sector 18'] },
  { area: 'Sector 62', therapy: 'Executive Luxury Companion', keywords: ['Escorts Sector 62', 'Independent Companions Noida Sector 62', 'Best Call Girls near Sector 62'] },
  { area: 'Sector 50', therapy: 'High Profile Hotel Companion', keywords: ['Escorts Sector 50', 'Verified Models Noida Sector 50', 'Hotel Outcall Sector 50'] },
  { area: 'Sector 137', therapy: 'Expressway VIP Companion', keywords: ['Escorts Sector 137', 'Luxury Call Girls Expressway Noida', 'Discreet Outcall Sector 137'] },
  { area: 'Sector 76-78', therapy: 'Premium Outcall Companion', keywords: ['Escorts Sector 76', 'Call Girls Sector 78 Noida', 'Hotel Outcall Sector 76-78'] },
  { area: 'Pari Chowk', therapy: 'Greater Noida Luxury Escorts', keywords: ['Escorts Pari Chowk', 'Greater Noida Call Girls', 'Hotel Companions Pari Chowk'] },
  { area: 'Indirapuram', therapy: 'NCR Executive Companions', keywords: ['Escorts Indirapuram', 'Call Girls near Indirapuram', 'VIP Companions Indirapuram'] },
  { area: 'Sector 128', therapy: 'Jaypee Wish Town VIP Escorts', keywords: ['Escorts Sector 128', 'Call Girls Jaypee Wish Town', 'Outcall Sector 128'] },
  { area: 'Sector 142', therapy: 'Advant Navis Corporate Outcall', keywords: ['Escorts Sector 142', 'Call Girls near Advant Noida', 'Executive Companions Sector 142'] },
  { area: 'Botanical Garden', therapy: 'Metro Interchange Doorstep Outcall', keywords: ['Escorts Botanical Garden', 'Call Girls Botanical Garden Noida', 'Fast Outcall Metro Gate'] },
];

const LAST_AUTO_BLOG_KEY = 'purebliss_last_auto_blog_time';
const GENERATED_BLOGS_KEY = 'purebliss_generated_blogs';

/**
 * Generates a hyper-local No.1 Google ranking SEO blog article for Noida areas
 */
const generateHyperlocalNoidaArticle = (targetIndex: number): BlogPost => {
  const target = NOIDA_SEO_TARGETS[targetIndex % NOIDA_SEO_TARGETS.length];
  const dateStr = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  const timestamp = Date.now();
  const slug = `best-${target.therapy.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-near-${target.area.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-noida`;

  return {
    id: `auto-seo-blog-${targetIndex}-${timestamp}`,
    slug,
    title: `Best ${target.therapy} near ${target.area}, Noida: Complete Wellness Guide`,
    metaTitle: `Best ${target.therapy} near ${target.area} Noida | Noida Spa`,
    metaDescription: `Looking for top-rated ${target.therapy} near ${target.area}, Noida? Noida Spa offers certified therapists, 24/7 private suites, & instant WhatsApp booking.`,
    category: 'Therapy Guide',
    tag: target.area,
    date: dateStr,
    readTime: '6 min read',
    excerpt: `Residents and travellers in ${target.area}, Noida can now experience world-class ${target.therapy} just minutes away at Noida Spa. Read our expert guide on posture correction and muscle recovery.`,
    content: `
      <p>Finding a trustworthy, 100% hygienic, and certified luxury spa near <strong>${target.area}, Noida</strong> is no longer a challenge. Noida Spa provides 24-hour sanctuary for individuals and couples seeking authentic <strong>${target.therapy}</strong>.</p>

      <h3>Why ${target.area} Residents Choose Noida Spa</h3>
      <p>Located conveniently at Motilal Atal Road, Sindhi Camp (just a short drive from ${target.area}), our spa offers unmatched accessibility, free private parking, and soundproof luxury therapy suites.</p>

      <h3>Anatomical & Health Benefits of ${target.therapy}</h3>
      <ul>
        <li><strong>Chronic Pain Relief:</strong> Targets deep myofascial trigger points to melt away back and shoulder stiffness.</li>
        <li><strong>Enhanced Circulation:</strong> Stimulates venous blood return and unblocks Sen energy pathways.</li>
        <li><strong>Stress Cortisol Reduction:</strong> Restores parasympathetic nervous system balance for deep, restful sleep.</li>
      </ul>

      <h3>Book Your Session Near ${target.area} Today</h3>
      <p>Whether you need a late-night session after work or a weekend relaxation ritual, our senior therapists are available 24 hours a day, 7 days a week.</p>
    `,
    relatedPosts: ['thai-massage-benefits-noida', 'deep-tissue-vs-swedish'],
    keywords: target.keywords,
  };
};

/**
 * Checks if 1 week (7 days) has passed and automatically generates & publishes a new hyperlocal Noida SEO blog
 */
export const checkAndRunAutoBlogScheduler = (): void => {
  try {
    if (typeof window === 'undefined' || typeof localStorage === 'undefined') return;

    const now = Date.now();
    const ONE_WEEK_MS = 7 * 24 * 60 * 60 * 1000;

    // Load any previously saved auto-generated blogs from localStorage
    const savedBlogsRaw = localStorage.getItem(GENERATED_BLOGS_KEY);
    if (savedBlogsRaw) {
      try {
        const savedBlogs: BlogPost[] = JSON.parse(savedBlogsRaw);
        savedBlogs.forEach((blog) => {
          if (!BLOG_POSTS.some((p) => p.id === blog.id)) {
            BLOG_POSTS.unshift(blog);
          }
        });
      } catch {
        // Ignore JSON parse errors
      }
    }

    const lastTimeRaw = localStorage.getItem(LAST_AUTO_BLOG_KEY);
    const lastTime = lastTimeRaw ? parseInt(lastTimeRaw, 10) : 0;

    // If never run OR 7 days have passed, auto-generate a new weekly blog!
    if (!lastTime || now - lastTime >= ONE_WEEK_MS) {
      const generatedCount = parseInt(localStorage.getItem('purebliss_auto_blog_count') || '0', 10);
      const newBlog = generateHyperlocalNoidaArticle(generatedCount);

      // Prepend to live memory
      BLOG_POSTS.unshift(newBlog);

      // Save to localStorage so it persists
      const currentSaved: BlogPost[] = JSON.parse(localStorage.getItem(GENERATED_BLOGS_KEY) || '[]');
      currentSaved.unshift(newBlog);
      localStorage.setItem(GENERATED_BLOGS_KEY, JSON.stringify(currentSaved));
      localStorage.setItem(LAST_AUTO_BLOG_KEY, now.toString());
      localStorage.setItem('purebliss_auto_blog_count', (generatedCount + 1).toString());

      console.log(`[Noida Spa AUTO-SEO BLOGGER] Published new weekly article: "${newBlog.title}"`);
    }
  } catch (err) {
    console.error('Auto Blog Scheduler error:', err);
  }
};
