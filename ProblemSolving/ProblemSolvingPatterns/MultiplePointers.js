/* In these types of problems, we traverse the collection by 
using 2 different pointers 

Problem:
Write a function called sumZero which accepts a sorted array of integers
as input and returns the first pair of numhbers that sum to 0. Return "undefined" if
such pair doesn't exist.

sumZero([-3, -2, -1, 0, 1, 2, 3]) // [-3, 3]
sumZero([-2, 0, 1, 3]) // undefined
sumZero([1, 2, 3]) // undefined

*/

function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        sum = arr[left] + arr[right];

        // If sum > 0, shift the right pointer to left for reducing the inflence of positive part
        if(sum > 0) {
            right -= 1;
        } else if (sum < 0) {
            // If sum < 0, shift the left pointer to right for reducing the inflence of negative part
            left += 1;
        } else {
            // If sum == 0, return the pair
            let pair = [arr[left], arr[right]];

            return pair;
        }
    }

    return undefined;
}

let arr = [-2, -1, -0, 1, 2, 3];

console.log(sumZero(arr));