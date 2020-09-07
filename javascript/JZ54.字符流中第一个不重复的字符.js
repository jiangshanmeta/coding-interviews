//Init module if you need
let index = 0;
let sequence = [];
let charCountMap = {};

function Init()
{
    index = 0;
    sequence = [];
    charCountMap = {};
}
//Insert one char from stringstream
function Insert(ch)
{
    sequence.push(ch);
    charCountMap[ch] = (charCountMap[ch] || 0)+1;
    
}
//return the first appearence once char in current stringstream
function FirstAppearingOnce()
{
    while(index<sequence.length){
        if(charCountMap[sequence[index]] === 1){
            return sequence[index];
        }
        index++;
    }
    return '#';
}