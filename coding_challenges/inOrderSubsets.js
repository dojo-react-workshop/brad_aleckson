function subsets_Jason(str=''){
    if(str.length===0){
        return [''];
    }
    let subs = subsets(str.slice(1));
    let count = subs.length;
    for(let i=0; i<count; i++){
        subs.push(str.slice(0,1) + subs[i]);
    }
    return subs;
}

function subsets(subString='', string){
    if(str.length===0){
        return [''];
    }
    let subs = subsets(str.slice(1));
    let count = subs.length;
    for(let i=0; i<count; i++){
        subs.push(str.slice(0,1) + subs[i]);
    }
    return subs;
}

str = "b";
console.log(subsets(str));
// should be ['', 'b']

str3 = "abc";
console.log(subsets(str3));
// should be ['', 'c', 'b', 'a', 'ab', 'ac', 'bc', 'abc']
