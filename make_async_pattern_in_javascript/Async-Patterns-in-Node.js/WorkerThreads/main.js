// even the Node code that you are writing is single threaded
// but you cna run multiple thread along with the main thread
// with worker threads

const {Worker,isMainThread} = require('worker_threads');
const EventEmitter = require('events');

let myevent = new EventEmitter();
myevent.on('newthread',()=>{
    console.log("A thread just started");
    
})








const firstWorker = new Worker('./firstworker.js')
myevent.emit("newthread");
const secondWorker = new Worker('./secondworker.js')
myevent.emit("newthread");