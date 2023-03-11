function lowestPrice(townSArray) {

    let result = {};

    for (const t of townSArray) {
        let [town, product, price] = t.split(" | ");
        price = Number(price);

        if(!result.hasOwnProperty(product)) {
            result[product] = {town, price}
        }else {
            if(result[product].price > price) {
                result[product] = {town, price}
            }
        }
        
    }

    for (const key in result) {
        console.log(`${key} -> ${result[key].price} (${result[key].town})`);
    }

}


lowestPrice(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
);