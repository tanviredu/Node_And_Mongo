// if any event is occur and then 
// if you write some code for that
// when the work is happend
// the other the event code will
// run 

/*
    youc an use multiple ebent for a single code
    like for example in a ecommerce
    you wrote two event handler when the user add the
    porduct in the cart you get a mail and another event will log the info in a text file
    so when the user add an item these two event will start working

*/

const EventEmitter = require('events');

let myevent = new EventEmitter();
//'wroteCode' is the event name
// and the function is when this event call what happen



/*
    we make the event woth myevent.on() method
*/
myevent.on('wroteCode',()=>{
    console.log("Somebody just wrote a code");
    
})



myevent.on('wroteCode',()=>{
    console.log("Somebody just start typing");
    
})


function main(){
    console.log("i start writing code");
    myevent.emit('wroteCode');
    
}

main();