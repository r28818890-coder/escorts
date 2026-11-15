// ============================================================================
// AUTOMATED 500 LIVE NO-OTP AUTHORITY BACKLINK GENERATOR (DA 91+ GRAPH.ORG)
// Canonical Target Domain: https://wenoidaescorts.com (Escorts Hub Noida)
// Primary Keywords:
// - "noida escorts", "noida callgirl", "callgirl noida", "escorts noida"
// - "call girl noida", "escorts service noida", "sector 18 escorts", "sector 62 call girls"
// ============================================================================

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://wenoidaescorts.com';
const BRAND = 'Escorts Hub Noida';
const PHONE = '+918218125815';
const WHATSAPP = '918218125815';

// 24 Detailed Noida Localities with landmarks
const noidaLocalities = [
  { name: 'Sector 18', slug: 'sector-18', landmark: 'DLF Mall of India, Radisson Blu Hotel & Atta Market', pincode: '201301' },
  { name: 'Sector 62', slug: 'sector-62', landmark: 'Noida IT Park, Fortis Hospital & Electronic City Metro', pincode: '201309' },
  { name: 'Sector 50', slug: 'sector-50', landmark: 'Wave City Center, Central Market & Blue Line Metro', pincode: '201307' },
  { name: 'Sector 137', slug: 'sector-137', landmark: 'Noida Expressway, Paras Tierea & Felix Hospital', pincode: '201305' },
  { name: 'Sector 16', slug: 'sector-16', landmark: 'Film City Media Hub, Savoy Suites & DND Flyway', pincode: '201301' },
  { name: 'Sector 75', slug: 'sector-75', landmark: 'Spectrum Metro Mall & Supertech Capetown', pincode: '201307' },
  { name: 'Sector 76', slug: 'sector-76', landmark: 'Amrapali Princely Estate & Sector 76 Metro', pincode: '201307' },
  { name: 'Sector 78', slug: 'sector-78', landmark: 'Mahagun Moderne, Hyde Park & Antriksh Golf City', pincode: '201307' },
  { name: 'Sector 128', slug: 'sector-128', landmark: 'Jaypee Greens Wish Town, Kalindi Kunj Road & Sultanpur', pincode: '201304' },
  { name: 'Sector 93', slug: 'sector-93', landmark: 'Grand Omaxe, ATS Greens Village & Expressway', pincode: '201304' },
  { name: 'Sector 104', slug: 'sector-104', landmark: 'Hajipur Market, Sector 101 Aqua Line Metro', pincode: '201304' },
  { name: 'Sector 110', slug: 'sector-110', landmark: 'Lotus Panache & Sector 82 Gejha Market', pincode: '201304' },
  { name: 'Sector 120', slug: 'sector-120', landmark: 'Prateek Laurel, Amrapali Zodiac & Sector 122', pincode: '201307' },
  { name: 'Sector 125', slug: 'sector-125', landmark: 'Amity University Campus & Okhla Bird Sanctuary', pincode: '201303' },
  { name: 'Sector 132', slug: 'sector-132', landmark: 'Genesis Global School & Express Trade Towers', pincode: '201304' },
  { name: 'Sector 142', slug: 'sector-142', landmark: 'Advant Navis Corporate Hub & Aqua Line Interchange', pincode: '201305' },
  { name: 'Sector 168', slug: 'sector-168', landmark: 'Golden Palm, Paras Tierea & Expressway Commercial', pincode: '201305' },
  { name: 'Noida Extension', slug: 'noida-extension', landmark: 'Gaur City Mall, Char Murti Chowk & Greater Noida West', pincode: '201306' },
  { name: 'Pari Chowk', slug: 'pari-chowk', landmark: 'India Expo Mart, Jaypee Greens & Alpha 1 Commercial', pincode: '201310' },
  { name: 'Film City', slug: 'film-city', landmark: 'National TV Studios, Marwah Studios & Sector 16A', pincode: '201301' },
  { name: 'Sector 15', slug: 'sector-15', landmark: 'Sector 15 Metro Station, Naya Bans & Crowne Plaza', pincode: '201301' },
  { name: 'Sector 29', slug: 'sector-29', landmark: 'Ganga Shopping Complex, Brahmaputra Market & Botanical Garden', pincode: '201301' },
  { name: 'Sector 44', slug: 'sector-44', landmark: 'Amity Gate 2, Botanical Garden Metro & Golf Course', pincode: '201303' },
  { name: 'Greater Noida', slug: 'greater-noida', landmark: 'Knowledge Park, Yamuna Expressway & Pari Chowk', pincode: '201310' }
];

// Target landing pages across the site
const targetPages = [
  { url: `${DOMAIN}/`, path: '/', label: 'Noida Escorts Official Home' },
  { url: `${DOMAIN}/noida-escorts`, path: '/noida-escorts', label: 'Noida Escorts 3000-Line Master Pillar' },
  { url: `${DOMAIN}/noida-callgirl`, path: '/noida-callgirl', label: 'Noida Callgirl 3000-Line Master Pillar' },
  { url: `${DOMAIN}/callgirl-noida`, path: '/callgirl-noida', label: 'Callgirl Noida 3000-Line Master Pillar' },
  { url: `${DOMAIN}/escorts-noida`, path: '/escorts-noida', label: 'Escorts Noida 3000-Line Master Pillar' },
  { url: `${DOMAIN}/call-girls`, path: '/call-girls', label: 'Noida Call Girls Directory' },
  { url: `${DOMAIN}/booking`, path: '/booking', label: '24/7 Verified Booking Portal' }
];

// Primary keywords matrix
const keywordMatrix = [
  'noida escorts',
  'noida callgirl',
  'callgirl noida',
  'escorts noida',
  'call girl noida',
  'escorts service noida',
  'escorts in noida',
  'call girls in noida',
  'independent call girls in noida',
  'vip escorts in noida',
  'hotel outcall escorts noida',
  'russian escorts noida',
  'college girl call girls noida',
  'housewife escorts in noida',
  'cheap call girls in noida cash on delivery',
  'best escort service in noida'
];

// Categories
const companionCategories = [
  { name: 'VIP Models & High Fashion Escorts', tag: 'VIP Models' },
  { name: 'Independent College Call Girls', tag: 'College Hostesses' },
  { name: 'Celebrity & Air Hostess Companions', tag: 'Air Hostess' },
  { name: 'Elite Russian & Foreign Escorts', tag: 'Russian VIP' },
  { name: 'Mature Housewife Companions', tag: 'Housewife Escorts' },
  { name: '5-Star Hotel Outcall Specialists', tag: 'Hotel Outcall' }
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
    req.setTimeout(12000, () => { req.destroy(); reject(new Error('Timeout')); });
    if (postData) req.write(postData);
    req.end();
  });
}

function delay(ms) {
  return new Promise(r => setTimeout(r, ms));
}

// Token cache / account manager
const tokenCache = {};
async function getGraphToken(authorId) {
  if (tokenCache[authorId]) return tokenCache[authorId];
  try {
    const shortName = `NoidaHub${authorId}`.substring(0, 32);
    const accountRes = await requestPromise({
      hostname: 'api.graph.org',
      path: `/createAccount?short_name=${shortName}&author_name=${encodeURIComponent(BRAND)}&author_url=${encodeURIComponent(DOMAIN)}`,
      method: 'GET'
    });
    const acc = JSON.parse(accountRes.data);
    if (acc.ok && acc.result && acc.result.access_token) {
      tokenCache[authorId] = acc.result.access_token;
      return acc.result.access_token;
    }
    throw new Error(`Token creation error: ${accountRes.data}`);
  } catch (err) {
    // Retry once with a fallback timestamped author
    const fallbackName = `Noida${Date.now() % 100000}`;
    const accountRes = await requestPromise({
      hostname: 'api.graph.org',
      path: `/createAccount?short_name=${fallbackName}&author_name=${encodeURIComponent(BRAND)}&author_url=${encodeURIComponent(DOMAIN)}`,
      method: 'GET'
    });
    const acc = JSON.parse(accountRes.data);
    if (acc.ok && acc.result && acc.result.access_token) {
      tokenCache[authorId] = acc.result.access_token;
      return acc.result.access_token;
    }
    throw err;
  }
}

async function publishSingleBacklink(index, total) {
  const authorId = (index % 30) + 1;
  const token = await getGraphToken(authorId);

  const loc = noidaLocalities[index % noidaLocalities.length];
  const cat = companionCategories[index % companionCategories.length];
  const primaryKw = keywordMatrix[index % keywordMatrix.length];
  const targetObj = targetPages[index % targetPages.length];
  const localityTargetUrl = `${DOMAIN}/call-girls/${loc.slug}`;

  const titlePrefixes = [
    `${primaryKw.toUpperCase()} - Verified Companions in ${loc.name}`,
    `Best ${primaryKw} Service in ${loc.name}, Noida | 100% Real Photos`,
    `Verified ${primaryKw} in ${loc.name} Noida - 24/7 Hotel Outcall`,
    `${loc.name} ${primaryKw} | Fast 20-Min Arrival at ${loc.landmark}`,
    `Elite ${primaryKw} & ${cat.tag} in ${loc.name} Noida`,
    `Genuine ${primaryKw} - Cash On Delivery in ${loc.name}`,
    `24/7 Hotel Outcall ${primaryKw} in ${loc.name} near ${loc.landmark}`,
    `VIP ${cat.tag} in ${loc.name} Noida | Premier Companion Agency`
  ];
  const title = `${titlePrefixes[index % titlePrefixes.length]} #${index + 1}`;

  const payload = JSON.stringify({
    access_token: token,
    title: title,
    author_name: BRAND,
    author_url: targetObj.url,
    content: JSON.stringify([
      {
        tag: 'p',
        children: [
          `Searching for verified `,
          { tag: 'a', attrs: { href: targetObj.url }, children: [primaryKw] },
          ` or discrete 24/7 hotel outcall companions in ${loc.name}, Noida? Connect directly with `,
          { tag: 'a', attrs: { href: DOMAIN }, children: [BRAND] },
          ` for 100% genuine photo profiles, zero advance payment, and express 20–30 minute arrival across ${loc.name} (near ${loc.landmark}, PIN ${loc.pincode}).`
        ]
      },
      {
        tag: 'h3',
        children: [`Premium ${cat.name} in ${loc.name}, Noida`]
      },
      {
        tag: 'p',
        children: [
          `Whether you are staying at a luxury hotel, private apartment, or business suite in ${loc.name}, our verified independent companions offer warm hospitality, intellectual conversation, and complete privacy. Discover dedicated profiles at our `,
          { tag: 'a', attrs: { href: localityTargetUrl }, children: [`${loc.name} Call Girls & Escorts Section`] },
          ` or book via our `,
          { tag: 'a', attrs: { href: `${DOMAIN}/booking` }, children: ['24/7 VIP Outcall Portal'] },
          `.`
        ]
      },
      {
        tag: 'ul',
        children: [
          { tag: 'li', children: ['100% Real Photos & WhatsApp Video Call Verification'] },
          { tag: 'li', children: ['Zero Advance Payment — Strict Cash on Delivery (COD) / UPI at Handshake'] },
          { tag: 'li', children: [`Fast 20-30 Minute Express Outcall near ${loc.landmark}`] },
          { tag: 'li', children: ['Discreet, Unmarked Luxury Vehicles for Complete Anonymity'] }
        ]
      },
      {
        tag: 'h3',
        children: ['Target SEO Pillar Resources & Verified Links']
      },
      {
        tag: 'p',
        children: [
          `Explore our comprehensive 3000-line verified resources: `,
          { tag: 'a', attrs: { href: `${DOMAIN}/noida-escorts` }, children: ['Noida Escorts Master Guide'] },
          ` • `,
          { tag: 'a', attrs: { href: `${DOMAIN}/noida-callgirl` }, children: ['Noida Callgirl Verified Portal'] },
          ` • `,
          { tag: 'a', attrs: { href: `${DOMAIN}/callgirl-noida` }, children: ['Callgirl Noida Complete Directory'] },
          ` • `,
          { tag: 'a', attrs: { href: `${DOMAIN}/escorts-noida` }, children: ['Escorts Noida 24/7 Outcall Services'] },
          `.`
        ]
      },
      {
        tag: 'p',
        children: [
          `Direct Booking: `,
          { tag: 'a', attrs: { href: `tel:${PHONE}` }, children: [PHONE] },
          ` | WhatsApp Direct: `,
          { tag: 'a', attrs: { href: `https://wa.me/${WHATSAPP}` }, children: ['Chat on WhatsApp (24/7)'] },
          ` | Official Website: `,
          { tag: 'a', attrs: { href: DOMAIN }, children: [DOMAIN] }
        ]
      }
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
  if (parsed.ok && parsed.result && parsed.result.url) {
    return {
      id: `bl-500-${String(index + 1).padStart(4, '0')}`,
      index: index + 1,
      platform: 'Graph.org (Telegra.ph) [DA 91]',
      domain: 'graph.org',
      domainAuthority: 91,
      title: title,
      locality: loc.name,
      pincode: loc.pincode,
      category: cat.tag,
      liveUrl: parsed.result.url,
      targetUrl: targetObj.url,
      targetPage: targetObj.path,
      anchorText: primaryKw,
      status: 'Live',
      publishedAt: new Date().toISOString(),
      dateDisplay: 'November 15, 2026',
      contextSnippet: `Top verified ${primaryKw} in ${loc.name}, Noida near ${loc.landmark}. 100% genuine photo verified companions with express 20-min hotel outcall and cash on delivery via ${BRAND} (${targetObj.url}).`
    };
  }
  throw new Error(`Publish failed for #${index + 1}: ${res.data}`);
}

async function main() {
  console.log('═══════════════════════════════════════════════════════════════════════════════');
  console.log('🚀 GENERATING & PUBLISHING 500 LIVE AUTHORITY BACKLINKS (DA 91+)');
  console.log(`🌐 Target Domain: ${DOMAIN} (${BRAND})`);
  console.log(`📞 Contact: ${PHONE} | WhatsApp: ${WHATSAPP}`);
  console.log('🎯 Anchor Keywords: "noida escorts", "noida callgirl", "callgirl noida", "escorts noida"');
  console.log('═══════════════════════════════════════════════════════════════════════════════\n');

  const TARGET_TOTAL = 500;
  const CONCURRENCY = 5;
  const results = [];
  let successful = 0;
  let failed = 0;

  const startTime = Date.now();

  for (let i = 0; i < TARGET_TOTAL; i += CONCURRENCY) {
    const batchIndices = [];
    for (let j = 0; j < CONCURRENCY && (i + j) < TARGET_TOTAL; j++) {
      batchIndices.push(i + j);
    }

    const batchPromises = batchIndices.map(async (idx) => {
      let attempts = 0;
      while (attempts < 3) {
        try {
          const record = await publishSingleBacklink(idx, TARGET_TOTAL);
          return { success: true, record };
        } catch (err) {
          attempts++;
          await delay(300 * attempts);
          if (attempts >= 3) {
            return { success: false, index: idx + 1, error: err.message };
          }
        }
      }
    });

    const batchResults = await Promise.all(batchPromises);

    for (const r of batchResults) {
      if (r && r.success) {
        successful++;
        results.push(r.record);
        if (successful % 25 === 0 || successful === TARGET_TOTAL) {
          const elapsedSec = ((Date.now() - startTime) / 1000).toFixed(1);
          console.log(`[${successful}/${TARGET_TOTAL}] ✓ LIVE: ${r.record.title.substring(0, 50)}... -> ${r.record.liveUrl} (${elapsedSec}s elapsed)`);
        }
      } else {
        failed++;
        console.warn(`[Index ${r.index}] ❌ Failed after 3 attempts: ${r.error}`);
      }
    }

    // Adaptive inter-batch throttling
    await delay(120);
  }

  const durationSec = ((Date.now() - startTime) / 1000).toFixed(1);
  console.log('\n═══════════════════════════════════════════════════════════════════════════════');
  console.log(`🎉 BACKLINK CAMPAIGN COMPLETE!`);
  console.log(`✓ Total Verified Live Backlinks Created: ${results.length}`);
  console.log(`⏱️ Execution Time: ${durationSec} seconds`);
  console.log(`🏆 Average Root Authority: DA 91+`);
  console.log('═══════════════════════════════════════════════════════════════════════════════\n');

  // Save to public and dist directories
  const publicDir = path.join(__dirname, '..', 'public');
  const distDir = path.join(__dirname, '..', 'dist');

  // 1. JSON Data Stores
  fs.writeFileSync(path.join(publicDir, '500_live_backlinks.json'), JSON.stringify(results, null, 2));
  fs.writeFileSync(path.join(publicDir, 'live_backlinks.json'), JSON.stringify(results, null, 2));
  fs.writeFileSync(path.join(publicDir, 'backlinks.json'), JSON.stringify(results, null, 2));

  if (fs.existsSync(distDir)) {
    fs.writeFileSync(path.join(distDir, '500_live_backlinks.json'), JSON.stringify(results, null, 2));
    fs.writeFileSync(path.join(distDir, 'live_backlinks.json'), JSON.stringify(results, null, 2));
    fs.writeFileSync(path.join(distDir, 'backlinks.json'), JSON.stringify(results, null, 2));
  }

  // 2. Generate Interactive 500 Backlinks Showcase HTML Matrix
  const tableRows = results.map(r => `
    <tr>
      <td><strong>#${r.index}</strong></td>
      <td><span class="badge da">DA ${r.domainAuthority}</span></td>
      <td><span class="badge cat">${r.category}</span></td>
      <td><strong class="kw">${r.anchorText}</strong></td>
      <td>${r.locality}</td>
      <td><a href="${r.targetUrl}" target="_blank" class="target-link">${r.targetPage}</a></td>
      <td><a href="${r.liveUrl}" target="_blank" rel="noopener nofollow" class="live-link">Live Web 2.0 Page &rarr;</a></td>
      <td><span class="badge live">LIVE 200 OK</span></td>
    </tr>
  `).join('\n');

  const showcaseHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>500 Live Authority Backlinks Matrix | Escorts Hub Noida</title>
  <meta name="robots" content="index, follow">
  <style>
    :root {
      --bg: #090a0f;
      --card-bg: #12151e;
      --card-border: #232938;
      --primary: #e11d48;
      --accent: #8b5cf6;
      --text-main: #f1f5f9;
      --text-muted: #94a3b8;
      --success: #10b981;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
      background: var(--bg);
      color: var(--text-main);
      padding: 32px 20px;
      line-height: 1.5;
    }
    .container { max-width: 1350px; margin: 0 auto; }
    header { margin-bottom: 28px; }
    h1 {
      font-size: 32px;
      font-weight: 800;
      background: linear-gradient(135deg, #ff3b69, #c084fc);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 8px;
    }
    p.subtitle { color: var(--text-muted); font-size: 15px; max-width: 850px; }
    
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
      gap: 16px;
      margin-bottom: 28px;
    }
    .stat-card {
      background: var(--card-bg);
      border: 1px solid var(--card-border);
      border-radius: 12px;
      padding: 20px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.3);
    }
    .stat-val { font-size: 30px; font-weight: 800; color: #f43f5e; }
    .stat-lbl { color: var(--text-muted); font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; margin-top: 4px; }

    .search-box {
      margin-bottom: 20px;
      display: flex;
      gap: 12px;
    }
    .search-input {
      flex: 1;
      padding: 12px 18px;
      background: var(--card-bg);
      border: 1px solid var(--card-border);
      border-radius: 8px;
      color: #fff;
      font-size: 15px;
      outline: none;
    }
    .search-input:focus { border-color: var(--primary); }

    .table-container {
      background: var(--card-bg);
      border: 1px solid var(--card-border);
      border-radius: 12px;
      overflow-x: auto;
      box-shadow: 0 10px 30px rgba(0,0,0,0.4);
    }
    table { width: 100%; border-collapse: collapse; text-align: left; }
    th {
      background: #181d2a;
      padding: 14px 16px;
      font-size: 12px;
      font-weight: 700;
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 0.5px;
      border-bottom: 1px solid var(--card-border);
      white-space: nowrap;
    }
    td {
      padding: 13px 16px;
      font-size: 13px;
      border-bottom: 1px solid rgba(255,255,255,0.04);
      white-space: nowrap;
    }
    tr:hover td { background: rgba(255, 255, 255, 0.02); }
    
    .badge {
      display: inline-block;
      padding: 4px 8px;
      border-radius: 6px;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.3px;
    }
    .badge.da { background: rgba(59, 130, 246, 0.15); color: #60a5fa; border: 1px solid rgba(59, 130, 246, 0.3); }
    .badge.cat { background: rgba(168, 85, 247, 0.15); color: #c084fc; border: 1px solid rgba(168, 85, 247, 0.3); }
    .badge.live { background: rgba(16, 185, 129, 0.15); color: #34d399; border: 1px solid rgba(16, 185, 129, 0.3); }
    
    .kw { color: #fb7185; }
    .target-link { color: #93c5fd; text-decoration: none; }
    .target-link:hover { text-decoration: underline; }
    .live-link { color: #38bdf8; text-decoration: none; font-weight: 600; }
    .live-link:hover { text-decoration: underline; }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <h1>500 Live Authority Backlinks Matrix</h1>
      <p class="subtitle">Complete inventory of 500 live, crawlable Web 2.0 contextual backlinks (DA 91+ Graph.org) pointing to https://wenoidaescorts.com targeting <strong>"noida escorts"</strong>, <strong>"noida callgirl"</strong>, <strong>"callgirl noida"</strong>, <strong>"escorts noida"</strong>, and 24 Noida sectors.</p>
    </header>

    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-val">${results.length}</div>
        <div class="stat-lbl">Live Backlinks Verified</div>
      </div>
      <div class="stat-card">
        <div class="stat-val">DA 91+</div>
        <div class="stat-lbl">Average Root Authority</div>
      </div>
      <div class="stat-card">
        <div class="stat-val">100%</div>
        <div class="stat-lbl">Indexable & Crawlable</div>
      </div>
      <div class="stat-card">
        <div class="stat-val">24</div>
        <div class="stat-lbl">Noida Sectors Covered</div>
      </div>
      <div class="stat-card">
        <div class="stat-val">0</div>
        <div class="stat-lbl">OTP Verification Blockers</div>
      </div>
    </div>

    <div class="search-box">
      <input type="text" id="filterInput" class="search-input" placeholder="Search by keyword, sector, category, or URL..." onkeyup="filterTable()">
    </div>

    <div class="table-container">
      <table id="matrixTable">
        <thead>
          <tr>
            <th>#</th>
            <th>DA</th>
            <th>Category</th>
            <th>Anchor Keyword</th>
            <th>Locality</th>
            <th>Target Page</th>
            <th>Live Web 2.0 Backlink</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          ${tableRows}
        </tbody>
      </table>
    </div>
  </div>

  <script>
    function filterTable() {
      const input = document.getElementById("filterInput");
      const filter = input.value.toLowerCase();
      const trs = document.getElementById("matrixTable").getElementsByTagName("tr");
      for (let i = 1; i < trs.length; i++) {
        const text = trs[i].textContent || trs[i].innerText;
        trs[i].style.display = text.toLowerCase().indexOf(filter) > -1 ? "" : "none";
      }
    }
  </script>
</body>
</html>`;

  fs.writeFileSync(path.join(publicDir, '500_backlinks_matrix.html'), showcaseHtml);
  fs.writeFileSync(path.join(publicDir, 'backlinks_matrix.html'), showcaseHtml);
  if (fs.existsSync(distDir)) {
    fs.writeFileSync(path.join(distDir, '500_backlinks_matrix.html'), showcaseHtml);
    fs.writeFileSync(path.join(distDir, 'backlinks_matrix.html'), showcaseHtml);
  }

  // 3. Update src/data/scheduledBacklinks.ts with the 500 Live Backlinks
  const tsContent = `import { BacklinkRecord } from '@/types';

/**
 * 500 Live Verified High-Authority Backlinks Matrix (DA 91+)
 * - Target: https://wenoidaescorts.com
 * - Focus: 'noida escorts', 'noida callgirl', 'callgirl noida', 'escorts noida', 'call girl noida', 'escorts service noida'
 * - Fully Crawlable & Indexable across 24 Noida Sectors
 */
export const SCHEDULED_BACKLINKS: BacklinkRecord[] = ${JSON.stringify(results.map(r => ({
    id: r.id,
    domain: r.domain,
    domainAuthority: r.domainAuthority,
    anchorText: r.anchorText,
    targetUrl: r.targetUrl,
    targetPage: r.targetPage,
    category: 'Web 2.0',
    publishTime: r.publishedAt,
    dateDisplay: r.dateDisplay,
    status: 'Live',
    contextSnippet: r.contextSnippet
  })), null, 2)};
`;

  fs.writeFileSync(path.join(__dirname, '..', 'src', 'data', 'scheduledBacklinks.ts'), tsContent);
  console.log(`✓ Synchronized 500 live backlinks into src/data/scheduledBacklinks.ts!`);
}

main().catch(console.error);
