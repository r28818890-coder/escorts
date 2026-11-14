const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
const publicFiles = fs.readdirSync(publicDir).filter((name) =>
  (/backlink|citation|matrix/i.test(name) && /\.(json|html)$/i.test(name)) ||
  /^(atom\.xml|rss\.xml|\.htaccess|ecj-logo\.svg)$/i.test(name)
);
const scriptsDir = path.join(__dirname);
const scriptFiles = fs.readdirSync(scriptsDir).filter((name) =>
  /\.(cjs|mjs)$/i.test(name) && /backlink|platform|otp|pillar|master|auto_live/i.test(name) && name !== path.basename(__filename)
);
const files = publicFiles.map((name) => path.join(publicDir, name)).concat(scriptFiles.map((name) => path.join(scriptsDir, name)));

const replacements = [
  ['https://jaipurescortsclub.online', 'https://escortshubjaipur.com'],
  ['http://jaipurescortsclub.online', 'https://escortshubjaipur.com'],
  ['jaipurescortsclub.online', 'escortshubjaipur.com'],
  ['+917357678356', '+919521413060'],
  ['917357678356', '919521413060'],
  ['7357678356', '9521413060'],
  ['Jaipur Escorts Club', 'Escorts Hub Jaipur'],
  ['JAIPUR ESCORTS CLUB', 'ESCORTS HUB JAIPUR'],
  ['ESCORTS CLUB JAIPUR', 'ESCORTS HUB JAIPUR'],
  ['Escorts Club Jaipur', 'Escorts Hub Jaipur'],
];

let updated = 0;
for (const filePath of files) {
  const before = fs.readFileSync(filePath, 'utf8');
  const after = replacements.reduce((text, [from, to]) => text.split(from).join(to), before);
  if (after !== before) {
    fs.writeFileSync(filePath, after, 'utf8');
    updated += 1;
  }
}

console.log(`Migrated backlink/citation references in ${updated} files.`);