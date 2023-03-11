function first() {
    return function second() {
        return function third() {
            return 100;
        }
    }
}


console.log('-------------')

debugger

let f = first()()();

console.log(f)