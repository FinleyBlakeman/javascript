const loopingTriangle = require('./looping-triangle.component');
const {describe, it, expect, test} = require("@jest/globals");

describe('looping triangle function', () => {
    it('should print the triangle with pound sign and 8 lines given no inputs', () => {
        expect(loopingTriangle(undefined, undefined)).toBe("#\n" + "##\n" + "###\n" + "####\n" + "#####\n" + "######\n" + "#######\n");
    });

    it('should print the triangle with pound sign and 3 lines given only line count input of 3', () => {
        expect(loopingTriangle(3, undefined)).toBe("#\n" + "##\n" + "###\n" );
    });
    
    it('should print the triangle with dollar sign and 8 lines given character input of $ and line count of 7', () => {
        expect(loopingTriangle(undefined, '$')).toBe("$\n" + "$$\n" + "$$$\n" + "$$$$\n" + "$$$$$\n" + "$$$$$$\n" + "$$$$$$$\n");
    });
});