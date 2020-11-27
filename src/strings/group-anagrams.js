/**
 * @param {Array<string>} words
 * @return {Array<Array<string>>}
 */
const groupAnagrams = (words) => {
  let sortedWords = [];

  for (let i = 0; i < words.length; i++) {
    sortedWords[i] = words[i].split("").sort().join("");
  }

  const wordMap = new Map();

  for (let i = 0; i < words.length; i++) {
    if (!wordMap.has(sortedWords[i])) {
      wordMap.set(sortedWords[i], [words[i]]);
    } else {
      wordMap.get(sortedWords[i]).push(words[i]);
    }
  }

  let output = [];

  wordMap.forEach((value) => output.push(value));

  return output;
};

module.exports = groupAnagrams;
