class Polygon {
    constructor(side = 3, fill="blue") {
        this.side = side;
        this.fill = fill

        console.log(this.#id);
    }

    // This is a private property and only accessible within the current object
    #id = 10;

    get id(){
        return this.#id;
    }

    set id(value) {
        this.#id = value;
    }
}

const triangle1 = new Polygon();

// Private variable isn't directly accesible
// But we can access them if we implement getters and setters
console.log(triangle1.id);
triangle1.id = 20;
console.log(triangle1.id);



