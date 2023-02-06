// Callbacks are functions are are passed into another functions. In the old
// days, they were used for performing asyncrhonus operations

// An example of asynchronus operation
// console.log("This statement is palced BEFORE the function");

// setInterval(function() {
//     console.log("This is a callback function");
// }, 2000);

// console.log("This statement is AFTER before the function");

// One drawback of callback functions is that they may get deeper if
// one callback depends on another

console.log("This statement is palced BEFORE the function");

setTimeout(function() {
    
    setTimeout(function() {
        console.log("This is the INNER callback function");
    }, 1000);

    console.log("This is the OUTER callback function");

}, 2000);

console.log("This statement is AFTER before the function");