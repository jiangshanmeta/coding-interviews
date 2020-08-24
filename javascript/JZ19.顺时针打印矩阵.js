function printMatrix(matrix)
{
    const ROW = matrix.length;
    if(ROW === 0){
        return [];
    }
    const COLUMN = matrix[0].length;
    const result = new Array(ROW*COLUMN);
    let index = 0;
    let i = 0;
    let j=0;
    while(i<ROW-i && j<COLUMN-j){
        for(let k=j;k<COLUMN-j;k++){
            result[index++] = matrix[i][k]
        }
        for(let k=i+1;k<ROW-i;k++){
            result[index++] = matrix[k][COLUMN-j-1];
        }
        if(i !== ROW-i-1){
            for(let k=COLUMN-j-2;k>=j;k--){
                result[index++] = matrix[ROW-i-1][k];
            }
        }
        if(j !== COLUMN-j-1){
            for(let k=ROW-j-2;k>i;k--){
                result[index++] = matrix[k][j];
            }
        }


        i++;
        j++;
    }

    return result;
}