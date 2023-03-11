const assert = require('chai').assert;
const rentCar = require('./rentCar.js');

describe('rentCar', function() {
    describe('searchCar', function() {
        it('should return a string with the number of cars of a given model in the catalog', function() {
            const shop = ['Volkswagen', 'Audi', 'Toyota', 'BMW', 'Mercedes'];
            const model = 'Toyota';
            const result = rentCar.searchCar(shop, model);
            assert.equal(result, 'There is 1 car of model Toyota in the catalog!');
        });

        it('should throw an error if there are no cars of the given model in the catalog', function() {
            const shop = ['Volkswagen', 'Audi', 'BMW', 'Mercedes'];
            const model = 'Toyota';
            assert.throw(() => rentCar.searchCar(shop, model), Error, 'There are no such models in the catalog!');
        });

        it('should throw an error if the input is invalid', function() {
            const shop = 'Volkswagen, Audi, Toyota, BMW, Mercedes';
            const model = 123;
            assert.throw(() => rentCar.searchCar(shop, model), Error, 'Invalid input!');
        });
    });

    describe('calculatePriceOfCar', function() {
        it('should return a string with the total cost of renting a car', function() {
            const model = 'Toyota';
            const days = 7;
            const result = rentCar.calculatePriceOfCar(model, days);
            assert.equal(result, 'You choose Toyota and it will cost $280!');
        });

        it('should throw an error if the model is not in the catalog', function() {
            const model = 'Ford';
            const days = 7;
            assert.throw(() => rentCar.calculatePriceOfCar(model, days), Error, 'No such model in the catalog!');
        });

        it('should throw an error if the input is invalid', function() {
            const model = 123;
            const days = '7';
            assert.throw(() => rentCar.calculatePriceOfCar(model, days), Error, 'Invalid input!');
        });
    });

    describe('checkBudget', function() {
        it('should return a string confirming that the car can be rented within the given budget', function() {
            const costPerDay = 40;
            const days = 7;
            const budget = 350;
            const result = rentCar.checkBudget(costPerDay, days, budget);
            assert.equal(result, 'You rent a car!');
        });

        it('should return a string indicating that the budget is not sufficient', function() {
            const costPerDay = 50;
            const days = 7;
            const budget = 300;
            const result = rentCar.checkBudget(costPerDay, days, budget);
            assert.equal(result, 'You need a bigger budget!');
        });

        it('should throw an error if the input is invalid', function() {
            const costPerDay = '40';
            const days = 7;
            const budget = 350;
            assert.throw(() => rentCar.checkBudget(costPerDay, days, budget), Error, 'Invalid input!');
        });
    });
});
