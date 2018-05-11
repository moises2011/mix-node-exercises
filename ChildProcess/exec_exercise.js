const exec = require('child_process').exec;

const child = exec('time', (err, stdout, stderr)=>{
    if(err){
        console.log('Error...', stderr);
    }else{
        console.log('Output is:', stdout);
    }
});

console.log('PID is:', child.pid);