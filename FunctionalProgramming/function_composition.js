/* Funtional programming is about creating small funtions with single responsibility
   and then combining them two create composite functions that can do complex tasks.
   This is done through function composition. Function composition is the process of
   forwarding one function's output as another function's input. Function
   composition is an alternative to funtion nesting and produces less cluttery and more readable
   code.
*/

/* Let's create a "compose" funtion that can combine two functions. This function returns
   another function that forwards the output of function "g" to function "f".
*/
const compose = (f, g) => (x) => f(g(x));

// Now, we'll create two small funtions that do simple task
const getAge = (user) => user.age;
const isAllowedToVote = (age) => age >= 18;

/* Then, we'll create a composite funtion by combining the above two. Note that to
   determine the execution order of composite funtions, we have to read the call signature
   from right to left because this is how we have set up our composite funtion. So,
   getAge will be called first and it's output will be forwarded to isAllowedToVote.
*/
const userIsAllowedToVote = compose(isAllowedToVote, getAge);

// We can now call our composite funtion.
let user1 = { name: "Bob", age: 25 };

console.log(userIsAllowedToVote(user1));
