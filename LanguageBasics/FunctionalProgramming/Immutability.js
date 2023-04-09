/*
    In JavaScript, constant only makes object references immutable. The contents of the objects and nested
    objects of a constant object can be modified as usual. To prevent this, we can use Object.freeze method.
    This method works in a "shallow" manner. So, we have to apply this for every nested objects of alongside
    the object itself
*/

// We can freeze an object like this
const akkas = Object.freeze({
    name: "Akkas Ali",
    friends: Object.freeze(["Kuddus", "Rahim", "Matin"])
});

console.log(akkas);

// Now, if we try to modify the object, the changes won't take effect
akkas.name = "Abdul";
console.log(akkas);

console.log("*****");

// Deep freezing object manually can be annoying if we have lots of properties. So, we can use a function like
// this to do this automatically
function deepFreeze(obj) {
    Object.values(obj).forEach(value => {
        if(value && typeof value === "object") {
            deepFreeze(value);
        }
    });

    return Object.freeze(obj);
}

// To lest this, let's create a normal object
const akkas2 = {
    name: "Akkas Ali",
    friends: ["Kuddus", "Rahim", "Matin"]
}

deepFreeze(akkas2);

console.log(akkas2);

// Now the object is immutable
akkas2.name = "Abdul";
akkas2.friends[1] = "Ali";
console.log(akkas2);
