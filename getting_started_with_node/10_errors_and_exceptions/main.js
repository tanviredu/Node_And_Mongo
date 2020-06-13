// this is the synchronous function
// next folder will be asynchronous
const path = require('path');
const fs = require('fs');

const files = ['first','second','third'];

files.forEach((file)=>{
    try {
        // tomake the absolute path for three element of the array
        const filepath = path.resolve(file);
        const data = fs.readFileSync(filepath,'utf-8');
        console.log(data);
    }catch (e) {
        console.log("there is a file missing");
    }

    }
)
