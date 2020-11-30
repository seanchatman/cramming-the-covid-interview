class ListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }

  toArray() {
    return ListNode.toArray(this);
  }

  static toArray(node) {
    let curr = node;
    const output = [];

    while (curr) {
      output.push(curr);
      curr = curr.next;
    }

    return output;
  }

  static toString(node) {
    ListNode.toArray(node).forEach((value) =>
      console.log("value: ", value.value)
    );
  }

  static fromValues(values) {
    let head = new ListNode(values[0]);
    let node = head;

    for (let i = 1; i < values.length; i++) {
      node.next = new ListNode(values[i]);
      node = node.next;
    }

    return head;
  }
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const oddEvenList = (head) => {
  console.log(`head`, head.toArray());
};

module.exports = oddEvenList;
