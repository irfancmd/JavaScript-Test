// Radix Sort is a type of non-comparion sort that only works for integer data
// Time complexity: O(n * k) in all cases where n is the number of elements and k is the number of digits of the largest number. (There are debates though)
// Space complexity: O(n + k)

// The implemenation below only works for positive integer numbers

function getDigit(num, place) {
    const base = 10;

    return Math.floor(Math.abs(num) / Math.pow(base, place)) % base;
}

function getDigitCount(num) {
    if(num === 0){
        return 1;
    } else {
        return Math.floor(Math.log10(Math.abs(num)))+ 1;
    }
}

function mostDigits(arr) {
    let mostDigitCount = getDigitCount(arr[0]);

    for(let i = 1; i < arr.length; i++) {
        mostDigitCount = Math.max(mostDigitCount, getDigitCount(arr[i]));
    }

    return mostDigitCount;
}

function radixSort(arr) {
    // The number of digits of the largest element will be the highest. This number of digits
    // will determine how many times the outer loop will iterate
    let maxDigitCount = mostDigits(arr);

    // The base will determine the number of buckets
    const base = 10;

    for(let i = 0; i < maxDigitCount; i++) {
        // Create 'base' number of empty arrays
        let digitBuckets = Array.from({length: base}, () => []);

        for(let j = 0; j < arr.length; j++) {
            let currentDigit = getDigit(arr[j], i);
            digitBuckets[currentDigit].push(arr[j]);
        }

        // After the numbers get into the appropriate buckets,
        // extract them
        arr = [].concat(...digitBuckets);
    }

    // Since arr object has been recreated, it doesn't point to the
    // original reference anymore. So, we have to return it
    return arr;
}

let arr = [23, 345, 5467, 12, 2345, 9852];

let sortedArr = radixSort(arr);

console.log(sortedArr);
