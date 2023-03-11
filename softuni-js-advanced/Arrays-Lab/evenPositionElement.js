function evenPosition(array) {
    let current = '';
    for (let i = 0; i < array.length; i += 2) {
        current += array[i] + ' ';
    }
    console.log(current.trim());
}



evenPosition(['20', '30', '40', '50', '60']);