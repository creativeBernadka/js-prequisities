const {
  findSumPairs,
  findSumTuples,
  createStringsFromPairs
} = require("./array-pair-sum");

test("array of tuples is now array of strings", () => {
  expect(
    createStringsFromPairs([
      [1, 2],
      [3, 4]
    ])
  ).toStrictEqual(["(1, 2)", "(3, 4)"]);
});

test("[3, 7], [4, 6] tuples of sum 10 from array [3, 4, 5, 6, 7] are found", () => {
  expect(findSumTuples(10, [3, 4, 5, 6, 7])).toStrictEqual([
    [3, 7],
    [4, 6]
  ]);
});

test("[3, 5] tuples of sum 8 from array [3, 4, 5, 4, 4] are found", () => {
  expect(findSumTuples(8, [3, 4, 5, 4, 4])).toStrictEqual([[3, 5]]);
});

test("recived tuples are pairs of distinct numbers", () => {
  expect(findSumTuples(8, [4, 4, 3, 7])).toStrictEqual([]);
});

test("received tuple has smaller number on the left", () => {
  expect(findSumTuples(7, [4, 1, 3, 2, 6, 3])).toStrictEqual([
    [3, 4],
    [1, 6]
  ]);
});

test("array of strings of pairs of numbers of sum 8 is received from arrray [3, 4, 5, 4, 4]", () => {
  expect(findSumPairs(8, [3, 4, 5, 4, 4])).toStrictEqual(["(3, 5)"]);
});
