const {describe, it, expect, test} = require("@jest/globals");
const FizzBuzz = require("./fizzbuzz.component");

describe('fizz buzz function', () => {
    it('should return all numbers from zero to one hundred in an array', () => {
       expect(FizzBuzz().length).toBe(100);
       expect(FizzBuzz()[0]).toBe(1);
    });
    
    it('should return all numbers divisible by 3 as Fizz instead of the number', () => {
        expect(FizzBuzz()[2]).toBe('Fizz');
    });

    it('should return all numbers divisible by 5 as Buzz instead of the number', () => {
        expect(FizzBuzz()[4]).toBe('Buzz');
    });

    it('should return all numbers divisible by 5 and 3 as FizzBuzz instead of the number', () => {
        expect(FizzBuzz()[14]).toBe('FizzBuzz');
    });
});