/**
 * @param {string} rawIpString
 * @return {Array<string>}
 */
const { testWrapper } = require("../utils");
const restoreIpAddresses = (ip) => {
  const output = [createIp(ip[0] + ip[1], ip[2], ip[3], ip[4])];

  for (let i = 0; i < 4; i++) {}

  return output;
};

const createIp = (a, b, c, d) => {
  return `${a}.${b}.${c}.${d}`;
};

module.exports = () => {
  testWrapper({
    label: "restoreIpAddresses",
    callback: restoreIpAddresses,
    args: ["11111"],
    assertion: ["11.1.1.1", "1.11.1.1", "1.1.11.1", "1.1.1.11"],
  });
};
