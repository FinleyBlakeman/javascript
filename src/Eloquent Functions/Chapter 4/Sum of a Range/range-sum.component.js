const Range = require("./Range/range.component");
const Sum = require("./Sum/sum.component");

const RangeSum = (start, end, step) => {
    return Sum(Range(start, end, step));
}
module.exports = RangeSum;