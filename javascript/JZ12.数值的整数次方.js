function Power(base, exponent)
{
    if(exponent === 0 || base === 0){
        return 0;
    }
    if(exponent<0){
        base = 1/base;
        exponent = -exponent;
    }
    let result = 1;
    while (exponent){
        if(exponent & 1){
            result *= base;
        }
        base *= base;
        exponent >>= 1;
    }
    return result;
}