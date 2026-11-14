const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, '..', 'dist');
const indexPath = path.join(distDir, 'index.html');
const DOMAIN = 'https://escortshubnoida.com';
const BRAND = 'Escorts Hub Noida';
const PHONE = '+919521413060';

if (!fs.existsSync(indexPath)) {
  console.error('dist/index.html not found. Run vite build first.');
  process.exit(1);
}

const baseHtml = fs.readFileSync(indexPath, 'utf8');

// Categories
const CATEGORIES = [
  { slug: 'call-girls', name: 'Call Girls & Escorts', keyword: 'call girls, VIP escorts, independent models & hotel outcall companions', heading: 'Call Girls & VIP Escorts' },
  { slug: 'massages', name: 'Massages & Luxury Spa', keyword: 'luxury Thai spa, Swedish body massage, aromatherapy & couple jacuzzi', heading: 'Luxury Spa & Thai Body Massage' },
  { slug: 'male-escorts', name: 'Male Escorts & Call Boys', keyword: 'handsome male escorts, fitness models & gigolos for women', heading: 'Male Escorts & Call Boys' },
  { slug: 'transsexual', name: 'Transsexual & TS Escorts', keyword: 'shemale companions, crossdresser models & TS escorts', heading: 'Transsexual & TS Companions' },
  { slug: 'adult-meetings', name: 'Adult Meetings & Casual Dating', keyword: 'local singles, casual adult meetings & discreet NSA romance', heading: 'Adult Meetings & Casual Dating' },
];

// Noida & NCR Localities with Landmarks
const LOCALITIES = [
  { slug: 'sector-18', name: 'Sector 18 Noida', landmark: 'DLF Mall of India, Atta Market & Metro Gate 2' },
  { slug: 'sector-62', name: 'Sector 62 Noida', landmark: 'Electronic City, Fortis Hospital & IT Park' },
  { slug: 'sector-50', name: 'Sector 50 Noida', landmark: 'Wave City Center, Central Market & Metro' },
  { slug: 'sector-137', name: 'Sector 137 Noida', landmark: 'Noida-Greater Noida Expressway & Felix Hospital' },
  { slug: 'sector-18-film-city', name: 'Sector 16 & Film City', landmark: 'Film City, DND Flyway & World Trade Tower' },
  { slug: 'sector-76-78', name: 'Sector 76 & 78 Noida', landmark: 'Silicon City, Amrapali Silicon & Metro' },
  { slug: 'sector-128', name: 'Sector 128 Noida', landmark: 'Jaypee Wish Town, Kalindi Kunj & Sultanpur' },
  { slug: 'sector-142', name: 'Sector 142 Noida', landmark: 'Advant Navis Business Park & Aqua Line Metro' },
  { slug: 'pari-chowk', name: 'Pari Chowk Greater Noida', landmark: 'Alpha 1, Ansal Plaza & India Expo Mart' },
  { slug: 'noida-extension', name: 'Noida Extension (Gr Noida West)', landmark: 'Gaur City Mall, Char Murti & Kisan Chowk' },
  { slug: 'knowledge-park', name: 'Knowledge Park Greater Noida', landmark: 'India Expo Centre, Galgotias & Sharda' },
  { slug: 'indirapuram', name: 'Indirapuram Ghaziabad', landmark: 'Shipra Mall, Habitat Centre & Swarna Jayanti' },
  { slug: 'vaishali', name: 'Vaishali Ghaziabad', landmark: 'Vaishali Metro Station & Max Super Speciality Hospital' },
  { slug: 'vasundhara', name: 'Vasundhara Ghaziabad', landmark: 'Mewar Institute, Sector 10 & Mohan Nagar link' },
  { slug: 'crossings-republik', name: 'Crossings Republik', landmark: 'NH-24, ABES Engineering & Gaur City Border' },
  { slug: 'kaushambi', name: 'Kaushambi', landmark: 'Radisson Blu & Anand Vihar Inter-State Border' },
  { slug: 'mayur-vihar', name: 'Mayur Vihar', landmark: 'Phase 1 & DND Noida Toll Border' },
  { slug: 'botanical-garden', name: 'Botanical Garden (Sector 37)', landmark: 'Magenta/Blue Line Interchange Metro & Amity' },
];

const subRoutes = [];

// 1. Category Hubs
CATEGORIES.forEach((cat) => {
  subRoutes.push({
    path: cat.slug,
    title: `${cat.name} in Noida & NCR – Top Verified Escort Service | 24/7 WhatsApp Booking`,
    desc: `Discover top rated ${cat.keyword} in Noida & NCR. 100% verified real photo profiles, 24/7 hotel outcall, sanitized private suites & direct WhatsApp booking.`,
    h1: `${cat.heading} in Noida & NCR`,
    h2: `Verified 24/7 Service Across Sector 18, 62, Greater Noida & Indirapuram`,
    locName: 'Noida & NCR',
    catName: cat.name,
    keyword: cat.keyword,
    landmark: 'all prime areas across Noida including Sector 18, Sector 62, Expressway & Greater Noida'
  });
});

// 2. Category × Locality Combinations (90 Hyperlocal Landing Pages!)
CATEGORIES.forEach((cat) => {
  LOCALITIES.forEach((loc) => {
    subRoutes.push({
      path: `${cat.slug}/${loc.slug}`,
      title: `${cat.name} in ${loc.name} – Verified Escort Service | 24/7 Outcall`,
      desc: `Find 100% verified ${cat.keyword} in ${loc.name} near ${loc.landmark}. Real photo authentication, zero advance payment & direct WhatsApp 24/7.`,
      h1: `${cat.heading} in ${loc.name}`,
      h2: `100% Real Photo Verified Profiles & 24/7 Hotel Outcall near ${loc.landmark}`,
      locName: `${loc.name}, Noida NCR`,
      catName: cat.name,
      keyword: cat.keyword,
      landmark: loc.landmark
    });
  });
});

// 3. Info & Legal Pages
const INFO_PAGES = [
  { path: 'safety-guide', title: `Safety Guidelines & Scam Prevention – ${BRAND}`, desc: 'Mandatory scam prevention tips, safety guidelines, and direct booking safety protocols in Noida & NCR.', h1: 'Safety Guidelines & Scam Prevention', h2: 'Zero Advance Payment & 100% Discreet Verification Protocols' },
  { path: 'jaipur-areas', title: 'Noida & NCR Localities Directory – All Sectors Index', desc: 'Browse verified escort services, call girls, and massage centers across 18+ localities in Noida, Greater Noida & Ghaziabad.', h1: 'Noida & NCR Localities Directory', h2: 'Hyperlocal Escort Service & VIP Companions Coverage' },
  { path: 'noida-areas', title: 'Noida & NCR Localities Directory – All Sectors Index', desc: 'Browse verified escort services, call girls, and massage centers across 18+ localities in Noida, Greater Noida & Ghaziabad.', h1: 'Noida & NCR Localities Directory', h2: 'Hyperlocal Escort Service & VIP Companions Coverage' },
  { path: 'about', title: `About ${BRAND} – #1 Verified Companion Portal in Noida & NCR`, desc: `Learn about ${BRAND}, the premier verified adult classifieds and companion directory in Noida and surrounding NCR.`, h1: `About ${BRAND}`, h2: 'NCR Leading Verified Companion Network' },
  { path: 'contact', title: `Contact ${BRAND} – 24/7 Helpline & Ad Support`, desc: `Get in touch with ${BRAND} 24/7 support for advertiser onboarding, profile verification, and queries.`, h1: `Contact ${BRAND}`, h2: '24/7 Direct WhatsApp & Phone Helpline' },
  { path: 'faq', title: `Frequently Asked Questions (FAQ) – ${BRAND}`, desc: 'Common questions about escort services, outcall hotel visits, pricing, payment safety, and discretion in Noida.', h1: 'Frequently Asked Questions (FAQ)', h2: 'Clear Answers on Booking, Pricing & Safety' },
  { path: 'terms', title: `Terms and Conditions – ${BRAND}`, desc: `Terms of Service, age verification (18+), and advertising guidelines for ${BRAND}.`, h1: 'Terms and Conditions', h2: 'Strict 18+ Age Compliance & Terms of Use' },
  { path: 'privacy', title: `Privacy Policy – ${BRAND}`, desc: `Privacy Notice and data protection guidelines ensuring 100% confidentiality for ${BRAND} users.`, h1: 'Privacy Policy', h2: '100% Confidentiality & User Data Protection' },
];

subRoutes.push(...INFO_PAGES);

const { BLOGS } = require('./blogData.cjs');

// 4. Blog Hub Route
subRoutes.push({
  path: 'blog',
  title: `Jaipur Companion Guides & Escorts Insights (2026) – ${BRAND}`,
  desc: 'Read 20+ comprehensive guides, safety protocols, hotel outcall recommendations, and nightlife advice for verified companions in Jaipur.',
  h1: 'Jaipur Companion Insights & Guides',
  h2: 'Expert Guides, Anti-Scam Protocols & 5-Star Hotel Outcall Recommendations',
  locName: 'Jaipur',
  catName: 'Blog',
  isBlogHub: true
});

// 5. 20 Individual Blog Post Routes
BLOGS.forEach((post) => {
  subRoutes.push({
    path: `blog/${post.slug}`,
    title: `${post.metaTitle}`,
    desc: post.metaDescription,
    h1: post.title,
    h2: post.excerpt,
    catName: post.category,
    locName: 'Jaipur',
    isArticle: true,
    articleContent: post.content,
    datePublished: post.date,
    keywords: post.keywords ? post.keywords.join(', ') : 'jaipur escorts, hotel outcall'
  });
});

console.log(`Starting SSG Pre-rendering script for ${subRoutes.length} programmatic routes...`);

let count = 0;
subRoutes.forEach((route) => {
  const routeDir = path.join(distDir, route.path);
  if (!fs.existsSync(routeDir)) {
    fs.mkdirSync(routeDir, { recursive: true });
  }

  let routeHtml = baseHtml;

  // 1. Meta Updates
  const canonicalUrl = `${DOMAIN}/${route.path ? (route.path.endsWith('/') ? route.path : `${route.path}/`) : ''}`;
  routeHtml = routeHtml.replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`);
  routeHtml = routeHtml.replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${route.desc}" />`);
  routeHtml = routeHtml.replace(/<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="${canonicalUrl}" />`);

  // 2. Structured Data (Schema JSON-LD)
  let schemaTags = '';
  if (route.isArticle) {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": route.h1,
      "description": route.desc,
      "datePublished": "2026-08-28T00:00:00+05:30",
      "dateModified": "2026-09-26T00:00:00+05:30",
      "author": {
        "@type": "Organization",
        "name": BRAND,
        "url": DOMAIN
      },
      "publisher": {
        "@type": "Organization",
        "name": BRAND,
        "url": DOMAIN,
        "logo": {
          "@type": "ImageObject",
          "url": `${DOMAIN}/favicon.ico`
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": canonicalUrl
      }
    };
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": `${DOMAIN}/` },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": `${DOMAIN}/blog/` },
        { "@type": "ListItem", "position": 3, "name": route.h1, "item": canonicalUrl }
      ]
    };
    schemaTags = `
      <script type="application/ld+json">${JSON.stringify(articleSchema)}</script>
      <script type="application/ld+json">${JSON.stringify(breadcrumbSchema)}</script>
    `;
  } else if (route.isBlogHub) {
    const blogSchema = {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": `${BRAND} Insights & Guides`,
      "description": route.desc,
      "url": canonicalUrl,
      "publisher": {
        "@type": "Organization",
        "name": BRAND,
        "url": DOMAIN
      }
    };
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": `${DOMAIN}/` },
        { "@type": "ListItem", "position": 2, "name": "Blog & Guides", "item": canonicalUrl }
      ]
    };
    schemaTags = `
      <script type="application/ld+json">${JSON.stringify(blogSchema)}</script>
      <script type="application/ld+json">${JSON.stringify(breadcrumbSchema)}</script>
    `;
  } else {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": `How to book verified ${route.catName || 'companions'} in ${route.locName || 'Jaipur'}?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `You can browse verified profiles with genuine photographs on ${BRAND} and connect directly via WhatsApp (${PHONE}) for instant confirmation without any advance payment.`
          }
        },
        {
          "@type": "Question",
          "name": `Is 5-star hotel outcall service available in ${route.locName || 'Jaipur'}?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `Yes, verified independent models and VIP companions provide 24/7 outcall visits to all luxury hotels, private guest houses, and residences across ${route.locName || 'Jaipur'}.`
          }
        },
        {
          "@type": "Question",
          "name": `Are the profile pictures on ${BRAND} 100% real?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `Yes, all advertised independent models undergo strict phone identity and genuine photo verification before listing on our directory.`
          }
        }
      ]
    };
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": `${DOMAIN}/` },
        { "@type": "ListItem", "position": 2, "name": route.catName || "Directory", "item": `${DOMAIN}/${route.path.split('/')[0]}` },
        { "@type": "ListItem", "position": 3, "name": route.locName || route.h1, "item": `${DOMAIN}/${route.path}` }
      ]
    };
    schemaTags = `
      <script type="application/ld+json">${JSON.stringify(faqSchema)}</script>
      <script type="application/ld+json">${JSON.stringify(breadcrumbSchema)}</script>
    `;
  }

  routeHtml = routeHtml.replace('</head>', `${schemaTags}\n</head>`);

  // 3. Inject Semantic Pre-rendered Content inside <noscript>
  let preRenderedBody = '';

  if (route.isArticle) {
    preRenderedBody = `
      <div id="root"></div>
      <noscript>
        <main class="min-h-screen bg-[#f8fafc] text-[#0f172a] p-4 md:p-8" style="font-family: 'Montserrat', system-ui, sans-serif;">
          <header class="max-w-4xl mx-auto mb-8 border-b border-slate-200 pb-6">
            <nav class="text-xs text-amber-700 mb-4 font-semibold">
              <a href="/" class="hover:underline">Home</a> &gt; 
              <a href="/blog/" class="hover:underline">Blog</a> &gt; 
              <span class="text-slate-900 font-bold">${route.h1}</span>
            </nav>
            <div class="inline-block bg-rose-100 text-rose-800 text-xs font-bold px-3 py-1 rounded-full mb-3">${route.catName}</div>
            <h1 class="text-2xl md:text-4xl font-black text-slate-900 mb-3 tracking-tight">${route.h1}</h1>
            <p class="text-sm md:text-base text-slate-600 font-medium italic mb-2">${route.h2}</p>
            <div class="text-xs text-slate-500">Published by <strong>${BRAND}</strong> | 24/7 Helpline: <strong>+91 95214 13060</strong></div>
          </header>

          <article class="max-w-4xl mx-auto bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
            <div class="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4">
              ${route.articleContent}
            </div>
            <div class="mt-8 pt-6 border-t border-slate-200 flex items-center justify-between flex-wrap gap-4">
              <span class="text-xs text-slate-600">Direct WhatsApp Assistance: <strong class="text-slate-900">+91 95214 13060</strong></span>
              <a href="https://wa.me/919521413060" class="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-sm">
                Connect on WhatsApp →
              </a>
            </div>
          </article>

          <section class="max-w-4xl mx-auto mt-8">
            <h3 class="text-lg font-bold text-slate-900 mb-4">Explore More Guides</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="/blog/" class="bg-white border border-slate-200 p-4 rounded-xl shadow-sm hover:border-rose-400 block text-xs font-semibold text-rose-700">
                ← View All 20 Jaipur Guides & Safety Articles
              </a>
              <a href="/call-girls" class="bg-white border border-slate-200 p-4 rounded-xl shadow-sm hover:border-rose-400 block text-xs font-semibold text-rose-700">
                Browse Verified Call Girls in Jaipur →
              </a>
            </div>
          </section>
        </main>
      </noscript>
    `;
  } else if (route.isBlogHub) {
    preRenderedBody = `
      <div id="root"></div>
      <noscript>
        <main class="min-h-screen bg-[#f8fafc] text-[#0f172a] p-4 md:p-8" style="font-family: 'Montserrat', system-ui, sans-serif;">
          <header class="max-w-7xl mx-auto mb-8 border-b border-slate-200 pb-6">
            <nav class="text-xs text-amber-700 mb-4 font-semibold">
              <a href="/" class="hover:underline">Home</a> &gt; 
              <span class="text-slate-900 font-bold">Blog & Guides</span>
            </nav>
            <h1 class="text-2xl md:text-4xl font-black text-slate-900 mb-2 tracking-tight">${route.h1}</h1>
            <h2 class="text-base md:text-lg text-slate-600 font-medium">${route.h2}</h2>
          </header>

          <section class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            ${BLOGS.map(b => `
              <div class="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition">
                <span class="text-[11px] font-bold text-rose-700 uppercase tracking-wider">${b.category}</span>
                <h3 class="font-bold text-slate-900 text-base mt-2 mb-2 leading-snug">
                  <a href="/blog/${b.slug}/" class="hover:text-rose-700">${b.title}</a>
                </h3>
                <p class="text-xs text-slate-600 line-clamp-3 mb-4">${b.excerpt}</p>
                <a href="/blog/${b.slug}/" class="text-xs font-bold text-rose-700 hover:underline">Read Guide →</a>
              </div>
            `).join('')}
          </section>
        </main>
      </noscript>
    `;
  } else {
    preRenderedBody = `
      <div id="root"></div>
      <noscript>
        <main class="min-h-screen bg-[#f8fafc] text-[#0f172a] p-4 md:p-8" style="font-family: 'Montserrat', system-ui, sans-serif;">
          <header class="max-w-7xl mx-auto mb-8 border-b border-slate-200 pb-6">
            <nav class="text-xs text-amber-700 mb-4 font-semibold">
              <a href="/" class="hover:underline">Home</a> &gt; 
              <span class="text-slate-500">${route.catName || 'Directory'}</span> &gt; 
              <span class="text-slate-900 font-bold">${route.locName || route.h1}</span>
            </nav>
            <h1 class="text-2xl md:text-4xl font-black text-slate-900 mb-2 tracking-tight">${route.h1}</h1>
            <h2 class="text-base md:text-lg text-slate-600 font-medium">${route.h2}</h2>
          </header>

          <section class="max-w-7xl mx-auto my-6 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h3 class="text-lg font-bold text-slate-900 mb-3">About ${route.h1}</h3>
            <p class="text-slate-700 leading-relaxed mb-4">
              Welcome to <strong>${BRAND}</strong>, Rajasthan's premier verified classified directory. If you are searching for high-class, independent, and verified <em>${route.keyword || 'companion services'}</em> in <strong>${route.locName || 'Jaipur'}</strong> (near ${route.landmark || 'central landmarks'}), you have arrived at the authentic source.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6 text-sm">
              <div class="bg-slate-50 border border-slate-200 p-4 rounded-xl">
                <div class="text-emerald-700 font-bold text-sm mb-1">✓ 100% Genuine Photos</div>
                <p class="text-slate-600 text-xs">Strict authentication ensuring no fake models or duplicate placeholders.</p>
              </div>
              <div class="bg-slate-50 border border-slate-200 p-4 rounded-xl">
                <div class="text-amber-700 font-bold text-sm mb-1">✓ 24/7 Hotel Outcall</div>
                <p class="text-slate-600 text-xs">Discreet companion visits to Marriott, Radisson, Fairmont, and luxury hotels.</p>
              </div>
              <div class="bg-slate-50 border border-slate-200 p-4 rounded-xl">
                <div class="text-emerald-700 font-bold text-sm mb-1">✓ Zero Advance Fees</div>
                <p class="text-slate-600 text-xs">Pay directly to independent models with zero middleman or agent commission.</p>
              </div>
            </div>
            <div class="pt-4 border-t border-slate-100 flex items-center justify-between flex-wrap gap-4">
              <span class="text-xs text-slate-600">Direct WhatsApp Booking: <strong class="text-slate-900">+91 95214 13060</strong></span>
              <a href="https://wa.me/919521413060" class="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-sm">
                Book on WhatsApp →
              </a>
            </div>
          </section>

          <section class="max-w-7xl mx-auto my-8">
            <h3 class="text-xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h3>
            <div class="space-y-3">
              <div class="bg-white border border-slate-200 p-4 rounded-xl shadow-sm">
                <h4 class="font-bold text-slate-900 text-sm mb-1">How do I book verified escorts in ${route.locName || 'Noida'}?</h4>
                <p class="text-xs text-slate-600 leading-relaxed">Browse authentic profile cards with verified pictures, select your preferred companion, and click the direct WhatsApp button (${PHONE}) for instant, discreet confirmation.</p>
              </div>
              <div class="bg-white border border-slate-200 p-4 rounded-xl shadow-sm">
                <h4 class="font-bold text-slate-900 text-sm mb-1">Is outcall available near ${route.landmark || 'Noida'}?</h4>
                <p class="text-xs text-slate-600 leading-relaxed">Yes, all models offer doorstep outcall services to 5-star hotels, private suites, and villas across ${route.locName || 'Noida'} with complete confidentiality.</p>
              </div>
            </div>
          </section>
        </main>
      </noscript>
    `;
  }

  routeHtml = routeHtml.replace(/<div id="root">[\s\S]*?<\/body>/, `${preRenderedBody.trim()}\n  </body>`);

  fs.writeFileSync(path.join(routeDir, 'index.html'), routeHtml, 'utf8');
  count++;
});

console.log(`✓ Successfully pre-rendered ALL ${count} programmatic routes with semantic H1/H2, Schema LD+JSON, and full SEO body content!`);
