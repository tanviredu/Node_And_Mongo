const express = require('express');
const fsPromises = require('fs').promises;
const fs = require('fs');
const datafile = 'server/data/clothing.json';
const router = express.Router();

router.route('/')
    .get(function (req, res) {

    
// so now this getclothingData will take a function
// this is the calback cunction
// so we need to make sure that the function 
// that we write accept it
//getClothingData((err,data)=>{
//    if(err){
//        console.log(err);
//    }else{
//        res.send(data);
//    }
//    
//    
//})  
    
    
    
    getClothingData().then((data)=>{
        res.send(data);
        
    }).catch((error)=>{
        console.log("something is wrong");
        
    });
        
        
    
    
    
});
    
// this callback is a parameter
// this will take the function
// and this function has two parameter
// err and data

//function getClothingData(callback){
//    fs.readFile(datafile,'utf-8',(err,data)=>{
//        if(err){
//            //console.log(err);
//            callback(err,null);// so we send the callback function the error
//        }else{
//            let  clothingData = JSON.parse(data);
//            callback(null,data);
//        }
//        
//    })
//}
//    
// so now we are sending the data with callback function
// and it is asynchronus





//
//function getClothingData(){
//    return new Promise((resolve,reject)=>{
//        // read the file
//        fs.readFile(datafile,'utf-8',(err,data)=>{
//            
//                if(err){
//                    reject(err);
//                }else{
//                    let clothingData = JSON.parse(data);
//                    resolve(clothingData);
//                }
//            
//        })
//        
//    })
//}
//

async function getClothingData(){
    let rawData = await fsPromises.readFile(datafile,'utf-8');
    let clothingData = JSON.parse(rawData);
    console.log(clothingData);
    return clothingData;
}








module.exports = router;