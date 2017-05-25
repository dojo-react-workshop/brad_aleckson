var qio = require('q-io/http');

qio.read("http://localhost:7000")
    .then( (data) =>{
        return qio.read("http://localhost:7001/" + data)
    })
    .then( (json) => {
        console.log(JSON.parse(json));
    })
    .then(null, console.error)
    .done();