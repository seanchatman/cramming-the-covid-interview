/***
 * @constructor
 * @param {Object} value
 * @param {ListNode} next
 ***/
class ListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }

  /***
   * @param {ListNode} startNode
   * @param {function} callback
   ***/
  forEach(callback) {
    LinkedListUtils.forEach(this, callback);
  }

  toString() {
    return `{
  value: ${this.value},
  next: ${this.next ? this.next.toString() : "null"}
}  `;
  }
}

/***
 * Static function to make working with linked lists easier.
 * Aims to simulate functionality of the Array class.
 *
 * @constructor
 * @param {Array} values
 ***/
class LinkedListUtils {
  constructor() {
    throw new Error("LinkedList cannot be instantiated.");
  }

  /***
   * Create linked list of ListNodes from an Array of values.
   *
   * @param {Array} values
   * @return {ListNode}
   ***/
  static fromValues(values) {
    let head = new ListNode(values.shift());
    let tail = head;

    values.forEach((value) => {
      tail.next = new ListNode(value);
      tail = tail.next;
    });

    return head;
  }

  /***
   * Create a linked list of ListNodes from a linked list of Objects.
   *
   * @return {ListNode}
   ***/
  static fromObjects(headObject) {
    let head = new ListNode(headObject.value);
    let tail = head;

    let tailObject = headObject.next;

    while (tailObject) {
      tail.next = new ListNode(tailObject.value);
      tail = tail.next;

      tailObject = tailObject.next;
    }

    return head;
  }

  /***
   * Loops through each element of a linked list.
   *
   * @param {ListNode} head
   * @param {function} callback
   *
   ***/
  static forEach(head, callback) {
    LinkedListUtils.toArray(head).forEach(callback);
  }

  // static toString(head) {
  //   return JSON.stringify(head);
  // }

  /***
   * @param {ListNode} head
   * @return {Array<ListNode>}
   ***/
  static toArray(head) {
    const output = [];

    let tail = head;

    while (tail) {
      output.push(tail);
      tail = tail.next;
    }

    return output;
  }
}

module.exports.ListNode = ListNode;
module.exports.LinkedListUtils = LinkedListUtils;
