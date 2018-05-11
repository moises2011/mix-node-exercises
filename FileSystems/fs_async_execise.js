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

fs.mkdir(folder, (err) => {
    fs.exists(folder, (exists) => {
        if(exists){
            process.chdir(folder);
            fs.writeFile('test.txt', 'Hello world | Hola mundo', (err) => {
                fs.rename('test.txt', 'new.txt', (err) => {
                    fs.stat('new.txt', (err, stats) => {
                        console.log('File size:', stats.size, 'bytes');
                        fs.readFile('new.txt', (err, data) => {
                            console.log('File contents:', data.toString());
                        });
                    });                    
                });
            });            
        }
    });
});

