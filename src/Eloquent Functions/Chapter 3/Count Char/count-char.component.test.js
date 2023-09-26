const {describe, it, expect, test} = require("@jest/globals");
const CountChar = require("./count-char.component");

describe('CountChar function', () => {
    it('should return 0 when there are none of the character in the input string', () => {
        expect(CountChar('HelloWorld', 'z')).toBe(0);
    });

    it('should return 0 when the input string is empty', () => {
        expect(CountChar('', 'e')).toBe(0);
    });

    it('should return 0 when the character string is empty', () => {
        expect(CountChar('HelloWorld', '')).toBe(0);
    });

    it('should return the number of the character in a string with bs', () => {
        expect(CountChar('HelloWorld', 'e')).toBe(1);
        expect(CountChar('HelloWorld', 'o')).toBe(2);
        expect(CountChar('HelloWorld', 'l')).toBe(3);
    });

    it('should only return the number of the case sensitive character in a string with bs', () => {
        expect(CountChar('HelloWorld', 'O')).toBe(0);
        expect(CountChar('HelloWorld', 'H')).toBe(1);
        expect(CountChar('HelloWorld', 'W')).toBe(1);
    });
});