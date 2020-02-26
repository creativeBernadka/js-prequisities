function checkIfBalanced(bracketString) {
  const brackets = bracketString.split("");
  const openBrackets = [];
  brackets.forEach((char, index) => {
    if (index === 0) {
      openBrackets.push(char);
    } else {
      const lastCharCode = openBrackets.slice(-1)[0]
        ? openBrackets.slice(-1)[0].charCodeAt(0)
        : 0;
      const charDifference = char.charCodeAt(0) - lastCharCode;
      if (charDifference <= 2 && charDifference > 0) {
        openBrackets.pop();
      } else {
        openBrackets.push(char);
      }
    }
  });
  return openBrackets.length === 0;
}

module.exports = checkIfBalanced;
