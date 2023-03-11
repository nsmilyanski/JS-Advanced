function biggestElement(array) {
let maxValue = Number.MIN_SAFE_INTEGER;

    for (const newArr of array) {
        for (const a of newArr) {
            if(a > maxValue) {
                maxValue = a;
            }
        }
    }

    console.log(maxValue);
}

biggestElement([[20, 50, 10],
    [8, 33, 145]]
   )

   biggestElement([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
   )