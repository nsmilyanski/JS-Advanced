function extract(array) {
    return array.reduce((accumulator, currentValue) => {
        if(accumulator.length == 0 || accumulator[accumulator.length - 1] < currentValue) {
            accumulator.push(currentValue);
        }
        return accumulator;

    }, []);
}
 
console.log(extract([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    ));

    console.log("---------------");

    console.log(extract([1, 
        2, 
        3,
        4]
        ));


    console.log("---------------");

    console.log(extract([20, 
        3, 
        2, 
        15,
        6, 
        1]
        ));
