let addSquareBtn = document.getElementById("addSquareBtn");
let containerDiv = document.getElementById("container");

function randRange(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}

class Square {
    constructor(x, y, size) {
	this.squareDiv = document.createElement("div");
	this.squareDiv.className = "square";

	this.squareDiv.style.top = `${y}px`;
	this.squareDiv.style.left = `${x}px`;
	this.squareDiv.style.backgroundColor = this.getRandomColor();
	this.squareDiv.style.width = `${size}px`;
	this.squareDiv.style.height = `${size}px`;

	this.squareDiv.addEventListener("click", () => {
	    this.squareDiv.style.backgroundColor = this.getRandomColor();
	});
    }

    getRandomColor() {
	return `rgb(${randRange(0, 255)}, ${randRange(0, 255)}, ${randRange(0, 255)})`;
    }

    get element() {
	return this.squareDiv;
    }

}

addSquareBtn.addEventListener("click", function() {
    // console.log("test");
    let square = new Square(randRange(50, 700), randRange(50, 700), randRange(50, 200));

    containerDiv.appendChild(square.element);
});
