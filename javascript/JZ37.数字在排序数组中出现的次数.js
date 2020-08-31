function GetNumberOfK(data, k)
{
    let low = 0;
    let high = data.length-1;
    while(low<=high){
        const mid = (low+high) >> 1;
        if(data[mid]>k){
            high = mid-1;
        }else if(data[mid]<k){
            low = mid+1;
        }else{
            let low1 = low;
            let high1 = mid-1;
            let start = mid;
            while(low1<=high1){
                const mid1 = (low1+high1)>>1;
                if(data[mid1]<k){
                    low1 = mid1+1;
                }else{
                    start = Math.min(start,mid1);
                    high1 = mid1-1;
                }
            }
            let low2 = mid+1;
            let high2 = high;
            let end = mid;
            while(low2<=high2){
                const mid2 = (low2+high2) >> 1;
                if(data[mid2]>k){
                    high2 = mid2-1;
                }else{
                    low2 = mid2+1;
                    end = Math.max(end,mid2);
                }
            }
            return end-start+1;
        }
    }
    return 0;
}