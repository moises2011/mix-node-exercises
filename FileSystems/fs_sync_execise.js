const fs = require('fs');
const folder = 'temp';
if(fs.existsSync(folder)){
    console.log('Removing temp directory!');
    const fileUri = folder + '/new.txt';
    if(fs.existsSync(fileUri)){
        fs.unlinkSync(fileUri);
    }
    fs.rmdirSync(folder);
}

fs.mkdirSync(folder);

if(fs.existsSync(folder)){
    process.chdir(folder);
    fs.writeFileSync('test.txt', 'Hello world | Hola mundo');
    fs.renameSync('test.txt', 'new.txt');
    console.log('File size:', fs.statSync('new.txt').size, 'bytes');
    console.log('File contents:', fs.readFileSync('new.txt').toString());
}