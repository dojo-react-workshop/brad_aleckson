var fs = require('fs');
let dirName = process.argv[2];
let extension = '.' + process.argv[3];
fs.readdir(dirName, 'utf8', (err, list) => {
    if(err)
    {
        console.log('Error getting files from directory');        
    }
    for(var i = 0; i < list.length; i++)
    {
        if(list[i].indexOf(extension) >= 0)
        {
            console.log(list[i]);
        }
    }
});
