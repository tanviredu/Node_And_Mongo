/*
*  if you want to print some thing in a timer
* but in a loop you can do with set TimeInterval parameter
* */

fn = function(){
    console.log("This will be called in every 1 second");
}

setInterval(fn,1000)
// this message will be printed forever
