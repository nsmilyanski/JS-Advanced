function magicMatrices(array) {

let sum = getSumOfOneRow(array);
let isRowsM = ifRowsAreMagic(array, sum);
let isColsM = ifColsAreMagic(array, sum);

console.log(isRowsM && isColsM);

function ifRowsAreMagic(matrix, sumOfRow) {
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            sum += matrix[i][j];
        }
        if(sum !== sumOfRow) {
            return false;
        }
        sum = 0;
    }
    return true;
}

function ifColsAreMagic(matrix, sumOfRow) {
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            sum += matrix[j][i];
        }
        if(sum !== sumOfRow) {
            return false;
        }
        sum = 0;
    }
    return true;
}

function getSumOfOneRow(matrix) {
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            sum += matrix[j][i];
        }
        if(sum !== 0) {
            return sum;
        }
    }
    return 0;
}
}


magicMatrices([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   );

   magicMatrices([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
   );

   magicMatrices([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
   );

