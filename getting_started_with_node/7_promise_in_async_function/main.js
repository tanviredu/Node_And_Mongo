// we use the Promise function
// to do the async function
// insted of the callback function
// promise is better
// if it successful it willl resolve
// otherwise it will reject
const https = require('https');


// this is async

function fetch(url){
    return new Promise((resolve,reject)=>{
        https.get(url,(res,error)=>{
            // resolving the response
           resolve(res);
           reject(error);
            });
    }

    );
}

fetch("https://www.google.com").then((data)=>{
    console.log(data);
},(error)=>{
    console.log('there is a error');
    }
)

// this is a async functon using rpomises


// we can do the same thing wiht he promises too
    async function read(){
    const data = await fetch('https://www.google.com');
    console.log(data);

};

read();

// you can see the program terminated
// not printing at last because this is a async function
// when the data is fetchd by the time the string is printed
// when it is finished then the data is rpinted

// lets try with normal function

function read_sync(){
    const data = fetch('https://www.google.com');
    console.log(data.length);
    console.log("program terminated");
    // you you can see its printed at the last
}

read_sync();


// you can choose any async feature ou want