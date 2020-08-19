function Fibonacci(n){
    if(n===0){
        return 0;
    }else if(n === 1){
        return 1;
    }
    let a = 0;
    let b = 1;
    for(let i=2;i<n+1;i++){
        [a,b] = [b,a+b];
    }
    return b;
}