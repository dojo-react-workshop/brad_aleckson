// AAPL
// const applePricesYesterday = [10,7,5,8,6,9];
// const applePricesYesterday = [10,8,6,4];
// const applePricesYesterday = [4,6,8,10];
const applePricesYesterday = [14, 2, 5, 6, 19, 1];
console.log(getMaxProfit(applePricesYesterday));


// 1 buy, 1 sell per day
function getMaxProfit(arr){
    if (arr.length <= 1){
        return 'no price change, so no chance to make a profit';
    }
    let min = arr[0];
    let maxProfit = arr[1] - arr[0];
    // console.log(`maxProfit: ${maxProfit}`);
    // console.log(`min: ${min}`);

    for(var i = 1; i < arr.length; i++)
    {
        if(maxProfit < (arr[i] - min))
            maxProfit = (arr[i] - min);
        if(min > arr[i])
            min = arr[i];

        // if(min > arr[i])
        //     min = arr[i];
        // else if(maxProfit < (arr[i] - min))
        //     maxProfit = (arr[i] - min);
    }
    return maxProfit;
}

// 1 buy, 1 sell per day
// function getMaxProfit(applePricesYesterday, ind){
//     if (ind+1 >= applePricesYesterday.length){
//         return;
//     }
//     let maxDiff = applePricesYesterday[ind+1] - applePricesYesterday[ind];
//     for (let i = ind+2; i < applePricesYesterday.length; i++){
//         let diff = applePricesYesterday[i] - applePricesYesterday[ind];
//         if (diff > maxDiff){
//             maxDiff = diff;
//         }
//     }
//     let nextMax = getMaxProfit(applePricesYesterday, ind+1);
//     if (nextMax === undefined){
//         return maxDiff;
//     } else if (maxDiff > nextMax){
//         return maxDiff;
//     } else {
//         return nextMax;
//     }
// }



// 1 buy, 1 sell per day
// function getMaxProfit_nestedForLoops(arr)
// {
//     let buy = arr[0];
//     let sell = arr[1];
//     let max = (sell-buy);
//     for(let i = 0; i < arr.length; i++)
//     {
//         buy = arr[i]
//         for(let j = i + 1; j < arr.length; j++)
//         {
//             sell = arr[j];
//             if(max < (sell-buy))
//                 max = (sell-buy);
//         }
//     }
//     return max;
// }

