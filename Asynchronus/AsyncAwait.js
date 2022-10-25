function returnAfterAWhile(val, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(val);
        }, time);
    });
}

function returnAfter1Sec(val) {
    return returnAfterAWhile(val, 1000);
}

function returnAfter2Sec(val) {
    return returnAfterAWhile(val, 2000);
}

// 'await' must be put within an 'async' function. Any statement marked with
// await will pause the execution of its surrounding async funtion
async function foo() {
   console.log("This will be printed immediately.");

   // Any line after the await statement will not be executed until the awit's
   // promise is resolved
   let val = await returnAfter2Sec("This will be printed after 2 seconds");
   console.log(val);

   console.log("Finally, this will be printed.");
}

// foo();

// await is not a complete alternative to chaining .then() of promise. 
// .then()'s execution is concurrent whereas await will put the entire
// execution of the async funtion on hold

// Example with then
function thenExample() {
    // In this case, both of the times will start immediately
    returnAfter2Sec("This takes 2 second to complete.")
                        .then(message => console.log(message));

    returnAfter1Sec("This takes 1 second to complete.")
                        .then(message => console.log(message));
}

// thenExample();

// Example with await
async function awaitExample() {
    let timerResult1 =
        await returnAfter2Sec("This takes 2 second to complete.");

    // Here, this second timer will only start after the first one is done
    let timerResult2 = 
        await returnAfter1Sec("This takes 1 second to complete.");

    console.log(timerResult1);
    console.log(timerResult2);
}

// awaitExample();

// However we can use await for concurrent purpose by the following method
async function awaitConcurrentExample() {
    // We're not putting await before creating the promises. So, the timers
    // will start immediately
    let timerResult1 = returnAfter2Sec("This takes 2 second to complete.");

    let timerResult2 = returnAfter1Sec("This takes 1 second to complete.");

    // Instead, these print statemets will wait until the respective timer is
    // done and the data of the result variable becomes available
    console.log(await timerResult1);
    console.log(await timerResult2);
}

awaitConcurrentExample();