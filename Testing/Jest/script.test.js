const { sum } = require("./script");

test("It adds two numbers", () => {
    const a = 1;
    const b = 2;

    expect(sum(a, b)).toBe(3);
});
