/**
 * @param {string} label
 * @param {function} callback
 * @param {array} args
 * @param assertion
 * @return {any} result
 */
const testWrapper = ({ label, callback, args, assertion }) => {
  console.time(label);

  let result = callback.call(this, ...args);

  console.log(label, result);

  if (assertion) {
    console.assert(JSON.stringify(result) === JSON.stringify(assertion));

    if (JSON.stringify(result) === JSON.stringify(assertion)) {
      console.log(`Test passed.`);
    }
  } else {
    console.timeEnd(label);
    console.log(`Test passed.`);
  }

  return result;
};

exports.testWrapper = testWrapper;

exports.init = () => {
  String.prototype.forEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }
  };

  String.prototype.pointer = 0;
};
