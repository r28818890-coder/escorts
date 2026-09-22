const fs = require('fs');
const path = require('path');
const https = require('https');

const photoIds = [
  { id: '8IwCTkw1L38', name: 'model_11.jpg' },
  { id: '-uoBQFFWVx0', name: 'model_12.jpg' },
  { id: 'oWfo8H7wvWo', name: 'model_13.jpg' },
  { id: 'DFBb85YBcaQ', name: 'model_14.jpg' },
  { id: 'RrJfnfQwdn4', name: 'model_15.jpg' }
];

const destDir = path.join(__dirname, '..', 'public', 'images');
if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

function fetchUrl(url, redirects = 0) {
  return new Promise((resolve, reject) => {
    if (redirects > 8) return reject(new Error('Too many redirects'));
    const req = https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
      }
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetchUrl(res.headers.location, redirects + 1).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`HTTP ${res.statusCode} for ${url}`));
      }
      const chunks = [];
      res.on('data', chunk => chunks.push(chunk));
      res.on('end', () => resolve(Buffer.concat(chunks)));
    });
    req.on('error', reject);
  });
}

async function processAll() {
  console.log('Downloading 5 new Unsplash photos...');
  for (const item of photoIds) {
    const targetFile = path.join(destDir, item.name);
    try {
      const downloadUrl = `https://unsplash.com/photos/${item.id}/download?force=true&w=1000`;
      console.log(`Downloading ${item.id} -> ${item.name}...`);
      const imgBuffer = await fetchUrl(downloadUrl);
      fs.writeFileSync(targetFile, imgBuffer);
      console.log(`✓ Saved ${item.name} (${Math.round(imgBuffer.length / 1024)} KB)`);
    } catch (err) {
      console.error(`✗ Error downloading ${item.id}:`, err.message);
    }
  }
  console.log('All 5 new images downloaded successfully!');
}

processAll();
