console.log('Balance Point exercise');

const balancePoint  = (array) => {
    let sum1 = array.reduce(function (accum, val){
        return accum + val;
    })
    // console.log(`sum1: ${sum1}`);

    let sum2 = 0;
    for( let i = 0; i < array.length; i++)   
    {
        if(sum1 === sum2) {return true}
        let current = array[i];
        sum2 += current;
        sum1 -= current;
        // console.log(`sum1: ${sum1}, sum2: ${sum2}`);
    }
    return false;

}

let arr1 = [20, -10, 10];
console.log(`balancePoint ${balancePoint(arr1)} `);

let arr2 = [1,2,3,4,5,15];
console.log(`balancePoint ${balancePoint(arr2)} `);

let arr3 = [1,2,3,4,5,16];
console.log(`balancePoint ${balancePoint(arr3)} `);