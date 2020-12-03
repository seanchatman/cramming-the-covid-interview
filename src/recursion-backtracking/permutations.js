/**
 * @param {Array<number>} originalArray
 * @return {Array<Array<number>>}
 */
const { testWrapper } = require("../utils");
const permute = (originalArray) => {
  const output = [];

  for (let i = 0; i < originalArray.length; i++) {}

  const gen = (i, chars) => {
    const char = chars[i];
  };

  return output;
};

module.exports = () => {
  testWrapper({
    label: "permute",
    callback: permute,
    args: [[1, 2, 3]],
    assertion: [
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1],
    ],
  });
};
