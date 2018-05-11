const request = require('request');
const fs = require('fs');
const zlib = require('zlib');

request('http://www.pluralsight.com')
.pipe(zlib.createGzip())
.pipe(fs.createWriteStream('page.gz'));