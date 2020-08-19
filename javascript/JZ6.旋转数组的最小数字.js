function minNumberInRotateArray(rotateArray){
    let left = 0;
    let right = rotateArray.length-1;
    let index = 0;
    while(rotateArray[left]>=rotateArray[right]){
        if(left+1 === right){
            index = right;
            break;
        }
        const mid = (left+right) >> 1;
        if(rotateArray[left] === rotateArray[right] && rotateArray[left] === rotateArray[mid]){
            let minVal = rotateArray[left];
            let minIndex = left;
            for(let i=left+1;i<right+1;i++){
                if(rotateArray[i] < minVal){
                    minVal = rotateArray[i];
                    minIndex = i;
                }
            }
            index = minIndex;
            break;
        }

        if(rotateArray[mid]>=rotateArray[left]){
            left = mid;
        }else{
            right = mid;
        }
    }

    return rotateArray[index];
}