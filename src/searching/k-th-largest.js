/**
 * @param {Array<number>} arr
 * @param {number} k
 * @return {number}
 */
const kthLargest = (arr, k) => {
  return arr.sort((a, b) => {
    return a < b ? 1 : -1;
  })[k - 1];

  // return arr;
};

module.exports = kthLargest;
