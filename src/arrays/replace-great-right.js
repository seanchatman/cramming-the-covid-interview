const { testWrapper } = require("../utils");

/**
 * @param {number[]} arr
 * @return {number[]}
 */
const replaceElements = function (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let curr = arr[i];
    let greatest = curr;

    let j = i;
    while (j < arr.length) {
      if (arr[j] > greatest) {
        greatest = arr[j];
      }
      j++;
    }

    if (greatest !== curr) {
      arr[i] = greatest;
    }
  }

  arr.shift();
  arr[arr.length] = -1;

  return arr;
};

module.exports = () => {
  testWrapper({
    label: "replaceElements",
    callback: replaceElements,
    args: [[57010, 40840, 69871, 14425, 70605]],
    assertion: [18, 6, 6, 6, 1, -1],
  });
};
