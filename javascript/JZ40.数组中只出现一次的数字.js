function FindNumsAppearOnce(array)
{
    let xorRst = 0;
    for(let i=0;i<array.length;i++){
        xorRst ^= array[i];
    }
    let mask = 1;
    while ( (xorRst & mask) === 0 ){
        mask <<= 1;
    }
    let a = 0;
    let b = 0;
    for(let i=0;i<array.length;i++){
        if(array[i]&mask){
            a ^= array[i];
        }else{
            b ^= array[i];
        }
    }
    return [a,b];
}