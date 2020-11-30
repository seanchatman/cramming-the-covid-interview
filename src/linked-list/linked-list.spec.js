const { testWrapper } = require("../utils");
const { LinkedListUtils, ListNode } = require("./linked-list");

module.exports = () => {
  const objectList = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
      },
    },
  };

  testWrapper({
    label: "LinkedListUtils: static fromValues",
    callback: (args) => {
      return LinkedListUtils.fromValues(args);
    },
    args: [[1, 2, 3]],
    assertion: new ListNode(1, new ListNode(2, new ListNode(3))),
    skip: true,
  });

  testWrapper({
    label: "LinkedListUtils: static fromObjects",
    callback: (args) => {
      return LinkedListUtils.fromObjects(args);
    },
    args: [objectList],
    assertion: new ListNode(1, new ListNode(2, new ListNode(3))),
    skip: true,
  });

  testWrapper({
    label: "LinkedListUtils: static forEach",
    callback: (args) => {
      let output = "";

      const head = LinkedListUtils.fromObjects(args);

      LinkedListUtils.forEach(head, (node, index) => {
        output += node.value + ":" + index + " ";
      });

      return output.trim();
    },
    args: [objectList],
    assertion: "1:0 2:1 3:2",
    skip: true,
  });

  testWrapper({
    label: "LinkedListUtils: static toArray",
    callback: (args) => {
      const head = LinkedListUtils.fromObjects(args);
      return LinkedListUtils.toArray(head).length;
    },
    args: [objectList],
    assertion: 3,
    skip: true,
  });

  testWrapper({
    label: "ListNode: forEach",
    callback(args) {
      const head = LinkedListUtils.fromObjects(objectList);

      let output = "";

      head.forEach((node, index) => {
        output += node.value + ":" + index + " ";
      });

      return output.trim();
    },
    args: [objectList],
    assertion: "1:0 2:1 3:2",
  });
};
