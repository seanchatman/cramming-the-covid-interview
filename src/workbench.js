require("./utils").init();
const { testWrapper } = require("./utils");
const undoRedo = require("./stacks-queues/undo-redo");

// testWrapper({
//   label: "undoRedo",
//   callback: undoRedo,
//   args: [
//     [
//       ["INSERT", "a"],
//       ["INSERT", "b"],
//     ],
//   ],
//   assertion: "ab",
// });

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hi!");
});

app.listen(3000, () => console.log("Server ready"));

process.exit(0);
