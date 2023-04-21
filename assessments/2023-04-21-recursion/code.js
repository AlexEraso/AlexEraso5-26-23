////////////////////////////////////////////////////////////////
// Write your code here ...

const factorial = (integer) => {
  if ( integer === 0 ) {
    return 1
  } else {
    return 
  }
}

const fibonacci = () => {}

const sumSquares = () => {}

const maximum = () => {}

const treeMap = () => {}

const sumPrimesBelow = () => {}

const nvwls = () => {}

const caesar = () => {}

const toList = () => {}

const map = () => {}





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
