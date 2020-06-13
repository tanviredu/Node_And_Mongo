const express = require('express');
const fsPromises = require('fs').promises;
const fs = require('fs');
const datafile = 'server/data/clothing.json';
const router = express.Router();

router.route('/')
    .get(function (req, res) {

    
/*
    do the same work with async and await

*/
getClothingData(function(err,data){
    if(err){
        console.log(err);
    }else{
        res.send(data);
    }
    
    
})  
    
    

    
async function getClothingData(){
        
        // use a function that use promises
        let rawData = await fsPromises.readFile(datafile,'utf-8');
        let clothingData = JSON.parse(rawData);
        console.log(clothingData);      
        return clothingData;
    }
    
})
    
module.exports = router;