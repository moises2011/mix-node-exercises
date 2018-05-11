const http = require('http');

const options = {
    host: 'www.google.com',
    port: 80,
    path: '/',
    method: 'GET'
};

console.log('Going to make request...');

const req = http.request(options, (res) => {
    console.log(res.statusCode);
    res.pipe(process.stdout);
});

req.end();