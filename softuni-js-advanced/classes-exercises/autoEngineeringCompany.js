function solve(array) {
    let map = new Map();

    for (const elemnt of array) {
        let [car, model, numberOfcars] = elemnt.split(" | ");
        numberOfcars = Number(numberOfcars);

        if(!map.has(car)) {
            let m = new Map();
            m.set(model, numberOfcars)
            map.set(car, m);
        }else {
            if(!map.get(car).has(model)) {
                map.get(car).set(model, numberOfcars)
            }else {
                map.get(car).set(model, map.get(car).get(model) + numberOfcars);
            }
        }
    }

    map.forEach((v, k) => {
        console.log(k)
        v.forEach((value, key) => {
            console.log(`###${key} -> ${value}`)
        })
    })

}



solve(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']
)




