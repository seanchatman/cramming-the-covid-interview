const { testWrapper } = require("../utils");

/**
 *
 **/
const isSymmetric = function () {
  return;
};

const checkRoot = (root) => {
  if (root === null) {
    return true;
  }
  return checkNodes(root.left, root.right);
};

const checkNodes = (left, right) => {
  if (left === null && right === null) {
    return true;
  }

  if (left !== null && right !== null) {
    return (
      left.value === right.value &&
      checkNodes(left.right, right.left) &&
      checkNodes()
    );
  }
};

module.exports = () => {
  testWrapper({
    label: "isSymmetric",
    callback: isSymmetric,
    args: [],
    assertion: [],
  });
};
