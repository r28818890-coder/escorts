const https = require('https');
const fs = require('fs');
const path = require('path');

const url = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80';
https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
  const chunks = [];
  res.on('data', c => chunks.push(c));
  res.on('end', () => {
    const buf = Buffer.concat(chunks);
    fs.writeFileSync(path.join(__dirname, '..', 'public', 'images', 'model_15.jpg'), buf);
    console.log('Successfully saved model_15.jpg (' + Math.round(buf.length / 1024) + ' KB)');
  });
}).on('error', console.error);
