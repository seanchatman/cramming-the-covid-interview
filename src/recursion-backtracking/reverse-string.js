// https://leetcode.com/explore/learn/card/recursion-i/250/principle-of-recursion/1680/

const { testWrapper } = require("../utils");

/**
 * @param {string[]} s
 */
const reverseString = function (s) {
  return rec(0, s);
};

const rec = (i, s) => {
  if (i >= s.length / 2) return s;

  const temp = s[i];
  s[i] = s[s.length - 1 - i];
  s[s.length - 1 - i] = temp;

  return rec(i + 1, s);
};

module.exports = () => {
  testWrapper({
    label: "reverseString",
    callback: reverseString,
    args: [["h", "e", "l", "l", "o"]],
    assertion: ["h", "a", "n", "n", "a", "H"],
  });
};
