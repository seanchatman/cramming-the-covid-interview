/**
 * @param {Array<string>} prefixes
 * @param {string} sentence
 * @return {string}
 */
const replaceWordsWithPrefix = (prefixes, sentence) => {
  let prefixedSentence = "";
  let j = 0;

  for (let i = 0; i < sentence.length - 1; i++) {
    j = i;

    while (sentence[j] !== " " && sentence[j]) {
      j++;
    }

    prefixedSentence += prefixWord(sentence.substring(i, j), prefixes) + " ";

    i = j;
  }

  return prefixedSentence.trim();
};

const prefixWord = (word, prefixes) => {
  for (let i = 0; i < prefixes.length - 1; i++) {
    let j = 0;

    do {
      if (word[j] !== prefixes[i][j]) break;

      console.log(word, prefixes[i][j], word[j] === prefixes[i][j]);

      j++;
    } while (word[j] === prefixes[i][j]);

    if (j === prefixes[i].length) {
      console.log(prefixes[i]);
      return prefixes[i];
    }
  }

  return word;
};

module.exports = replaceWordsWithPrefix;
