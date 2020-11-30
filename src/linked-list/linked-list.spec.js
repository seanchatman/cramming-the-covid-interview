const { testWrapper } = require("../utils");
const { LinkedListUtils, ListNode } = require("./linked-list");

module.exports = () => {
  testWrapper({
    label: "static fromValues",
    callback: (args) => {
      return LinkedListUtils.fromValues(args);
    },
    args: [[1, 2, 3]],
    assertion: new ListNode(1, new ListNode(2, new ListNode(3))),
  });

  testWrapper({
    label: "static fromValues",
    callback: (args) => {
      return LinkedListUtils.fromValues(args);
    },
    args: [[1, 2, 3]],
    assertion: new ListNode(1, new ListNode(2, new ListNode(3))),
  });
};
