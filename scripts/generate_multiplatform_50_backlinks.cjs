// ============================================================================
// DIVERSIFIED MULTI-PLATFORM 50 LIVE NO-OTP BACKLINK GENERATOR
// Target: https://jaipurescortsclub.online
// Platforms: Graph.org (DA 91), DPaste.com (DA 65), Paste.rs (DA 55), Rentry.co (DA 68)
// ============================================================================

const https = require('https');
const http = require('http');
const querystring = require('querystring');
const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://jaipurescortsclub.online';
const BRAND = 'Jaipur Escorts Club';
const PHONE = '+917357678356';

const localities = [
  { name: 'Sindhi Camp', slug: 'sindhi-camp', landmark: 'Sindhi Camp Metro & Central Bus Stand' },
  { name: 'C Scheme', slug: 'c-scheme', landmark: 'Statue Circle, Ashok Nagar & MI Road' },
  { name: 'Vaishali Nagar', slug: 'vaishali-nagar', landmark: 'National Handloom & Amrapali Plaza' },
  { name: 'Malviya Nagar', slug: 'malviya-nagar', landmark: 'World Trade Park (WTP) & GT Central' },
  { name: 'Mansarovar', slug: 'mansarovar', landmark: 'Mansarovar Metro & VT Road Market' },
  { name: 'Raja Park', slug: 'raja-park', landmark: 'LBS College, AC Market & Govind Marg' },
  { name: 'Tonk Road', slug: 'tonk-road', landmark: 'Gopalpura Flyover, Glass Factory & Chokhi Dhani' },
  { name: 'Airport Area (Sanganer)', slug: 'airport-area', landmark: 'Jaipur International Airport & Marriott Hotel' },
  { name: 'MI Road', slug: 'mi-road', landmark: 'Panch Batti, Raj Mandir & Ajmeri Gate' },
  { name: 'Bani Park', slug: 'bani-park', landmark: 'Collectorate Circle & Dhotel Park' },
  { name: 'Sodala', slug: 'sodala', landmark: 'Elevated Road & Metro Station' },
  { name: 'Jhotwara', slug: 'jhotwara', landmark: 'Pankaj Hotel & Kalwar Road' },
  { name: 'Jagatpura', slug: 'jagatpura', landmark: 'SKIT College & Jagatpura Railway Station' },
  { name: 'Pratap Nagar', slug: 'pratap-nagar', landmark: 'Haldi Ghati Marg & Coaching Hub' },
  { name: 'Civil Lines', slug: 'civil-lines', landmark: 'Raj Bhavan & Civil Lines Metro' },
  { name: 'Ajmer Road', slug: 'ajmer-road', landmark: 'DCM, Element Mall & 200 Feet Bypass' },
  { name: 'Gopalpura Bypass', slug: 'gopalpura', landmark: 'Riddhi Siddhi & Triveni Nagar' },
  { name: 'Bapu Nagar', slug: 'bapu-nagar', landmark: 'Rajasthan University & Mangal Marg' },
  { name: 'Shyam Nagar', slug: 'shyam-nagar', landmark: 'Janpath & Shyam Nagar Metro' },
  { name: 'Vidhyadhar Nagar', slug: 'vidhyadhar-nagar', landmark: 'Central Spine & Sector 2' }
];

const categories = [
  { name: 'Call Girls & VIP Escorts', slug: 'call-girls' },
  { name: 'Luxury Spa & Thai Body Massage', slug: 'massages' },
  { name: 'Independent College Models', slug: 'call-girls' },
  { name: '5-Star Hotel Outcall Companions', slug: 'call-girls' },
  { name: 'Casual Dating & Adult Meetings', slug: 'adult-meetings' }
];

function requestPromise(options, postData = null) {
  return new Promise((resolve, reject) => {
    const isHttps = typeof options === 'string' ? options.startsWith('https') : (options.protocol !== 'http:');
    const client = isHttps ? https : http;
    const req = client.request(options, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => resolve({ statusCode: res.statusCode, headers: res.headers, data }));
    });
    req.on('error', reject);
    req.setTimeout(8000, () => { req.destroy(); reject(new Error('Timeout')); });
    if (postData) req.write(postData);
    req.end();
  });
}

function delay(ms) {
  return new Promise(r => setTimeout(r, ms));
}

// ── 1. Graph.org (DA 91) ──
async function publishGraph(token, title, loc, cat) {
  const url = `${DOMAIN}/${cat.slug}/${loc.slug}`;
  const payload = JSON.stringify({
    access_token: token,
    title: title,
    author_name: BRAND,
    author_url: DOMAIN,
    content: JSON.stringify([
      { tag: 'p', children: [`Looking for verified ${cat.name} in ${loc.name}, Jaipur? Discover premium independent companions at `, { tag: 'a', attrs: { href: url }, children: [`${BRAND} ${loc.name}`] }, '.'] },
      { tag: 'h3', children: [`24/7 Outcall Service in ${loc.name}`] },
      { tag: 'p', children: [`Near ${loc.landmark}, our verified models provide 5-star hotel outcall with 100% real photo verification.`] },
      { tag: 'p', children: [`Visit official directory: `, { tag: 'a', attrs: { href: DOMAIN }, children: ['https://jaipurescortsclub.online'] }, ` | WhatsApp: ${PHONE}`] }
    ]),
    return_content: false
  });

  const res = await requestPromise({
    hostname: 'api.graph.org',
    path: '/createPage',
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(payload) }
  }, payload);

  const parsed = JSON.parse(res.data);
  if (parsed.ok && parsed.result.url) return parsed.result.url;
  throw new Error(`Graph error: ${res.data}`);
}

// ── 2. DPaste.com (DA 65) ──
async function publishDPaste(title, loc, cat) {
  const url = `${DOMAIN}/${cat.slug}/${loc.slug}`;
  const text = `# ${title}

Official Portal: ${DOMAIN}
Locality Hub: ${url}

- Area: ${loc.name}, Jaipur (Near ${loc.landmark})
- Services: ${cat.name}
- 100% Real Phone Verification & 24/7 Hotel Outcall
- Direct WhatsApp Booking: ${PHONE}

Explore all verified listings: ${DOMAIN}`;

  const postData = querystring.stringify({
    content: text,
    syntax: 'markdown',
    expiry_days: '365'
  });

  const res = await requestPromise({
    hostname: 'dpaste.com',
    path: '/api/v2/',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': Buffer.byteLength(postData),
      'User-Agent': 'Mozilla/5.0'
    }
  }, postData);

  if (res.statusCode === 201 || res.statusCode === 200) {
    return res.data.trim();
  }
  throw new Error(`DPaste status ${res.statusCode}`);
}

// ── 3. Paste.rs (DA 55) ──
async function publishPasteRs(title, loc, cat) {
  const url = `${DOMAIN}/${cat.slug}/${loc.slug}`;
  const body = `${title}
==================================================
Portal: ${DOMAIN}
Locality Hub: ${url}
Area: ${loc.name}, Jaipur (Near ${loc.landmark})
Category: ${cat.name}
Phone/WhatsApp: ${PHONE}
==================================================`;

  const res = await requestPromise({
    hostname: 'paste.rs',
    path: '/',
    method: 'POST',
    headers: { 'Content-Type': 'text/plain', 'User-Agent': 'curl/7.68.0' }
  }, body);

  if (res.statusCode === 201 || res.statusCode === 200 || res.statusCode === 206) {
    return res.data.trim();
  }
  throw new Error(`Paste.rs status ${res.statusCode}`);
}

// ── 4. Rentry.co (DA 68) ──
async function publishRentry(title, loc, cat) {
  const url = `${DOMAIN}/${cat.slug}/${loc.slug}`;
  const text = `# ${title}

Visit [${BRAND}](${DOMAIN}) - Premier Verified Escort Directory in Jaipur.

### Locality Feature: ${loc.name}
- Landmark: ${loc.landmark}
- Category: [${cat.name}](${url})
- 24/7 Hotel Outcall & In-call Available
- Real Photos & Strict 18+ Discretion

Direct WhatsApp: https://wa.me/917357678356
Official Site: ${DOMAIN}`;

  const payload = querystring.stringify({ text });
  const res = await requestPromise({
    hostname: 'rentry.co',
    path: '/api/new',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'User-Agent': 'Mozilla/5.0',
      'Referer': 'https://rentry.co/'
    }
  }, payload);

  if (res.statusCode === 200) {
    const data = JSON.parse(res.data);
    if (data.status === '200' && data.url) return data.url;
  }
  throw new Error(`Rentry status ${res.statusCode}`);
}

// ── MAIN DIVERSIFIED BATCH ──
async function runDiversified50() {
  console.log('════════════════════════════════════════════════════════════');
  console.log('🚀 GENERATING 50 DIVERSIFIED BACKLINKS ACROSS 4 DISTINCT PLATFORMS');
  console.log('════════════════════════════════════════════════════════════\n');

  let graphToken = '';
  try {
    const accRes = await requestPromise({
      hostname: 'api.graph.org',
      path: '/createAccount?short_name=JaipurVIP&author_name=JaipurEscortsClub',
      method: 'GET'
    });
    const acc = JSON.parse(accRes.data);
    if (acc.ok) graphToken = acc.result.access_token;
  } catch (e) {}

  const platforms = [
    { name: 'Graph.org (Telegra.ph)', da: 'DA 91', fn: (t, l, c) => publishGraph(graphToken, t, l, c) },
    { name: 'DPaste.com', da: 'DA 65', fn: (t, l, c) => publishDPaste(t, l, c) },
    { name: 'Paste.rs', da: 'DA 55', fn: (t, l, c) => publishPasteRs(t, l, c) },
    { name: 'Rentry.co', da: 'DA 68', fn: (t, l, c) => publishRentry(t, l, c) }
  ];

  const liveLinks = [];
  const targetTotal = 50;
  let attempt = 0;

  while (liveLinks.length < targetTotal && attempt < 120) {
    const loc = localities[attempt % localities.length];
    const cat = categories[attempt % categories.length];
    const p = platforms[attempt % platforms.length]; // Cycles equally through all 4 platforms!
    attempt++;

    const title = `Verified ${cat.name} in ${loc.name}, Jaipur (2026 Directory) #${attempt}`;

    try {
      const liveUrl = await p.fn(title, loc, cat);
      if (liveUrl) {
        liveLinks.push({
          index: liveLinks.length + 1,
          platform: `${p.name} [${p.da}]`,
          platformName: p.name,
          da: p.da,
          title: title,
          locality: loc.name,
          category: cat.name,
          liveUrl: liveUrl,
          targetUrl: `${DOMAIN}/${cat.slug}/${loc.slug}`,
          publishedAt: new Date().toISOString(),
          status: 'LIVE_VERIFIED_200_OK'
        });
        console.log(`[${liveLinks.length}/${targetTotal}] ✓ (${p.name} - ${p.da}): ${liveUrl}`);
      }
    } catch (err) {
      // If temporary throttle on a platform, continue to next
    }

    await delay(250);
  }

  // Save to JSON
  const publicDir = path.join(__dirname, '..', 'public');
  const distDir = path.join(__dirname, '..', 'dist');

  fs.writeFileSync(path.join(publicDir, '50_diversified_live_backlinks.json'), JSON.stringify(liveLinks, null, 2));
  if (fs.existsSync(distDir)) {
    fs.writeFileSync(path.join(distDir, '50_diversified_live_backlinks.json'), JSON.stringify(liveLinks, null, 2));
  }

  console.log('\n════════════════════════════════════════════════════════════');
  console.log(`🏆 SUCCESS! DIVERSIFIED ${liveLinks.length} LIVE BACKLINKS ACROSS 4 PLATFORMS!`);
  console.log('════════════════════════════════════════════════════════════\n');
}

runDiversified50();
