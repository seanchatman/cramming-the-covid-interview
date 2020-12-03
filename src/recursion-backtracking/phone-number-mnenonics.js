/**
 * @param {string} digits
 * @return {Array<string>}
 */
const { testWrapper } = require("../utils");

const keypad = {
  0: "",
  1: "",
  2: "abc".split(""),
  3: "def".split(""),
  4: "ghi".split(""),
  5: "jkl".split(""),
  6: "mno".split(""),
  7: "pqrs".split(""),
  8: "tuv".split(""),
  9: "wxyz".split(""),
};

const letterCombinations = (digits) => {
  let output = [];

  getCombinations(0, "", digits, output);

  return output;
};

const getCombinations = (index, acc, digits, output) => {
  if (index === digits.length) {
    console.log(`acc`, acc);
    output.push(acc);
    return;
  }

  const char = digits[index];
  const letters = keypad[char];

  for (let i = 0; i < letters.length; i++) {
    let letter = letters[i];

    acc += letter;

    getCombinations(index + 1, acc, digits, output);

    acc = acc.substring(0, acc.length - 1);
  }
};

module.exports = () => {
  testWrapper({
    label: "letterCombinations",
    callback: letterCombinations,
    args: ["43"],
    assertion: ["g", "h", "i"],
  });
};
