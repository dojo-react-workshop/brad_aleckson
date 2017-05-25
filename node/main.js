var fs = require('fs');

// fs.readFileSync('node.txt', 'utf8', (err, data) => {
//     console.log(data.toUpperCase())
// });
// console.log(file);


var fs = require("fs")
fs.readFile("node.txt", "utf8", (err, data) => {
    console.log(data.toUpperCase());
})

console.log('Something unrelated');