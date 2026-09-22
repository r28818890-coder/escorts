import http from 'http';

const routesToTest = [
  '/',
  '/call-girls',
  '/call-girls/vaishali-nagar',
  '/vip-escorts',
  '/russian-escorts',
  '/college-call-girls',
  '/independent-escorts',
  '/hotel-outcall',
  '/safety-guide',
  '/jaipur-areas',
  '/about',
  '/contact',
  '/gallery',
  '/faq',
  '/blog',
  '/privacy',
  '/terms',
  '/refund',
  '/services/thai-massage',
  '/location/sindhi-camp'
];

async function fetchRoute(path) {
  return new Promise((resolve, reject) => {
    http.get(`http://localhost:3000${path}`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        resolve({
          path,
          statusCode: res.statusCode,
          hasContent: data.length > 200,
          isOk: res.statusCode === 200 && !data.includes('Internal Server Error') && !data.includes('Unhandled Exception')
        });
      });
    }).on('error', err => {
      reject(err);
    });
  });
}

async function runAllTests() {
  console.log('Testing Website Routes for Zero Crashes...\n');
  let passed = 0;
  let failed = 0;

  for (const route of routesToTest) {
    try {
      const result = await fetchRoute(route);
      if (result.isOk) {
        console.log(`[PASS] ${result.statusCode} OK -> http://localhost:3000${route}`);
        passed++;
      } else {
        console.error(`[FAIL] HTTP ${result.statusCode} -> http://localhost:3000${route}`);
        failed++;
      }
    } catch (err) {
      console.error(`[ERROR] Connection failed on ${route}:`, err.message);
      failed++;
    }
  }

  console.log(`\n========================================`);
  console.log(`Test Results: ${passed} Passed, ${failed} Failed (Zero Crashes)`);
  console.log(`========================================\n`);

  if (failed > 0) {
    process.exit(1);
  }
}

runAllTests();
