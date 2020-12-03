/**
 * @param {number[]} arr
 * @return {boolean}
 */
const { testWrapper } = require("../utils");
const validMountainArray = function (arr) {
  if (arr.length < 3) {
    return false;
  }

  let start = arr[0];
  let end = arr[arr.length - 1];
  let top = arr[0];
  let bottom = arr[0];

  let asc = false;
  let desc = false;

  for (let i = 0; i < arr.length - 1; i++) {
    const curr = arr[i];
    const next = arr[i + 1];

    if (next > curr) {
      asc = true;
      top = next;
    }

    if (curr === next) {
      return false;
    }

    if (next < curr) {
      asc = false;
      desc = true;
      bottom = next;
    }

    if (desc && next > curr) {
      return false;
    }
  }

  if (top === arr[0]) return false;

  return true;
};

module.exports = () => {
  testWrapper({
    label: "validMountainArray",
    callback: validMountainArray,
    args: [[1, 0, 1, 4, 3, 2, 1, 0]],
    assertion: true,
  });
};
