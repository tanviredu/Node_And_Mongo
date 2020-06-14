const fs = require('fs');
const datafile = 'server/data/clothing.json';
const router = express.Router();

router.route('/')
    .get(function (req, res) {

    
// so now this getclothingData will take a function
// this is the calback cunction
// so we need to make sure that the function 
// that we write accept it
getClothingData(function(err,data){
    if(err){
        console.log(err);
    }else{
        res.send(data);
    }
    
    
})    
    
// this callback is a parameter
// this will take the function
// and this function has two parameter
// err and data

function getClothingData(callback){
    fs.readFile(datafile,'utf-8',(err,data)=>{
        if(err){
            //console.log(err);
            callback(err,null);// so we send the callback function the error
        }else{
            let  clothingData = JSON.parse(data);
            callback(null,data);
        }
        
    })
}
    
// so now we are sending the data with callback function
// and it is asynchronus
    
module.exports = router;