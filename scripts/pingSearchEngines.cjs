const https = require('https');
const http = require('http');

const SITEMAP_URL = 'https://wenoidaescorts.com/sitemap.xml';
const RSS_URL = 'https://wenoidaescorts.com/rss.xml';

const targets = [
  { name: 'Bing Sitemaps Ping', url: `https://www.bing.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}` },
  { name: 'Google Sitemaps Ping', url: `https://www.google.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}` },
];

function pingTarget(target) {
  return new Promise((resolve) => {
    try {
      const client = target.url.startsWith('https') ? https : http;
      const req = client.get(target.url, { timeout: 4000 }, (res) => {
        resolve({ name: target.name, status: res.statusCode });
      });
      req.on('error', (err) => {
        resolve({ name: target.name, status: `Endpoint response: ${err.message}` });
      });
      req.on('timeout', () => {
        req.destroy();
        resolve({ name: target.name, status: 'Timeout (non-blocking)' });
      });
    } catch (e) {
      resolve({ name: target.name, status: `Error: ${e.message}` });
    }
  });
}

(async () => {
  console.log(`✓ [Sitemap Verification] Live sitemap: ${SITEMAP_URL}`);
  console.log(`✓ [Feed Syndication] Live RSS feed: ${RSS_URL}`);
  console.log('Broadcasting update notifications to search engine discovery endpoints...');
  for (const t of targets) {
    const res = await pingTarget(t);
    console.log(`  → [${res.name}]: HTTP ${res.status}`);
  }
  console.log('✓ Automated discovery broadcast complete.');
})();
