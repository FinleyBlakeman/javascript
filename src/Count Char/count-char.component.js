const CountChar = (inputString, char) => {
    let charCount = 0;

    if(char === '' || inputString === '') {
        return charCount;
    }
    
    for (let i = 0; i < inputString.length; i++) {
        charCount += inputString[i] === char ? 1 : 0;
    }

    return charCount;
}
module.exports = CountChar;