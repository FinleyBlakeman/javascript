const Minimum = (firstValue, secondValue) => {
    if (firstValue < secondValue || firstValue === secondValue) {
        return firstValue;
    } else if (secondValue < firstValue) {
        return secondValue;
    }
    
    if(typeof(firstValue) !== Number || typeof(secondValue) !== Number) {
        return 'Please ensure that both inputs are numbers.';
    }
}
module.exports = Minimum;