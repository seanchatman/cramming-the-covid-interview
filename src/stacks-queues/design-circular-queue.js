const { testWrapper } = require("../utils");

/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue = function (k) {
  this.k = k;
  /***
   * @type {Array<number>}
   ***/
  this.queue = new Array(k).fill(-1);
  this.head = 0;
  this.tail = 0;
};

/**
 * Insert an element into the circular queue. Return true if the operation is successful.
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
  if (this.head === this.tail && this.queue[this.tail] !== -1) return false;

  this.queue[this.tail] = value;

  this.tail++;

  if (this.tail === this.k) {
    this.tail = 0;
  }

  return true;
};

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
  if (this.Rear() === -1) return false;

  this.queue[this.tail] = -1;

  this.tail--;

  if (this.tail === -1) {
    this.tail = this.k - 1;
  }

  return true;
};

/**
 * Get the front item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
  return this.queue[this.head];
};

/**
 * Get the last item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
  return this.queue[this.tail];
};

/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
  return this.tail === this.head && this.Front() === -1;
};

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
  return this.tail === this.head && this.Front() !== -1;
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */

/**
 *
 **/
const testCircular = function () {
  const obj = new MyCircularQueue(3);
  console.log(`empty`, obj.isEmpty());

  obj.enQueue(3);
  obj.enQueue(1);
  obj.enQueue(2);
  obj.enQueue(4);
  obj.deQueue();
  obj.enQueue(4);
  console.log(`full`, obj.isFull());
  console.log(`empty`, obj.isEmpty());
  console.log(`obj`, JSON.stringify(obj));
};

module.exports = () => {
  /*
  testWrapper({
    label: "enQueue false",
    callback() {
      const obj = new MyCircularQueue(3);
      obj.enQueue(1);
      obj.enQueue(2);
      obj.enQueue(3);
      return obj.enQueue(4);
    },
    assertion: false,
  });
  
  
 */
  testWrapper({
    label: "enQueue Rear",
    callback() {
      const obj = new MyCircularQueue(3);
      obj.enQueue(1);
      obj.enQueue(2);
      obj.enQueue(3);
      obj.enQueue(4);
      return obj.Rear();
    },
    assertion: 3,
  });
};
