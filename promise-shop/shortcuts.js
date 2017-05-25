'use strict';

var promise = new Promise( (fulfill, reject) => {
    fulfill('PROMISE VALUE');
});
promise.catch( (err) => {
    console.error('THERE IS AN ERROR');
    console.error(err.message);
});

var promise2 = new Promise( (fulfill, reject) => {
    fulfill('PROMISE VALUE');
});
promise2 = Promise.resolve('SECRET VALUE');

// function onRejected(error){
//     console.log(error.message);
// }

// promise.then(console.log, onRejected);
// console.log('MAIN PROGRAM');