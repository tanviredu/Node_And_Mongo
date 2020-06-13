// this is  asynchronous function
// so  there is a callback function

const path = require('path');
const fs = require('fs');

const files = ['first','second','third'];

files.forEach((file)=>{
       const filpath = path.resolve(file);
       // remember there is error first
        // in the callback parameter
       fs.readFile(filpath,(err,data)=>{
           console.log(data);
       })


})

console.log("hello");

// so you can see that the hello print first
// because it takes time to load the file