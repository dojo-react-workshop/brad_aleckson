'use strict';

function attachTitle(firstargument)
{
    return `DR. ${firstargument}`;
}

var promise = new Promise( (fulfill, reject) => {
    fulfill('MANHATTAN');
});

promise.then(attachTitle).then(console.log);

// SOLUTION
// 'use strict';

// function attachTitle(name) {
//   return 'DR. ' + name;
// }

// Promise.resolve('MANHATTAN')
//   .then(attachTitle)
//   .then(console.log);