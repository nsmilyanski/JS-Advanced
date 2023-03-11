function smallest(array) {
    array.sort((a, b) => a - b);

    let result = '';
    for (let i = 0; i < 2; i++) {
        result += array[i] + ' '; 
        
    }
    console.log(result.trim());
}


smallest([3, 0, 10, 4, 7, 3]);
