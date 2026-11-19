/**
 * Google Indexing API Automation Engine
 * ----------------------------------------------------
 * Directly submits high-priority URLs to Google Indexing API
 * to trigger Googlebot Smartphone crawls within 5 to 15 minutes.
 * 
 * Uses Node.js native 'crypto' for zero-dependency RS256 JWT auth.
 * 
 * Usage:
 *   node scripts/googleIndexing.cjs                         (Submits priority core URLs)
 *   node scripts/googleIndexing.cjs --all                   (Submits priority URLs from sitemap.xml)
 *   node scripts/googleIndexing.cjs https://wenoidaescorts.com/call-girls/sector-18/
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const https = require('https');

const DOMAIN = 'https://wenoidaescorts.com';

// Candidate credential paths
const CRED_PATHS = [
  path.join(__dirname, 'service_account.json'),
  path.join(__dirname, '..', 'service_account.json'),
  path.join(__dirname, 'google-service-account.json'),
  path.join(__dirname, '..', 'google-service-account.json'),
  process.env.GOOGLE_APPLICATION_CREDENTIALS || ''
].filter(Boolean);

function findCredentials() {
  for (const p of CRED_PATHS) {
    if (fs.existsSync(p)) {
      try {
        const raw = fs.readFileSync(p, 'utf-8');
        const creds = JSON.parse(raw);
        if (creds.client_email && creds.private_key) {
          return { creds, path: p };
        }
      } catch (e) {
        // Continue searching
      }
    }
  }
  return null;
}

function base64UrlEncode(str) {
  return Buffer.from(str)
    .toString('base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
}

/**
 * Exchange RSA-SHA256 signed JWT for Google OAuth2 Bearer Access Token
 */
function getGoogleAccessToken(creds) {
  return new Promise((resolve, reject) => {
    const now = Math.floor(Date.now() / 1000);
    const header = base64UrlEncode(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
    const claimSet = base64UrlEncode(JSON.stringify({
      iss: creds.client_email,
      scope: 'https://www.googleapis.com/auth/indexing',
      aud: 'https://oauth2.googleapis.com/token',
      exp: now + 3600,
      iat: now
    }));

    const sign = crypto.createSign('RSA-SHA256');
    sign.update(`${header}.${claimSet}`);
    const signature = sign.sign(creds.private_key, 'base64')
      .replace(/=/g, '')
      .replace(/\+/g, '-')
      .replace(/\//g, '_');

    const assertion = `${header}.${claimSet}.${signature}`;
    const postData = `grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=${assertion}`;

    const req = https.request('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postData)
      }
    }, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(body);
          if (parsed.access_token) {
            resolve(parsed.access_token);
          } else {
            reject(new Error(`Failed to obtain Google access token: ${body}`));
          }
        } catch (err) {
          reject(new Error(`Invalid response from Google OAuth endpoint: ${body}`));
        }
      });
    });

    req.on('error', reject);
    req.write(postData);
    req.end();
  });
}

/**
 * Submit URL to Google Indexing API
 */
function publishUrl(token, url, type = 'URL_UPDATED') {
  return new Promise((resolve) => {
    const payload = JSON.stringify({ url, type });
    const req = https.request('https://indexing.googleapis.com/v3/urlNotifications:publish', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        'Content-Length': Buffer.byteLength(payload)
      }
    }, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          body,
          url
        });
      });
    });

    req.on('error', (err) => {
      resolve({
        statusCode: 0,
        error: err.message,
        url
      });
    });

    req.write(payload);
    req.end();
  });
}

/**
 * Read Priority URLs from Sitemap or Defaults
 */
function getTargetUrls(cliArgs) {
  // If specific URL passed
  for (const arg of cliArgs) {
    if (arg.startsWith('http://') || arg.startsWith('https://')) {
      return [arg];
    }
  }

  const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
  const urls = [];

  if (cliArgs.includes('--all') && fs.existsSync(sitemapPath)) {
    const xml = fs.readFileSync(sitemapPath, 'utf-8');
    const matches = xml.match(/<loc>(https?:\/\/[^<]+)<\/loc>/g) || [];
    for (const m of matches) {
      const u = m.replace(/<\/?loc>/g, '').trim();
      urls.push(u);
    }
    // Google Indexing API daily quota is typically 200 URLs per project
    return urls.slice(0, 190);
  }

  // High-Priority Core Pages (Under 50 URLs for fast priority submission)
  return [
    `${DOMAIN}/`,
    `${DOMAIN}/call-girls/sector-18/`,
    `${DOMAIN}/call-girls/sector-62/`,
    `${DOMAIN}/call-girls/sector-50/`,
    `${DOMAIN}/call-girls/sector-137/`,
    `${DOMAIN}/call-girls/sector-128/`,
    `${DOMAIN}/call-girls/sector-142/`,
    `${DOMAIN}/call-girls/sector-18-film-city/`,
    `${DOMAIN}/call-girls/sector-76-78/`,
    `${DOMAIN}/call-girls/pari-chowk/`,
    `${DOMAIN}/call-girls/noida-extension/`,
    `${DOMAIN}/call-girls/knowledge-park/`,
    `${DOMAIN}/call-girls/indirapuram/`,
    `${DOMAIN}/call-girls/vaishali/`,
    `${DOMAIN}/call-girls/vasundhara/`,
    `${DOMAIN}/call-girls/crossings-republik/`,
    `${DOMAIN}/call-girls/mayur-vihar/`,
    `${DOMAIN}/call-girls/kaushambi/`,
    `${DOMAIN}/call-girls/botanical-garden/`,
    `${DOMAIN}/noida-escorts/`,
    `${DOMAIN}/russian-escorts/`,
    `${DOMAIN}/vip-escorts/`,
    `${DOMAIN}/independent-escorts/`,
    `${DOMAIN}/celebrity-escorts/`,
    `${DOMAIN}/hotel-outcall/`,
    `${DOMAIN}/area/sector-18/`,
    `${DOMAIN}/area/sector-62/`,
    `${DOMAIN}/area/sector-50/`,
    `${DOMAIN}/area/sector-137/`,
    `${DOMAIN}/area/pari-chowk/`,
    `${DOMAIN}/booking/`,
    `${DOMAIN}/safety-guide/`,
    `${DOMAIN}/gallery/`
  ];
}

async function main() {
  console.log('='.repeat(65));
  console.log('⚡ GOOGLE INDEXING API AUTOMATION ENGINE');
  console.log('='.repeat(65));

  const found = findCredentials();

  if (!found) {
    console.log('\n⚠️  [SERVICE ACCOUNT NOT FOUND]');
    console.log('To activate real-time Googlebot crawls (5-15 min indexation):');
    console.log('1. Go to Google Cloud Console (https://console.cloud.google.com/)');
    console.log('2. Create a Project & Enable "Web Search Indexing API"');
    console.log('3. Create a Service Account, generate a JSON Key, and save it as:');
    console.log(`   ${path.join(__dirname, 'service_account.json')}`);
    console.log('4. Add your service account email as an "Owner" in Google Search Console.');
    console.log('\nOnce saved, rerun: npm run index:google\n');
    console.log('Created template: scripts/service_account.example.json for reference.');

    const example = {
      type: "service_account",
      project_id: "your-google-cloud-project-id",
      private_key_id: "example_private_key_id",
      private_key: "-----BEGIN PRIVATE KEY-----\\nYOUR_PRIVATE_KEY_HERE\\n-----END PRIVATE KEY-----\\n",
      client_email: "indexing-bot@your-google-cloud-project.iam.gserviceaccount.com",
      client_id: "12345678901234567890",
      auth_uri: "https://accounts.google.com/o/oauth2/auth",
      token_uri: "https://oauth2.googleapis.com/token",
      auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
      client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/indexing-bot..."
    };

    fs.writeFileSync(
      path.join(__dirname, 'service_account.example.json'),
      JSON.stringify(example, null, 2),
      'utf-8'
    );
    return;
  }

  console.log(`✓ Using credentials from: ${found.path}`);
  console.log(`✓ Service Account: ${found.creds.client_email}`);

  try {
    console.log('🔑 Requesting Google OAuth2 Bearer Access Token...');
    const token = await getGoogleAccessToken(found.creds);
    console.log('✓ OAuth2 Access Token successfully acquired.');

    const cliArgs = process.argv.slice(2);
    const targetUrls = getTargetUrls(cliArgs);

    console.log(`\n🚀 Submitting ${targetUrls.length} priority URLs to Google Indexing API...`);

    let successCount = 0;
    let failCount = 0;

    for (let i = 0; i < targetUrls.length; i++) {
      const url = targetUrls[i];
      const result = await publishUrl(token, url, 'URL_UPDATED');

      if (result.statusCode === 200) {
        successCount++;
        console.log(`  [${i + 1}/${targetUrls.length}] 🟢 OK (200): ${url}`);
      } else {
        failCount++;
        console.log(`  [${i + 1}/${targetUrls.length}] 🔴 HTTP ${result.statusCode}: ${url}`);
        try {
          const errBody = JSON.parse(result.body);
          console.log(`      Error: ${errBody.error?.message || result.body}`);
        } catch (_) {
          console.log(`      Response: ${result.body}`);
        }
      }

      // Small delay to respect rate limit
      if (i < targetUrls.length - 1) {
        await new Promise(r => setTimeout(r, 120));
      }
    }

    console.log('\n' + '='.repeat(65));
    console.log(`✓ Google Indexing API submission finished.`);
    console.log(`  - Successfully notified: ${successCount}`);
    console.log(`  - Failed: ${failCount}`);
    console.log('⚡ Googlebot Smartphone will begin crawling notified URLs shortly.');
    console.log('='.repeat(65));

  } catch (err) {
    console.error('❌ Google Indexing API Error:', err.message);
  }
}

main();
