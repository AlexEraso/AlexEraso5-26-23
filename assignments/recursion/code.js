const factorial = (n) => {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

const triangular = (n) => {
  if (n === 0) {
    return 0;
  } else {
    return n + triangular(n - 1);
  }
}

const fibonacci = (n) => {
  if (n < 2) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

const gcd = (a, b) => {
  if (b === 0) {
    return a
  } else {
    return gcd(b, a % b)
  }
}

const sum = (array) => {
  if (array.length === 0) {
    return 0;
  } else {
  }
}