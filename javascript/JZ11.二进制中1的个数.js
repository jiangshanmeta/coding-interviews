function NumberOf1(n)
{
    n >>>= 0;
    let count = 0;
    while(n){
        count++;
        n = n&(n-1);
    }
    return count;
}