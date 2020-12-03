/**
 * @param {Array<Array<string>>} actions
 * @return {string}
 */
const { testWrapper } = require("../utils");
const performEditorActions = (actions) => {
  let output = "";

  let i = 0;
  const perfArr = [];

  while (i < actions.length) {
    let [action, char] = actions[i];
    console.log(`action, char`, action, char);

    if (action === "INSERT") {
      output += char;
    }

    if (action === "UNDO") {
      if (perfArr[perfArr.length - 1][0] === "INSERT") {
        output = output.substring(output, output.length - 1);
      }
      // console.log(
      //   `perfArr[perfArr.length-1][0]`,
      //   perfArr[perfArr.length - 1][0]
      // );
    }

    perfArr.push(actions[i]);

    i++;
  }

  // console.log(`actinos`, actions);
  //
  // let i = 0;
  //
  // const performedActions = [];
  //
  // while (i < actions.length) {
  //   console.log(`action`, actions[i]);
  //   console.log(`action, char`, action, char);
  //   switch (actios[i]) {
  //     case "INSERT":
  //       output += char;
  //       break;
  //     case "DELETE":
  //       output = output.substring(0, output.length - 1);
  //       break;
  //     case "UNDO":
  //       console.log(`action`, action);
  //       break;
  //     case "REDO":
  //       break;
  //   }

  // performedActions.push(action);
  // i++;
  // }

  return output;
};

module.exports = () => {
  testWrapper({
    label: "performEditorActions",
    callback: performEditorActions,
    args: [[["INSERT", "a"], ["INSERT", "b"], ["UNDO"]]],
    assertion: "a",
  });
};
