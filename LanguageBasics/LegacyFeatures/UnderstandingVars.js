// Vars are scoped quite differently compared to other languages. For instance,
// the only way to create a new scope for them is to put them inside a new function.
// Any other circumstance like a loop won't create a scope for them.
// We can deliberately create a new scope using annonymous functions.

for (var i = 0; i < 10; i++) {
  console.log(i);
}

// Note that var i of the for loop is accessible here as well. This is because vars
// don't get a new scope for loop iteration and so the var i was declared in the global
// scope
console.log(i);

// Such behaviour creates intersting scenarios like this
// Here all iterations are completed before setTimeouts are called. So, by the time
// all setTimeouts executes, the value of var i in the global space is already '5'. Hence,
// all of the outputs are '5'
// console.log("**********1**********");
// for (var i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 100);
// }

// But what if we want to make the above loop behave like a normal loop?
// As mentioned before the only way to create a new scope for vars in nesting functions.
// So, we can wrap each iteration inside an annonymous function
// console.log("**********2**********");
// for (var i = 0; i < 5; i++) {
//   (() => {
//     // setTime out will be called in this scope
//     var j = i;
//     setTimeout(() => {
//       console.log(j);
//     }, 100);
//   })();
// }

// var will get scope inside nested function
console.log("**********3**********");
function foo() {
  var a;
  a = 200;

  function bar() {
    var a = 100;

    // This is not the 'a' defined in the parent scope
    console.log(a);
  }

  console.log(a);

  bar();
}

foo();
