var fs = require('fs');
let path = process.argv[2];
var contents = fs.readFileSync(path).toString();
var arr = contents.split('\n');

console.log(arr.length-1);
