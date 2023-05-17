var circle = {
  r: 10,
  getArea: function () {
    return Math.PI * Math.pow(this.r, 2);
  },
};

// This works when we do object.method() call
// console.log(circle.getArea());

// But if we try call the method from any other reference, it won't work
// because "this" context will be changed
var foo = circle.getArea;
// console.log(foo());

// This is how classes were created in legacy JavaScript
function Shape(color) {
  this.color = color;

  this.printColor = function () {
    console.log("The color of the shape is", this.color);
  };
}

// Now let's create objects of the shape class
// Note that this will fail because "this" context is undefined in that object
// This is because when we create a legacy object by calling it's constructor function,
// the "this" context inside that function refers to the global context just like it
// happens for all function in general.
var shape1 = Shape("Blue");
// shape1.printColor();

// If we want the constructor function to behave differently from regular functions,
// we have to call the function with the "new" keyword. This will make
// the "this" context of the constructor function refer to the
var shape1 = new Shape("Blue");
shape1.printColor();
