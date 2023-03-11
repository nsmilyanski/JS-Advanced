function jansNotation(array) {
    let operants = [];
    let numbers = [];

    for (const e of array) {
        if(!isNaN(e)) {
            numbers.push(e);
        }else {
            operants.push(e);
        }
    }

    if(numbers.length - 1 > operants.length) {
        console.log('Error: too many operands!');
        return;
    }else if (numbers.length === operants.length) {
        console.log('Error: not enough operands!');
        return;
    }

    while(numbers.length > 1 && operants.length > 0) {
        let b = numbers.pop();
        let a = numbers.pop();

        let s = operants.shift();

        switch(s) {
            case '+' : numbers.push(a + b); break;
            case '-' : numbers.push(a - b); break;
            case '/' : numbers.push(a / b); break;
            case '*' : numbers.push(a * b); break;
        }
    }

    numbers.forEach(e => console.log(e));
}


jansNotation([3,
    4,
    '+']
   );

   console.log("-----");

   jansNotation([5,
    3,
    4,
    '*',
    '-']
   )
   console.log("-----");

   jansNotation([7,
    33,
    8,
    '-']
   );

   console.log("-----");

   jansNotation([15,
    '/']
   )