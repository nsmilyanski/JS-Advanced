function bigger(array) {
    array.sort((a, b) => a - b);

    let newArray = [];

    let startIndex =  Math.floor(array.length / 2);

    for (let i =startIndex; i < array.length; i++) {
        newArray.push(array[i]);
    }

    console.log(newArray);
}

bigger([4, 7, 2, 5]);