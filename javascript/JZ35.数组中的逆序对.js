const mod = Math.pow(10,9)+7;
function InversePairs(data)
{
    if(data.length === 0){
        return 0;
    }
    const copy = new Array(data.length);
    return countInversePairs(data,copy,0,data.length-1);
}

function countInversePairs(data,copy,left,right){
    if(left === right){
        return 0;
    }
    let count = 0;
    let mid = (left+right) >> 1
    const leftCount = countInversePairs(data,copy,left,mid);
    const rightCount = countInversePairs(data,copy,mid+1,right);
    for(let i=left;i<right+1;i++){
        copy[i] = data[i];
    }
    let index1 = left;
    let index2 = mid+1;
    while(index1<mid+1 && index2<right+1){
        if(copy[index1]>copy[index2]){
            count += mid+1-index1;
            data[left++] = copy[index2++];
        }else{
            data[left++] = copy[index1++];
        }
    }
    while(index1<mid+1){
        data[left++] = copy[index1++];
    }
    while(index2<right+1){
        data[left++] = copy[index2++];
    }
    return (leftCount+rightCount+count)%mod;
}