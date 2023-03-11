function solution(array) {
    let arr = [];

    let result = {
        add: (e) => arr.push(e), 
        remove: (e) => removeItemOnce(arr, e),
        print: () => console.log(arr.join(",")),
    };


    for (const a of array) {
        let current = a.split(' ');
        if(current.length > 1) {
            result[current[0]](current[1]); 
        }else {
            result[current[0]]();
        }
        
    }
   

    function removeItemOnce(arr, value) {
        var index = arr.indexOf(value);

        while(index > - 1){
        arr.splice(index, 1);
        index = arr.indexOf(value);
        }
       
        return arr;
      }

}

solution(['add hello', 'add again', 'remove hello', 'add again', 'print']);

console.log('------------------------');

solution(['add hello', 'add again', 'remove hello', 'add again', 'print'])

