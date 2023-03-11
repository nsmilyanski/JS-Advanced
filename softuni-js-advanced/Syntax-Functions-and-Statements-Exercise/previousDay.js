function previousDay(year, month, day) {
    let currentDate = new Date();

    currentDate.setFullYear(year);
    currentDate.setMonth(month);
    currentDate.setDate(day);

    currentDate.setDate(currentDate.getDate() - 1);

    console.log(`${currentDate.getFullYear()}-${currentDate.getMonth()}-${currentDate.getDate()}`);
}

previousDay(2015, 5, 10);