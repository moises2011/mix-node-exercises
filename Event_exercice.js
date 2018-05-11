const EventEmitter = require('events').EventEmitter;
//Emit
const getCounter = c => {
    const event = new EventEmitter();
    process.nextTick(() => {
        let count = 0;
        event.emit('start');
        const it = setInterval(() => {
                        event.emit('data',++count);
                        if(count === c){
                            event.emit('end');
                            clearInterval(it);
                        }
                    },1000);
    });
    return event;
}
//Listening
const counter = getCounter(10); 
counter.on('start', c => console.log('Start'));
counter.on('data', c => console.log('Counter', c));
counter.on('end', c => console.log('Finish'));