function generateSpiralMatrix(row, col) {
    let matrix = new Array(row).fill().map(() => new Array(col).fill(0));
    let num = 1;
    let startRow = 0, endRow = row - 1, startCol = 0, endCol = col - 1;
    while (startRow <= endRow && startCol <= endCol) {
        for (let i = startCol; i <= endCol; i++) {
            matrix[startRow][i] = num;
            num++;
        }
        startRow++;
        for (let i = startRow; i <= endRow; i++) {
            matrix[i][endCol] = num;
            num++;
        }
        endCol--;
        for (let i = endCol; i >= startCol; i--) {
            if (startRow <= endRow) {
                matrix[endRow][i] = num;
                num++;
            }
        }
        endRow--;
        for (let i = endRow; i >= startRow; i--) {
            if (startCol <= endCol) {
                matrix[i][startCol] = num;
                num++;
            }
        }
        startCol++;
    }
    for (let i = 0; i < row; i++) {
        console.log(matrix[i].join(" "));
    }
}


generateSpiralMatrix(5, 5);