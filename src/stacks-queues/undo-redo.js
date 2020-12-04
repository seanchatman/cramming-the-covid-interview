/**
 * @param {Array<Array<string>>} actions
 * @return {string}
 */
const { testWrapper } = require("../utils");
const performEditorActions = (actions) => {
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
