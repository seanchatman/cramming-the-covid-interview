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

  toString() {
    return `${JSON.stringify(this.value)}`;
  }

  /***
   * @return {ListNode}
   ***/
  static fromValues(values) {
    let head = new ListNode(values[0]);
    let node = head;

    for (let i = 1; i < values.length; i++) {
      node.next = new ListNode(values[i]);
      node = node.next;
    }

    return head;
  }

  /***
   * @param {ListNode} startNode
   * @param {function} callback
   ***/
  static forEach(startNode, callback) {
    let cursor = startNode;
    let index = 0;

    while (cursor) {
      callback(cursor, index);
      cursor = cursor.next;
      index++;
    }
  }

  /***
   * @return {Array<ListNode>}
   ***/
  static toArray(startNode) {
    const output = [];

    ListUtils.forEach(startNode, (node) => {
      output.push(node);
    });

    return output;
  }
}

/***
 * @constructor
 * @param {Array} values
 ***/
class ListUtils {
  constructor() {}

  /***
   * @return {ListNode}
   ***/
  static fromValues(values) {
    let head = new ListNode(values[0]);
    let node = head;

    for (let i = 1; i < values.length; i++) {
      node.next = new ListNode(values[i]);
      node = node.next;
    }

    return head;
  }

  /***
   * @param {ListNode} startNode
   * @param {function} callback
   ***/
  static forEach(startNode, callback) {
    let cursor = startNode;
    let index = 0;

    while (cursor) {
      callback(cursor, index);
      cursor = cursor.next;
      index++;
    }
  }

  static toString(startNode) {
    let output = "";

    ListUtils.forEach(startNode, (node) => {
      output += "\n" + node.toString();
    });

    return output;

    // return JSON.stringify(this.#source);
  }

  /***
   * @return {Array<ListNode>}
   ***/
  static toArray(startNode) {
    const output = [];

    ListUtils.forEach(startNode, (node) => {
      output.push(node);
    });

    return output;
  }
}

module.exports.ListNode = ListNode;
module.exports.ListUtils = ListUtils;
