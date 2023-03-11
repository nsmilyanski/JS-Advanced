function sort(array) {
    array.sort((a,b) => a- b);

    let newArr = [];

    let l = array.length / 2;

    for (let i = 0; i < l ; i++) {
        newArr.push(array.shift());
        newArr.push(array.pop()); 
    }

    console.log(newArr)
}


sort([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);