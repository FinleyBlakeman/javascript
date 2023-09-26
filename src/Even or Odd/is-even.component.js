const IsEven = (num) => {
    switch (num) {
        case 0:
            return true;
        case 1:
            return false;
        default:
            return IsEven(num - 2);
    }
}
module.exports = IsEven;