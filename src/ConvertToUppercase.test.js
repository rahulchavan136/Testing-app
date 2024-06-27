
import convertToUppercase from "./ConvertToUppercase";

 
test("uppercase check for inputs", () => {
  expect(convertToUppercase("HELLO")).toBe("HELLO");
  expect(convertToUppercase("hElLO")).toBe("HELLO");
  expect(convertToUppercase(123)).toBe(false);
  expect(convertToUppercase(true)).toBe(false);
  expect(convertToUppercase(false)).toBe(false);
});