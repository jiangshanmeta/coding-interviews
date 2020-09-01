function LeftRotateString(str, n)
{
    if(!str){
        return "";
    }
    
    if(n<1){
        return str;
    }
    n%= str.length;
    const sequence = str.split('');
    reverse(sequence,0,n-1);
    reverse(sequence,n,sequence.length-1);
    reverse(sequence,0,sequence.length-1);
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