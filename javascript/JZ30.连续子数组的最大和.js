function FindGreatestSumOfSubArray(array)
{
    let result = array[0];
    let curSum = array[0];
    for(let i=1;i<array.length;i++){
        if(curSum<0){
            curSum = array[i];
        }else{
            curSum += array[i];
        }
        result = Math.max(result,curSum);
    }
    return result;
}