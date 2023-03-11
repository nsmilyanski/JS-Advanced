const {expect} = require('chai');
const isOddOrEven = require('./evenOrOdd');


describe('even or odd', () => {
    it('is String', () => {
        expect(isOddOrEven(3)).to.be.undefined;
    })

    it('isOdd', () => {
        expect(isOddOrEven('s')).to.equal("odd")
    }) 

    it('isEven', () => {
        expect(isOddOrEven('ss')).to.equal("even")
    }) 
})