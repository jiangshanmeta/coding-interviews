function MoreThanHalfNum_Solution(numbers)
{
    let element = null;
    let count = 0;
    for(let i=0;i<numbers.length;i++){
        if(numbers[i] === element){
            count++;
        }else if(count === 0){
            element = numbers[i];
            count = 1;
        }else{
            count--;
        }
    }
    count = 0;
    for(let i=0;i<numbers.length;i++){
        if(numbers[i] === element){
            count++;
        }
    }
    if(count>numbers.length/2){
        return element;
    }
    return 0;
}