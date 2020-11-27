require("./utils").init();

const { testWrapper } = require("./utils");
const rotating = require("./arrays/rotating-2d-matrix");
//
testWrapper({
  label: "rotating",
  callback: rotating,
  args: [
    [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ],
  ],
  assertion: [
    [13, 9, 5, 1],
    [14, 10, 6, 2],
    [15, 11, 7, 3],
    [16, 12, 8, 4],
  ],
});

// let test = "test";
//
// test.forEach((value, i, str) => {
//   console.log(`\nworkbench.js: \nforEach`, value, i, str);
//   console.log(str.pointer++);
// });

// https://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/mx/collections/IViewCursor.html
