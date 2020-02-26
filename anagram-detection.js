function detectAnagrams(basicString, searchedAnagram) {
  let anagramsNumber = 0;
  const basic = basicString.split("");
  const anagramLength = searchedAnagram.length;
  const sortedSearch = searchedAnagram
    .split("")
    .sort()
    .join("");

  basic.forEach((_, index) => {
    if (index + anagramLength <= basicString.length) {
      const stringPart = basicString
        .split("")
        .slice(index, index + anagramLength);
      const sortedPart = stringPart.sort().join("");
      if (sortedPart === sortedSearch) {
        anagramsNumber += 1;
      }
    }
  });

  return anagramsNumber;
}

module.exports = detectAnagrams;
