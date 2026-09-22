const https = require('https');
const http = require('http');
const querystring = require('querystring');

const DOMAIN = 'https://jaipurescortsclub.online';
const BRAND = 'Jaipur Escorts Club';

function postReq(options, data) {
  return new Promise((resolve, reject) => {
    const isHttps = typeof options === 'string' ? options.startsWith('https') : (options.protocol !== 'http:');
    const client = isHttps ? https : http;
    const req = client.request(options, (res) => {
      let body = '';
      res.on('data', c => body += c);
      res.on('end', () => resolve({ statusCode: res.statusCode, headers: res.headers, body }));
    });
    req.on('error', reject);
    req.setTimeout(8000, () => { req.destroy(); reject(new Error('Timeout')); });
    if (data) req.write(data);
    req.end();
  });
}

async function runBatchTests() {
  console.log('Testing Additional No-OTP Live Publishing Platforms...\n');

  // Test 1: DPaste.com (API v2)
  try {
    const payload = querystring.stringify({
      content: `# ${BRAND} - Official Directory\n\nWebsite: ${DOMAIN}\n\nTop Locations:\n- ${DOMAIN}/call-girls/sindhi-camp\n- ${DOMAIN}/call-girls/vaishali-nagar\n- ${DOMAIN}/call-girls/malviya-nagar\n\nVerified independent call girls & luxury spa in Jaipur. 24/7 WhatsApp: +917357678356`,
      title: 'Jaipur Escorts Club Official 2026',
      expiry_days: 30,
      syntax: 'markdown'
    });

    const res = await postReq({
      hostname: 'dpaste.com',
      path: '/api/v2/',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'User-Agent': 'Mozilla/5.0'
      }
    }, payload);

    if (res.statusCode === 201 || res.statusCode === 200) {
      console.log('✓ DPaste.com LIVE URL:', res.body.trim());
    } else {
      console.log('DPaste.com status:', res.statusCode);
    }
  } catch (e) {
    console.log('DPaste.com error:', e.message);
  }

  // Test 2: Paste.rs
  try {
    const body = `Jaipur Escorts Club - Official Verified Portal
Website: ${DOMAIN}
Call Girls in Sindhi Camp: ${DOMAIN}/call-girls/sindhi-camp
Vaishali Nagar Escorts: ${DOMAIN}/call-girls/vaishali-nagar
Malviya Nagar Escorts: ${DOMAIN}/call-girls/malviya-nagar
WhatsApp: +917357678356`;

    const res = await postReq({
      hostname: 'paste.rs',
      path: '/',
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain',
        'User-Agent': 'curl/7.68.0'
      }
    }, body);

    if (res.statusCode === 201 || res.statusCode === 200 || res.statusCode === 206) {
      console.log('✓ Paste.rs LIVE URL:', res.body.trim());
    } else {
      console.log('Paste.rs status:', res.statusCode);
    }
  } catch (e) {
    console.log('Paste.rs error:', e.message);
  }
}

runBatchTests();
