function names(array) {
    array.sort();
    let counter = 1;

    let copy = array.map(e => e = counter++ + '.' + e);

    console.log(copy.join("\n"))
}


names(["John", "Bob", "Christina", "Ema"]);