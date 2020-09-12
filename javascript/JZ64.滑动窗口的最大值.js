function maxInWindows(num, size)
{
    if(size === 0){
        return [];
    }
    
    const result = [];
    const slidingWindow = [];
    for(let i=0;i<size-1;i++){
        while(slidingWindow.length && slidingWindow[slidingWindow.length-1]<num[i]){
            slidingWindow.pop();
        }
        slidingWindow.push(num[i]);
    }
    for(let i=size-1;i<num.length;i++){
        while(slidingWindow.length && slidingWindow[slidingWindow.length-1]<num[i]){
            slidingWindow.pop();
        }
        slidingWindow.push(num[i]);
        result.push(slidingWindow[0]);
        if(slidingWindow[0] === num[i-size+1]){
            slidingWindow.shift();
        }
    }
    return result;
}