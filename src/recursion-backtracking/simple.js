const start = (n) => {
  let count = [];
  let res = help([1, 2, 3], []);
};

const help = (n, acc) => {
  // console.log(`help, n, acc`, n, acc);
  if (acc.length < n) {
    acc.push(acc.length);
    help(n, acc);
  } else {
    return acc;
  }

  return acc;
};

start(100);

process.exit(0);
