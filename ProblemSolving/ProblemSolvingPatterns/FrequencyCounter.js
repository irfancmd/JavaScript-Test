/* In These type of problems, we count the frequencies of collection elements and
    try to use them for solving a problem. This approach eliminates the use of
    nested loops and thus prevents O(n^2) time complexity. 
*/

/*
    Write a  function ccalled same which takes two arrays in input and
    checks whether the second array contain the squared elements of the first array
    or not. Example:

    same([1, 2, 3], [4, 1, 9]) // true; Note that order doesn't matter
    same([1, 2, 3], [1, 9]) // false
    same([1, 2, 1], [4, 4, 1]) // false; Frequency should match
*/

function same(arr1, arr2) {
    if(arr1.length !== arr2.length) {
        return false;
    } else {
        let counter1 = {};
        let counter2 = {};

        // Notice we're using 'of'. Otherwise it will get indecies/keys rather than the items
        for(let item of arr1) {
            counter1[item] = (counter1[item] || 0) + 1;
        }

        for(let item of arr2) {
            counter2[item] = (counter2[item] || 0) + 1;
        }

        // console.log(counter1);
        // console.log(counter2);

        for(let key in counter1){
            // Check whether the square of current item exists or not
            if(!counter2[key ** 2]){
                return false;
            }

            // If the square exists, check whether the frequency maches or not
            if(counter1[key] !== counter2[key ** 2]) {
                return false;
            }
        }

        return true;
    }
}

let arr1 = [1, 2, 3];
let arr2 = [4, 1, 9];

console.log(same(arr1, arr2));
