/*
Problem: Implement a function called countUniqueValues that takes a sorted array of
integers and returns the number unique values present in that array. This problem can
be solved using the frequency counter method as well.

countUniqueValues([]) // 0
countUniqueValues([-2, -1, -1 , 0, 1]) // 4

*/

function countUniqueValues(arr) {
    if(arr.length === 0) {
        return 0;
    }

    let i = 0;

    for(let j = i + 1; j < arr.length; j++) {
        if(arr[i] !== arr[j]) {
            // Replace the element at i'th position with the newly discovered value
            // and increment i
            arr[i] = arr[j];

            i++; 
        } 
    }

    // i+1 will be the number of unique valuesa
    return i+1;
}

arr = [-2, -1, -1, 0, 1];

console.log(countUniqueValues(arr));