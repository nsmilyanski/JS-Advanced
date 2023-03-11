function diagonalAttack(array) {
    let matrix = [];
    let copyMatrix = [];

    for (const element of array) {
        let current = element.split(' ').map(e => Number(e));
        matrix.push(current.slice());
        copyMatrix.push(current.slice());
    }

    let arr = calculateDiagonals(matrix);

    let sumOfFirstDiagonal = arr[0];
    let sumOfSecondDiagonal = arr[1];

    if (sumOfFirstDiagonal !== sumOfSecondDiagonal) {
        printMatrix(matrix);
        return;
    }

    fillDiagonalsWithFalse(matrix);

    fillTheRestOfMatrixWithSumOfDiagonal(sumOfFirstDiagonal,0, 1,  matrix);

    fillTheMatrixDiagonalsWithOldValues(matrix, copyMatrix);

    printMatrix(matrix);


   

function calculateDiagonals(matrix) {
    let firstIndex = 0;
    let secondIndex = matrix[0].length - 1;

    let sumOfFirstDiagonal = 0;
    let sumOfSecondDiagonal = 0;

    for (let i = 0; i < matrix.length; i++) {
        sumOfFirstDiagonal += matrix[i][firstIndex];
        sumOfSecondDiagonal += matrix[i][secondIndex];

        firstIndex++;
        secondIndex--;
    }
    let array = [];
    array.push(sumOfFirstDiagonal);
    array.push(sumOfSecondDiagonal);

    return array;
}

function fillDiagonalsWithFalse(matrix) {
    let firstIndex = 0;
    let secondIndex = matrix[0].length - 1;

    for (let i = 0; i < matrix.length; i++) {
        matrix[i][firstIndex] = false;
        matrix[i][secondIndex] = false;

        firstIndex++;
        secondIndex--;
    }
}

function fillTheRestOfMatrixWithSumOfDiagonal(sumOfFirstDiagonal, row, col, matrix) {
    if(isOutOfBound(matrix, row, col) || (matrix[row][col] === sumOfFirstDiagonal || matrix[row][col] === false)) {
        return;
    }

    matrix[row][col] = sumOfFirstDiagonal;

    fillTheRestOfMatrixWithSumOfDiagonal(sumOfFirstDiagonal, row, col + 1, matrix);
    fillTheRestOfMatrixWithSumOfDiagonal(sumOfFirstDiagonal, row + 1, col, matrix);
    fillTheRestOfMatrixWithSumOfDiagonal(sumOfFirstDiagonal, row - 1, col, matrix);
    fillTheRestOfMatrixWithSumOfDiagonal(sumOfFirstDiagonal, row, col - 1, matrix);
    fillTheRestOfMatrixWithSumOfDiagonal(sumOfFirstDiagonal, row - 1, col - 1, matrix);
    fillTheRestOfMatrixWithSumOfDiagonal(sumOfFirstDiagonal, row + 1, col - 1, matrix);
    fillTheRestOfMatrixWithSumOfDiagonal(sumOfFirstDiagonal, row - 1, col + 1, matrix);
    fillTheRestOfMatrixWithSumOfDiagonal(sumOfFirstDiagonal, row + 1, col + 1, matrix);
}

function fillTheMatrixDiagonalsWithOldValues(matrix, copyMatrix) {
    let firstIndex = 0;
    let secondIndex = matrix[0].length - 1;

    for (let i = 0; i < matrix.length; i++) {
        matrix[i][firstIndex] = copyMatrix[i][firstIndex];
        matrix[i][secondIndex] = copyMatrix[i][secondIndex];

        firstIndex++;
        secondIndex--;
    }
}

function printMatrix(matrix) {
    let result = '';

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            result += matrix[i][j] + ' ';
        }
        result += '\n';
        }
        console.log(result);
}

function isOutOfBound(matrix, row, col) {
    return row >= matrix[0].length || row < 0 || col < 0 || col >= matrix[0].length;
}
}

// diagonalAttack(['1 1 1',
// '1 1 1',
// '1 1 0']
// );


diagonalAttack(['5 3 12 3 1',
'11 4 23 2 5',
'101 12 3 21 10',
'1 4 5 2 2',
'5 22 33 11 1']
);