/*
*  in promise you will get some thing call promise
* which can let you to the result if does then resolve
* if not then reject it
* like ig you ask a cheicken for a chick it can give you egg
* but this egg can lead you to the the chick
* or it can be damaged and failed
* if does you resolve it
* otherwise you reject it
* */



/*
*  using promise is easier than using callbacks
* what is promises??
* remember in javascript
* the function is also can be a function
* promise object takes a function as  a parameter
* with two attrivute(works as a function it self but dont worry)
* resolve and reject
* remeber the resolve and reject itself a method
* * */

var promise = new Promise((resolve,reject)=>{
    resolve("123");// if you comment this out you will get the rehect
    reject('1233');
});

// this will return the promise
console.log(promise);


// how can you extract the data from the promise of successful or if failed

// if successful
// it will return a function
// to catch it you need a function
promise.then((corect_result)=>{
        console.log('the correct_result',corect_result);
}
// this is for error
,(error)=>{
    console.log("this is error",error);
    }
)