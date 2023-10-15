const capitalize = require("./capitalize");
const reverseString = require("./reverseString")
const caesarCipher = require("./caesarCipher")
const calculator = require("./calculator")
test("Takes a string and returns it with the first character capitalized", () => {
    expect(capitalize("hello")).toBe("Hello");
})
test("Takes a string and returns it reversed", ()=> {
    expect(reverseString("world")).toBe("dlrow");
})
test("Take two numbers and return the correct calculation", () => {
    expect(calculator.add(12, 2)).toBe(14);
    expect(calculator.subtract(12, 2)).toBe(10);
    expect(calculator.multiply(12, 2)).toBe(24);
    expect(calculator.divide(12, 2)).toBe(6);
})
test("takes a string and a shift factor and returns it with each character “shifted”", () => {
    expect(caesarCipher("Cipher", 2)).toBe("Ekrjgt");
    expect(caesarCipher("ZipzaP", 6)).toBe("FovfgV");
    expect(caesarCipher("!@#$%^&*()", 10)).toBe("+J-./h0423");
})