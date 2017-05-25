
// var http = require('http')

// http.get(process.argv[2], function (response) {
//   response.setEncoding('utf8')
//   response.on('data', console.log)
//   response.on('error', console.error)
// }).on('error', console.error)


var http = require('http');
let url = process.argv[2];

http.get(url, (response) => {
    response.setEncoding('utf8');
    response.on('data', console.log);
   // console.log(response);
    // data.forEach( (item) => {
    //     console.log(item);
    // })
})