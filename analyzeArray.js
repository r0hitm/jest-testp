// Array(Number) -> Object
// produces an object with the following properties: average, min, max, and length
const analyzeArray = (numbers) => {
    const average = numbers.reduce((a, b) => a + b, 0) / numbers.length;
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
    const length = numbers.length;
    return { average, min, max, length };
};
module.exports = analyzeArray;
