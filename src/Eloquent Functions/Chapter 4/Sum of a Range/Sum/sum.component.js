const Sum = (range) => {
    let sum = 0;

    for (let i = 0; i < range.length; i++) {
        sum += range[i];
    }

    return sum;
}
module.exports = Sum