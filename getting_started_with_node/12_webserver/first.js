// making a webservere
const http = require('http');
const server = http.createServer((req,res)=>{
    res.end("hello world");

})
const PORT =80;
server.listen(PORT,()=>{
    console.log("server is running at post ",PORT);

})

