const {describe, it, expect} = require("@jest/globals");
const Range = require("./range.component");

describe('Range function', () => {
    it('should create an empty array when the start or end numbers are undefined', () => {
        expect(Range(undefined, undefined)).toEqual([]);
        expect(Range(undefined, 2)).toEqual([]);
        expect(Range(1, undefined)).toEqual([]);
    });
    
    it('should create an empty array when the start or end inputs are not numbers', () => {
        expect(Range('blah', 2)).toEqual([]);
        expect(Range(2, '$')).toEqual([]);
    });
    
    it('should create an array with one number when the start and end numbers are the same number', () => {
        expect(Range(1, 1)).toEqual([1]);
        expect(Range(70, 70)).toEqual([70]);
        expect(Range(-2, -2)).toEqual([-2]);
    });

    it('should create an empty array with multiple numbers descending when the start number is smaller than the end number', () => {
        expect(Range(3, 1)).toEqual([3, 2, 1]);
    });
    
    it('should create an array with multiple numbers when the start number is smaller than the end number', () => {
        expect(Range(1, 3)).toEqual([1, 2, 3]);
        expect(Range(70, 74)).toEqual([70, 71, 72, 73, 74]);
        expect(Range(-2, 6)).toEqual([-2, -1, 0, 1, 2, 3, 4, 5, 6]);
    });

    it('should create an array with default step sequence when no step is inputted', () => {
        expect(Range(1, 5)).toEqual([1, 2, 3, 4, 5]);
    })

    it('should create an array with specified step sequence when step is inputted', () => {
        expect(Range(1, 5, 2)).toEqual([1, 3, 5]);
    })
});