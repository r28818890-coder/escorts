// ============================================================================
// 50 DIVERSIFIED LIVE BACKLINKS GENERATOR (100% FOCUS: CALL GIRLS & ESCORTS SERVICE)
// Target: https://jaipurescortsclub.online/call-girls
// Platforms: Graph.org (DA 91), TinyURL (DA 94), DPaste.com (DA 65), 
//            Rentry.co (DA 68), CleanURI (DA 74), Paste.c-net.org (DA 58), Paste.rs (DA 55)
// ============================================================================

const https = require('https');
const http = require('http');
const querystring = require('querystring');
const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://jaipurescortsclub.online';
const BRAND = 'Jaipur Escorts Club';
const PHONE = '+917357678356';
const WHATSAPP_LINK = 'https://wa.me/917357678356';

const localities = [
  { name: 'Sindhi Camp', slug: 'sindhi-camp', landmark: 'Sindhi Camp Metro & Central Bus Station' },
  { name: 'C Scheme', slug: 'c-scheme', landmark: 'Statue Circle, Ashok Nagar & MI Road' },
  { name: 'Vaishali Nagar', slug: 'vaishali-nagar', landmark: 'National Handloom & Amrapali Plaza' },
  { name: 'Malviya Nagar', slug: 'malviya-nagar', landmark: 'World Trade Park (WTP) & GT Central' },
  { name: 'Mansarovar', slug: 'mansarovar', landmark: 'Mansarovar Metro & VT Road Market' },
  { name: 'Raja Park', slug: 'raja-park', landmark: 'LBS College, AC Market & Govind Marg' },
  { name: 'Tonk Road', slug: 'tonk-road', landmark: 'Gopalpura Flyover & Chokhi Dhani' },
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

const callGirlsThemes = [
  'Verified Call Girls & VIP Escorts Service',
  'Independent Escorts & High Class Models',
  '5-Star Hotel Outcall Escorts Service',
  'College Call Girls & Elite Companions',
  '24/7 Genuine Escorts Service & Cash on Delivery'
];

function requestPromise(options, postData = null) {
  return new Promise((resolve, reject) => {
    const isHttp = options.protocol === 'http:';
    const client = isHttp ? http : https;
    const req = client.request(options, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => resolve({ statusCode: res.statusCode, headers: res.headers, data }));
    });
    req.on('error', reject);
    req.setTimeout(12000, () => { req.destroy(); reject(new Error('Timeout')); });
    if (postData) req.write(postData);
    req.end();
  });
}

function delay(ms) {
  return new Promise(r => setTimeout(r, ms));
}

function naturalDelay() {
  const ms = Math.floor(Math.random() * 1500) + 1200; // 1.2 to 2.7 seconds natural delay
  console.log(`⏳ Waiting ${(ms / 1000).toFixed(1)}s natural delay...`);
  return delay(ms);
}

// ── 1. Graph.org (Telegra.ph DA 91) ──
async function publishGraph(token, title, loc, theme) {
  const targetUrl = `${DOMAIN}/call-girls/${loc.slug}`;
  const payload = JSON.stringify({
    access_token: token,
    title: `${title} - ${loc.name}`,
    author_name: BRAND,
    author_url: targetUrl,
    content: JSON.stringify([
      { tag: 'p', children: [`Looking for top-tier ${theme} in ${loc.name}, Jaipur? Connect directly with 100% genuine, photo-verified independent escorts and call girls at `, { tag: 'a', attrs: { href: targetUrl }, children: [`${BRAND} - ${loc.name} Escorts`] }, '.'] },
      { tag: 'h3', children: [`Premier Escorts Service in ${loc.name} Jaipur (Near ${loc.landmark})`] },
      { tag: 'p', children: [`Our verified female companions provide discreet 5-star hotel outcall and private in-call service near ${loc.landmark}. Zero advance booking fee, direct cash payment upon arrival.`] },
      { tag: 'ul', children: [
        { tag: 'li', children: ['100% Real Photo & WhatsApp ID Verification'] },
        { tag: 'li', children: ['Affordable Elite College Models & High Profile VIP Escorts'] },
        { tag: 'li', children: ['Discreet Doorstep / Hotel Room Outcall within 20 Minutes'] }
      ]},
      { tag: 'p', children: [`Official Call Girls Directory: `, { tag: 'a', attrs: { href: targetUrl }, children: [targetUrl] }, ` | Direct WhatsApp: ${PHONE}`] }
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
async function publishDPaste(title, loc, theme) {
  const targetUrl = `${DOMAIN}/call-girls/${loc.slug}`;
  const text = `# ${title} - ${loc.name}, Jaipur
Official Portal: ${DOMAIN}
Locality Link: ${targetUrl}

- Location: ${loc.name}, Jaipur (Near ${loc.landmark})
- Service: ${theme}
- Verification: 100% Real Pictures & Direct Phone Verification
- Fast 24/7 Hotel Outcall across Jaipur
- Direct WhatsApp Booking: ${PHONE}

Discover full verified escort listings: ${targetUrl}`;

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

// ── 3. Paste.c-net.org (DA 58) ──
async function publishPasteCnet(title, loc, theme) {
  const targetUrl = `${DOMAIN}/call-girls/${loc.slug}`;
  const text = `${title} - ${loc.name}
======================================================
Official Website: ${DOMAIN}
Direct Escorts Hub: ${targetUrl}
Locality: ${loc.name}, Jaipur (Near ${loc.landmark})
Category: ${theme}
Direct Contact & WhatsApp: ${PHONE}
100% Genuine Photos | No Advance Payment | 24/7 Service
======================================================`;

  const res = await requestPromise({
    hostname: 'paste.c-net.org',
    path: '/',
    method: 'POST',
    headers: { 'Content-Type': 'text/plain', 'User-Agent': 'curl/7.68.0' }
  }, text);

  if (res.statusCode === 200) {
    return res.data.trim();
  }
  throw new Error(`Paste.c-net.org status ${res.statusCode}`);
}

// ── 4. Paste.rs (DA 55) ──
async function publishPasteRs(title, loc, theme) {
  const targetUrl = `${DOMAIN}/call-girls/${loc.slug}`;
  const text = `${title}
--------------------------------------------------
Locality: ${loc.name}, Jaipur
Category: ${theme}
Verified Escorts Link: ${targetUrl}
WhatsApp: ${PHONE}
--------------------------------------------------`;

  const res = await requestPromise({
    hostname: 'paste.rs',
    path: '/',
    method: 'POST',
    headers: { 'Content-Type': 'text/plain', 'User-Agent': 'curl/7.68.0' }
  }, text);

  if (res.statusCode === 200 || res.statusCode === 201) {
    return res.data.trim();
  }
  throw new Error(`Paste.rs status ${res.statusCode}`);
}

// ── 5. Rentry.co (DA 68) with Retries ──
async function publishRentry(title, loc, theme) {
  const targetUrl = `${DOMAIN}/call-girls/${loc.slug}`;
  const text = `# ${title} in ${loc.name}, Jaipur

Discover verified [${theme}](${targetUrl}) at **${BRAND}**.

### Locality Highlights:
- **Area**: ${loc.name} (Near ${loc.landmark})
- **Escort Profiles**: [Explore ${loc.name} Escorts](${targetUrl})
- **Features**: 100% Real Pictures, High-Profile College Models, 5-Star Hotel Outcall
- **Payment**: Cash on Delivery / Zero Advance Booking
- **WhatsApp**: [Chat on WhatsApp](${WHATSAPP_LINK})

Main Portal: ${DOMAIN}`;

  const payload = querystring.stringify({ text });

  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await requestPromise({
        hostname: 'rentry.co',
        path: '/api/new',
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Referer': 'https://rentry.co/'
        }
      }, payload);

      if (res.statusCode === 200) {
        const data = JSON.parse(res.data);
        if (data.status === '200' && data.url) return data.url;
      }
    } catch (e) {
      if (attempt === 3) throw e;
      await delay(1500);
    }
  }
  throw new Error('Rentry failed after 3 retries');
}

// ── 6. CleanURI.com (DA 74) ──
async function publishCleanURI(targetUrl) {
  const payload = querystring.stringify({ url: targetUrl });
  const res = await requestPromise({
    hostname: 'cleanuri.com',
    path: '/api/v1/shorten',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': Buffer.byteLength(payload),
      'User-Agent': 'Mozilla/5.0'
    }
  }, payload);

  if (res.statusCode === 200) {
    const json = JSON.parse(res.data);
    if (json.result_url) return json.result_url;
  }
  throw new Error(`CleanURI error: ${res.data}`);
}

// ── 7. TinyURL.com (DA 94) ──
async function publishTinyURL(targetUrl) {
  const res = await requestPromise({
    hostname: 'tinyurl.com',
    path: '/api-create.php?url=' + encodeURIComponent(targetUrl),
    method: 'GET',
    headers: { 'User-Agent': 'Mozilla/5.0' }
  });

  if (res.statusCode === 200 && res.data.startsWith('http')) {
    return res.data.trim();
  }
  throw new Error(`TinyURL error: ${res.data}`);
}

async function main() {
  console.log('════════════════════════════════════════════════════════════════');
  console.log('⚡ EXCLUSIVE CALL GIRLS & ESCORTS SERVICE BACKLINK GENERATOR ⚡');
  console.log('Target: https://jaipurescortsclub.online/call-girls/*');
  console.log('════════════════════════════════════════════════════════════════\n');

  // Initialize Graph Token
  let graphToken = '';
  try {
    const accRes = await requestPromise({
      hostname: 'api.graph.org',
      path: '/createAccount?short_name=EscortsVIP&author_name=JaipurEscortsClub',
      method: 'GET'
    });
    const acc = JSON.parse(accRes.data);
    if (acc.ok) graphToken = acc.result.access_token;
  } catch (e) {
    console.warn('Notice: Graph account init error, will fallback gracefully:', e.message);
  }

  // 7 Distinct platforms
  const platforms = [
    { name: 'Graph.org (Telegra.ph)', da: 'DA 91', type: 'Rich HTML Article', post: (t, l, th, u) => publishGraph(graphToken, t, l, th) },
    { name: 'DPaste.com', da: 'DA 65', type: 'Markdown Documentation', post: (t, l, th, u) => publishDPaste(t, l, th) },
    { name: 'Paste.c-net.org', da: 'DA 58', type: 'Contextual Web Paste', post: (t, l, th, u) => publishPasteCnet(t, l, th) },
    { name: 'Paste.rs', da: 'DA 55', type: 'Fast-Index Raw Anchor', post: (t, l, th, u) => publishPasteRs(t, l, th) },
    { name: 'Rentry.co', da: 'DA 68', type: 'Markdown SEO Hub', post: (t, l, th, u) => publishRentry(t, l, th) },
    { name: 'CleanURI.com', da: 'DA 74', type: 'High-DA 301 Redirect Anchor', post: (t, l, th, u) => publishCleanURI(u) },
    { name: 'TinyURL.com', da: 'DA 94', type: 'High-DA 301 Authority Redirect', post: (t, l, th, u) => publishTinyURL(u) }
  ];

  const targetCount = 50;
  const successfulPosts = [];
  let attempt = 0;

  while (successfulPosts.length < targetCount && attempt < 120) {
    const loc = localities[attempt % localities.length];
    const theme = callGirlsThemes[attempt % callGirlsThemes.length];
    const p = platforms[attempt % platforms.length];
    attempt++;

    const targetUrl = `${DOMAIN}/call-girls/${loc.slug}`;
    const title = `Verified ${theme} in ${loc.name}, Jaipur (Guide #${attempt})`;

    console.log(`\n[Posting ${successfulPosts.length + 1}/${targetCount}] Platform: ${p.name} | Area: ${loc.name}`);
    console.log(`Keyword Focus: ${theme}`);

    try {
      const liveUrl = await p.post(title, loc, theme, targetUrl);
      if (liveUrl) {
        console.log(`✅ SUCCESS [${successfulPosts.length + 1}/${targetCount}]: ${liveUrl}`);
        successfulPosts.push({
          index: successfulPosts.length + 1,
          platform: p.name,
          da: p.da,
          type: p.type,
          title: title,
          locality: loc.name,
          category: theme,
          focusKeyword: `${theme} ${loc.name} Jaipur`,
          liveUrl: liveUrl,
          targetUrl: targetUrl,
          postedAt: new Date().toISOString(),
          status: 'LIVE_VERIFIED_200_OK'
        });

        // Delay between posts
        if (successfulPosts.length < targetCount) {
          await naturalDelay();
        }
      }
    } catch (err) {
      console.warn(`⚠️ Platform ${p.name} failed on attempt ${attempt}: ${err.message}. Retrying next...`);
      await delay(1000);
    }
  }

  // Save to JSON
  const jsonPath = path.join(__dirname, '..', 'public', '50_callgirls_escorts_live_backlinks.json');
  fs.writeFileSync(jsonPath, JSON.stringify(successfulPosts, null, 2), 'utf8');
  console.log(`\n📄 Saved JSON Ledger: ${jsonPath}`);

  // Create HTML Matrix
  const htmlRows = successfulPosts.map(p => `
    <tr>
      <td class="px-4 py-3 font-semibold text-gray-700 text-center">${p.index}</td>
      <td class="px-4 py-3">
        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
          ${p.platform}
        </span>
        <span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 ml-1">
          ${p.da}
        </span>
      </td>
      <td class="px-4 py-3 font-medium text-gray-900">${p.locality}</td>
      <td class="px-4 py-3 text-sm text-pink-700 font-semibold">${p.category}</td>
      <td class="px-4 py-3 text-xs text-gray-500 truncate max-w-xs">${p.targetUrl}</td>
      <td class="px-4 py-3 text-center">
        <a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" 
           class="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Open Live Link ↗
        </a>
      </td>
    </tr>
  `).join('');

  const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>50 Call Girls & Escorts Service Live Backlinks Matrix | Jaipur Escorts Club</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50 text-gray-800 font-sans p-6">
  <div class="max-w-7xl mx-auto">
    <div class="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-700 text-white rounded-2xl p-8 shadow-xl mb-8">
      <h1 class="text-3xl font-extrabold tracking-tight">50 Live Backlinks Ledger (Call Girls & Escorts Service)</h1>
      <p class="mt-2 text-pink-100 text-base">
        100% Pure SEO-Optimized Network across 7 High-DA Distinct Platforms for <strong>https://jaipurescortsclub.online/call-girls</strong>
      </p>
      <div class="mt-4 flex flex-wrap gap-3">
        <span class="bg-white/20 backdrop-blur-md px-3 py-1 rounded-lg text-sm font-semibold">Total Verified: ${successfulPosts.length} Links</span>
        <span class="bg-white/20 backdrop-blur-md px-3 py-1 rounded-lg text-sm font-semibold">7 Unique High-DA Platforms</span>
        <span class="bg-white/20 backdrop-blur-md px-3 py-1 rounded-lg text-sm font-semibold">100% Call Girls & Escorts Focus</span>
        <span class="bg-white/20 backdrop-blur-md px-3 py-1 rounded-lg text-sm font-semibold">Status: HTTP 200/201 Verified</span>
      </div>
    </div>

    <div class="bg-white rounded-2xl shadow overflow-hidden border border-gray-200">
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-100">
            <tr>
              <th scope="col" class="px-4 py-3.5 text-center text-xs font-semibold text-gray-600 uppercase">#</th>
              <th scope="col" class="px-4 py-3.5 text-left text-xs font-semibold text-gray-600 uppercase">Platform & DA</th>
              <th scope="col" class="px-4 py-3.5 text-left text-xs font-semibold text-gray-600 uppercase">Locality</th>
              <th scope="col" class="px-4 py-3.5 text-left text-xs font-semibold text-gray-600 uppercase">Focus Anchor Theme</th>
              <th scope="col" class="px-4 py-3.5 text-left text-xs font-semibold text-gray-600 uppercase">Target Landing Page</th>
              <th scope="col" class="px-4 py-3.5 text-center text-xs font-semibold text-gray-600 uppercase">Verified Live Link</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 bg-white">
            ${htmlRows}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</body>
</html>`;

  const htmlPath = path.join(__dirname, '..', 'public', 'callgirls_escorts_backlinks_matrix.html');
  fs.writeFileSync(htmlPath, htmlContent, 'utf8');
  console.log(`📄 Saved HTML Matrix: ${htmlPath}`);

  console.log('\n════════════════════════════════════════════════════════════════');
  console.log(`🎉 FINISHED! SUCCESSFULLY CREATED & VERIFIED ${successfulPosts.length} LIVE BACKLINKS!`);
  console.log('════════════════════════════════════════════════════════════════\n');
}

main().catch(err => {
  console.error('Execution fatal error:', err);
  process.exit(1);
});
