const capitalize = require("./capitalize");

test("capitalize abc to Abc", () => {
    expect(capitalize("abc")).toBe("Abc");
});

test("capitalize 123 to 123", () => {
    expect(capitalize("123")).toBe("123");
});

test("capitalize empty string to empty string", () => {
    expect(capitalize("")).toBe("");
});
