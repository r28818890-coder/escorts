const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'src');

// Comprehensive emoji regex
const emojiRegex = /[\u{1F300}-\u{1F5FF}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F1E6}-\u{1F1FF}]/gu;

function cleanFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  if (emojiRegex.test(content)) {
    const cleaned = content.replace(emojiRegex, '');
    fs.writeFileSync(filePath, cleaned, 'utf8');
    console.log(`Cleaned emojis from: ${path.relative(srcDir, filePath)}`);
  }
}

function walk(dir) {
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      walk(fullPath);
    } else if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.html') || file.endsWith('.json')) {
      cleanFile(fullPath);
    }
  });
}

walk(srcDir);
console.log('Finished purging all emojis from src directory.');
