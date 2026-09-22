const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, '..', 'dist');
const indexPath = path.join(distDir, 'index.html');

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

// Jaipur Localities with Landmarks
const LOCALITIES = [
  { slug: 'sindhi-camp', name: 'Sindhi Camp', landmark: 'Sindhi Camp Metro Station & Central Bus Stand' },
  { slug: 'mi-road', name: 'MI Road', landmark: 'Panch Batti, Raj Mandir Cinema & Ajmeri Gate' },
  { slug: 'vaishali-nagar', name: 'Vaishali Nagar', landmark: 'National Handloom, Amrapali Plaza & Nursery Circle' },
  { slug: 'malviya-nagar', name: 'Malviya Nagar', landmark: 'World Trade Park (WTP), GT Central & Jawahar Circle' },
  { slug: 'c-scheme', name: 'C Scheme', landmark: 'Statue Circle, Ashok Nagar & Central Park' },
  { slug: 'raja-park', name: 'Raja Park', landmark: 'LBS College, AC Market & Govind Marg' },
  { slug: 'mansarovar', name: 'Mansarovar', landmark: 'Mansarovar Metro, VT Road & City Park' },
  { slug: 'civil-lines', name: 'Civil Lines', landmark: 'Raj Bhavan, Civil Lines Metro & Jacob Road' },
  { slug: 'bani-park', name: 'Bani Park', landmark: 'Collectorate Circle, Dhotel Park & Kabir Marg' },
  { slug: 'tonk-road', name: 'Tonk Road', landmark: 'Gopalpura Flyover, Glass Factory & Chokhi Dhani' },
  { slug: 'jaipur-railway-station', name: 'Jaipur Railway Station', landmark: 'Platform 1 Main Exit, Hasanpura & Station Road' },
  { slug: 'jagatpura', name: 'Jagatpura', landmark: 'SKIT College, Railway Overbridge & Akshay Patra' },
  { slug: 'gopalpura', name: 'Gopalpura Bypass', landmark: 'Riddhi Siddhi Circle, Triveni Nagar & Coaching Hub' },
  { slug: 'sodala', name: 'Sodala', landmark: 'Elevated Road, Sodala Metro & Swej Farm' },
  { slug: 'vidhyadhar-nagar', name: 'Vidhyadhar Nagar', landmark: 'Central Spine, Sector 2 & National Handloom' },
  { slug: 'jhotwara', name: 'Jhotwara', landmark: 'Pankaj Hotel, Kalwar Road & Lata Circle' },
  { slug: 'airport-area', name: 'Airport Area (Sanganer)', landmark: 'Jaipur International Airport Terminal 2 & Marriott Hotel' },
  { slug: 'ajmer-road', name: 'Ajmer Road', landmark: 'DCM, Element Mall, 200 Feet Bypass & DPS' },
];

const subRoutes = [];

// 1. Category Hubs
CATEGORIES.forEach((cat) => {
  subRoutes.push({
    path: cat.slug,
    title: `${cat.name} in Jaipur – Top Verified Escort Service | 24/7 WhatsApp Booking`,
    desc: `Discover top rated ${cat.keyword} in Jaipur. 100% verified real photo profiles, 24/7 hotel outcall, sanitized private suites & direct WhatsApp booking.`,
    h1: `${cat.heading} in Jaipur`,
    h2: `Verified 24/7 Service Across All Prime Localities in Pink City`,
    locName: 'Jaipur City',
    catName: cat.name,
    keyword: cat.keyword,
    landmark: 'all prime areas across Jaipur including Sindhi Camp, Vaishali Nagar, Malviya Nagar & C Scheme'
  });
});

// 2. Category × Locality Combinations (90 Hyperlocal Landing Pages!)
CATEGORIES.forEach((cat) => {
  LOCALITIES.forEach((loc) => {
    subRoutes.push({
      path: `${cat.slug}/${loc.slug}`,
      title: `${cat.name} in ${loc.name}, Jaipur – Verified Escort Service | 24/7 Outcall`,
      desc: `Find 100% verified ${cat.keyword} in ${loc.name}, Jaipur near ${loc.landmark}. Real photo authentication, zero advance payment & direct WhatsApp 24/7.`,
      h1: `${cat.heading} in ${loc.name}, Jaipur`,
      h2: `100% Real Photo Verified Profiles & 24/7 Hotel Outcall near ${loc.landmark}`,
      locName: `${loc.name}, Jaipur`,
      catName: cat.name,
      keyword: cat.keyword,
      landmark: loc.landmark
    });
  });
});

// 3. Info & Legal Pages
const INFO_PAGES = [
  { path: 'safety-guide', title: 'Safety Guidelines & Scam Prevention – Jaipur Escorts Club', desc: 'Mandatory scam prevention tips, safety guidelines, and direct booking safety protocols in Jaipur.', h1: 'Safety Guidelines & Scam Prevention', h2: 'Zero Advance Payment & 100% Discreet Verification Protocols' },
  { path: 'jaipur-areas', title: 'Jaipur Localities Directory – All Areas Escort Service Index', desc: 'Browse verified escort services, call girls, and massage centers across all 18+ localities in Jaipur.', h1: 'Jaipur Localities Directory', h2: 'Hyperlocal Escort Service & VIP Companions Coverage' },
  { path: 'about', title: 'About Jaipur Escorts Club – #1 Verified Companion Portal in Jaipur', desc: 'Learn about Jaipur Escorts Club, the premier verified adult classifieds and companion directory in Jaipur.', h1: 'About Jaipur Escorts Club', h2: 'Rajasthan\'s Leading Verified Companion Network' },
  { path: 'contact', title: 'Contact Jaipur Escorts Club – 24/7 Helpline & Ad Support', desc: 'Get in touch with Jaipur Escorts Club 24/7 support for advertiser onboarding, profile verification, and queries.', h1: 'Contact Jaipur Escorts Club', h2: '24/7 Direct WhatsApp & Phone Helpline' },
  { path: 'faq', title: 'Frequently Asked Questions (FAQ) – Jaipur Escorts Club', desc: 'Common questions about escort services, outcall hotel visits, pricing, payment safety, and discretion in Jaipur.', h1: 'Frequently Asked Questions (FAQ)', h2: 'Clear Answers on Booking, Pricing & Safety' },
  { path: 'terms', title: 'Terms and Conditions – Jaipur Escorts Club', desc: 'Terms of Service, age verification (18+), and advertising guidelines for Jaipur Escorts Club.', h1: 'Terms and Conditions', h2: 'Strict 18+ Age Compliance & Terms of Use' },
  { path: 'privacy', title: 'Privacy Policy – Jaipur Escorts Club', desc: 'Privacy Notice and data protection guidelines ensuring 100% confidentiality for Jaipur Escorts Club users.', h1: 'Privacy Policy', h2: '100% Confidentiality & User Data Protection' },
];

subRoutes.push(...INFO_PAGES);

console.log(`Starting SSG Pre-rendering script for ${subRoutes.length} programmatic routes...`);

let count = 0;
subRoutes.forEach((route) => {
  const routeDir = path.join(distDir, route.path);
  if (!fs.existsSync(routeDir)) {
    fs.mkdirSync(routeDir, { recursive: true });
  }

  let routeHtml = baseHtml;

  // 1. Meta Updates
  routeHtml = routeHtml.replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`);
  routeHtml = routeHtml.replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${route.desc}" />`);
  routeHtml = routeHtml.replace(/<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="https://jaipurescortsclub.online/${route.path}" />`);

  // 2. Structured Data (Schema JSON-LD)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `How to book verified ${route.catName || 'companions'} in ${route.locName || 'Jaipur'}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `You can browse verified profiles with genuine photographs on Jaipur Escorts Club and connect directly via WhatsApp (+917357678356) for instant confirmation without any advance payment.`
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
        "name": `Are the profile pictures on Jaipur Escorts Club 100% real?`,
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
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://jaipurescortsclub.online/" },
      { "@type": "ListItem", "position": 2, "name": route.catName || "Directory", "item": `https://jaipurescortsclub.online/${route.path.split('/')[0]}` },
      { "@type": "ListItem", "position": 3, "name": route.locName || route.h1, "item": `https://jaipurescortsclub.online/${route.path}` }
    ]
  };

  const schemaTags = `
    <script type="application/ld+json">${JSON.stringify(faqSchema)}</script>
    <script type="application/ld+json">${JSON.stringify(breadcrumbSchema)}</script>
  `;

  routeHtml = routeHtml.replace('</head>', `${schemaTags}\n</head>`);

  // 3. Inject Semantic Pre-rendered Content inside <noscript> for instant Googlebot indexing with zero mobile user flash
  const preRenderedBody = `
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
            Welcome to <strong>Jaipur Escorts Club</strong>, Rajasthan's premier verified classified directory. If you are searching for high-class, independent, and verified <em>${route.keyword || 'companion services'}</em> in <strong>${route.locName || 'Jaipur'}</strong> (near ${route.landmark || 'central landmarks'}), you have arrived at the authentic source.
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
            <span class="text-xs text-slate-600">Direct WhatsApp Booking: <strong class="text-slate-900">+91 73576 78356</strong></span>
            <a href="https://wa.me/917357678356" class="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-sm">
              Book on WhatsApp →
            </a>
          </div>
        </section>

        <section class="max-w-7xl mx-auto my-8">
          <h3 class="text-xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h3>
          <div class="space-y-3">
            <div class="bg-white border border-slate-200 p-4 rounded-xl shadow-sm">
              <h4 class="font-bold text-slate-900 text-sm mb-1">How do I book verified escorts in ${route.locName || 'Jaipur'}?</h4>
              <p class="text-xs text-slate-600 leading-relaxed">Browse authentic profile cards with verified pictures, select your preferred companion, and click the direct WhatsApp button (+917357678356) for instant, discreet confirmation.</p>
            </div>
            <div class="bg-white border border-slate-200 p-4 rounded-xl shadow-sm">
              <h4 class="font-bold text-slate-900 text-sm mb-1">Is outcall available near ${route.landmark || 'Jaipur'}?</h4>
              <p class="text-xs text-slate-600 leading-relaxed">Yes, all models offer doorstep outcall services to 5-star hotels, private suites, and villas across ${route.locName || 'Jaipur'} with complete confidentiality.</p>
            </div>
          </div>
        </section>
      </main>
    </noscript>
  `;

  routeHtml = routeHtml.replace(/<div id="root">[\s\S]*?<\/div>\s*<\/body>/, `${preRenderedBody.trim()}\n  </body>`);

  fs.writeFileSync(path.join(routeDir, 'index.html'), routeHtml, 'utf8');
  count++;
});

console.log(`✓ Successfully pre-rendered ALL ${count} programmatic routes with semantic H1/H2, Schema LD+JSON, and full SEO body content!`);
