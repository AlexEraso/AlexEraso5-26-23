////////////////////////////////////////////////////////////////
// Write your code here ...

const factorial = (integer) => { // correct
  if (integer === 0) {
    return 1
  } else {
    return integer * factorial(integer - 1)
  }
}

const fibonacci = (n) => { // almost
  if (n < 2) {
    return 0
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2)
  }
}

const sumSquares = (n) => { // correct
  if (n === 0) {
    return 0
  } else {
    return n ** 2 + sumSquares(n - 1)
  }
}

const maximum = (array) => { // correct
  if (array.length === 0) {
    return -Infinity;
  } else {
    return Math.max(array[0], maximum(array.slice(1)))
  }
}

const treeMap = (tree, func) => { // correct
  if (isLeaf(tree)) {
    return func(tree)
  } else {
    return {
      left: treeMap(tree.left, func),
      right: treeMap(tree.right, func)
    }
  }
}

const sumPrimesBelow = (n) => { // correct
  if (n === 2) {
    return 2
  } else {
    if (isPrime(n)) {
      return n + sumPrimesBelow(n - 1)
    } else {
      return sumPrimesBelow(n - 1)
    }
  }
}

//unoptimal but i dont really know how to do it otherwise
const  nvwls = (string) => { // correct
  if (string.length === 0) {
    return ''
  } else {
    if (string [0] === 'a' || string[0] === 'e' || string[0] === 'i' || string[0] === 'o' || string[0] === 'u' || string[0] === 'A' || string[0] === 'E' || string[0] === 'I' || string[0] === 'O' || string[0] === 'U') {
      return nvwls(string.slice(1))
    } else {
      return string[0] + nvwls(string.slice(1))
    }
  }
}

const caesar = (string, key) => { // correct
  if (string.length === 0) {
    return ''
  } else {
    return rotate(string[0], key) + caesar(string.slice(1), key)
  }
}

const toList = (array) => { // almost
  if (array.length === 0) {
    return []
  } else {
    return { first: array[0], rest: toList(array.slice(1)) }
  }
}

const map = (list, func) => { // something
  if (list.rest === null) {
    return list
  } else {
    return map(list.first) + map(list.first, func)
  }
}

////////////////////////////////////////////////////////////////
// Functions you will use in your code. No need to touch these
// or understand these beyond understanding what they do which
// is described in the appropriate questions.

const isLeaf = (o) => typeof o !== 'object' || (!(('left' in o) && ('right' in o)));

const isPrime = (n) => {
  const loop = (f) => f ** 2 > n || (n % f !== 0 && loop(f + 1));
  return n > 1 && loop(2);
}

const alphabet = 'abcdefghijklmnopqrstuvwxyz';

const mod = (n, m) => ((n % m) + m) % m;

const rotate = (char, places) => {
  const lower = char.toLowerCase();
  const i = alphabet.indexOf(lower);
  if (i === -1) {
    return char;
  } else {
    const rotated = alphabet[mod(i + places, alphabet.length)];
    return lower === char ? rotated : rotated.toUpperCase();
  }
}
