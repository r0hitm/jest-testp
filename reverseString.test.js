const reverseString = require('./reverseString');

test('reverseString abc to cba', () => {
    expect(reverseString('abc')).toBe('cba');
});

test('reverseString 123 to 321', () => {
    expect(reverseString('123')).toBe('321');
});

test('reverseString empty string to empty string', () => {
    expect(reverseString('')).toBe('');
});

test('reverseString "Hello World" to "dlroW olleH"', () => {
    expect(reverseString('Hello World')).toBe('dlroW olleH');
});