function GetUglyNumber_Solution(index)
{
    if(index<=0){
        return 0;
    }

    const sequence = [1];
    let index2 = 0;
    let index3 = 0;
    let index5 = 0;
    while(sequence.length<index){
        const newNum = Math.min(sequence[index2]*2,sequence[index3]*3,sequence[index5]*5);
        sequence.push(newNum);
        while(sequence[index2]*2<=newNum){
            index2++;
        }
        while(sequence[index3]*3<=newNum){
            index3++;
        }
        while(sequence[index5]*5<=newNum){
            index5++;
        }
        
    }
    return sequence[index-1];
}