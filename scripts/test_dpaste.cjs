const https = require('https');
const querystring = require('querystring');

function testDPaste() {
  const postData = querystring.stringify({
    content: 'Jaipur Escorts Club: https://jaipurescortsclub.online',
    syntax: 'text',
    expiry_days: '30'
  });

  const req = https.request({
    hostname: 'dpaste.com',
    path: '/api/v2/',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': Buffer.byteLength(postData),
      'User-Agent': 'Mozilla/5.0'
    }
  }, (res) => {
    let data = '';
    res.on('data', c => data += c);
    res.on('end', () => console.log('DPaste result:', res.statusCode, data.trim()));
  });

  req.on('error', console.error);
  req.write(postData);
  req.end();
}

testDPaste();
