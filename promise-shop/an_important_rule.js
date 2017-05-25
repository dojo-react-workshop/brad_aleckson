'use strict';

function alwaysThrows(){
    throw new Error('OH NOES');
}

function iterate(firstargument)
{
    console.log(firstargument);
    return firstargument+=1;
}

Promise.resolve(iterate(1))
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(alwaysThrows)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(null, console.log)