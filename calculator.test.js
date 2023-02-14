const calculator = require('./calculator');

test('calculator: add 4 + 2 to be 6', () => {
    expect(calculator.add(4,2)).toBe(6);
});

test('calculator: subtract 4 - 2 to be 2', () => {
    expect(calculator.subtract(4,2)).toBe(2);
});

test('calculator: multiply 4 * 2 to be 8', () => {
    expect(calculator.multiply(4,2)).toBe(8);
});

test('calculator: divide 4 / 2 to be 2', () => {
    expect(calculator.divide(4,2)).toBe(2);
});

test('calculator: divide 4 / 0 to be Infinity', () => {
    expect(calculator.divide(4,0)).toBe(Infinity);
});