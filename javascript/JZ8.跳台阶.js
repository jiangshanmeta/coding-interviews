function jumpFloor(number)
{
    if(number < 1){
        return 0;
    }else if(number === 1){
        return 1;
    }
    let a = 1;
    let b = 2;
    for(let i=2;i<number;i++){
        [a,b] = [b,a+b];
    }
    return b;
}