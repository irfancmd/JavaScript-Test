/* In funtional programming, a higher order function is a funtion that
   take other functions as input or returns a function as output.
*/

// Let's create some simple functions
const add = (opr1, opr2) => opr1 + opr2;
const mul = (opr1, opr2) => opr1 * opr2;

// Compute takes a function "operation" as input. So, it's a higher order function
const compute = (operation, num1, num2) => operation(num1, num2);

console.log(compute(add, 2, 3));
console.log(compute(mul, 2, 3));
