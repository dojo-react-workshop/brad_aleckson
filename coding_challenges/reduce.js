'use strict';

const array = [1,2,3,4,5];
// const sum = array.reduce(function(){});
//current Sum is opften called the accumulator
// const sum = array.reduce((currentSum, currentVal) => {
//     return (currentSum + currentVal);
// });
// console.log(`sum: ${sum}`);

// const sum1 = array.reduce((currentSum, currentVal) => {
//     return (currentSum + currentVal);
// }, 110);
// console.log(`sum1: ${sum1}`);

Array.prototype.reduce = function(callback, initialValue)
{
    var index = 0;
    var accumulator = initialValue;
    // if(typeof initialValue === "undefined")
    // if((typeof initialValue !== "number") && (!initialValue))
    if(typeof initialValue !== "number")
    {
        accumulator = this[0];
        index++;
    }
    for(index; index < this.length; index++){
        accumulator = callback(accumulator, this[index]);
    }
    return accumulator;
}
console.log(array.reduce(function(currentSum, currentValue){ return currentSum + currentValue; }));
console.log(array.reduce(function(currentSum, currentValue){ return currentSum * currentValue; }, 0));
console.log(array.reduce(function(currentSum, currentValue){ return currentSum * currentValue; }, null));
console.log(array.reduce(function(currentSum, currentValue){ return currentSum * currentValue; }, undefined));
console.log(array.reduce(function(currentSum, currentValue){ return currentSum * currentValue; }, NaN));