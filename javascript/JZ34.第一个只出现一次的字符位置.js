function FirstNotRepeatingChar(str)
{
    const charCountMap = {};
    for(let i=0;i<str.length;i++){
        if(charCountMap[str[i]] === undefined){
            charCountMap[str[i]] = 1;
        }else{
            charCountMap[str[i]] = 2;
        }
    }
    for(let i=0;i<str.length;i++){
        if(charCountMap[str[i]] === 1){
            return i;
        }
    }
    return -1;
}