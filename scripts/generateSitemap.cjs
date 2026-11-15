const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://wenoidaescorts.com';
const categories = ['massages', 'call-girls', 'russian-escorts', 'transsexual', 'adult-meetings'];
const localities = [
  'sector-18', 'sector-62', 'sector-50', 'sector-137', 'sector-18-film-city',
  'sector-76-78', 'sector-128', 'sector-142', 'pari-chowk', 'noida-extension',
  'knowledge-park', 'indirapuram', 'vaishali', 'vasundhara', 'crossings-republik',
  'kaushambi', 'mayur-vihar', 'botanical-garden'
];

const urls = new Map();
const add = (route, priority, changefreq) => urls.set(`${DOMAIN}/${route}`.replace(/([^:]\/\/)\/+/, '$1'), { priority, changefreq });

[
  ['', '1.0', 'daily'], ['about', '0.7', 'monthly'], ['contact', '0.8', 'monthly'],
  ['booking', '0.9', 'daily'],
  ['faq', '0.8', 'weekly'], ['safety-guide', '0.8', 'weekly'],
  ['noida-areas', '0.85', 'weekly'],
  ['privacy', '0.4', 'monthly'], ['terms', '0.4', 'monthly'], ['refund', '0.4', 'monthly'],
  ['blog', '0.85', 'weekly']
].forEach(([route, priority, changefreq]) => add(route, priority, changefreq));

const { BLOGS } = require('./blogData.cjs');
BLOGS.forEach((blog) => add(`blog/${blog.slug}`, '0.75', 'monthly'));

categories.forEach((category) => {
  add(category, category === 'massages' || category === 'call-girls' ? '0.95' : '0.8', 'daily');
  localities.forEach((locality) => add(`${category}/${locality}`, '0.85', 'daily'));
});

const today = new Date().toISOString().split('T')[0];

const body = [...urls.entries()].map(([url, meta]) => `  <url><loc>${url.endsWith('/') ? url : `${url}/`}</loc><lastmod>${today}</lastmod><changefreq>${meta.changefreq}</changefreq><priority>${meta.priority}</priority></url>`).join('\n');
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;

const publicPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
fs.writeFileSync(publicPath, sitemap, 'utf8');

const distDir = path.join(__dirname, '..', 'dist');
if (fs.existsSync(distDir)) {
  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap, 'utf8');
}

console.log(`Generated sitemap with ${urls.size} canonical URLs (lastmod: ${today}).`);
