function largest(...numbers) {
    let num = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
       if(numbers[i] > num) {
        num = numbers[i];
       }
        
    }

    console.log(`The largest number is ${num}.`)
 
}


largest(-3, -5, -22.5);