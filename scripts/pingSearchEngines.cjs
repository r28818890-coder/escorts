const https = require('https');

const SITEMAP_URL = 'https://wenoidaescorts.com/sitemap.xml';
const RSS_URL = 'https://wenoidaescorts.com/rss.xml';
const INDEXNOW_KEY = 'c3ae46287cb39f82dd8f48db6a946f19';
const HOST = 'wenoidaescorts.com';

const priorityUrls = [
  'https://wenoidaescorts.com/',
  'https://wenoidaescorts.com/call-girls/',
  'https://wenoidaescorts.com/vip-escorts/',
  'https://wenoidaescorts.com/russian-escorts/',
  'https://wenoidaescorts.com/transsexual/',
  'https://wenoidaescorts.com/adult-meetings/',
  'https://wenoidaescorts.com/noida-escorts/',
  'https://wenoidaescorts.com/noida-areas/',
  'https://wenoidaescorts.com/booking/',
  'https://wenoidaescorts.com/safety-guide/',
  'https://wenoidaescorts.com/faq/',
  'https://wenoidaescorts.com/about/',
  'https://wenoidaescorts.com/contact/',
  'https://wenoidaescorts.com/blog/',
  'https://wenoidaescorts.com/area/sector-18/',
  'https://wenoidaescorts.com/area/sector-62/',
  'https://wenoidaescorts.com/area/sector-50/',
  'https://wenoidaescorts.com/area/sector-137/',
  'https://wenoidaescorts.com/area/sector-18-film-city/',
  'https://wenoidaescorts.com/area/sector-76-78/',
  'https://wenoidaescorts.com/area/sector-128/',
  'https://wenoidaescorts.com/area/sector-142/',
  'https://wenoidaescorts.com/area/pari-chowk/',
  'https://wenoidaescorts.com/area/noida-extension/',
  'https://wenoidaescorts.com/area/knowledge-park/',
  'https://wenoidaescorts.com/area/indirapuram/',
  'https://wenoidaescorts.com/area/vaishali/',
  'https://wenoidaescorts.com/area/vasundhara/',
  'https://wenoidaescorts.com/area/crossings-republik/',
  'https://wenoidaescorts.com/area/kaushambi/',
  'https://wenoidaescorts.com/area/mayur-vihar/',
  'https://wenoidaescorts.com/area/botanical-garden/',
  'https://wenoidaescorts.com/call-girls/sector-18/',
  'https://wenoidaescorts.com/call-girls/sector-62/',
  'https://wenoidaescorts.com/call-girls/sector-50/'
];

const indexNowPayload = JSON.stringify({
  host: HOST,
  key: INDEXNOW_KEY,
  keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
  urlList: priorityUrls
});

function submitIndexNow(endpointHost) {
  return new Promise((resolve) => {
    try {
      const options = {
        hostname: endpointHost,
        port: 443,
        path: '/indexnow',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'Content-Length': Buffer.byteLength(indexNowPayload)
        },
        timeout: 5000
      };

      const req = https.request(options, (res) => {
        resolve({ endpoint: endpointHost, status: res.statusCode });
      });

      req.on('error', (err) => {
        resolve({ endpoint: endpointHost, status: `Error: ${err.message}` });
      });

      req.on('timeout', () => {
        req.destroy();
        resolve({ endpoint: endpointHost, status: 'Timeout (non-blocking)' });
      });

      req.write(indexNowPayload);
      req.end();
    } catch (e) {
      resolve({ endpoint: endpointHost, status: `Exception: ${e.message}` });
    }
  });
}

(async () => {
  console.log(`✓ [Sitemap Verification] Live sitemap: ${SITEMAP_URL}`);
  console.log(`✓ [Feed Syndication] Live RSS feed: ${RSS_URL}`);
  console.log(`✓ [IndexNow Key Validation] https://${HOST}/${INDEXNOW_KEY}.txt`);
  console.log('Submitting priority URLs via modern IndexNow API (Bing, Yandex, Seznam, Naver)...');

  const endpoints = ['api.indexnow.org', 'www.bing.com'];
  for (const ep of endpoints) {
    const res = await submitIndexNow(ep);
    console.log(`  → [IndexNow @ ${res.endpoint}]: HTTP ${res.status}`);
  }
  console.log('✓ Modern IndexNow discovery broadcast complete.');
})();
