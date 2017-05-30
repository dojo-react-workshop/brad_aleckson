function bucket(arr)
{
    let maxPos = 0;
    let max = arr[maxPos];
    for(let i = 1; i < arr.length; i++) {
        if(max < arr[i])
        {
            max = arr[i];
            maxPos = i;
        }
    }

    // we have the position of the maximum, so all buckets to can assume it is at least one side
    totalVolume = 0;
    let edge = arr[0];
    for(let i = 1; i < maxPos; i++) {
        let temp = arr[i];
        if(edge < temp) // if the temp is greater than the edge, were are in new bucket
            edge = temp;
        else // inside the bucket, so add its volume to the total
            totalVolume += (edge - temp);
    }
    
    edge = arr[arr.length-1];
    for(let i = arr.length-2; i > maxPos; i--) {
        let temp = arr[i];
        if(edge < temp) // new edge of the bucket
            edge = temp;
        else // inside the bucket, get the volume
            totalVolume += (edge - temp);
    }
    return totalVolume;
}

console.log(`${bucket([3,1,5,6,4,2,3])}, call should be 3`);
console.log(`${bucket([3,1,1,1,3])}, call should be 6`);
console.log(`${bucket([3,1,5,1,6,4,2,3])}, call should be 7`);
console.log(`${bucket([3,1,5,4,6,2,3])}, call should be 4`);