function checker(x1, y1, x2, y2) {
    let number  = Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2));

    console.log(isInt(number))

}


checker(1, 0, 3, 0);

function isInt(n) {
    return n % 1 === 0;
 }