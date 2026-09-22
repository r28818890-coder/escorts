const https = require('https');

function testGraph() {
  const url = 'https://api.graph.org/createAccount?short_name=JaipurClub&author_name=JaipurEscortsClub';
  https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
    let data = '';
    res.on('data', c => data += c);
    res.on('end', () => {
      console.log('Status:', res.statusCode);
      console.log('Data:', data.slice(0, 300));
    });
  }).on('error', console.error);
}

testGraph();
