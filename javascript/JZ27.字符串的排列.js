function Permutation(str)
{
    if(!str){
        return [];
    }
    const candidate = str.split('').sort();
    const used = new Array(str.length).fill(false);
    const result = [];
    backTracking(candidate,used,[],result);
    return result;
}

function backTracking(candidate,used,sequence,result){
    if(sequence.length === candidate.length){
        result.push(sequence.join(''));
        return;
    }
    for(let i=0;i<candidate.length;i++){
        if(used[i] || (i>0 && candidate[i] === candidate[i-1] && !used[i-1] )){
            continue;
        }
        sequence.push(candidate[i])
        used[i] = true;
        backTracking(candidate,used,sequence,result);
        sequence.pop();
        used[i] = false;
    }
}