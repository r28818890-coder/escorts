'use strict';
const https = require('https');
const http = require('http');
const querystring = require('querystring');

function test(name, options, data) {
  return new Promise((resolve) => {
    const isHttp = options.protocol === 'http:';
    const client = isHttp ? http : https;
    const req = client.request(options, (res) => {
      let body = '';
      res.on('data', c => body += c);
      res.on('end', () => {
        console.log(`[${name}] Status: ${res.statusCode}, Resp: ${body.slice(0, 100).trim()}`);
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
  // paste.c-net.org
  await test('paste.c-net.org', {
    hostname: 'paste.c-net.org',
    path: '/',
    method: 'POST',
    headers: { 'Content-Type': 'text/plain', 'User-Agent': 'curl/7.68.0' }
  }, 'Jaipur Escorts: https://jaipurescortsclub.online');

  // tny.im
  await test('tny.im', {
    hostname: 'tny.im',
    path: '/yourls-api.php?action=shorturl&format=json&url=' + encodeURIComponent('https://jaipurescortsclub.online/call-girls'),
    method: 'GET',
    headers: { 'User-Agent': 'Mozilla/5.0' }
  });

  // is.gd
  await test('is.gd', {
    hostname: 'is.gd',
    path: '/create.php?format=json&url=' + encodeURIComponent('https://jaipurescortsclub.online/call-girls/sindhi-camp'),
    method: 'GET',
    headers: { 'User-Agent': 'Mozilla/5.0' }
  });

  // tinyurl
  await test('tinyurl', {
    hostname: 'tinyurl.com',
    path: '/api-create.php?url=' + encodeURIComponent('https://jaipurescortsclub.online/call-girls/c-scheme'),
    method: 'GET',
    headers: { 'User-Agent': 'Mozilla/5.0' }
  });
}
run();
