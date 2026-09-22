const fs = require('fs');
const path = require('path');

const distIndex = path.join(__dirname, '..', 'dist', 'index.html');
const sindhiPage = path.join(__dirname, '..', 'dist', 'call-girls', 'sindhi-camp', 'index.html');
const sitemap = path.join(__dirname, '..', 'dist', 'sitemap.xml');
const robots = path.join(__dirname, '..', 'dist', 'robots.txt');

console.log('=== 1. HOMEPAGE SEO AUDIT ===');
if (fs.existsSync(distIndex)) {
  const content = fs.readFileSync(distIndex, 'utf8');
  console.log('Page Size:', content.length, 'bytes');
  console.log('Title:', content.match(/<title>([^<]+)<\/title>/)?.[1]);
  console.log('Canonical:', content.match(/<link rel="canonical" href="([^"]+)"/)?.[1]);
  console.log('Has Schema LD+JSON:', content.includes('application/ld+json'));
  console.log('Has Google/Bing verification tags:', content.includes('google-site-verification'));
  console.log('H1 tag:', content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1]?.replace(/\s+/g, ' ').trim());
}

console.log('\n=== 2. LOCALITY PAGE AUDIT (Sindhi Camp) ===');
if (fs.existsSync(sindhiPage)) {
  const content = fs.readFileSync(sindhiPage, 'utf8');
  console.log('Page Size:', content.length, 'bytes');
  console.log('Title:', content.match(/<title>([^<]+)<\/title>/)?.[1]);
  console.log('H1 tag:', content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1]?.replace(/\s+/g, ' ').trim());
  console.log('Has FAQ Schema:', content.includes('FAQPage'));
  console.log('Has LocalBusiness Schema:', content.includes('LocalBusiness'));
  console.log('Has WhatsApp CTA Button:', content.includes('7357678356'));
}

console.log('\n=== 3. SITEMAP & TECHNICAL INFRASTRUCTURE ===');
if (fs.existsSync(sitemap)) {
  const sm = fs.readFileSync(sitemap, 'utf8');
  const urlCount = (sm.match(/<loc>/g) || []).length;
  console.log('Total URLs indexed in sitemap.xml:', urlCount);
}
console.log('Robots.txt exists:', fs.existsSync(robots));
if (fs.existsSync(robots)) {
  console.log('Robots content:\n' + fs.readFileSync(robots, 'utf8').trim());
}
