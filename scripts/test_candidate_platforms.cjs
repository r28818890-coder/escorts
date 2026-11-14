'use strict';
const https = require('https');
const http = require('http');
const querystring = require('querystring');

function testPost(name, options, data) {
  return new Promise((resolve) => {
    const isHttp = options.protocol === 'http:';
    const client = isHttp ? http : https;
    const req = client.request(options, (res) => {
      let body = '';
      res.on('data', c => body += c);
      res.on('end', () => {
        console.log(`[${name}] Status: ${res.statusCode}, Body: ${body.slice(0, 120).trim()}`);
        resolve({ name, status: res.statusCode, body });
      });
    });
    req.on('error', (e) => {
      console.log(`[${name}] Error: ${e.message}`);
      resolve({ name, error: e.message });
    });
    req.setTimeout(8000, () => { req.destroy(); resolve({ name, error: 'Timeout' }); });
    if (data) req.write(data);
    req.end();
  });
}

async function run() {
  // 1. Graph.org
  console.log('--- Testing Graph.org ---');
  await testPost('Graph.org Account', {
    hostname: 'api.graph.org',
    path: '/createAccount?short_name=EscortVIP&author_name=EscortClub',
    method: 'GET'
  });

  // 2. Telegra.ph API
  console.log('--- Testing Telegra.ph API ---');
  await testPost('Telegra.ph Account', {
    hostname: 'api.telegra.ph',
    path: '/createAccount?short_name=EscortVIP&author_name=EscortClub',
    method: 'GET'
  });

  // 3. DPaste.com
  console.log('--- Testing DPaste.com ---');
  const dpData = querystring.stringify({ content: 'https://escortshubjaipur.com/call-girls/c-scheme', syntax: 'text', expiry_days: '30' });
  await testPost('DPaste.com', {
    hostname: 'dpaste.com',
    path: '/api/v2/',
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Content-Length': Buffer.byteLength(dpData), 'User-Agent': 'Mozilla/5.0' }
  }, dpData);

  // 4. DPaste.org
  console.log('--- Testing DPaste.org ---');
  const dpoData = querystring.stringify({ content: 'https://escortshubjaipur.com/call-girls/sindhi-camp', title: 'Jaipur Escorts' });
  await testPost('DPaste.org', {
    hostname: 'dpaste.org',
    path: '/api/',
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Content-Length': Buffer.byteLength(dpoData), 'User-Agent': 'Mozilla/5.0' }
  }, dpoData);

  // 5. Paste.rs
  console.log('--- Testing Paste.rs ---');
  const prsData = 'Jaipur Escorts: https://escortshubjaipur.com/call-girls';
  await testPost('Paste.rs', {
    hostname: 'paste.rs',
    path: '/',
    method: 'POST',
    headers: { 'Content-Type': 'text/plain', 'User-Agent': 'curl/7.68.0' }
  }, prsData);

  // 6. Rentry.co
  console.log('--- Testing Rentry.co ---');
  const rentryData = querystring.stringify({ text: '# Escorts Hub Jaipur\nhttps://escortshubjaipur.com' });
  await testPost('Rentry.co', {
    hostname: 'rentry.co',
    path: '/api/new',
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'User-Agent': 'Mozilla/5.0', 'Referer': 'https://rentry.co/' }
  }, rentryData);

  // 7. 0x0.st
  console.log('--- Testing 0x0.st ---');
  const boundary = '----WebKitFormBoundary7MA4YWxkTrZu0gW';
  const post0x0 = `--${boundary}\r\nContent-Disposition: form-data; name="file"; filename="jaipur_escorts.txt"\r\nContent-Type: text/plain\r\n\r\nhttps://escortshubjaipur.com/call-girls\r\n--${boundary}--\r\n`;
  await testPost('0x0.st', {
    hostname: '0x0.st',
    path: '/',
    method: 'POST',
    headers: { 'Content-Type': `multipart/form-data; boundary=${boundary}`, 'Content-Length': Buffer.byteLength(post0x0), 'User-Agent': 'curl/7.68.0' }
  }, post0x0);

  // 8. ix.io
  console.log('--- Testing ix.io ---');
  const ixData = querystring.stringify({ 'f:1': 'https://escortshubjaipur.com/call-girls' });
  await testPost('ix.io', {
    protocol: 'http:',
    hostname: 'ix.io',
    path: '/',
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Content-Length': Buffer.byteLength(ixData), 'User-Agent': 'curl/7.68.0' }
  }, ixData);
}

run();
