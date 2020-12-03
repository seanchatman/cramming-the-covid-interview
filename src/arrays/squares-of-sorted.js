const { testWrapper } = require("../utils");

/**
 * @param {number[]} A
 * @return {number[]}
 */
const sortedSquares = function (A) {
  let squares = A.map((value) => value * value);

  return squares.sort((a, b) => {
    if (a > b) {
      return 1;
    } else if (b > a) {
      return -1;
    } else {
      return 0;
    }
  });
};

module.exports = () => {
  testWrapper({
    label: "sortedSquares",
    callback: sortedSquares,
    args: [],
    assertion: [],
  });
};
