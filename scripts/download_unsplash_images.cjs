const fs = require('fs');
const path = require('path');
const https = require('https');

const photoIds = [
  { id: 'ZwliktSupFM', name: 'model_1.jpg' },
  { id: 'AE3zKmRGSG8', name: 'model_2.jpg' },
  { id: 'n2OsMqNQq0E', name: 'model_3.jpg' },
  { id: 'MlSxOs1vbiQ', name: 'model_4.jpg' },
  { id: 'H_atlIIrbDA', name: 'model_5.jpg' },
  { id: '9aKtoC1-BpU', name: 'model_6.jpg' },
  { id: 'BizScWt0eG4', name: 'model_7.jpg' },
  { id: 'iLmemc7BzDk', name: 'model_8.jpg' },
  { id: 'wF3pcSl_B2Y', name: 'model_9.jpg' },
  { id: 'NJP21VtDrZQ', name: 'model_10.jpg' }
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

async function getDirectImageUrl(photoId) {
  const pageUrl = `https://unsplash.com/photos/${photoId}`;
  try {
    const htmlBuf = await fetchUrl(pageUrl);
    const html = htmlBuf.toString('utf8');
    const match = html.match(/https:\/\/images\.unsplash\.com\/photo-[^"'\s&?]+/);
    if (match && match[0]) {
      return `${match[0]}?auto=format&fit=crop&w=1000&q=80`;
    }
  } catch (err) {
    console.warn(`HTML fetch failed for ${photoId}: ${err.message}`);
  }
  return `https://unsplash.com/photos/${photoId}/download?force=true&w=1000`;
}

async function processAll() {
  console.log('Starting Unsplash image downloads...');
  for (const item of photoIds) {
    const targetFile = path.join(destDir, item.name);
    try {
      console.log(`Fetching URL for photo ID: ${item.id} -> ${item.name}...`);
      const directUrl = await getDirectImageUrl(item.id);
      console.log(`Downloading: ${directUrl}...`);
      const imgBuffer = await fetchUrl(directUrl);
      fs.writeFileSync(targetFile, imgBuffer);
      console.log(`✓ Saved ${item.name} (${Math.round(imgBuffer.length / 1024)} KB)`);
    } catch (err) {
      console.error(`✗ Error downloading ${item.id}:`, err.message);
    }
  }
  console.log('Finished downloading all images!');
}

processAll();
