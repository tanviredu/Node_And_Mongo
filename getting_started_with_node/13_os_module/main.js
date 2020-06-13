const os = require('os');

console.log("os Platform",os.platform());
console.log("CPU architecture ",os.arch());
console.log("CPU CORE",os.cpus().length);
console.log("HOME DIR",os.homedir());
