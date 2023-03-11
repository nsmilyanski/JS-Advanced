function colorize() {
    let elements = document.querySelectorAll('table tr');

    let index = 0;
    
    for (let row of elements) {
        index++;

        if(index % 2 == 0) {
            row.style.background = "teal";
        }
    }
}