/**
 * @param {Array<string>} A
 * @param {Array<string>} B
 * @return {Array<string>}
 */
const wordSubsets = (A, B) => {
  let output = [];

  A.forEach((wordA) => {
    let matchCount = 0;
    let letterCount = 0;

    B.forEach((testWord) => {
      letterCount += testWord.length;

      let charMatch = -1;

      for (let i = 0; i < testWord.length; i++) {
        let char = testWord[i];
        let index = wordA.indexOf(char, charMatch);

        if (index > -1) {
          charMatch = index + 1;
          matchCount++;
        }
      }
    });

    if (matchCount === letterCount) {
      output.push(wordA);
    }
  });

  return output;
};

module.exports = wordSubsets;
