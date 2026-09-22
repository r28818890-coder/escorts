import { BLOG_POSTS } from '@/pages/Insights';
import { BlogPost } from '@/types';

const JAIPUR_SEO_TARGETS = [
  { area: 'MI Road', therapy: 'Traditional Thai Massage', keywords: ['Thai Massage MI Road', 'Spa near MI Road Jaipur', '24 Hour Spa MI Road'] },
  { area: 'Bani Park', therapy: 'Couple Luxury Spa Suite', keywords: ['Couple Spa Bani Park', 'Anniversary Spa Package Jaipur', 'Best Spa near Bani Park'] },
  { area: 'Civil Lines', therapy: 'Deep Tissue Muscle Relief', keywords: ['Deep Tissue Civil Lines', 'Back Pain Relief Spa Jaipur', 'Massage near Civil Lines'] },
  { area: 'C-Scheme', therapy: 'Organic Aromatherapy Massage', keywords: ['Aromatherapy C Scheme', 'Luxury Spa C Scheme Jaipur', 'Relaxation Spa Jaipur'] },
  { area: 'Vaishali Nagar', therapy: 'Balinese Herbal Full Body Therapy', keywords: ['Balinese Massage Vaishali Nagar', 'Full Body Massage Jaipur', 'Spa in Vaishali Nagar'] },
  { area: 'Malviya Nagar', therapy: 'Swedish Stress Relief Therapy', keywords: ['Swedish Massage Malviya Nagar', 'Stress Relief Spa Jaipur', 'Spa near GT Malviya Nagar'] },
  { area: 'Mansarovar', therapy: 'Herbal Body Scrub & Steam Bath', keywords: ['Body Scrub Mansarovar', 'Steam Bath Jaipur', 'Skin Glow Spa Mansarovar'] },
  { area: 'Raja Park', therapy: 'Authentic Thai Stretching Therapy', keywords: ['Thai Massage Raja Park', 'Spa near Raja Park', 'Body Massage Jaipur'] },
  { area: 'Tonk Road', therapy: '24/7 Executive Stress Relief Spa', keywords: ['24 Hour Spa Tonk Road', 'Massage near Tonk Road Jaipur', 'Executive Spa Jaipur'] },
  { area: 'Jagatpura', therapy: 'Therapeutic Full Body Massage', keywords: ['Full Body Spa Jagatpura', 'Massage Therapy Jaipur', 'Spa near Jagatpura'] },
];

const LAST_AUTO_BLOG_KEY = 'purebliss_last_auto_blog_time';
const GENERATED_BLOGS_KEY = 'purebliss_generated_blogs';

/**
 * Generates a hyper-local No.1 Google ranking SEO blog article for Jaipur areas
 */
const generateHyperlocalJaipurArticle = (targetIndex: number): BlogPost => {
  const target = JAIPUR_SEO_TARGETS[targetIndex % JAIPUR_SEO_TARGETS.length];
  const dateStr = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  const timestamp = Date.now();
  const slug = `best-${target.therapy.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-near-${target.area.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-jaipur`;

  return {
    id: `auto-seo-blog-${targetIndex}-${timestamp}`,
    slug,
    title: `Best ${target.therapy} near ${target.area}, Jaipur: Complete Wellness Guide`,
    metaTitle: `Best ${target.therapy} near ${target.area} Jaipur | Jaipur Spa`,
    metaDescription: `Looking for top-rated ${target.therapy} near ${target.area}, Jaipur? Jaipur Spa offers certified therapists, 24/7 private suites, & instant WhatsApp booking.`,
    category: 'Therapy Guide',
    tag: target.area,
    date: dateStr,
    readTime: '6 min read',
    excerpt: `Residents and travellers in ${target.area}, Jaipur can now experience world-class ${target.therapy} just minutes away at Jaipur Spa. Read our expert guide on posture correction and muscle recovery.`,
    content: `
      <p>Finding a trustworthy, 100% hygienic, and certified luxury spa near <strong>${target.area}, Jaipur</strong> is no longer a challenge. Jaipur Spa provides 24-hour sanctuary for individuals and couples seeking authentic <strong>${target.therapy}</strong>.</p>

      <h3>Why ${target.area} Residents Choose Jaipur Spa</h3>
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
    relatedPosts: ['thai-massage-benefits-jaipur', 'deep-tissue-vs-swedish'],
    keywords: target.keywords,
  };
};

/**
 * Checks if 1 week (7 days) has passed and automatically generates & publishes a new hyperlocal Jaipur SEO blog
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
      const newBlog = generateHyperlocalJaipurArticle(generatedCount);

      // Prepend to live memory
      BLOG_POSTS.unshift(newBlog);

      // Save to localStorage so it persists
      const currentSaved: BlogPost[] = JSON.parse(localStorage.getItem(GENERATED_BLOGS_KEY) || '[]');
      currentSaved.unshift(newBlog);
      localStorage.setItem(GENERATED_BLOGS_KEY, JSON.stringify(currentSaved));
      localStorage.setItem(LAST_AUTO_BLOG_KEY, now.toString());
      localStorage.setItem('purebliss_auto_blog_count', (generatedCount + 1).toString());

      console.log(`[Jaipur Spa AUTO-SEO BLOGGER] Published new weekly article: "${newBlog.title}"`);
    }
  } catch (err) {
    console.error('Auto Blog Scheduler error:', err);
  }
};
