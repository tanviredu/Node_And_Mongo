// this is  asynchronous function
// so  there is a callback function

const path = require('path');
const fs = require('fs');

const files = ['first','second','third'];

async function main() {
    for (const file of files) {
        const filpath = path.resolve(file);
        // remember there is error first
        // in the callback parameter
        await fs.readFile(filpath,'utf-8', (err, data) => {
            console.log(data);
        })


    }
}
main();
console.log("hello");
