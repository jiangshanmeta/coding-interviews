function VerifySquenceOfBST(sequence,start=0,end=sequence.length-1)
{
    if(sequence.length === 0){
        return false;
    }
    
    if(start>=end){
        return true;
    }
    const root = sequence[end]; 
    let index = start;
    while(index<end && sequence[index]<root){
        index++;
    }

    for(let i=index+1;i<end;i++){
        if(sequence[i]<root){
            return false;
        }
    }

    return VerifySquenceOfBST(sequence,start,index-1) && VerifySquenceOfBST(sequence,index,end-1);
}