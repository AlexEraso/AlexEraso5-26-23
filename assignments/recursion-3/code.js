const product = () => {

}

const sumSquares = () => {

}

const lucas = (n) => {
  if (n === 1) {
    return 1
  } else {
    if (n === 0) {
      return 2;
    } else {
      return lucas(n - 1) + lucas(n - 2);
    }
  }
}

  const isAscending = (numbers) => {
    if (numbers.length < 2) {
      return true
    } else {
      return numbers[0] <= numbers[1] && isAscending(numbers.slice(1));
    }
  }



  const isDescending = (ns) => {
  if (ns.length < 2) {
    return true;
  } else {
    return ns[0] >= ns[1] && isDescending(ns.slice(1));
  }
};
  const sumNested = () => {

  }

  const searchNested = () => {

  }

  const evaluate = () => {

  }