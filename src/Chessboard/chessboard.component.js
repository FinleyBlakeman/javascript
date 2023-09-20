const Chessboard = (bindingSize = 9) => {
    let rowCount = 1;
    let columnCount = 1;
    let chessboard = '';
    const odd = ' ';
    const even = '#';
    
    while(rowCount < bindingSize){
        while(columnCount < bindingSize){
            if(columnCount % 2 !== 0 && rowCount % 2 !== 0) chessboard += odd;
            if(columnCount % 2 !== 0 && rowCount % 2 === 0) chessboard += odd;
            if(columnCount % 2 === 0 && rowCount % 2 !== 0) chessboard += even;
            if(columnCount % 2 === 0 && rowCount % 2 === 0) chessboard += even;
            if(columnCount === bindingSize - 1) chessboard += '\n';
            columnCount++
        }
        rowCount++;
    }
    return chessboard;
}
module.exports = Chessboard;