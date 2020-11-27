/**
 * @param {string} s
 * @return {number}
 */
const longestUniqueCharacterSubstring = (str) => {
  let charMap = new Map();
  let output = 0;
  let uniqueCount = 0;

  str.forEach((char, i) => {
    charMap.clear();
    uniqueCount = 0;

    for (let j = i; j < str.length; j++) {
      if (charMap.has(str[j])) {
        break;
      } else {
        charMap.set(str[j], j);
        uniqueCount++;
        if (uniqueCount > output) output = uniqueCount;
      }
    }
  });

  return output;
};

module.exports = longestUniqueCharacterSubstring;
