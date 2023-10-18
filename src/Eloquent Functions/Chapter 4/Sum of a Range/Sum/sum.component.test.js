const {describe, it, expect} = require("@jest/globals");
const Sum = require("./sum.component");

describe('Sum function', () => {
    it('should return 0 when given an empty array', () => {
        expect(Sum([])).toEqual(0);
    });

    it('should return the sum of an array of numbers', () => {
        expect(Sum([2])).toEqual(2);
        expect(Sum([2, 2])).toEqual(4);
        expect(Sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual(55);
    })
});