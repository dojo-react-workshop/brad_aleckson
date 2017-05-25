var http = require('http');
var url = require('url');
const listenPort = process.argv[2];

var server = http.createServer(function(request, response) {
    // console.log(request.url);
    let parsedUrl = url.parse(request.url, true);
    let requestPath = parsedUrl.pathname;
    let iso = parsedUrl.query.iso;
    // console.log(`requestPath: ${requestPath}`);
    // console.log(`iso: ${iso}`);

    let newDate = new Date(iso);
    // console.log(`newDate.getHours(): ${newDate.getHours()}`);
    // console.log(`newDate.unixtime(): ${newDate.unixtime()}`);

    var fileLocation; // = './index.html';
    switch (requestPath) {
        case "/api/parsetime":     
            response.end(JSON.stringify({"hour" : newDate.getHours(), "minute" : newDate.getMinutes(), "second": newDate.getSeconds()})+ "\n");     
            break;  
        case "/api/unixtime":     
            response.end(JSON.stringify({"unixtime" : newDate.getTime()}));
            break;   
        default:
            // console.log('bad request to be spent');
            reponse.writeHead(404);
            response.end();            
            break;
    }
});

server.listen(listenPort);