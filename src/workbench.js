require("./utils").init();
require("./linked-list/linked-list.spec")();

// const { testWrapper } = require("./utils");
// const { ListNode, LinkedListUtils } = require("./linked-list/linked-list");
// const oddEvenList = require("./linked-list/even-odd-partition");

// testWrapper({
//   label: "oddEvenList",
//   callback: oddEvenList,
//   args: [],
//   assertion: [
//     { next: 1, value: 5 },
//     { next: 2, value: 3 },
//     { next: 3, value: 3 },
//     { next: 4, value: 1 },
//     { next: null, value: 7 },
//   ],
// });

// testWrapper({
//   label: "static fromValues",
//   callback: (args) => {
//     return LinkedListUtils.fromValues(args);
//   },
//   args: [[1, 2, 3]],
//   assertion: new ListNode(1, new ListNode(2, new ListNode(3))),
// });
