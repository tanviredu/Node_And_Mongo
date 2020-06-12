let counter = 0;
const intervalid = setInterval(()=>{
    console.log("hello world");
    counter++;

    if(counter==5){
        console.log("Finished");
        //console.log(intervalid); // this is like a process id
        clearInterval(intervalid);
    }
},1000);