const https = require('https');

const pages = [
  'https://escortshubjaipur.com/',
  'https://escortshubjaipur.com/call-girls',
  'https://escortshubjaipur.com/massages',
  'https://escortshubjaipur.com/safety-guide',
  'https://escortshubjaipur.com/jaipur-areas',
  'https://escortshubjaipur.com/faq',
  'https://escortshubjaipur.com/contact'
];

function archiveUrl(url) {
  return new Promise((resolve) => {
    const saveUrl = `https://web.archive.org/save/${url}`;
    const req = https.get(saveUrl, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' },
      timeout: 8000
    }, (res) => {
      const location = res.headers.location || '';
      resolve({ url, status: res.statusCode, archiveUrl: location ? `https://web.archive.org${location.startsWith('/') ? '' : '/'}${location}` : 'Captured' });
    });
    req.on('error', (err) => resolve({ url, status: 'Error', archiveUrl: err.message }));
    req.on('timeout', () => { req.destroy(); resolve({ url, status: 'Timeout', archiveUrl: 'Queued' }); });
  });
}

(async () => {
  console.log('Initiating zero-verification authoritative snapshot citations on Internet Archive (DA 100)...');
  for (const page of pages) {
    const result = await archiveUrl(page);
    console.log(`✓ [${result.status}] ${page} → ${result.archiveUrl}`);
  }
  console.log('Done archiving.');
})();
