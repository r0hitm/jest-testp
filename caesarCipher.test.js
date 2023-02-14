const caesarCipher = require('./caesarCipher');

test('caesarCipher abc with shift 1 to bcd', () => {
    expect(caesarCipher('abc', 1)).toBe('bcd');
});

test('caesarCipher aBc with shift 2 to cDe', () => {
    expect(caesarCipher('abc', 2)).toBe('cde');
});

test('caesarCipher "Hello, World 23!" with shift 5 to "Mjqqt, Btwqi 23!"', () => {
    expect(caesarCipher('Hello, World 23!', 5)).toBe('Mjqqt, Btwqi 23!');
});

test('caesarCipher "Hello, World 23!" with shift -5 to "Czggj, Rjmgy 23!"', () => {
    expect(caesarCipher('Hello, World 23!', -5)).toBe('Czggj, Rjmgy 23!');
});
