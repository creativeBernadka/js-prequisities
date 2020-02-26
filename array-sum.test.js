const sumArray = require("./array-sum");

test("sum of [1,2,[3,4,[5]]] is 15", () => {
  expect(sumArray([1, 2, [3, 4, [5]]])).toBe(15);
});

test("sum of [1,2,3] is 6", () => {
  expect(sumArray([1, 2, 3])).toBe(6);
});
