var fs = require('fs');
let path = process.argv[2];
fs.readFile(path, 'utf8', (err, data) => {
    if(!err)
    {
        var arr = data.split('\n');
        console.log(arr.length-1);
    }
});

