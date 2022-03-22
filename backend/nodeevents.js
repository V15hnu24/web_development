const EventEmitter = require('events');

class MyEmitter extends EventEmitter{}

const myEmitter = new MyEmitter();

myEmitter.on('WaterFull', () => {
    console.log('PLese iabsiavc asvbasj bauivba');
    setTimeout(() => {
        console.log('please tur n oOFFFFF');
    },3000);
})

console.log('Runnning!!')

console.log('Runnning!!!!!!')
myEmitter.emit('WaterFull')