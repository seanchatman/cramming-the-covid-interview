/***
 * @constructor
 * @param {Array<any>} keys
 ***/
class BinaryTreeNode {
  key = null;
  left = null;
  right = null;

  constructor(keys, depth = 1) {
    this.depth = depth;

    if (keys) {
      this.key = keys.splice(0, 1)[0];

      // console.log(`keys`, keys);

      // console.log(
      //   `keys.splice(0, keys.length / 2)`,
      //   keys.splice(0, keys.length / 2)
      // );

      if (keys.length > 0) {
        console.log("keys", keys[0] === null, keys[1]);

        if (keys[0]) {
          console.log(`key[0]`, keys[0]);
          this.left = new BinaryTreeNode(
            keys.splice(0, keys.length / 2),
            depth + 1
          );
        }

        if (keys[1]) {
          console.log(`key[1]`, keys[1]);

          this.right = new BinaryTreeNode(keys, depth + 1);
        }
      }

      //
      // this.left = new BinaryTreeNode(keys.splice(0, keys.length / 2));
    }
  }

  isRoot() {
    return !this.right && !this.left;
  }

  forEach(callback) {
    callback(this);

    if (this.right) {
      console.log("???");
      this.right.forEach(callback);
    }

    if (this.left) {
      console.log("???");
      this.left.forEach(callback);
    }
  }

  toString() {
    let out = "\nkey: " + this.key + " depth: " + this.depth;
    if (this.left) {
      out += "\n\tleft: " + this.left.toString();
    }
    if (this.right) {
      out += "\n\tright: " + this.right.toString();
    }

    return out;
  }
}

//const tree = new BinaryTreeNode([2, 1, 4, null, null, 3, 5]);

// module.exports.BinaryTree = BinaryTree;
module.exports.BinaryTreeNode = BinaryTreeNode;
