const calculator = require('./calculator');

test('call calculator w/ 4,2', () => {
    expect(calculator(4,2)).toBe({
        add: 6,
        subtract: 2,
        multiply: 8,
        divide: 2
    });
});

test('call calculator w/ 4,0', () => {
    expect(calculator(4,0)).toBe({
        add: 4,
        subtract: 4,
        multiply: 0,
        divide: NaN
    });
});