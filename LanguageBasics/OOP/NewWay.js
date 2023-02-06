// Since ES2015, the creation process of classes have become similar to most
// other OOP languages because of newly introduced keywords. However, behind the
// scenes, the engine will convert it to the old way so it's necessary to learn that
// as well

// Note that there's no need to use the 'function' keyword inside classes
class Person {
    // Static property
    static COMMON_ID = 15;

    // We can use getter functions to bind functions to a property
    get nationality() {
	return "Bangladeshi";
    }

    constructor(name, email) {
	this.name = name;
	this.email = email;
    }
    
    sayHi() {
	console.log(`Hi, I'm ${this.name} and my email is ${this.email}`);
    }

    // Static method
    static doCommonThing() {
	console.log("This is a common thing");
    }
}

let p1 = new Person("Akkas Ali", "akkasali@gmail.com");
let p2 = new Person("Abdul Kuddus", "abdulkuddus@gmail.com");

p1.sayHi();
p2.sayHi();

console.log(Person.COMMON_ID);
Person.doCommonThing();

console.log(p1.nationality);
