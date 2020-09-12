function cutRope(number)
{
    if(number === 2){
        return 1;
    }else if(number === 3){
        return 2;
    }
    
    const dp = new Array(number+1).fill(0);
    dp[1] = 1;
    dp[2] = 2;
    dp[3] = 3;
    for(let i=4;i<number+1;i++){
        for(let j=1;j<=i-j;j++){
            dp[i] = Math.max(dp[j],dp[j]*dp[i-j]);
        }
    }
    return dp[number];
}