const {describe, it, expect} = require("@jest/globals");
const Minimum = require("./minimum.component");

describe('Minimum Function', () => {
    it('should return the minimum number when two numbers are entered', () => {
        expect(Minimum(2, 3)).toBe(2);
    });
    
    it('should return the first input when the two inputs are equal', () => {
        expect(Minimum(2, 2)).toBe(2);
    });
    
    it('should return an error message when either input is not a number', () => {
        expect(Minimum(2, 'Howdy')).toBe('Please ensure that both inputs are numbers.')
    });
});