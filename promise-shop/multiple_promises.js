'use strict';

function all(promise1, promise2)
{
    return new Promise(function(fulfill, reject){
        let counter = 0;
        let arr = [];

        setTimeout(() => {counter = 0},1100);

        promise1.then( (val) => {
            arr[0] = (val);
            counter++;

            if(counter >= 2)
                fulfill(arr);
        });

        promise2.then( (val) => {
            arr[1] = (val);
            counter++;

            if(counter >= 2)
                fulfill(arr);
        });
    });
}

all(getPromise1(), getPromise2()).then(console.log);