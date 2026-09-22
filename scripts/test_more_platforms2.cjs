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
  // paste.ee
  const pee = JSON.stringify({ description: "Jaipur Escorts", sections: [{ name: "Escorts Jaipur", syntax: "text", contents: "https://jaipurescortsclub.online/call-girls" }] });
  await test('paste.ee', {
    hostname: 'api.paste.ee',
    path: '/v1/pastes',
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'X-Auth-Token': 'u', 'Content-Length': Buffer.byteLength(pee), 'User-Agent': 'Mozilla/5.0' }
  }, pee);

  // dpaste.org (web form post)
  const dpo = querystring.stringify({ content: "https://jaipurescortsclub.online/call-girls/malviya-nagar", lexer: "_text", format: "url" });
  await test('dpaste.org', {
    hostname: 'dpaste.org',
    path: '/api/',
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Content-Length': Buffer.byteLength(dpo), 'User-Agent': 'Mozilla/5.0' }
  }, dpo);

  // paste.sh
  await test('paste.sh', {
    hostname: 'paste.sh',
    path: '/',
    method: 'POST',
    headers: { 'Content-Type': 'text/plain', 'User-Agent': 'curl/7.68.0' }
  }, "Jaipur Escorts Club: https://jaipurescortsclub.online/call-girls");
}
run();
