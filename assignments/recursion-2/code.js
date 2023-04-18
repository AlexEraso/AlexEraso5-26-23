const add = (a, b) => {
  if (b === 0) {
    return a;
  } else {
    return 1 + add(a, b - 1);
  }
}