function negativePositive(array) {
    let newArray = [];

    for (const a of array) {
        if(a < 0) {
            newArray.unshift(a);
        }else {
            newArray.push(a);
        }
    }

    newArray.forEach(e => console.log(e));
}



negativePositive([3, -2, 0, -1]);