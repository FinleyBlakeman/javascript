const FizzBuzz = () => {
    return Array.apply(null, Array(100)).map((x, i) => fillFizzBuzzArray(x, i + 1));
}

const fillFizzBuzzArray = (array, index) => {
    const isFizz = index % 3 === 0;
    const isBuzz = index % 5 === 0;
    
    if(isFizz && !isBuzz) index = 'Fizz';
    if(!isFizz && isBuzz) index = 'Buzz';
    if(isFizz && isBuzz) index = 'FizzBuzz';
    
    return index
}

module.exports = FizzBuzz