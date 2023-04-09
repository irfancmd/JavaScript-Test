const { sum, getMax } = require("./script");

describe("#sum", () => {
    test("It adds two numbers", () => {
        const a = 1;
        const b = 2;

        // toBe() checks for same reference. toEqual() checks for same value
        expect(sum(a, b)).toBe(3);
    })
});

describe("#getMax", () => {
    test("It returns the maximum value of an array", () => {
        const arr = [1, 3, 7, 4, 5];

        expect(getMax(arr)).toBe(7);
    })

    test("It checks whether getMax returns null for empty array", () => {
            const arr = [];

            expect(getMax(arr)).toBeNull();
    })
});

