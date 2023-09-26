const Chessboard = (bindingSize = 9) => {
    let chessboard = '';
    const odd = ' ';
    const even = '#';

    for (let i = 1; i < bindingSize; i++) {
        for (let j = 1; j < bindingSize; j++) {
            if (i % 2 !== 0) {
                chessboard += j % 2 !== 0 ? odd : even;
            }
            else {
                chessboard += j % 2 !== 0 ? even : odd;
            }

            if (j === bindingSize - 1) {
                chessboard += '\n'
            }
        }
    }
    
    return chessboard;
}
module.exports = Chessboard;