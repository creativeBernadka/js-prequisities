function sumArray(arrayToSum) {
  return arrayToSum.reduce((sum, currentElement) => {
    if (typeof currentElement === "number") {
      return sum + currentElement;
    }
    return sum + sumArray(currentElement);
  }, 0);
}

module.exports = sumArray;
