const {expect} = require('chai');
const mathEnforcer  = require('./mathEnforcer')

describe('test mathEnforcer functions', () => {
    describe('test addFive method', () => {
        it('test add five with string', () => {
            expect(mathEnforcer.addFive('sdas')).to.be.undefined;
        });
    
        it('test add five with object', () => {
            expect(mathEnforcer.addFive({})).to.be.undefined;
        });
        it('test add five with null', () => {
            expect(mathEnforcer.addFive(null)).to.be.undefined;
        });

        it('test add five with big int', () => {
            expect(mathEnforcer.addFive(BigInt(12323123))).to.be.undefined;
        });
    
        it('test add five with array', () => {
            expect(mathEnforcer.addFive([1, 2, 3])).to.be.undefined;
        });
    
        it('test add five with boolean', () => {
            expect(mathEnforcer.addFive(true)).to.be.undefined;
        });
    
        it('test with correct value', () => {
            expect(mathEnforcer.addFive(5)).to.be.equal(10)
    ;    })
    })
    
    describe('test subtractTen method', () => {
        it('test subtractTen with string', () => {
            expect(mathEnforcer.subtractTen('sdas')).to.be.undefined;
        });
    
        it('test subtractTen with object', () => {
            expect(mathEnforcer.subtractTen({})).to.be.undefined;
        });
    
        it('test subtractTen with array', () => {
            expect(mathEnforcer.subtractTen([1, 2, 3])).to.be.undefined;
        
        });

        it('test subtractTen with null', () => {
            expect(mathEnforcer.subtractTen(null)).to.be.undefined;
        });

        it('test subtractTen with big int', () => {
            expect(mathEnforcer.subtractTen(BigInt(12323123))).to.be.undefined;
        });
    
        it('test subtractTen with boolean', () => {
            expect(mathEnforcer.subtractTen(true)).to.be.undefined;
        });
    
        it('test with correct value', () => {
            expect(mathEnforcer.subtractTen(20)).to.be.equal(10)
    ;    })
    })
    
    describe('test sum method', () => {
        it('test add five with string', () => {
            expect(mathEnforcer.sum('sdas', 2)).to.be.undefined;
        });
    
        it('test add five with object', () => {
            expect(mathEnforcer.sum({}, 2)).to.be.undefined;
        });
    
        it('test add five with array', () => {
            expect(mathEnforcer.sum([1, 2, 3], 2)).to.be.undefined;
        });
    
        it('test add five with boolean', () => {
            expect(mathEnforcer.sum(true, 2)).to.be.undefined;
        });
    
        it('test add five with string', () => {
            expect(mathEnforcer.sum(2, 'sdas')).to.be.undefined;
        });
    
        it('test add five with object', () => {
            expect(mathEnforcer.sum(2, {})).to.be.undefined;
        });
    
        it('test add five with array', () => {
            expect(mathEnforcer.sum(3, [1, 2, 3])).to.be.undefined;
        });
    
        it('test add five with boolean', () => {
            expect(mathEnforcer.sum(5, true)).to.be.undefined;
        });
    
        it('test with correct value', () => {
            expect(mathEnforcer.sum(20, 10)).to.be.equal(30)
    ;    })
    })
})
