const evens = (array) => {
  let r = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      r.push(array[i]);
    }
  }
  return r;
};




