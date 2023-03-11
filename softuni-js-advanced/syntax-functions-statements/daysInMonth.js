function getDaysOfMonth(month, year) {
    let dataOfInput = new Date(month, day, 0);
    dataOfInput.setFullYear(year);
    
    let num = dataOfInput.getDate();

    console.log(num)
}

getDaysOfMonth(1, 2012)