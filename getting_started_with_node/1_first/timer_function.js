
// set timeout will take a callback function
// then take another value with the second number
// lets make a function

/* fn = function(){
    console.log("this is the message");
}
*/

// this function 'fn' will execute
// after the 4 second
//setTimeout(fn,5000);

/* you can pass the argument with the set timeou t fucntion*/

fn = function(name){
    console.log("the function is named ",name);
}

setTimeout(fn,2000,"tanvir Rahman");
setTimeout(fn,2000,"ornob Rahman");
setTimeout(fn,2000,"Hafizur Rahman");
setTimeout(fn,2000,"robin Rahman");


