'use strict';

/* global first, second */
setTimeout(() => {
    var firstPromise = first();

    var secondPromise = firstPromise.then(function (val) {
    return second(val);
    });

    secondPromise.then(console.log);
}, 300);
// As an alternative to the code above, ou could also do this:
// first().then(second).then(console.log);

// my attempt
// first().then(() => {
//     return second('SECRET VALUE');
// }).then((val) => {
//     return onFulfilled(val)
// }).then((val) => {
//     console.log(val)
// })