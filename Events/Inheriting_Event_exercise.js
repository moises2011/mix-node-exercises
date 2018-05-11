const util = require('util');
const EventEmitter = require('events').EventEmitter;
//Emit
function CounterEvent(c){
    const event = this;
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
util.inherits(CounterEvent, EventEmitter);

//Listening
const counter = new CounterEvent(10); 
counter.on('start', c => console.log('Start'));
counter.on('data', c => console.log('Counter', c));
counter.on('end', c => console.log('Finish'));