// this is the jquery method for js

var settings = {
    "url": "localhost:3000/getData",
    "method": "GET",
    "timeout": 0,
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });