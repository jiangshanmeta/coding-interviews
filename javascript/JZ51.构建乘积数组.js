function multiply(array)
{
    const arr1 = new Array(array.length);
    const arr2 = new Array(array.length);
    arr1[0] = 1;
    arr2[arr2.length-1] = 1;
    let multi = array[0];
    for(let i=1;i<array.length;i++){
        arr1[i] = multi;
        multi *= array[i];
    }
    multi = array[array.length-1];
    for(let i=array.length-2;i>-1;i--){
        arr2[i] = multi;
        multi *= array[i];
    }
    const result = new Array(array.length);
    for(let i=0;i<result.length;i++){
        result[i] = arr1[i]*arr2[i];
    }
    return result;
}