
/*
    what is the first class function
    what is callback function
    what is promises


    1) remember in java script first class function is used
    means any function that is treated as the variable
    we can return a value in function and also we can pass a value in a function
    but in javascript we can pass a function [first class function] as a parameter
    and also we can return a fucntion
 */

/*
    lets make a simple call back fucntion

 */

//
// function show(){
//     console.log("Show function is called");
// }
//
//
// // now we can pass the fucntion show as a parameter
// // parameter does not have to be callback it can be anything
//
// // so we pass a fucntion
// function view(callback){
//     console.log("this is the view function");
//     callback();
// }
//
// // so you pass the function as a parameter
// // becasue you can use the show function as a callback function
// //view(show)
//
//
// function show_with_parameter(x){
//     console.log("the value is ",x+1);
// }
//
//
// function view_with_parameters(value,callback){
//     console.log("this is the view function");
//     callback(value);
// }
//
//
// // so you can set the value and give the callback fucntion
// // at once
// view_with_parameters(100,show_with_parameter)

/*
what happen if you do not give a console log
 */
// function showwithparameter(x){
//     // console.log(x)
//     // console.log("from the show function");
//     return function name (x){
//         console.log(x+1);
//     }
// }
// function viewwithparameters(value,callback){
//     return callback(value);
// }
//
//
// value = viewwithparameters(100,showwithparameter);
// console.log(value);
// // we get a function
// // not any value
// // thats how the callback fucnton works
//
// value(100);








function second(x){
    console.log("calling from the second fucntion");
    return function final(x){
        return x*x;
    }

}

function third(value,callback){
    console.log("calling from the third function");
    return callback(100);
}

tmp = third(100,second);
console.log(tmp(10));











