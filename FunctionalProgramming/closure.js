/*
  Closure is a funtional programming concept. Closure gives an inner function access
  to an outer function's scope. Since we cannot use global variables in a pure funtion,
  closure are used for keeping states that needs to be persistent across function calls.
*/

// Let's create a counter function
const counter = () => {
  /* Rather than put the count globally, we'll put it as a variable inside the
     outer function's scope.
  */
  let count = 0;

  /* Notice now the inner function "incrementCounter" can access a varible of it's
     outer function's scope because of closure.
  */
  const incrementCounter = () => count++;

  // Then, we'll return the inner function
  return incrementCounter;
};

// We'll create a counter by calling the outer function ONLY ONCE.
const counter1 = counter();

/* Then, every time it's inner funtion will get invoked, the counter inside it will be updated
   and stay persistent across inner function calls because of closure.
*/
console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());
