'use strict';

Array.prototype.map = function(callback){
    const newArray = [];
    this.forEach(function(value){
        newArray.push(callback(value));
    })
    
    // for(let i = 0; i < this.length - 1; i++)
    // {
    //     newArray.push(callback(value));
    // }

    // to be consistent with full JavaScript function 
    // this.forEach(function(value, index, array){
    //     newArray.push(callback(value, index, array));
    // })

    return newArray;
}

const a = [1,2,3];
console.log(a.map(function(val){return val * val}));