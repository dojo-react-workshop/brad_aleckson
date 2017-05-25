const myModule = require('./make_it_modular_exp');

let dirName = process.argv[2];
let extension = process.argv[3];

myModule(dirName, extension, (err, list) => {
    if(err)
    {
        return console.error('what error?');
    }
    
    list.forEach(function (file) 
    {
        console.log(file);
    });
});