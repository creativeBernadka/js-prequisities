function createStringsFromPairs(arrayOfPairs) {
  return arrayOfPairs.map(pair => `(${pair[0]}, ${pair[1]})`);
}
function findSumTuples(sum, arrayOfNumbers) {
  const pairs = [];
  while (arrayOfNumbers.length > 0) {
    const firstNumber = arrayOfNumbers.pop();
    let secondNumber;
    arrayOfNumbers.some((number, index) => {
      if (firstNumber + number === sum && firstNumber != number) {
        secondNumber = arrayOfNumbers.splice(index, 1)[0];
        return true;
      }
      return false;
    });
    if (secondNumber) {
      const newPair = [firstNumber, secondNumber].sort();
      const duplicatePair = pairs.filter(
        pair => pair.join("") === newPair.join("")
      );
      if (duplicatePair.length === 0) {
        pairs.push(newPair);
      }
    }
  }
  return pairs;
}

function findSumPairs(sum, arrayOfNumbers) {
  return createStringsFromPairs(findSumTuples(sum, arrayOfNumbers));
}

module.exports = {
  createStringsFromPairs,
  findSumPairs,
  findSumTuples
};
