const { testWrapper } = require("./utils");
process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});
process.exit(0);
