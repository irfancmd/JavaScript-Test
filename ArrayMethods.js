let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// The every() function checks wherther every value of the array satiesfies certain
// conditions
let isAllEven = numbers.every(num => (num % 2) === 0);
console.log(isAllEven);

// The filer() funciton fiters out certain element that meet certain conditions
let evenNumbers = numbers.filter(num => (num % 2) === 0);
console.log(evenNumbers);

// The forEach() function will do some operation for each element of the array. It
// an alternative to for loop
numbers.forEach(num => console.log(`The number is ${num}`))

// indexOf() will print the index of the first occurence fo an element
let moreNumbers = [1, 2, 3, 2, 4, 5, 2, 5, 7]

console.log(moreNumbers.indexOf(2));

// If the elment doesn't exist, it will return -1
console.log(moreNumbers.indexOf(8));

// Will print the index of first occurence starting from index 2
console.log(moreNumbers.indexOf(2, 2));

// Will print the index of the fist occurence starting from index -4 (-1 is the index of the last element)
console.log(moreNumbers.indexOf(2, -5));

// lastIndexOf() is same as indexOf() but it prints the index of the last occurence of an element
console.log(moreNumbers.lastIndexOf(2));

// We can modify each element of an array using map() function
let doubled = numbers.map(num => num * 2);
console.log(doubled);

// The reduce() method uses all the elements of an array to produce a single output
let arraySum = numbers.reduce((prev, curr) => prev + curr);
console.log(arraySum);

// We can also calculate average using reduce
let arrayAverage = numbers.reduce((prev, curr, i, array) => {
    // If we're not in the last element, keep adding the elements
    if(i < (array.length - 1)) {
	return prev + curr;
    } else {
	// Else, return the average
	prev += curr;
	return prev / array.length;
    }

});

console.log(arrayAverage);

// The reduceRight() function is like reduce() but it start the reduction from right
let subtraction = numbers.reduce((prev, curr) => prev-curr);
console.log("Subtraction: " + subtraction);

let subtractionFromRight = numbers.reduceRight((prev, curr) => prev-curr);
console.log("Subtraction from right: " + subtractionFromRight);

// The some() function can be used to check whether some elements of the array satisfies the
// condition or not
let atLeastOneEven = numbers.some(val => (val % 2) === 0);
console.log(atLeastOneEven);

