// Template literals
let num = 19;
console.log(`The number is ${num}`);

console.log("****************")

// Default function parameters
function foo(number = 19) {
    console.log(number * 5);
}

foo();
foo(49);

console.log("****************")

// Arrow functions and 'this'
// Arrow functions don't have their own 'this' context and so they
// borrow it from their surroundings

class Animal {
    constructor() {
        this.age = 0;
    }

    // This will not work because the standad function has its own 'this'
    // context and so here 'this' will not refer to the animal object
    // growUp() {
    //     setInterval(function() {
    //         this.age++;
    //         console.log(`Current age is: ${this.age}.`);
    //     }, 1000);
    // }

    // So, if we want to use a standard function, we have to bind the 'this'
    // context that we want to that particular funciton
    // growUp() {
    //     setInterval(function() {
    //         this.age++;
    //         console.log(`Current age is: ${this.age}.`);
    //     }.bind(this), 1000);
    // }

    // However, if we use an arrow function, we don't have to worry about
    // that as arrow functions borrow 'this' context from their surrounding
    growUp() {
        setInterval(() => {
            this.age++;
            console.log(`Current age is: ${this.age}.`);
        }, 1000);
    }
}

//let animal1 = new Animal();
//animal1.growUp();

console.log("****************")

// Spead syntax
// The spead syntax is used to extract items from a collection
let someNumbers = [4, 5, 6];
let moreNumbers = [1, 2, 3, ...someNumbers, 7, 8, 9];

console.log(moreNumbers);

console.log("****************")

// Rest parameter
// This is similar to variable argument or vararg funcitons of
// other languages
function sumAll(...numbers) {
    let sum = 0;

    for(let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum;
}

console.log(sumAll(1, 2, 3, 4, 5));

console.log("****************")

// Object Property Shothand
let fullName = "Tom Roberts";
let email = "tom@email.com";

// If we wanted to keep the same name for an object property and variable,
// we had to do this
// let tom = {
//     fullName : fullName,
//     email : email
// };

// But with object proeprty shorthand, we can simply do this instead
let tom = {
    fullName,
    email
};

console.log(tom);

console.log("****************")

// Destucturing assignment
// This is the process of easily extracting elements from collections or
// objects and assigning them to something else

// For arrays
let arr1 = [1, 2, 3];

// Notice that we an skip elements by using blank space in their place
let [firstElementArr1, ,thirdElememtArr1] = arr1;
console.log(firstElementArr1);
console.log(thirdElememtArr1);

// For objects
let obj1 = {obj1Name: "Mike", obj1Email: "mike@email.com", obj1Age: 32};

// Notice that it uses curly braces for syntax
let {obj1Name, obj1Email} = obj1;
console.log(obj1Name);
console.log(obj1Email);