const { LinkedListUtils, LinkedListNode } = require("./linked-list");

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const removeKthToLast = (head, k) => {
  const values = [
    { value: 1, next: 1 },
    { value: 2, next: 2 },
    { value: 5, next: 3 },
    { value: 6, next: 4 },
    { value: 7, next: null },
  ].map((value) => {
    return value.value;
  });

  let headRef = LinkedListNode.fromValues(values);

  let lengthRef = new LinkedListNode();
  let lengthNode = lengthRef;
  let headLength = 0;

  LinkedListNode.forEach(headRef, (node, index) => {
    let nodeNext = new LinkedListNode({ node, index });
    lengthNode.next = nodeNext;
    lengthNode = nodeNext;
    headLength = index + 1;
  });

  LinkedListNode.forEach(lengthRef, (node, index) => {
    console.log(`length`, index);
    if (index === headLength - k - 1) {
      node.value.node.next = node.value.node.next.next;
      console.log(`index, node.node`, index, node.node);
    }
  });

  console.log(`headRef`, LinkedListUtils.toString(headRef));
};

module.exports = removeKthToLast;
