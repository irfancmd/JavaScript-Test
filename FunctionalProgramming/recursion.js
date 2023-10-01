/* Lots of things that can be done using loops can also be done through
   recursions. In funtional programming paradigm, recursion is often the preferred
   way as functions are considered primary units of code instead of imperative statements
   like loops.
*/

// This is how we will repeat a task via recursion
const iterateThroughArray = (arr, startIndex = 0) => {
  if (startIndex >= arr.length) return;

  console.log(arr[startIndex]);

  iterateThroughArray(arr1, startIndex + 1);
};

const arr1 = [1, 2, 3, 4, 5];

iterateThroughArray(arr1);
