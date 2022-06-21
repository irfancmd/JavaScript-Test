// 'this' keyword refers to the current context. Its value can be
// different based on different scenarios

// In a global function, its value will be the window object

function globalFunc() {
    console.log(this);
}

// In a function called by an event listener, its value will be
// the dom element where the event is invoked
let btn1 = document.getElementById("btn1");

btn1.addEventListener("click", function () {
    console.log(this);
});

globalFunc();
