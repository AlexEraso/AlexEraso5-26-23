const add = (a, b) => {
  if (b === 0) {
    return a;
  } else {
    return a + (a, b - 1) + 1;
  }
}