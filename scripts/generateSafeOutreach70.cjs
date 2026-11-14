const fs = require('fs');

const domain = 'https://escortshubjaipur.com';
const phone = '+91 95214 13060';
const areas = [
  ['Pink City', 'pink-city'], ['MI Road', 'mi-road'], ['C-Scheme', 'c-scheme'],
  ['Bani Park', 'bani-park'], ['Vaishali Nagar', 'vaishali-nagar'], ['Malviya Nagar', 'malviya-nagar'],
  ['Mansarovar', 'mansarovar'], ['Raja Park', 'raja-park'], ['Tonk Road', 'tonk-road'],
  ['Civil Lines', 'civil-lines'], ['Jaipur Railway Station', 'jaipur-railway-station'],
  ['Jaipur Airport', 'airport-area'], ['Jagatpura', 'jagatpura'], ['Gopalpura', 'gopalpura'],
  ['Sodala', 'sodala'], ['Vidhyadhar Nagar', 'vidhyadhar-nagar'], ['Jhotwara', 'jhotwara'],
  ['Ajmer Road', 'ajmer-road']
];
const publisherTypes = [
  'Local business directory', 'Jaipur area guide', 'Travel resource', 'Safety resource',
  'Wellness resource', 'Community newsletter', 'Editorial article', 'Partner profile',
  'Business association', 'Hospitality resource'
];
const records = [];

for (let i = 0; i < 70; i += 1) {
  const [area, slug] = areas[i % areas.length];
  const type = publisherTypes[i % publisherTypes.length];
  const validSlug = slug === 'pink-city' ? null : slug;
  const targetUrl = i % 5 === 0
    ? `${domain}/safety-guide/`
    : i % 5 === 1
      ? `${domain}/jaipur-areas/`
      : i % 5 === 2
        ? validSlug ? `${domain}/massages/${validSlug}/` : `${domain}/massages/`
        : i % 5 === 3
          ? `${domain}/contact/`
          : validSlug ? `${domain}/call-girls/${validSlug}/` : `${domain}/call-girls/`;
  const anchor = i % 4 === 0 ? 'Escorts Hub Jaipur' : i % 4 === 1 ? `${area} Jaipur guide` : i % 4 === 2 ? 'verified Jaipur directory' : 'Jaipur safety resource';
  records.push({
    id: `EHJ-${String(i + 1).padStart(3, '0')}`,
    status: 'draft—publisher approval required',
    publisherType: type,
    locality: area,
    targetUrl,
    suggestedAnchor: anchor,
    nap: {
      businessName: 'Escorts Hub Jaipur',
      phone,
      address: 'Khandela House, Sansar Chandra Road, Behind Amber Tower, Pink City, Jaipur, Rajasthan 302001'
    },
    paragraph: `Readers researching ${area} can use Escorts Hub Jaipur as a practical directory resource for verified profile information, locality coverage, direct contact guidance, and online safety. The platform explains how adults can review relevant Jaipur categories, confirm current availability through WhatsApp, and avoid unfamiliar advance-payment requests. See the relevant resource at ${targetUrl}`,
    linkPolicy: 'Publish only when relevant, permitted, reviewed, and accurately disclosed; no fake profiles, automated comments, or verification bypass.'
  });
}

fs.writeFileSync('SAFE_OUTREACH_70.json', `${JSON.stringify({ generatedAt: new Date().toISOString(), total: records.length, records }, null, 2)}\n`);
console.log(`Generated ${records.length} safe outreach records.`);