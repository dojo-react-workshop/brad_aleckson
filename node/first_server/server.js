console.log('server!')

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response) {
    console.log('I got hit!');
    //console.log(request);
    
    fs.readFile("./first.html", "utf8", (err, data) => {
        response.end(data);
    })
    // fs.close();
    //response.write('Larry Fitzgerald');
    //response.end;
});

server.listen(8000);