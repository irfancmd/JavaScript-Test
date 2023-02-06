/* In Javascript, the built-in sort method is designed for strings and treat any given
data as strings. So, it won't work if we want to sort numbers. For that, we have to
use our own comparator function */

function numberComparator(num1, num2) {
    // If num1 > num2, the value will be positive. Else, it will be negative
    // The value will be 0 if both numbers are the same
    return num1 - num2;
}

arr = [6 ,5, 4, 3, 25, 10];

arr.sort(numberComparator);

console.log(arr);