require("./utils").init();

const { testWrapper } = require("./utils");
const groupAnagrams = require("./strings/group-anagrams");
//
testWrapper({
  label: "groupAnagrams",
  callback: groupAnagrams,
  args: [["eat", "bat", "ate", "tab", "tea", "eat"]],
  assertion: [
    ["eat", "ate", "tea", "eat"],
    ["bat", "tab"],
  ],
});

// let test = "test";
//
// test.forEach((value, i, str) => {
//   console.log(`\nworkbench.js: \nforEach`, value, i, str);
//   console.log(str.pointer++);
// });

// https://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/mx/collections/IViewCursor.html
