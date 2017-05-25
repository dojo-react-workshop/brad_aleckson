const http = require('http');
const listenPort = process.argv[2];
const path = process.argv[3];
const fs = require('fs');

const server = http.createServer( (request, response) => {
    response.writeHead(200, { 'content-type': 'text/plain' });
    fs.createReadStream(path).pipe(response);
})


server.listen(listenPort);

