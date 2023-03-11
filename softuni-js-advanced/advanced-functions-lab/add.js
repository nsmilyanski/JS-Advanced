function solution(num) {
    let newNum = num;

    return function(num2) {

       return newNum + num2;

    }
}

let add7 = solution(7);
console.log("----")
console.log(add7(2));
console.log(add7(3));

