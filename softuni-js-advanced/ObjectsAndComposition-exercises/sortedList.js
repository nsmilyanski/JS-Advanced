 function createSortedList() {
    let result = {};
    
    result.arr = [];
    result.add = function(a) {
        result.arr.push(a);
    }
    result.get = function (i) {
        return result.arr[i];
    }
    result.remove = function(index) {
       result.arr.splice(index, 1); // 2nd parameter means remove one item only
    }
    result.size = function() {
        return result.arr.lengthl
    }
    return result;
 }


let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
