// 'this' keyword refers to the current context. Its value can be
// different based on different scenarios

// In a global function, its value will be the window object

function globalFunc() {
    console.log(this);
}

globalFunc();

// In a function called by an event listener, its value will
// be the DOM elemnet which invoked the event

let btn1 = document.getElementById("btn1");

btn1.addEventListener("click", function() {
    console.log(this);
});

// In a function of an object. Its value will be the object itself

let person = {
    foo: function() {
	console.log(this);
    }
};

person.foo();
