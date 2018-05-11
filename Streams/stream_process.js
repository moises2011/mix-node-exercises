process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', chunk => {
    process.stdout.write('data -->' + chunk);
});

process.stdin.on('end', () => {
    process.stderr.write('End!\n');
});
console.log("Node is running in process", process.pid);