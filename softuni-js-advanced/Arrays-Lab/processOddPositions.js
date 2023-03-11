function processOddNumbers(array) {
    let newArray = [];

    for (let i = 1; i < array.length; i += 2) {
        newArray.unshift(array[i] * 2);       
    }

    console.log(newArray)
}

processOddNumbers([10, 15, 20, 25])
processOddNumbers([3, 0, 10, 4, 7, 3])