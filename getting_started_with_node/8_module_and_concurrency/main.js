const Calc = require('./helper');
const Ca = require('./helper2');
cal = new Calc(1,2);
console.log(cal.add())


function add(x,y){
    return x+y;

}

// so you can write a callback function
// and make the function here
// and this ca will just execute the function
// using callback
console.log(Ca(1,2,add));