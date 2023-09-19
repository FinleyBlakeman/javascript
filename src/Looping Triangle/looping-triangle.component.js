function LoopingTriangle(lineCount = 7, character = '#') {
    let i = 1;
    let line = '';
    lineCount = lineCount === undefined ? 7 : lineCount;
    character = character === undefined ? '#' : character;
    
    while (i < lineCount + 1) {
        line += character.repeat(i) + '\n';
        i++;
    }
    
    return line;
}
module.exports = LoopingTriangle;