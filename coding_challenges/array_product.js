// Given an array, we want the product of all the numbers
// except the number at the position of the array
//
// hint from Charlie:  Get chunks.  
// need to multiply everything before the position times everything after the position
function prod(arr)
{
    let newArr = [];
    let prod = 1; // initialize to the identity property of operation
    for(let i = 0; i < arr.length; i++)
    {
        newArr[i] = prod;
        prod *= arr[i];
    }
    console.log(`calculating the before chunks: ${newArr}`);
    prod = 1;
    for(let i = arr.length -1; i >= 0; i--)
    {
        newArr[i] *= prod;
        prod *= arr[i];
    }
    return newArr;
}
console.log(prod([5,1,3,8,2]))
console.log(prod([5,1,3,4,2]));


// my attempt, same idea but for addition
function sum(arr)
{
    let newArr = [];
    let sum = 0; // initialize to the identity property of operation
    for(let i = 0; i < arr.length; i++)
    {
        newArr[i] = sum;
        sum += arr[i];
    }
    sum = 0;
    for(let i = arr.length -1; i >= 0; i--)
    {
        newArr[i] += sum;
        sum += arr[i];
    }

    return newArr;
}

console.log(sum([5,1,3,8,2]))
console.log(sum([5,1,3,4,2]));