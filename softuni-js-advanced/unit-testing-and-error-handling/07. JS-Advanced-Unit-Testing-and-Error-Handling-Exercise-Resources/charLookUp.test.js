const {expect} = require('chai');
const lookupChar = require('./charLookUp');



describe('Lookup chars with wron values', () => {
    it('test with integer insteat of string', () => {
        expect(lookupChar(2, 2)).to.be.undefined;
    })

    it('test with object insteat of string', () => {
        expect(lookupChar({}, 2)).to.be.undefined;
    })

    it('test with array insteat of string', () => {
        expect(lookupChar([], 2)).to.be.undefined;
    })

    it('test with undefined insteat of string', () => {
        expect(lookupChar([], 2)).to.be.undefined;
    })

    it('test the index with string', () => {
        expect(lookupChar('sdass', '2')).to.be.undefined;
    })

    it('test the index with array', () => {
        expect(lookupChar('sdass', [2, 3])).to.be.undefined;
    })

    it('test the index with array', () => {
        expect(lookupChar('sdass', [])).to.be.undefined;
    })

    it('test the index with object', () => {
        expect(lookupChar('sdass', {})).to.be.undefined;
    })

    it('test the index with undefined', () => {
        expect(lookupChar('sdass', undefined)).to.be.undefined;
    })

    it('test with incorect index', () => {
        expect(lookupChar('sdass', 10)).to.be.equal('Incorrect index');
    })

    it('test withindex below 0', () => {
        expect(lookupChar('sdass', -1)).to.be.equal('Incorrect index');
    })
    it('test withindex below 0', () => {
        expect(lookupChar('sdass', -5)).to.be.equal('Incorrect index');
    })

});

describe('test wit corect data', () => {
    it('test with abcdand index 0', () => {
        expect(lookupChar('abcd', 0)).to.be.equal('a');
    })
    it('test with abcd and index 1', () => {
        expect(lookupChar('abcd', 1)).to.be.equal('b');
    })
    it('test with abcd and index 2', () => {
        expect(lookupChar('abcd', 2)).to.be.equal('c');
    })
    it('test with abcd and index 3', () => {
        expect(lookupChar('abcd', 3)).to.be.equal('d');
    })

    it('test with abcd and index 4', () => {
        expect(lookupChar('abcd', 4)).to.be.equal('Incorrect index');
    })
});