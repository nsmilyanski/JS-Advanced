function sumOfDiagonals(array) {
    let firstIndex = 0;
    let secondIndex = array[0].length - 1;

    let result = '';

    let sumOfFirstDiagonal = 0;
    let sumOfSecondDiagonal = 0;

    for (let i = 0; i < array.length; i++) {
        sumOfFirstDiagonal += array[i][firstIndex];
        sumOfSecondDiagonal += array[i][secondIndex];

        firstIndex++;
        secondIndex--;
    }

    console.log(sumOfFirstDiagonal + ' ' + sumOfSecondDiagonal);

}


sumOfDiagonals([[20, 40],
    [10, 60]]
   )

   sumOfDiagonals([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
   )