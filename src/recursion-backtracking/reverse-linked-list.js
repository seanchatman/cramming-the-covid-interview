const { testWrapper } = require("../utils");

class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
/**
 *
 **/
const reverseList = function (head) {
  let first = head;
  let second = head.next;
  let third = head.next.next;

  third.next = second;
  second.next = first;
  first.next = null;

  console.log(
    `first: ${first.val}, second: ${second.val}, third: ${third.val}`
  );

  // while (curr.next) {
  //   // console.log(`prev val`, prev.val);
  //   // console.log(`curr val`, curr.val);
  //   // console.log(`next val`, next.val);
  //
  //   // prev.next = curr.next;
  //   // curr = prev;
  //   //
  //   // prev = next.next;
  //   // curr = prev;
  //
  //   // curr = curr.next;
  //   // next = curr.next;
  // }

  let test = rev(dummy, dummy.next);

  return dummy.next;
};

const rev = (prev, node) => {
  if (!node || !node.next) return node;
  console.log(`node.val`, node.val);

  let revNode = rev(node, node.next);
  console.log(`prev.val`, revNode);
  revNode.next = node;

  return revNode;
};

module.exports = () => {
  reverseList(new ListNode(1, new ListNode(2, new ListNode(3))));
  // reverseList(
  //   new ListNode(
  //     1,
  //     new ListNode(
  //       2,
  //       new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))
  //     )
  //   )
  // );
  // testWrapper({
  //   label: "reverseList",
  //   callback: reverseList,
  //   args: [],
  //   assertion: [],
  // });
};
