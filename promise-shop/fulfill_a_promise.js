'use strict';

// require('es6-promise');

var promise = new Promise( (fulfill, reject) => {
    setTimeout(() => {
        fulfill('FULFILLED!');
    }, 600);
});

promise.then(console.log);


