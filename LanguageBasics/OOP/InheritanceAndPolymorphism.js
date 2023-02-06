class Shape {
    constructor(backgroundColor, outlineColor) {
	this.backgroundColor = backgroundColor;
	this.outlineColor = outlineColor;
    }

    printInfo() {
	console.log(`Background color: ${this.backgroundColor}`);
	console.log(`Outline color: ${this.outlineColor}`);
    }
}

class Square extends Shape {
    constructor(backgroundColor, outlineColor, length) {
	super(backgroundColor, outlineColor);

	this.length = length;
    }

    // Overriding function
    printInfo() {
	console.log(`Background color: ${this.backgroundColor}`);
	console.log(`Outline color: ${this.outlineColor}`);
	console.log(`Length: ${this.length}`);
    }
}

let s1 = new Square("Blue", "Black", 10);
s1.printInfo();

console.log("**********");

function printShape(shape) {
    shape.printInfo();
}

let s2 = new Shape("Green", "Black");
printShape(s1);
printShape(s2);
