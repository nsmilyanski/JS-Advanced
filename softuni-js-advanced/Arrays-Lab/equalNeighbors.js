function equalNeighbors(array) {

    let counter = 0;

    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i][j] === array[i + 1][j]) {
                counter++;
            }
        
        }
        
    }
    console.log(counter);
}

equalNeighbors([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]
);

equalNeighbors([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]
)