const https = require('https');
const fs = require('fs');
const path = require('path');

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
        'Accept': 'application/json'
      }
    }, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

async function main() {
  try {
    const data = await fetchJson('https://unsplash.com/napi/photos/RrJfnfQwdn4');
    console.log('Unsplash JSON success, raw url:', data.urls && data.urls.raw);
    if (data.urls && data.urls.raw) {
      const imgUrl = `${data.urls.raw}&auto=format&fit=crop&w=1000&q=80`;
      https.get(imgUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
        const chunks = [];
        res.on('data', c => chunks.push(c));
        res.on('end', () => {
          const buf = Buffer.concat(chunks);
          fs.writeFileSync(path.join(__dirname, '..', 'public', 'images', 'model_15.jpg'), buf);
          console.log('Successfully saved model_15.jpg (' + Math.round(buf.length / 1024) + ' KB)');
        });
      });
    }
  } catch (err) {
    console.error('NAPI Error:', err.message);
  }
}

main();
