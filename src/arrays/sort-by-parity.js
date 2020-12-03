const { testWrapper } = require("../utils");

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function (A) {
  let i = 0;
  while (i < A.length) {
    let curr = A[i];

    if (curr % 2 === 0) {
      A.unshift(A.splice(i, 1)[0]);
    }

    i++;
  }
  return A;
};

module.exports = () => {
  testWrapper({
    label: "sortArrayByParity",
    callback: sortArrayByParity,
    args: [[3, 1, 2, 4]],
    assertion: [],
  });
};
