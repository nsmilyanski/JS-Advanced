function printPascalTriangle(numRows) {
    let triangle = [];

    const size = numRows < 6 ? 6 : numRows + 1;
    
    for (let i = 0; i < size; i++) {
      triangle[i] = [];
      
      for (let j = 0; j <= i; j++) {
        if (j === 0 || j === i) {
          triangle[i][j] = 1;
        } else {
          triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        }
      }
    }
    
 
      console.log(triangle[numRows].join(' '));
    
  }
  
  // Example usage:
  printPascalTriangle(9); // prints Pascal's triangle with 6 rows