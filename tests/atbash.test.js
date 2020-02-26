const convertToAtbash = require("../katas/atbash");

test("'irk' in atbash is 'rip'", () => {
  expect(convertToAtbash("irk")).toBe("rip");
});

test("'low' in atbash is 'old'", () => {
  expect(convertToAtbash("low")).toBe("old");
});

test("'hold' in atbash is 'slow'", () => {
  expect(convertToAtbash("hold")).toBe("slow");
});

test("'grog' in atbash is 'tilt'", () => {
  expect(convertToAtbash("grog")).toBe("tilt");
});

test("'wizard' in atbash is 'draziw'", () => {
  expect(convertToAtbash("wizard")).toBe("draziw");
});
