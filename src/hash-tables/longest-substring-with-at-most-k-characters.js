const longestSubstringWithAtMostKDistinctCharacters = (str, k) => {
  let longestSubstring = 0;
  let subLength = 0;

  for (let i = 0; i < str.length - 1; i++) {
    let j = i;
    let chars = new Map();
    subLength = 0;

    while (j < str.length) {
      let char2 = str[j];

      if (chars.size <= k) {
        if (chars.has(char2)) {
          chars.set(char2, chars.get(char2) + 1);
          subLength++;
        } else if (chars.size < k) {
          chars.set(char2, 1);
          subLength++;
        }
      }

      if (subLength > longestSubstring) longestSubstring = subLength;

      j++;
    }
    // console.log(
    //   `\nsrc/longest-substring-with-at-most-k-characters.js: \n`,
    //   "chars",
    //   chars,
    //   "subLength",
    //   subLength
    // );

    chars.clear();
  }

  return longestSubstring;
};

module.exports = longestSubstringWithAtMostKDistinctCharacters;
