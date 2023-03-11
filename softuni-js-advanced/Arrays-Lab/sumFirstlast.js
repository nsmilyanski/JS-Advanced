function sum(array) {
    let firstElement = array.shift();
    let lastElement = array.pop();

    console.log(Number(firstElement) + Number(lastElement));
}



sum(['5', '10'])