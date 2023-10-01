/* In functional programming paradigm, functions are FIRST CLASS citizens. Which means,
   they can be treated as data types. We can assign a function to a variable, pass a function as
   an argument to another function and even return a function from another function.
*/

// Assignning a function to a variable
const getGreeting = (name) => `Hello ${name}!`;

console.log(getGreeting("Bob"));

// Returning a function from another function
const power = (exponent) => (num) => Math.pow(num, exponent);

const powerTwo = power(2);

const threePowerTwo = powerTwo(3);

console.log(threePowerTwo);
