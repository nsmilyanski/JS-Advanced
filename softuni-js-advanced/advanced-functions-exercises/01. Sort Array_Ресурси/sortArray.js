function sort(array, sorting) {
   return sorting === 'asc' ?  array = array.sort((a, b) => a - b) : array = array.sort((a, b) => b - a);
}


console.log(sort([14, 7, 17, 6, 8], 'asc'));