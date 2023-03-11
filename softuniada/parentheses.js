function solve(parentheses) {
    let stack1 = [];
    let stack2 = [];

    let counter = 0;
    let lComb = 0;

    let isLongerCombination = false;


    for (let i = 0; i < parentheses.length; i++) {
        let p = parentheses[i];

        if(p === '(') {
            stack1.push(p);
            isLongerCombination = true;
        }else {
            if(isLongerCombination && counter > lComb) {
                lComb = counter;
            }
            counter += 2;
            stack2.pop();
        }  
    }

    console.log(counter);
}


solve('()(()()(()');
