const {describe, it, expect, test} = require("@jest/globals");
const IsEven = require("./is-even.component");

describe('Even or Odd function', () => {
    it('should return even for 0', () => {
        expect(IsEven(0)).toEqual(true);
    });
    
    it('should return odd for 1', () => {
        expect(IsEven(1)).toEqual(false);
    });
    
    it('should return even for 50', () => {
        expect(IsEven(50)).toEqual(true);
    });
    
    it('should return odd for 75', () => {
        expect(IsEven(75)).toEqual(false);
    });
});