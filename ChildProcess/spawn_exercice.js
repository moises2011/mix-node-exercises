const spawn = require('child_process').spawn;
const ps = spawn('ps', ['ax']);
const grep = spawn('grep', ['node']);

ps.stdout.pipe(grep.stdin);
grep.stdout.pipe(process.stdout);

ps.stderr.on('data', data => {
    console.log('ps out: ',data);
});

grep.stderr.on('data', data => {
    console.log('grep out: ',data);
});