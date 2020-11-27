/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = (s) => {
  let chars = new Map();

  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    if (chars.has(char)) {
      chars.set(char, chars.get(char) + 1);
    } else {
      chars.set(char, 1);
    }
  }

  console.log(`\nsrc/strings/large-pali.js: \n`, chars);

  return s.length;
};

module.exports = longestPalindrome;
