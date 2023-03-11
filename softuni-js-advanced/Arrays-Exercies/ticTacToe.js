function ticTacToe(array) {
    
    let initailMatrix = 
    [[false, false, false],
    [false, false, false],
    [false, false, false]];

    let haveWinner = false;

    for (let i = 0; i < array.length; i++) {
      let playerMark = i % 2 == 0 ? 'X' : 'O';
      let rowAndCol = array[i].split(' ');

      let row = Number(rowAndCol[0]);
      let col = Number(rowAndCol[1]);
        
      if (!initailMatrix[row][col]) {
        initailMatrix[row][col] = playerMark;

        let arr = [];

        let bool = checkIfPlayerIsWinner(initailMatrix, playerMark);

        if(bool === true) {
            haveWinner = bool;
            console.log(`Player ${playerMark} wins!`)
            printMatrix(initailMatrix);
            return;
        }
      } else {
        console.log('This place is already taken. Please choose another!')
      }
    }

    if(!haveWinner) {
        console.log('The game ended! Nobody wins :(')
    }
   
    printMatrix(initailMatrix);
}

ticTacToe(["0 0",
"0 0",
"1 1",
"0 1",
"1 2",
"0 2",
"2 2",
"1 2",
"2 2",
"2 1"]

)


function checkIfPlayerIsWinner(initailMatrix, playerMark) {
    let diagonals = checkDiagonals(initailMatrix, playerMark);
    if(diagonals) {
        return true;
    }

    let rest = checkTheRest(initailMatrix, playerMark);

    return rest;
}

function checkDiagonals(initailMatrix, playerMark) {
    let firstIndex = 0;
    let secondIndex = initailMatrix[0].length - 1;

    let isWinnerFirst = true;
    let isWinnerSecond = true;

    for (let i = 0; i < initailMatrix.length; i++) {
        if(playerMark !== initailMatrix[i][firstIndex]) {
            isWinnerFirst = false;
        }
        if(playerMark !== initailMatrix[i][secondIndex]) {
            isWinnerSecond = false;
        }

        firstIndex++;
        secondIndex--;
    }
    return isWinnerFirst || isWinnerSecond;
}

function checkTheRest(initailMatrix, playerMark) {
    let isWinnerFirst = true;
    let isWinnerSecond = true;
    let isWinnerThird = true;

    let firstIndex = 0;

    for (let i = 0; i < initailMatrix.length; i++) {
        if(playerMark !== initailMatrix[0][firstIndex]) {
            isWinnerFirst = false;
        }
        if(playerMark !== initailMatrix[1][firstIndex]) {
            isWinnerSecond = false;
        }
        if(playerMark !== initailMatrix[2][firstIndex]) {
            isWinnerThird = false;
        }

        firstIndex++;
    }
    return isWinnerFirst || isWinnerSecond || isWinnerThird;
}

function isAutOfBounds(row, col) {
    if (row < 0 || col < 0 || row > 2 || col > 2) {
        return true;
    }else {
        return false;
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