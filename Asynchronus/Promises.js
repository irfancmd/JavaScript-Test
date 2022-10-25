let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
       resolve("Success!"); 
    }, 2000);
});

myPromise.then((success) => {
    console.log("The operation was successful with the message : " + success);
}, (error) => {
    console.log("Error: " + error);
}).catch((error) => {
    // This will be called only when there is a problem while handling
    // the onFulfilled and onRejected functions
    console.log("An error occurred while handling the promise: " + error);
});

let mySecondPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
       resolve("Another Success!"); 
    }, 1000);
});

// We can do single action based on the result of multiple promises by this
Promise.all([myPromise, mySecondPromise]).then((messages) => {
    console.log("Testing Promise.all()")
    console.log("Both promises were handled successfully.");
    console.log("Promise1 message: " + messages[0]);
    console.log("Promise2 message: " + messages[1]);
}, (errors) => {
    console.log("Promise1 error: " + errors[0]);
    console.log("Promise2 error: " + errors[1]);
})

// We can only cosider the output from the promise that fulfills or throws
// error in the following way when we're dealing with multiple promises
Promise.race([myPromise, mySecondPromise]).then((message) => {
    console.log("Testing Promise.race()")
    console.log(message);
}, (error) => {
    console.log(errors);
})