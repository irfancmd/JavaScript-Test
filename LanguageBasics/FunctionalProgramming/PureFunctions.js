/*
Pure functions are function that don't have any side effects. For any given input to a pure function,
we will always get the SAME output. So, they act like mathematical functions

For a function to be regarded as "pure", it must have the following characteristics:
    1. They will only reply on their input. They won't utilize variables outside the function body however,
    they may utilize global constants
    2. For any given input, they will always produce the same output. So they don't have any unpredictable
    behaviour. That means using any random characteristic or random number genreator is not allowed in a
    pure function.
    3. They don't have any side-effects. Calling them won't make any external entity to change. In that sense,
    activities like calling api, writing to file etc. is not allowed in a pure function
*/

const akkas = {
    name: "Akkas Ali",
    friends: ["Kuddus", "Rahim", "Matin"]
}

// The following is a demonstration of a pure function

function addFriend(person, friend) {
    return { ...person, friends: [ ...person.friends, friend ] }
}

console.log(addFriend(akkas, "Karim"));

// We can see that the original object is not modified
console.log("*****")
console.log(akkas);
console.log("*****")

// If we call the "addFriend" pure function multiple times, we will always get the same output
console.log(addFriend(akkas, "Karim"));
console.log(addFriend(akkas, "Karim"));
console.log(addFriend(akkas, "Karim"));
