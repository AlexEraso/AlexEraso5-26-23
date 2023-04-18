const add = (a, b) => {
  if (b === 0) {
    return a;
  } else {
    return 1 + add(a, b - 1);
  }
}

const multiply = (a, b) => {
  if (b === 0) {
    return 0;
  } else {
    return a + multiply(a, b - 1)
  }
}

const double = (a , b) => {
    if (b === 0) {
    return 0;
  } else {
    return double(a * 2, b - 1)
  }
}