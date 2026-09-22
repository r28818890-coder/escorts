const https = require('https');
const querystring = require('querystring');
const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://jaipurescortsclub.online';
const BRAND = 'Jaipur Escorts Club';

function makeRequest(options, postData = null) {
  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ statusCode: res.statusCode, data }));
    });
    req.on('error', reject);
    req.setTimeout(10000, () => { req.destroy(); reject(new Error('Timeout')); });
    if (postData) req.write(postData);
    req.end();
  });
}

async function testMore() {
  console.log('Testing more No-OTP Web 2.0 / Classified Platforms...\n');

  // Test Paste.ee
  try {
    console.log('5. Testing Paste.ee API...');
    const pasteEePayload = JSON.stringify({
      description: 'Jaipur Escorts Club 2026 Directory',
      sections: [
        {
          name: 'Official Directory Links',
          syntax: 'markdown',
          contents: `# ${BRAND}\n\nVisit official portal: [${DOMAIN}](${DOMAIN})\n\nVerified independent call girls, VIP models, and Thai massage in Jaipur.\n- [Sindhi Camp Escorts](${DOMAIN}/call-girls/sindhi-camp)\n- [Vaishali Nagar Escorts](${DOMAIN}/call-girls/vaishali-nagar)\n\nWhatsApp: +917357678356`
        }
      ]
    });

    const pasteRes = await makeRequest({
      hostname: 'api.paste.ee',
      path: '/v1/pastes',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': 'u',
        'User-Agent': 'Mozilla/5.0'
      }
    }, pasteEePayload);

    console.log('Paste.ee status:', pasteRes.statusCode, pasteRes.data.slice(0, 150));
  } catch (e) {
    console.log('Paste.ee notice:', e.message);
  }
}

testMore();
