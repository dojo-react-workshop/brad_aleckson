var net = require('net');
let listenPort = process.argv[2];

let server = net.createServer(function(socket){
    let newDate = new Date();
    let data = newDate.getFullYear().toString();
    data += '-'
    data += (newDate.getMonth() + 1) >=10 ? (newDate.getMonth() + 1).toString() : `0${(newDate.getMonth() + 1).toString()}`;
    data += '-'
    data += newDate.getDate() >=10 ? newDate.getDate().toString() : `0${newDate.getDate().toString()}`;
    data += ' '
    data += newDate.getHours() >=10 ? newDate.getHours().toString() : `0${newDate.getHours().toString()}`;
    data += ':'
    data += newDate.getMinutes() >=10 ? newDate.getMinutes().toString() : `0${newDate.getMinutes().toString()}`;
    //console.log(`data: ${data}`);
    socket.write(data);
    socket.end("\n");
}) 

server.listen(listenPort);