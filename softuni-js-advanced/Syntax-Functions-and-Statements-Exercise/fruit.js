function calculateFruits(fruit, grams, price) {
    let fruitKg = grams / 1000;
    let priceOfFruit = fruitKg * price;

    console.log(`I need $${priceOfFruit.toFixed(2)} to buy ${fruitKg.toFixed(2)} kilograms ${fruit}.`)
}

calculateFruits('apple', 1563, 2.35)