const checkIfBalanced = require("./balanced-brackets");

test("checks that the brackets are balanced", () => {
  expect(checkIfBalanced("()[]{}(([])){[()][]}")).toBe(true);
});

test("checks that the brackets are not balanced", () => {
  expect(checkIfBalanced("())[]{}")).toBe(false);
  expect(checkIfBalanced("[(])")).toBe(false);
});
