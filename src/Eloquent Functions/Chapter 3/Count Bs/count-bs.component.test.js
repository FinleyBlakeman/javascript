const {describe, it, expect, test} = require("@jest/globals");
const CountBs = require("./count-bs.component");

describe('CountBs function', () => {
    it('should return 0 when there are no bs in the input string', () => {
        expect(CountBs('HelloWorld')).toBe(0);
    });
    
    it('should return 0 when the input string is empty', () => {
        expect(CountBs('')).toBe(0);
    });

    it('should return the number of bs in a string with bs', () => {
        expect(CountBs('Bean soup')).toBe(1);
        expect(CountBs('Bouncy Butts')).toBe(2);
        expect(CountBs('BaBy Boy')).toBe(3);
    });

    it('should only return the number of capital bs in a string with bs', () => {
        expect(CountBs('bean soup')).toBe(0);
        expect(CountBs('Bouncy butts')).toBe(1);
        expect(CountBs('Baby Boy')).toBe(2);
    });
});