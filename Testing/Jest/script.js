// We can run jest with --coverage argument to see how much of the code is covered by test
// Doing so will generate a coverage report

function sum(a, b) {
    return a + b;
}

function getMax(arr) {
    if(arr.length === 0) {
        return null;
    }

    return Math.max(...arr);
}


module.exports = {
    sum,
    getMax
};
