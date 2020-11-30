// /**
//  * @param {Array<Array<string>>} actions
//  * @return {string}
//  */
// const performEditorActions = (actions) => {
//   let output = "";
//
//   let i =
//
//   actions.forEach(([action, char], i) => {
//     const performedActions = [];
//     console.log(`action, char`, action, char);
//     switch (action) {
//       case "INSERT":
//         output += char;
//         break;
//       case "DELETE":
//         output = output.substring(0, output.length - 1);
//         break;
//       case "UNDO":
//         break
//       case "REDO":
//         break;
//     }
//
//     performedActions.push(action);
//   });
//
//   return output;
// };
//
// module.exports = performEditorActions;
