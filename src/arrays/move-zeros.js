const { testWrapper } = require("../utils");

/**
 *
 **/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
  const zeroIndexes = {};

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zeroIndexes[i] = 0;
    }
  }

  let offset = 0;

  for (const zeroIndex in zeroIndexes) {
    nums.splice(parseInt(zeroIndex) - offset, 1);
    nums[nums.length] = 0;
    offset++;
  }

  console.log(`zeros`, zeroIndexes);
  return nums;
};

module.exports = () => {
  testWrapper({
    label: "moveZeroes",
    callback: moveZeroes,
    args: [[0, 1, 0, 3, 12]],
    assertion: [1, 3, 12, 0, 0],
  });
};
