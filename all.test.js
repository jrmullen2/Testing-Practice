const capitalize = require("./capitalize");
const reverseString = require("./reverseString")
const calculator = require("./calculator")
const caesarCipher = require("./caesarCipher")
const analyzeArray = require("./analyzeArray.js")
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
test("Takes a string and a shift factor and returns it with each character “shifted”", () => {
    expect(caesarCipher("Cipher", 2)).toBe("Ekrjgt");
    expect(caesarCipher("ZipzaP", 6)).toBe("FovfgV");
    expect(caesarCipher("!@#$%^&*()", 10)).toBe("+J-./h0423");
})
test("Takes an array of numbers and returns an object with the following properties: average, min, max, and length.", () => {
    expect(analyzeArray([1,2,3,4,5,6,7,8,9,10]).average).toBe(5.5);
    expect(analyzeArray([1,2,3,4,5,6,7,8,9,10]).min).toBe(1);
    expect(analyzeArray([1,2,3,4,5,6,7,8,9,10]).max).toBe(10);
    expect(analyzeArray([1,2,3,4,5,6,7,8,9,10]).length).toBe(10);
})