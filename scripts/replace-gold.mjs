import fs from 'fs';
import path from 'path';

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      walkDir(dirPath, callback);
    } else {
      callback(path.join(dir, f));
    }
  });
}

const targetDir = 'e:/scot website/src';

walkDir(targetDir, filePath => {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts') || filePath.endsWith('.css') || filePath.endsWith('.html')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    content = content
      .replace(/#fbbf24/g, '#e11d48')
      .replace(/#d97706/g, '#be123c')
      .replace(/#f59e0b/g, '#e11d48')
      .replace(/#eab308/g, '#e11d48')
      .replace(/#ca8a04/g, '#be123c')
      .replace(/rgba\(251,\s*191,\s*36,/g, 'rgba(225, 29, 72,')
      .replace(/rgba\(217,\s*119,\s*6,/g, 'rgba(190, 18, 60,')
      .replace(/rgba\(245,\s*158,\s*11,/g, 'rgba(225, 29, 72,')
      .replace(/\bamber-(\d+)\b/g, 'rose-$1')
      .replace(/\byellow-(\d+)\b/g, 'rose-$1')
      .replace(/text-gold/g, 'text-rose-600')
      .replace(/border-gold/g, 'border-rose-500')
      .replace(/bg-gold/g, 'bg-rose-600');

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Updated colors in:', filePath);
    }
  }
});
