const request = require('request');
const fs = require('fs');

const req = request('http://www.google.com');
req.pipe(fs.createWriteStream('./page.json'));
req.on('data', chunk => console.log('chuck', chunk));
//req.on('response', res => console.log('res', res.statusCode));
req.on('end', () => console.log('Finish'));
req.pipe(process.stdout);