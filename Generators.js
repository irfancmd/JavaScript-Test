// Generators are functions that can be exited and re-entered. Their context remains even after exiting
// the function

// "function*" keyword is used to declare generators. They use "yield" to return the current value. Using the
// "return" will end the generator

function* numberGenerator() {
    let value = 0;

    while(true) {
	yield value++;
    }
}

let gen1 = numberGenerator();

console.log(gen1.next().value);
console.log(gen1.next().value);
console.log(gen1.next().value);

console.log("**********");

function* powerGenerator(n) {
    for(let current=n;;current *= n) {
	if(current > 100) {
	    return;
	}

	yield current;
    }
}

let gen2 = powerGenerator(2);

let nextPower = gen2.next();

while(nextPower.done === false){
    console.log(nextPower.value);

    nextPower = gen2.next();
}


