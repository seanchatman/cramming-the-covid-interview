/**
 * @param {Array<number>} arr
 * @param {number} k
 * @return {number}
 */
const { testWrapper } = require("../utils");

const countSubarrays = (arr, k) => {
  if (arr && arr.length < 2) return 0;

  let i = 0;
  let j = 1;

  let subArrCount = 0;

  while (i < arr.length) {
    j = i;
    let sum = 0;

    while (j < arr.length) {
      sum += arr[j];

      if (sum === k) {
        subArrCount++;
      }

      j++;
    }
    i++;
  }

  return subArrCount;
};

testWrapper({
  label: "countSubarrays",
  callback: countSubarrays,
  args: [[1, 0, -1, 1], 0],
  assertion: 4,
});

module.exports = countSubarrays;
