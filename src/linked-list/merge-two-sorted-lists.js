/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

module.exports = function () {
  let l1 = new ListNode(2, new ListNode(2, new ListNode(4)));
  let l2 = new ListNode(1, new ListNode(3, new ListNode(4)));

  const sentinel = {
    val: -1,
    next: null,
  };

  let head = sentinel;
  while (l1 && l2) {
    if (l1.val > l2.val) {
      head.next = l2;
      l2 = l2.next;
    } else {
      head.next = l1;
      l1 = l1.next;
    }

    head = head.next;
  }

  head.next = l1 || l2;

  console.log(`sentinel.next`, JSON.stringify(sentinel.next));

  return sentinel.next;
};
