/*
  Many Javascript built-in functions, especially the array funtions follow
  funtional programming paradigm. Funtional programming takes declarative
  approach, unlike procedural or object-oriented programming which take
  imperative approach. In a declarative approach, we don't focus on how to
  accomplish a task. Instead we focus on WHAT is the problem that we're trying
  to solve. Here, we don't explicitly tell the computer how to do how to do something
  step by step. We just tell the computer what is the thing that we're trying to
  achieve.
*/

const arr1 = [1, 2, 3, 4, 5];

/* The map funtion. here, we want to double the elements of the array and now that how
   we're just telling the funtion that we want each element to be doubled. We're not telling
   it verbose steps like how to iterate through that araay.
*/
const makeDouble = (e) => e * 2;
const arr1Double = arr1.map(makeDouble);

console.log(arr1Double);

// The filter function
const isOdd = (e) => e % 2 !== 0;
const arr1Odd = arr1.filter(isOdd);

console.log(arr1Odd);

/* The flat funtion. This funtion flattens a multi-dimensional array. We're setting the depth level
   to Infinity. Default is 1.
*/
const arr2 = [1, 2, 3, [4, [5]], 6, [7], 8];
const arr2Flat = arr2.flat(Infinity);

console.log(arr2Flat);

/* The reduce funtion. it reduces an array down to a single value. If we have an array with no element in an
   index like [1, 2, , 4, 5] when reduce WILL simply ignore the empty element. However, of we have undefined
   elements in an array, those elements WILL NOT be ignored.
*/
const arr1Sum = arr1.reduce(
  (accumulator, currentItem) => accumulator + currentItem,
  0
); // We can set a starting value for the accumulator
console.log(arr1Sum);

const arr1Multiply = arr1.reduce(
  (accumulator, currentItem) => accumulator * currentItem
);
console.log(arr1Multiply);
