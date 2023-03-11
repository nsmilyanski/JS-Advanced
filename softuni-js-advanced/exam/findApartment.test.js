const expect = require('chai').expect;
const findNewApartment = require('./findApartment.js');

describe('test findApartment class', () => {

  describe('test isGoodLocation', () => {

    it('should throw an error if the input is invalid', () => {
      expect(() => findNewApartment.isGoodLocation(126, true)).to.throw('Invalid input!');
      expect(() => findNewApartment.isGoodLocation([], true)).to.throw('Invalid input!');
      expect(() => findNewApartment.isGoodLocation({}, true)).to.throw('Invalid input!');
      expect(() => findNewApartment.isGoodLocation("Sandanski", 123)).to.throw('Invalid input!');
      expect(() => findNewApartment.isGoodLocation("Sandanski", {})).to.throw('Invalid input!');
      expect(() => findNewApartment.isGoodLocation("Sandanski", "asdasd")).to.throw('Invalid input!');
    });

    it('test should return - This location is not suitable for you.', () => {
      expect(findNewApartment.isGoodLocation('Pavlikeni', true)).to.equal('This location is not suitable for you.');
    });

    it('test should return - You can go on home tour!', () => {
      expect(findNewApartment.isGoodLocation('Sofia', true)).to.equal('You can go on home tour!');
      expect(findNewApartment.isGoodLocation('Plovdiv', true)).to.equal('You can go on home tour!');
      expect(findNewApartment.isGoodLocation('Varna', true)).to.equal('You can go on home tour!');
    });

  });

  describe('test isLargeEnough', () => {

    it('test should throw an error if the input is invalid', () => {
      expect(() => findNewApartment.isLargeEnough('not an array', 50)).to.throw('Invalid input!');
      expect(() => findNewApartment.isLargeEnough({}, 50)).to.throw('Invalid input!');
      expect(() => findNewApartment.isLargeEnough(true, 50)).to.throw('Invalid input!');
      expect(() => findNewApartment.isLargeEnough([], true)).to.throw('Invalid input!');
      expect(() => findNewApartment.isLargeEnough([], "")).to.throw('Invalid input!');
      expect(() => findNewApartment.isLargeEnough([], {})).to.throw('Invalid input!');
      expect(() => findNewApartment.isLargeEnough("sdasd", true)).to.throw('Invalid input!');
    });

    it('test should return a list of correct apartments', () => {
      const apartments = [40, 50, 60];
      expect(findNewApartment.isLargeEnough(apartments, 20)).to.equal('40, 50, 60');
      expect(findNewApartment.isLargeEnough(apartments, 45)).to.equal('50, 60');
      expect(findNewApartment.isLargeEnough(apartments, 51)).to.equal('60');
    });

    it('test should return an empty string', () => {
      const apartments = [30, 40, 45];
      expect(findNewApartment.isLargeEnough(apartments, 50)).to.equal('');
      expect(findNewApartment.isLargeEnough(apartments, 60)).to.equal('');
    });

  });

  describe('test isItAffordable', () => {

    it('test should throw an error if the input is invalid', () => {
      expect(() => findNewApartment.isItAffordable('not a number', 100)).to.throw('Invalid input!');
      expect(() => findNewApartment.isItAffordable(undefined, 100)).to.throw('Invalid input!');
      expect(() => findNewApartment.isItAffordable([], 100)).to.throw('Invalid input!');
      expect(() => findNewApartment.isItAffordable({}, 100)).to.throw('Invalid input!');
      expect(() => findNewApartment.isItAffordable(true, 100)).to.throw('Invalid input!');
      expect(() => findNewApartment.isItAffordable(121, undefined)).to.throw('Invalid input!');
      expect(() => findNewApartment.isItAffordable(121, [])).to.throw('Invalid input!');
      expect(() => findNewApartment.isItAffordable(121, {})).to.throw('Invalid input!');
      expect(() => findNewApartment.isItAffordable(121, true)).to.throw('Invalid input!');
      expect(() => findNewApartment.isItAffordable(121, -20)).to.throw('Invalid input!');
      expect(() => findNewApartment.isItAffordable(-12, 20)).to.throw('Invalid input!');
      expect(() => findNewApartment.isItAffordable(-12, -20)).to.throw('Invalid input!');
    });

    it('test should return a - You dont have enough money for this house!', () => {
      expect(findNewApartment.isItAffordable(50000, 30000)).to.equal("You don't have enough money for this house!");
    });

    it('test should return a - You can afford this home!', () => {
      expect(findNewApartment.isItAffordable(20000, 30000)).to.equal('You can afford this home!');
    });

  });

});

