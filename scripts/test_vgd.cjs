'use strict';
const https = require('https');
const querystring = require('querystring');

function test(name, options, data) {
  return new Promise((resolve) => {
    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', c => body += c);
      res.on('end', () => {
        console.log(`[${name}] Status: ${res.statusCode}, Body: ${body.slice(0, 100).trim()}`);
        resolve({ name, status: res.statusCode, body });
      });
    });
    req.on('error', (e) => {
      console.log(`[${name}] Error: ${e.message}`);
      resolve({ name, error: e.message });
    });
    req.setTimeout(6000, () => { req.destroy(); resolve({ name, error: 'Timeout' }); });
    if (data) req.write(data);
    req.end();
  });
}

async function run() {
  // v.gd
  await test('v.gd', {
    hostname: 'v.gd',
    path: '/create.php?format=simple&url=' + encodeURIComponent('https://jaipurescortsclub.online/call-girls/sindhi-camp'),
    method: 'GET',
    headers: { 'User-Agent': 'Mozilla/5.0' }
  });

  // cleanuri.com
  const cuData = querystring.stringify({ url: 'https://jaipurescortsclub.online/call-girls/c-scheme' });
  await test('cleanuri.com', {
    hostname: 'cleanuri.com',
    path: '/api/v1/shorten',
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Content-Length': Buffer.byteLength(cuData), 'User-Agent': 'Mozilla/5.0' }
  }, cuData);
}
run();
