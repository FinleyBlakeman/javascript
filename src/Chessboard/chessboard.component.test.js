const {describe, it, expect} = require("@jest/globals");
const Chessboard = require("./chessboard.component");

describe('chessboard function', () => {
    it('should return 8 by 8 grid when no input is given', () => {
        expect(Chessboard()).toBe(
            ' # # # #\n' 
            + '# # # # \n' 
            + ' # # # #\n' 
            + '# # # # \n' 
            + ' # # # #\n' 
            + '# # # # \n' 
            + ' # # # #\n' 
            + '# # # # \n'
        );
    });

    it('should return 3 by 3 grid when a binding size input of 3 is given', () => {
        expect(Chessboard(4)).toBe(
            ' # \n'
            + '# #\n'
            + ' # \n'
        );
    });
});