function ReverseSentence(str)
{
    const sequence = str.split('');
    sequence.reverse();
    let index = 0;
    while(index<sequence.length){
        while(index<sequence.length && sequence[index] === ' '){
            index++;
        }
        const start = index;
        while(index<sequence.length && sequence[index] !== ' '){
            index++;
        }
        reverse(sequence,start,index-1);
    }
    return sequence.join('');
}

function reverse(sequence,left,right){
    while(left<right){
        const tmp = sequence[right];
        sequence[right] = sequence[left];
        sequence[left] = tmp;
        left++;
        right--;
    }
}