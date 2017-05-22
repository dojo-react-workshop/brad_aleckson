'use strict';

Array.prototype.filter = function(callback){
    const newArray = [];
    this.forEach(function(value){
        if(callback(value))
            newArray.push(value);
    })

    return newArray;
}

const a = [1,2,3,4,5,6,7,8,9,10];
console.log(a.filter(function(val){return val%2 === 0}));