function solution() {
    let anyStr = '';

    return result = {
        append: (e) => anyStr = anyStr + e, 
        removeStart: (e) => anyStr =  anyStr.substring(e),
        removeEnd: (e) => anyStr =  anyStr.substring(0, anyStr.length - e),
        print: (e) => console.log(anyStr),
    };

}



let secondZeroTest = solution();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();

