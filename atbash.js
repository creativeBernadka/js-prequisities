function convertToAtbash(originalString) {
  const originalArray = originalString.split("");
  const encryptedArray = originalArray.map(letter => {
    const distanceFromA = letter.charCodeAt(0) - "a".charCodeAt(0);
    const encryptedCode = "z".charCodeAt(0) - distanceFromA;
    return String.fromCharCode(encryptedCode);
  });
  return encryptedArray.join("");
}

module.exports = convertToAtbash;
