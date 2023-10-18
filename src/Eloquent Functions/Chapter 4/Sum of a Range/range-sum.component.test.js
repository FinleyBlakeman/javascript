const {describe, it, expect} = require("@jest/globals");
const RangeSum = require("./range-sum.component");

describe('Range Sum', () => {
    it('should return the sum of the range where the inputs are the start and end numbers for the range', () => {
        expect(RangeSum(1, undefined)).toEqual(0);
        expect(RangeSum(1, 1)).toEqual(1);
        expect(RangeSum(10, 1)).toEqual(55);
        expect(RangeSum(0, 10, 2)).toEqual(30);
    });
});