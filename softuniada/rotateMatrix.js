function rotateMatrix(matrix) {
    const n = matrix.length;
    const result = [];
  
    for (let i = 0; i < n; i++) {
      result[i] = [];
  
      for (let j = 0; j < n; j++) {
        result[i][j] = matrix[n - j - 1][i];
      }
    }
  
    return result;
  }
  
  // Example usage:
  const matrix = [  [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  const rotatedMatrix = rotateMatrix(matrix);
  console.log(rotatedMatrix); // prints [[7, 4, 1], [8, 5, 2], [9, 6, 3]]
  