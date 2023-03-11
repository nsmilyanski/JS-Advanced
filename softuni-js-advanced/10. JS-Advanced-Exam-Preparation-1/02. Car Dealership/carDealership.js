class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalincome = 0;
    }

    addCar(model, horsepower, price, mileage) {
        if(!this.nonEmptyString(model) || !this.isPositiveNumber(horsepower) || !this.isPositiveNumber(price) || !this.isPositiveNumber(mileage)) {
            throw new Error("Invalid input!");
        }
        this.availableCars.push({model, horsepower, price, mileage})
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`
    }
    sellCar(model, desiredMileage) {
        let findedCarIndex = this.availableCars.findIndex(e => e.model === model);

        if(findedCarIndex < 0) {
            throw new Error(`${model} was not found!`);
        }
        let carObject = this.availableCars.splice(findedCarIndex, 1);
        let car = carObject[0];

        if(car.mileage > desiredMileage) {
            if(car.mileage - desiredMileage <= 40000) {
                car.price = car.price - (car.price * 0.05);
            }else {
                car.price = car.price - (car.price * 0.1);
            }
        }
        this.soldCars.push({model: car.model, horsepower: car.horsepower, soldPrice: car.price});
        this.totalincome += car.price;
        return `${model} was sold for ${car.price.toFixed(2)}$`
    }

    currentCar() {
        if(this.availableCars.length === 0) {
            return "There are no available cars";
        }
        let sb = '';
        sb += "-Available cars:\n"
        sb += this.availableCars.map(e => e = `---${e.model} - ${e.horsepower} HP - ${e.mileage.toFixed(2)} km - ${e.price.toFixed(2)}$`)
        .join("\n")
        return sb;
    }

    salesReport(criteria) {
        if(criteria === 'model') {
            this.soldCars = this.soldCars.sort((a, b) => a.localeCompare(b))
        }else if(criteria === 'horsepower') {
            this.soldCars = this.soldCars.sort((a, b) => b.horsepower - a.horsepower);
        }else {
            throw new Error("Invalid criteria!")
        }
        let sb = '';
        sb += `-${this.name} has a total income of ${this.totalincome.toFixed(2)}$\n`
        sb += `-${this.soldCars.length} cars sold:\n`
        sb += this.soldCars.map(e => e = `---${e.model} - ${e.horsepower} HP - ${e.soldPrice.toFixed(2)}$`)
        .join("\n")
       
        return sb;
    }

    isPositiveNumber(value) {
        return Number.isInteger(value) && value >= 0;
    }

    nonEmptyString(value) {
        return  typeof value === 'string' && value.trim().length !== 0 
    }
}

//Testing saleReport

let dealership = new CarDealership('SoftAuto');

dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);

console.log(dealership.salesReport('horsepower'));

// assert.equal(dealership.salesReport('horsepower'), 
// `-SoftAuto has a total income of 29600.00$
// -2 cars sold:
// ---Mercedes C63 - 300 HP - 26100.00$
// ---Toyota Corolla - 100 HP - 3500.00$`);
