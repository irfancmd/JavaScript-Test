/* In these type of problems, we will be given an collection/array and have to deal
with a subset/subarray of the original array. The subarray can shrink/expand. Some
common problems using this approach are:
- Determine longest sequence of unique characters of a string
- Determine the maximum sum produced by any 'k' elements of an array 
*/

/*
Problem:
Write a function called maxSubarraySum which accepts an array of integers and
a number called 'n'. The function should calculate the maximum sum of n "consecutive"
elements in the array.

Examples:
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2) // 10
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4) // 17
maxSubarraySum([], 4) // null

*/

function maxSubarraySum(arr, n) {
    if(arr.length < n) {
        return null;
    }

    let i = 0;
    let j = n - 1;

    let maxSum = 0;

    // First, calculate the sum of first 'n' elements
    for(let k = 0; k < n; k++) {
        maxSum += arr[k];
    }

    // Then begin the window sliding operation. Keep moving the window further to
    // the right till the sum is maximized
    let sum = maxSum;

    while (j < arr.length - 1) {
        sum -= arr[i];
        sum += arr[j + 1];

        if(sum > maxSum) {
            maxSum = sum;
        }

        i++;
        j++;
    }

    return maxSum;
}

arr = [1, 2, 5, 2, 8, 1, 5];

console.log(maxSubarraySum(arr, 4));