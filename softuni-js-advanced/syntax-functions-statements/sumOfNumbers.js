function sum(num1, num2) {
    let result = 0;
    for (let index = num1; index <= num2; index++) {
        result += Number(index);
        
    }
    console.log(result);
}

sum('-8', '20' )