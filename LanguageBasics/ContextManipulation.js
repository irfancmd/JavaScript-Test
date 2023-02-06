// Javascript provides several built-in functions that allows
// us to manipulate contexts

function printInfo(name, age) {
    console.log("***************");
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(this);
    console.log("***************");
}

// The call function

printInfo.call("MyContext", "Akkas Ali", 25);

// The apply funciton is like call function. The only difference
// is that it takes the functions parementers as a list

let args = ["Abdul Kuddus", 29];

printInfo.apply("AnotherContext", args);

// The bind function doesn't call the funciton imemdiately unlike
// the call and apply funciton. Instead, it rerurns a modified
// version of the function

let modifiedPrintInfo = printInfo.bind("NewContext");

modifiedPrintInfo("Abudl Motin", 28);
