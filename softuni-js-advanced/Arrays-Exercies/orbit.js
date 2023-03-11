function orbit(arr) {
    let row = arr[0];
    let col = arr[1];
    let startRow = arr[2];
    let startCol = arr[3];

    let matrix = [];
    for (let i = 0; i < row; i++) {
        matrix.push([]);
        for (let j = 0; j < col; j++) {
            matrix[i].push(Number(0));
        }
    }

    fillMatrix(matrix, startRow, startCol, 1, startRow, startCol);
    let result = '';

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            result += matrix[i][j] + ' ';
        }
        result += '\n';
        }
        console.log(result);

        function fillMatrix (matrix, row, col, num, startRow, startCol) {
            if(isOutOfBound(matrix, row, col) || (matrix[row][col] !== 0)) {
                return;
            }
            let level = Number(levelOfNumber(row, col, startRow, startCol));
        
            matrix[row][col] = Number(level + 1);

                fillMatrix(matrix, row, col + 1, level + 1, startRow, startCol);
                fillMatrix(matrix, row + 1, col, level + 1,startRow, startCol);
                fillMatrix(matrix, row, col - 1, level + 1, startRow, startCol);
                fillMatrix(matrix, row - 1, col, level + 1, startRow, startCol);

        }
        
        function isOutOfBound(matrix, row, col) {
            return row >= matrix[0].length || row < 0 || col < 0 || col >= matrix[0].length;
        }

        function levelOfNumber(currentRow, currentCol, startRow, startCol) {
            if(currentRow === startRow && currentCol === startCol) {
                return 0;
            }else if (currentRow === startRow && currentCol > startCol) {
                return currentCol - startCol;
            } else if (currentRow === startRow && currentCol < startCol) {
                return startCol - currentCol;
            }else if (currentCol === startCol && currentRow < startRow) {
                return startRow - currentRow;
            }else if (currentCol === startCol && currentRow > startRow) {
                return currentRow - startRow;
            }else if (currentRow < startRow && currentCol < startCol) {
                return Math.max(startCol - currentCol, startRow - currentRow);
            }else if (currentRow > startRow && currentCol > startCol) {
                return Math.max(currentCol - startCol, currentRow - startRow);
            }else if (currentRow < startRow && currentCol > startCol) {
                return Math.max(currentCol - startCol, startRow - currentRow);
            }else if (currentRow > startRow && currentCol < startCol) {
                 return Math.max(startCol - currentCol, currentRow - startRow);
            }

        }

}

orbit([5, 5, 2, 2]);
console.log('--------------------')
orbit([3, 3, 2, 2]);
console.log('--------------------')
orbit([4, 4, 0, 0]);