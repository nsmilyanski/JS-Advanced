function print(array, num) {
    let newArr = [];

    for (let i = 0; i < array.length; i += num) {
        newArr.push(array[i]);
    }
    return newArr;
} 

console.log(print(['5', 
'20', 
'31', 
'4', 
'20'], 
2
));

console.log("------------");

console.log(print(['dsa',
'asd', 
'test', 
'tset'], 
2
));

console.log("------------");

console.log(print(['1', 
'2',
'3', 
'4', 
'5'], 
6
));