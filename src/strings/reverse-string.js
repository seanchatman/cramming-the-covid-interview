const reverseString = (value) => {
  let i = value.length - 1;

  while (i > 0) {
    let char = value[i];
    console.log(`char`, char, i);
    i--;
  }
};
