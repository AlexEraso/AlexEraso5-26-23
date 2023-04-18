const add = (a, b) => {
  if (b === 0) {
    return a;
  } else {
    return a + 1(a, b - 1);
  }
}