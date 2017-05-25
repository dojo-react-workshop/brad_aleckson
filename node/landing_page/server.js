console.log('server!')

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response) {
    // console.log('I got hit!');
    console.log(request.url);

    var fileLocation; // = './index.html';
    switch (request.url) {
        case "/":     
            fileLocation = "./index.html";     
            break;  
        case "/ninjas":     
            fileLocation = "./ninjas.html";     
            break;   
        case "/dojos/new":
            fileLocation = "./dojos.html";           
            break; 
        default:
            console.log('bad request to be spent');
            response.end('bad request');            
            break;
    }
    if(fileLocation){
        fs.readFile(fileLocation, "utf8", (err, data) => {
            response.end(data);
        });
    }
    console.log('end of request');
});

server.listen(6789);