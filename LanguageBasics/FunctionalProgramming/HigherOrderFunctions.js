/*
    In functional programming, if we want to iterate over something, we can't use loops. Loops aren't allowed
    in functional programming because they rely on external counter variables to keep track of the iteration.
    Instead, we use higher order functions. Higher order functions are functions that can other functions as
    input. Some JavaScript objects have higher order functions lik map(), filter() etc.
*/

const array = [1, 2, 3, 4, 5];

const arrayDouble = array.map(element => element * 2);

// The original array isn't modified
console.log(array);

console.log(arrayDouble)

// NOTE: Don't use "foreach" in functional programming as it modifies the original array
