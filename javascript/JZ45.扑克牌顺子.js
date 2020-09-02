function IsContinuous(numbers)
{
    if(numbers.length<5){
        return false;
    }
    
    const flags = new Array(14).fill(0);
    let min = 14;
    let max = 1;
    for(let i=0;i<numbers.length;i++){
        if(numbers[i]>0 && flags[numbers[i]]){
            return false;
        }
        flags[i]++;
        if(numbers[i]>0){
            min = Math.min(min,numbers[i]);
            max = Math.max(max,numbers[i]);
        }
    }

    if(max-min>4){
        return false;
    }
    
    return true;
}