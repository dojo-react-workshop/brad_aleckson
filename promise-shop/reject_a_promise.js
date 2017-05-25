'use strict';

var promise = new Promise( (fulfill, reject) => {
    setTimeout(() => {
        reject(new Error('REJECTED!'));
    }, 650);
});

function onReject(error){
    console.log(error.message);
}

promise.then(console.log, onReject);


