function foo() {
    let sum = 0;

    for(let i = 0; i < 1E+6; i++) {
        sum += i;
    }

    return sum;
}

console.time("Foo Timer");

console.log(foo());

console.timeEnd("Foo Timer");