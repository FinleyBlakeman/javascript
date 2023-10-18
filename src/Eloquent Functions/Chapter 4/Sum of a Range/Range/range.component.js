const Range = (start, end, step) => {
    let arr = [];
    step = step === null || step === undefined ?  1 : step;

    if(typeof(start) !== "number" || typeof(end) !== "number") {
        return [];
    }
    else if(start === end) {
        return [start];
    }
    else if (start < end) {
        for(let i = start; i < end+1; i += step) arr.push(i);
    }
    else {
        for(let i = end; i < start + 1; i += step) arr.push(i);
        arr.reverse();
    }

    return arr;
}
module.exports = Range;