// Let's say we have a random object
const alex = {
    name: "Alex",
    age: 25,
    address:"123 Park Street"
}

// If we try to access a nested object property of that object that doesn't exist, we'll get an error
// The following code will throw an error
// console.log(alex.biomarkers.hairColor);

// We typically would use if condition for avoiding such errors. But instead, we can use Optional Chaining
// If a property if undefined, it will not look further and return undefined
console.log(alex?.biomarkers?.hairColor);

// It also works with object functions
// Notice the place of the '?'
console.log(alex.hoopla?.())

// It works with collection properties as well
console.log(alex.biomarkers?.[1]);