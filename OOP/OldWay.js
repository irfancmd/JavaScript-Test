// Before ES2015, we had to use pseudo classes in order to do object
// oriented programming

// In pseudo-classes, we had to a function which would act as a class from which
// objects can be created. This was possible as in javascript, everyting is an
// object including functions

// The following function cretes a person class
function Person(name, email) {
    // Bind property to the object
    this.name = name;
    this.email = email;
}

// In order to add class properties and methods, (static methods), we had to rely in object prototype.
// A prototype is such an object that lives inside all the objects created from a certain class
// and contains all the class properties/methods
Person.prototype.COMMON_ID = 15;

Person.prototype.sayHi = function() {
    console.log(`Hi, I'm ${this.name} and my email is ${this.email}`);
}

// Now let's create some objects of the Person class

// The "new" keyword calls the function in such a special way that a new object is created and returned
let p1 = new Person("Akkas Ali", "akkasali@gmail.com");
let p2 = new Person("Abdul Kuddus", "abdulkuddus@gmail.com");

// The stuff left side of the dot will become 'this'
p1.sayHi();
p2.sayHi();

console.log(p1.COMMON_ID);
console.log(p2.COMMON_ID);

Person.prototype.COMMON_ID = 20;

console.log(p1.COMMON_ID);
console.log(p2.COMMON_ID);

