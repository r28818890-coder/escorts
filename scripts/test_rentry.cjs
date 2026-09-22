'use strict';
const https = require('https');
const querystring = require('querystring');

async function testRentry() {
  for (let i = 0; i < 3; i++) {
    try {
      const payload = querystring.stringify({ text: '# Test Jaipur Escorts\nhttps://jaipurescortsclub.online/call-girls' });
      const res = await new Promise((resolve, reject) => {
        const req = https.request({
          hostname: 'rentry.co',
          path: '/api/new',
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'Referer': 'https://rentry.co/'
          }
        }, (res) => {
          let d = '';
          res.on('data', c => d += c);
          res.on('end', () => resolve({ code: res.statusCode, data: d }));
        });
        req.on('error', reject);
        req.setTimeout(6000, () => { req.destroy(); reject(new Error('timeout')); });
        req.write(payload);
        req.end();
      });
      console.log(`Rentry Attempt ${i+1}: Code ${res.code}, Data: ${res.data}`);
      if (res.code === 200) return;
    } catch (e) {
      console.log(`Rentry Attempt ${i+1} err: ${e.message}`);
    }
  }
}

testRentry();
