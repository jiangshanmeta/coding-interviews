function rectCover(number)
{
    if(number<1){
        return 0;
    }else if(number === 1){
        return 1;
    }else if(number === 2){
        return 2;
    }
    let a = 1;
    let b = 2;
    for(let i=3;i<number+1;i++){
        [a,b] = [b,a+b];
    }
    return b;
}