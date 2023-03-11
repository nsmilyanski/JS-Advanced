function store(array) {
    let result = [];

    for (const p of array) {
        let [name, price] = p.split(" : ");
        price = Number(price);

        result.push({name, price});
    }

    let s = '';

    result.sort((a, b) => {
        if(a.name > b.name) return 1;
        if(a.name < b.name) return -1;
        return 0;
    });

    result.forEach(e => {
        if(e.name[0] !== s) {
            s = e.name[0];
            console.log(s)
        } 
        console.log(`${e.name} : ${e.price}`);
   
    });
}

store(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
);

console.log("--------");

store(['Banana : 2',
"Rubic's Cube : 5",
'Raspberry P : 4999',
'Rolex : 100000',
'Rollon : 10',
'Rali Car : 2000000',
'Pesho : 0.000001',
'Barrel : 10']
)