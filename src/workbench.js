require("./utils").init();

const { testWrapper } = require("./utils");
const oddEvenList = require("./linked-list/even-odd-partition");

testWrapper({
  label: "oddEvenList",
  callback: oddEvenList,
  args: [[5, 1, 3, 7, 3]],
  assertion: [
    { next: 1, value: 5 },
    { next: 2, value: 3 },
    { next: 3, value: 3 },
    { next: 4, value: 1 },
    { next: null, value: 7 },
  ],
});
