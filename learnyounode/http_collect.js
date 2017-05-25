var http = require('http');
let url = process.argv[2];

var returnString = "";
http.get(url, (response) => {
    response.setEncoding('utf8');
    response.on('data', (data) => {
            returnString += data;
        });
    response.on('end', () => {
        console.log(returnString.length);
        console.log(returnString);
    });
})