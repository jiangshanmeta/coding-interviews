function Add(num1, num2)
{
    return addPositive(num1>>>0,num2>>>0) >> 0;
}

function addPositive(a,b){
    if (b === 0){
        return a;
    }
    if( a === 0){
        return b;
    }
    
    return addPositive(a^b,(a&b)<<1);
}