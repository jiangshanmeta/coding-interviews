function FindNumbersWithSum(array, sum)
{
    if(!array || array.length === 0){
        return [];
    }
    
    let product = Infinity;
    let resultLeft;
    let resultRight;
    let left = 0;
    let right = array.length-1;
    while(left<right){
        const curSum = array[left]+array[right];
        if(curSum>sum){
            right--;
        }else if(curSum<sum){
            left++;
        }else{
            const curProduct = array[left]*array[right];
            if(curProduct<product){
                product = curProduct;
                resultLeft = left;
                resultRight = right;
            }
            left++;
            right--;
        }
    }
    if(product !== Infinity){
        return [array[resultLeft],array[resultRight]]
    }else{
        return [];
    }
}