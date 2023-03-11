function rotate(array, num) {

    for (let i = 0; i < num; i++) {
        let a = array.pop();
        array.unshift(a);
    }

    console.log(array.join(" "));
}


rotate(['1', 
'2', 
'3', 
'4'], 
2
);

rotate(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
);