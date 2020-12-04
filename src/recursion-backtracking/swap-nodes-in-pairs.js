const { testWrapper } = require("../utils");

class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

let result = null;

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const swapPairs = function (head) {
  // console.log(`swapPairs`, head);
  if (!head || !head.next || !head.next.next) return head;

  const dummy = new ListNode();

  result = dummy;

  swap(dummy, head);

  return head.next;
};

const swap = (prev, curr) => {
  // console.log(`curr`, curr);
  if (!curr || !curr.next) return;

  let first = curr;
  let second = curr.next;
  let third = curr.next.next;

  prev.next = second;
  second.next = first;
  first.next = third;

  swap(first, third);
};

module.exports = () => {
  // swapPairs(
  //   new ListNode(
  //     1,
  //     new ListNode(
  //       2,
  //       new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))
  //     )
  //   )
  // );

  swapPairs(new ListNode(1, new ListNode(2)));

  // testWrapper({
  //   label: "swapPairs",
  //   callback: swapPairs,
  //   args: [new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))))],
  //   assertion: new ListNode(
  //     2,
  //     new ListNode(1, new ListNode(4, new ListNode(3)))
  //   ),
  // });
};
