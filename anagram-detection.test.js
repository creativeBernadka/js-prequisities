const detectAnagrams = require("./anagram-detection");

test("in 'AdnBndAndBdaBn' there are 4 anagrams of 'dAn'", () => {
  expect(detectAnagrams("AdnBndAndBdaBn", "dAn")).toBe(4);
});

test("in 'AbrAcadAbRa' there are 2 anagrams of 'cAda'", () => {
  expect(detectAnagrams("AbrAcadAbRa", "cAda")).toBe(2);
});
