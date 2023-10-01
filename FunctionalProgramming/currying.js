/*
  Currying is a concept in functional programming where instead of making a function that
  takes multiple argument, we "tranform" the function in a way that it becomes a composite or chain of
  functions that take a single argument. Currying is useful to store a saved state of a complex operation
  so that we don't have to call a function multiple times with the same arguments.
*/

const currySum = (x) => (y) => (z) => x + y + z;

/* Let's say we have to calculate 2 + 3 + 4. But we also may have to calculate 2 + 3 + 5 in future. To
   avoid passing 2 and 3 again and again, we can extract a curried state of the currySum function.
*/
const twoPlusThree = currySum(2)(3);

// Then, we can simply pass the third argument that is subjected to change in future.
console.log(twoPlusThree(4));
