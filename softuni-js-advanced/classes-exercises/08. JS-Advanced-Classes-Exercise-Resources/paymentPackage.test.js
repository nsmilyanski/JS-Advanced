const {expect} = require('chai');
const PaymentPackage = require('./paymentPackage');


describe("test get Methods", function() {
    let p = new PaymentPackage("bill", 20);
    it("test get Name method", function() {
       expect(p.name).to.be.equal("bill");
    });
 
    it("test get Value method", function() {
        expect(p.value).to.be.equal(20);
     });

    it("test get Vat method", function() {
        expect(p.VAT).to.be.equal(20);
     });

     it("test get Active method", function() {
        expect(p.active).to.be.equal(true);
     });

     it("test toString method", function() {
        const output = [
            `Package: ${p.name}` + (p.active === false ? ' (inactive)' : ''),
            `- Value (excl. VAT): ${p.value}`,
            `- Value (VAT ${p.VAT}%): ${p.value * (1 + p.VAT / 100)}`
          ];
    
        expect(p.toString()).to.be.equal(output.join('\n'));
     });

});

describe("test set methods", () => {
    beforeEach(() => {
        p = new PaymentPackage('bill', 20);
      });

    it('test set Name method', () => {
        p.name = "nikola";
        expect(p.name).to.be.equal("nikola");
    })

    it('should throw an error when setting name to an empty string', () => {
        expect(() => p.name = '').to.throw('Name must be a non-empty string');
      });

      it('should throw an error when setting name to a non-string value', () => {
        expect(() => p.name = 123).to.throw('Name must be a non-empty string');
      });
    
      it('should throw an error when setting value to a negative number', () => {
        expect(() => p.value = -100).to.throw('Value must be a non-negative number');
      });
    
      it('should throw an error when setting value to a non-number value', () => {
        expect(() => p.value = '100').to.throw('Value must be a non-negative number');
      });
    
      it('should throw an error when setting VAT to a negative number', () => {
        expect(() => p.VAT = -20).to.throw('VAT must be a non-negative number');
      });
    
      it('should throw an error when setting VAT to a non-number value', () => {
        expect(() => p.VAT = '20').to.throw('VAT must be a non-negative number');
      });
    
      it('should throw an error when setting active status to a non-boolean value', () => {
        expect(() => p.active = 'true').to.throw('Active status must be a boolean');
      });
    
})
