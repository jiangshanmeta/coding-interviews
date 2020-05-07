function duplicate(numbers, duplication)
{
    // write code here
    //这里要特别注意~找到任意重复的一个值并赋值到duplication[0]
    //函数返回True/False
    let index = 0;
    while(index<numbers.length){
        if(numbers[index] === index){
            index++;
            continue;
        }
        const m = numbers[index];
        if(numbers[m] === m){
            duplication[0] = m;
            return true;
        }
        const tmp = numbers[m];
        numbers[m] = numbers[index];
        numbers[index] = tmp;
    }
    return false;
}