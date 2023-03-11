function solve(array) {
    let map = new Map();
    let outputMap = new Map;

    for (const element of array) {
        let [key, value] = element.split(" => ");
         if(!map.has(key)) {
            map.set(key, 0);
        }
        let c = Math.floor((map.get(key) + Number(value)) / 1000) 
        if(c > 0) {
            outputMap.set(key, c)
        }
        map.set(key, map.get(key) + Number(value));
    }

    outputMap.forEach((value, key) => {
        console.log(`${key} => ${value}`);
        
    })

}



solve(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']

)