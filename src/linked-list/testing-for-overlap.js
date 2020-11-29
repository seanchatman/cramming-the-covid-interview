const { LinkedListUtils } = require("./linked-list");

const testingForOverlap = (values1, values2) => {
  const list1 = LinkedListUtils.fromValues(values1);
  const list2 = LinkedListUtils.fromValues(values2);

  let firstMatch = null;

  LinkedListUtils.forEach(list1, (node1) => {
    LinkedListUtils.forEach(list2, (node2) => {
      // if ((node1.next && firstMatch === null) {
      //   firstMatch = node1.value;
      // }
    });
  });

  return firstMatch;
};

module.exports = testingForOverlap;
