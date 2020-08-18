function Find(target, array){
    if(array.length === 0){
        return false;
    }
    let row = 0;
    let column = array[0].length-1;
    while(row<array.length && column>-1){
        if(array[row][column] === target){
            return true;
        }else if(array[row][column]>target){
            column--;
        }else{
            row++;
        }
    }
    return false;
}