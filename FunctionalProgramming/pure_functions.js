/*
  Pure functions have the following properties:
    - They will always emit the same output if their input does not change
    - They don't have any side-effects. Which means their behaviour doesn't have any dependency
      on the outside scope of the function like global variables. This also means pure functions
      does not modify anything that is outside the function's scope.

  Because of the above behaviours, pure functions are guaranteed to produce the same output
  for the same input. This property makes their behaviour predictable.

  Some example of side-effects:
   - Changing or mutating the input (if the input is passed by reference)
   - Querying the DOM object or a database (Because their output is not predictable and can change)
   - Calling an API (Because the result that we get from an API is subjected to change, an so not predictable)
   - Logging (Dependent on the system's logging mechanism)
   - Reading/Writing files (Dependent on the system's I/O mechanism)
   - Reading from a global state or global variable (They can be changed anytime and thus can alter the funtions's behaviour)

  Pure functoins are side-effect free.
*/

// This is an example of the pure function. For a certain "fullName", it will always produce the same output.
const printName = (fullName) => `Hello ${fullName}!`;

/* This, on the other hand, is an impure function as it has external dependency or side-effect. If the greeting
   global variable is changed, the function's behaviour will also be changed even if the input remains same.
*/
let greeting = "Hello";

const printNameImpure = (fullName) => `${greeting} ${fullName}!`;
