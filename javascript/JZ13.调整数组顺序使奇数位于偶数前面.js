function reOrderArray(array)
{
    const odds = [];
    const evens = [];
    for(let i=0;i<array.length;i++){
        if(array[i]&1){
            odds.push(array[i]);
        }else{
            evens.push(array[i]);
        }
    }
    let index = 0;
    for(let i=0;i<odds.length;i++){
        array[index++] = odds[i];
    }
    for(let i=0;i<evens.length;i++){
        array[index++] = evens[i];
    }
    return array;
}