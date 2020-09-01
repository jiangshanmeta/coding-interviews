function FindContinuousSequence(sum)
{
    const result = [];
    let low = 1;
    let high = 2;
    let curSum = 3;
    while(low<=high && high<sum){
        if(curSum>sum){
            curSum -= low;
            low++;
        }else if(curSum<sum){
            high++;
            curSum += high;
        }else{
            const sequence = [];
            for(let i=low;i<=high;i++){
                sequence.push(i);
            }
            curSum -= low;
            low++;
            result.push(sequence);
        }
    }
    return result;
}
