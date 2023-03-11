function spiralMatrix(row, col) {
    let matrix = [];
    for (let i = 0; i < row; i++) {
        matrix.push([]);
        for (let j = 0; j < col; j++) {
            matrix[i].push(Number(0));
        }
    }


    fillMatrix(matrix, 0, 0, 1);
    let result = '';

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            result += matrix[i][j] + ' ';
        }
        result += '\n';
        }
        console.log(result);

        function fillMatrix (matrix, row, col, num) {
            if(isOutOfBound(matrix, row, col) || (matrix[row][col] !== 0)) {
                return;
            }
        
            matrix[row][col] = Number(num);
        
            if ((col == 0 && row > 0) || (((row > 0) && (col > 0) && (col < matrix.length - 1) && (row < matrix.length - 1)) && (matrix[row - 1][col] == 0 && matrix[row][col - 1] != 0 && matrix[row][col + 1] == 0))) {
                fillMatrix(matrix, row - 1 , col, num + 1);
            }
        
            fillMatrix(matrix, row, col + 1, num + 1);
            fillMatrix(matrix, row + 1, col, num + 1);
            fillMatrix(matrix, row, col - 1, num + 1);
            fillMatrix(matrix, row - 1, col, num + 1);
        }
        
        function isOutOfBound(matrix, row, col) {
            return row >= matrix[0].length || row < 0 || col < 0 || col >= matrix[0].length;
        }
        debugger
       
    }
   


spiralMatrix(10, 10);
console.log("------------------")
spiralMatrix(3, 3);

