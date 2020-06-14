import express from "express";
import data from "./data/data.json";
const app = express();
const PORT = 3000;
/* FETCH STATIC FILE FROM THE SERVER */
// start with the public folder
app.use(express.static('public'));
// adding the images folder

// get the images localhost:3000/images/<image_name>;
app.use('/images',express.static('images'))
app.use('/css',express.static('css'))
// YOU CAN ADD MULTIPLE STATIC
// FOLDER TO YOUR EXPRESS app

// USED FOR THE JSON CONVERSION
app.use(express.json());
// after that you can use
// res.json()
// also with res.send();



/* ROUTE GOES HERE */

//simple get
// to make middleware or do the other job
// we might send the code even further
// we have to add the next()
// wnen you  add the next you can do the further job
var server_hit_count = 0;
app.get('/',(req,res,next)=>{
        res.send(`A get request with / route on port ${PORT} `);
        next();
},(req,res)=>{
    
    console.log("this is after excuting the response code");
    server_hit_count++;
    console.log(`[+] total server hit :  ${server_hit_count}`);
    // now you can redirect to a url
    res.redirect('https://localhost:3000/getData');
    

}
        
        )
app.get('/getData/downloadimg',(req,res)=>{
    //res.json(data);
    // this is used for the download funtionality
    res.download('images/img1.jpg')
    
})

// get by id
app.get('/item/:id',(req,res)=>{
    // data wil be stored in string with the 
    // req.params.id 
    //console.log(req.params.id);
    //let number = Number(req.params.id);
    //console.log(number);
    // get the data from the json file
    // and then filter it with thenumber
    var number = Number(req.params.id);
    var filtered_data = data[number];
    console.log(filtered_data);
    res.send(filtered_data);
    
})

// getting multiple parameter
// like that
app.get('/getData/:category/:id/:first_ame',(req,res)=>{
    res.json(data);
})






// MAKING POST REQUEST
// You cant send more than 1 request
// in a a block of code
app.post('/newItem',(req,res,next)=>{
    res.send("this is post request");
    next();
},(req,res)=>{
    console.log("[*] User just hit a post request");
});

app.put('/newPut',(req,res,next)=>{
    res.send("This will response to  a put request");
    next();
},(req,res)=>{
        console.log("[*] User just updated something");
    
});


// YOU DONT NEED TO WRITE SEPERATE REQUEST
// YOU CAN CHAIN DIFFERENT REQUEST
// TO A SAME ROUTE
// THE WHOLE CRUD FOR ONE ROUTE

app.route('/item')
    // THE GET METHOD
    .get((req,res)=>{
        res.send("this is a get request");  
    })
    .post((req,res)=>{
        res.send("this is a post request");
    })
    .put((req,res)=>{
        res.send("this is  a put request");
    })
    .delete((req,res)=>{
        res.send("this is the delete request");
    })




// Route with middleware
// THIS IS A MIDDLEWARE
function preventUser(res,data,id){
    if(id==25){
        res.send("you are not authorize for the reqiuest");
        console.log("Unauthorized user");
    }else{
        res.send(data[id]);
        console.log(data[id]);
    }
}


app.get('/newItem/:id',(req,res)=>{
    
    var number = Number(req.params.id);
    var item_data = data;
    
    preventUser(res,data,number);
    
    
    // everything above is the middleware
    // middleware could be anything that
    // process the request before sending to the 
    // response
});


// MIDDLEWARE
// the static is alsoa  middlware
// another default is body-parser
// to fetch the get and Post data from the form;



// you can use the default JSON converter for the 
// JSON parsting
// it helps to pose data on the document 
// Database like MongoDB

app.get('/getinjson',(req,res)=>{
   res.json(data); 
});


// take the post data with the request
app.post('/postData',(req,res)=>{
    
    // get the data first
    // then maybe yo write a 
    // middlware to check the valid data
    // and then save in the databse
    // then response it
    // for you catch it you need to
    // activate the app.use(express.json());
    var p_data = req.body;
    console.log(p_data);
    res.send(p_data);
    
});




// adding the error handler
// for the express route
// this is the default
//you nedd to make a error
// handling function at the end
// otherwise express will
// use the default one


app.route('/error_check')
    // THE GET METHOD
    .get((req,res)=>{
        throw new Error();  
    })
    .post((req,res)=>{
        res.send("this is a post request");
    })
    .put((req,res)=>{
        res.send("this is  a put request");
    })
    .delete((req,res)=>{
        res.send("this is the delete request");
    })






// when you write this 
// at the end of every route
// with four paramter 
// the express will understand that you have a
// custom error handler
// and it start using it
// otherwise it will use the default
// error handler

app.use((err,req,res,next)=>{
    //save the error in the console
    console.log("you have a unknown error [custom error handler]");
    res.send("you have a unknown error [custom error handler]")
    // now if you throw an error
    // from many route 
    // this will catch it
     
});






/*  SERVER PORTION   */


// take the port parameter and when run
// the after work is defined by a function
app.listen(PORT,()=>{
    
    // this is the server
    // so it wont show in the bowser
    console.log(`app is running on port : ${PORT}`);
    //console.log(data);
})

