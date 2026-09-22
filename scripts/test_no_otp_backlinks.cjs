const https = require('https');
const http = require('http');
const querystring = require('querystring');
const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://jaipurescortsclub.online';
const BRAND = 'Jaipur Escorts Club';

function makeRequest(options, postData = null) {
  return new Promise((resolve, reject) => {
    const isHttps = typeof options === 'string' ? options.startsWith('https') : (options.protocol !== 'http:');
    const client = isHttps ? https : http;
    const req = client.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          data: data
        });
      });
    });
    req.on('error', reject);
    req.setTimeout(12000, () => {
      req.destroy();
      reject(new Error('Timeout'));
    });
    if (postData) req.write(postData);
    req.end();
  });
}

async function testPlatforms() {
  const verifiedPlatforms = [];

  console.log('Testing No-OTP Backlink Platforms with REAL Live Execution...\n');

  // ── TEST 1: Graph.org / Telegra.ph (High DA 90+) ──
  try {
    console.log('1. Testing Graph.org (Telegra.ph)...');
    const accountRes = await makeRequest({
      hostname: 'api.graph.org',
      path: '/createAccount?short_name=JaipurVIP&author_name=JaipurEscortsClub',
      method: 'GET'
    });
    const acc = JSON.parse(accountRes.data);
    if (acc.ok && acc.result.access_token) {
      const payload = JSON.stringify({
        access_token: acc.result.access_token,
        title: 'Jaipur Escorts Club - Verified Companion Portal 2026',
        author_name: BRAND,
        author_url: DOMAIN,
        content: JSON.stringify([
          { tag: 'p', children: ['Visit ', { tag: 'a', attrs: { href: `${DOMAIN}/` }, children: ['Jaipur Escorts Club'] }, ' for 100% real photo verified independent escorts in Sindhi Camp, Vaishali Nagar, and Malviya Nagar.'] }
        ])
      });
      const pubRes = await makeRequest({
        hostname: 'api.graph.org',
        path: '/createPage',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(payload)
        }
      }, payload);
      const pub = JSON.parse(pubRes.data);
      if (pub.ok && pub.result.url) {
        console.log(`✓ Graph.org SUCCESS: Live URL -> ${pub.result.url}`);
        verifiedPlatforms.push({
          platform: 'Telegra.ph / Graph.org',
          da: 'DA 90+',
          otpRequired: false,
          liveTestUrl: pub.result.url,
          linkType: 'Dofollow Contextual HTML Link',
          method: 'Instant API / Web Publisher'
        });
      }
    }
  } catch (err) {
    console.log(`✗ Graph.org Failed: ${err.message}`);
  }

  // ── TEST 2: DPaste.org (DA 65+) ──
  try {
    console.log('\n2. Testing DPaste.org...');
    const postBody = querystring.stringify({
      content: `# ${BRAND} - Premier Verified Directory\n\nOfficial Website: [Jaipur Escorts Club](${DOMAIN})\n\nVerified Areas:\n- [Sindhi Camp Escorts](${DOMAIN}/call-girls/sindhi-camp)\n- [C-Scheme Call Girls](${DOMAIN}/call-girls/c-scheme)\n- [Vaishali Nagar Models](${DOMAIN}/call-girls/vaishali-nagar)\n\n24/7 Hotel Outcall & Instant WhatsApp: +917357678356`,
      syntax: 'markdown',
      expiry_days: 365,
      title: 'Jaipur Escorts Club - Official Directory'
    });

    const dpasteRes = await makeRequest({
      hostname: 'dpaste.org',
      path: '/api/',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'User-Agent': 'Mozilla/5.0'
      }
    }, postBody);

    const liveUrl = dpasteRes.data.trim().replace(/^"|"$/g, '');
    if (dpasteRes.statusCode === 200 || dpasteRes.statusCode === 201) {
      console.log(`✓ DPaste.org SUCCESS: Live URL -> ${liveUrl}`);
      verifiedPlatforms.push({
        platform: 'DPaste.org',
        da: 'DA 65+',
        otpRequired: false,
        liveTestUrl: liveUrl,
        linkType: 'Markdown Web 2.0 Backlink',
        method: 'Instant API / Web Form'
      });
    }
  } catch (err) {
    console.log(`✗ DPaste.org Failed: ${err.message}`);
  }

  // ── TEST 3: Rentry.co (DA 68+) ──
  try {
    console.log('\n3. Testing Rentry.co...');
    const rentryBody = querystring.stringify({
      text: `# ${BRAND}\n\n[Jaipur Escorts Club](${DOMAIN}) offers 100% verified independent call girls and Thai massage in Jaipur.\n\n### Top Locations:\n- [Sindhi Camp Escorts](${DOMAIN}/call-girls/sindhi-camp)\n- [Malviya Nagar Companions](${DOMAIN}/call-girls/malviya-nagar)\n- [Thai & Swedish Massage](${DOMAIN}/massages)\n\nDirect WhatsApp: https://wa.me/917357678356`
    });

    const rentryRes = await makeRequest({
      hostname: 'rentry.co',
      path: '/api/new',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'User-Agent': 'Mozilla/5.0',
        'Referer': 'https://rentry.co/'
      }
    }, rentryBody);

    if (rentryRes.statusCode === 200) {
      const data = JSON.parse(rentryRes.data);
      if (data.status === '200' && data.url) {
        console.log(`✓ Rentry.co SUCCESS: Live URL -> ${data.url}`);
        verifiedPlatforms.push({
          platform: 'Rentry.co',
          da: 'DA 68+',
          otpRequired: false,
          liveTestUrl: data.url,
          linkType: 'Indexed Markdown Backlink',
          method: 'Instant API / No Signup'
        });
      }
    }
  } catch (err) {
    console.log(`ℹ Rentry notice: ${err.message}`);
  }

  // ── TEST 4: Write.as (DA 72+) ──
  try {
    console.log('\n4. Testing Write.as API...');
    const writeasPayload = JSON.stringify({
      body: `# ${BRAND} - 2026 Verified Directory\n\nLooking for genuine independent escorts in Jaipur? Visit [Jaipur Escorts Club](${DOMAIN}) for real verified photos, 24/7 outcall, and zero advance payment.\n\n- [Sindhi Camp Escorts](${DOMAIN}/call-girls/sindhi-camp)\n- [Vaishali Nagar Call Girls](${DOMAIN}/call-girls/vaishali-nagar)\n- [Luxury Body Massage](${DOMAIN}/massages)`,
      title: 'Jaipur Escorts Club - Official Guide 2026'
    });

    const writeRes = await makeRequest({
      hostname: 'write.as',
      path: '/api/posts',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0'
      }
    }, writeasPayload);

    if (writeRes.statusCode === 201) {
      const writeData = JSON.parse(writeRes.data);
      if (writeData.data && writeData.data.id) {
        const liveUrl = `https://write.as/${writeData.data.id}`;
        console.log(`✓ Write.as SUCCESS: Live URL -> ${liveUrl}`);
        verifiedPlatforms.push({
          platform: 'Write.as',
          da: 'DA 72+',
          otpRequired: false,
          liveTestUrl: liveUrl,
          linkType: 'Clean Web 2.0 Authority Post',
          method: 'Anonymous Instant API'
        });
      }
    }
  } catch (err) {
    console.log(`ℹ Write.as notice: ${err.message}`);
  }

  // Save verified list to json
  const outPath = path.join(__dirname, '..', 'public', 'verified_no_otp_backlinks.json');
  fs.writeFileSync(outPath, JSON.stringify(verifiedPlatforms, null, 2));

  console.log('\n════════════════════════════════════════════════════════════');
  console.log(`TOTAL TESTED & VERIFIED NO-OTP PLATFORMS: ${verifiedPlatforms.length}`);
  console.log('════════════════════════════════════════════════════════════');
}

testPlatforms();
