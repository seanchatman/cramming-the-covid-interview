/**
 * @param {Array<number>} elements
 * @param {number} k
 * @return {Array<number>}
 */
const kSmallestElements = (elements, k) => {
  return elements.sort((a, b) => a - b).splice(0, k);
};

module.exports = kSmallestElements;
