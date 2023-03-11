function solution() {
    let instructions = {
        apple: {carbohydrate: 1, flavour: 2},
        lemonade : {carbohydrate: 10, flavour: 20},
        burger : {carbohydrate: 5, flavour: 3, fat: 7},
        eggs : {protein: 5, flavour: 1, fat: 1},
        turkey  : {protein: 10, flavour: 10, fat: 10, carbohydrate: 10}
    }

    let stock = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
        
    };
    let storageFunction = {
        restock: (ingredient, num) => {
            stock[ingredient] += Number(num);
            return "Success";
        },
        prepare: (breakfast, num) => {
            let curentBreakfast =  instructions[breakfast];

            for (let i = 0; i < num; i++) {
            
               for (const [key, value] of Object.entries(curentBreakfast)) {
                if(stock[key] - value <= 0) {
                    return `Error: not enough ${key} in stock`;
                   }
                   stock[key] = stock[key] - value;
               }
               
            }
            return "Success";
        },
        report: () => {
            let arrStock = [];
            for (const [key, value] of Object.entries(stock)) {
                arrStock.push(`${key}=${value}`)
            }
            return arrStock.join(" ");
        }
    };

    return function(input) {
        let inputArr = input.split(" ");

        if(inputArr.length === 1) {
            return storageFunction[inputArr[0]]();
        } else {
            return storageFunction[inputArr[0]](inputArr[1], inputArr[2]);
        }
    
    }


}

let manager = solution(); 
console.log (manager ("restock flavour 50")); // Success 
console.log (manager ("prepare lemonade 4")); // Error: not enough carbohydrate in stock 
console.log (manager ("restock carbohydrate 10"));
console.log (manager ("restock flavour 10"));
console.log (manager ("prepare apple 1"));
console.log (manager ("restock fat 10"));
console.log (manager ("prepare burger 1"));
console.log (manager ("report"));

