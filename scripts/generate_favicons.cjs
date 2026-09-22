const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const publicDir = path.join(__dirname, '..', 'public');
const logoPath = path.join(publicDir, 'jaipur_escorts_club_logo.jpg');

async function makeFavicons() {
  if (!fs.existsSync(logoPath)) {
    console.error('Logo file not found:', logoPath);
    return;
  }

  console.log('Generating crisp optimized favicons from logo...');

  // 1. 32x32 PNG favicon
  await sharp(logoPath)
    .resize(32, 32, { fit: 'cover' })
    .png({ quality: 90 })
    .toFile(path.join(publicDir, 'favicon-32x32.png'));
  console.log('✓ Created favicon-32x32.png');

  // 2. 16x16 PNG favicon
  await sharp(logoPath)
    .resize(16, 16, { fit: 'cover' })
    .png({ quality: 90 })
    .toFile(path.join(publicDir, 'favicon-16x16.png'));
  console.log('✓ Created favicon-16x16.png');

  // 3. 48x48 standard favicon.ico / png
  await sharp(logoPath)
    .resize(48, 48, { fit: 'cover' })
    .png({ quality: 90 })
    .toFile(path.join(publicDir, 'favicon.png'));
  console.log('✓ Created favicon.png');

  // 4. 180x180 Apple Touch Icon
  await sharp(logoPath)
    .resize(180, 180, { fit: 'cover' })
    .png({ quality: 90 })
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));
  console.log('✓ Created apple-touch-icon.png (180x180)');

  // 5. 192x192 & 512x512 PWA Icons
  await sharp(logoPath)
    .resize(192, 192, { fit: 'cover' })
    .png({ quality: 90 })
    .toFile(path.join(publicDir, 'icon-192.png'));
  console.log('✓ Created icon-192.png');

  await sharp(logoPath)
    .resize(512, 512, { fit: 'cover' })
    .png({ quality: 90 })
    .toFile(path.join(publicDir, 'icon-512.png'));
  console.log('✓ Created icon-512.png');

  // Copy 32x32 as favicon.ico
  fs.copyFileSync(path.join(publicDir, 'favicon.png'), path.join(publicDir, 'favicon.ico'));
  console.log('✓ Updated favicon.ico with lightweight icon');
}

makeFavicons().catch(console.error);
