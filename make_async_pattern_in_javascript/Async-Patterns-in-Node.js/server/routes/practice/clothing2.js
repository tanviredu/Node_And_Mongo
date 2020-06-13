/*
    this file is for explanation the asynce cehaviour
    const express = require('express');

/* GET all clothing */

const fs = require('fs');
const datafile = 'server/data/clothing.json';
const router = express.Router();

router.route('/')
    .get(function (req, res) {

    let clothingData = getClothingData();
    res.send(clothingData);
    
    

function getClothingData(){
    fs.readFile(datafile,'utf-8',(err,data)=>{
        if(err){
            console.log(err);
        }else{
            let  clothingData = JSON.parse(data);
            return clothingData;
        }
        
    })
}
    
    
module.exports = router;

/*

 THIS WILL NOT WORK .THE FUNCTION WILL NOT SEND ANYTHING AND THE clothingData 
 that we make the hold the value will be undefined BECAUSE
 IN THE GETCLOTHING DATA WE WRITE A ASYNC FUNCTION SO DURING THE TIME IT WILL TRY TO FETCH DATA
 other LINE CODE WILL RUN AND TILL THEN THE (data) have no value because the work is not finished
 yet and there for this function will  reutrn the value wich is undefind or null means nothing in there because the function does not wait utill the data variable is filled with jason data
 so you will get nothing in return
 so you cant write this async function is a regular function and just return the value
 and hope this works

*/
