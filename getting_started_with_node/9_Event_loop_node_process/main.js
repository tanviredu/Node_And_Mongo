/*
*  The event loop
* is that what node uses to process asynchronous action adn
* interface them so yu dont have to worry about maintaining the thread
* */

// make a event loop

setInterval(()=>{
    console.log("this is a example to the node Event loop");
    console.log("this will create a process in the Os");
},1000);