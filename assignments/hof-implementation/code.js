// N.B. Do not use the array methods of the same name to implement these functions!

const filter = (predicate, array) => {
  let nArray = []
  for (let i = 0; i < array.length; i++)
    if (predicate(array[i])) {
      nArray.push(array[i])
    }
  return nArray
};

const map = (fn, array) => {
  let nArray = []
  for (let i = 0; i < array.length; i++) {
    nArray.push(fn(array[i]))
  }
  return nArray
};

const flatMap = (fn, array) => {
  let nArray = []
  for (let i = 0; i < array.length; i++) {
    let iArray = fn(array.length[i])
    for (let i = 0; i < array.length; i++) {
      nArray.push(iArray[i])
    }
  }
  return nArray
};

const reduce = (fn, initialValue, array) => {
  for (let i = 0; i < array.length; i++) {
    initialValue = fn(initialValue, array[i])
  }
  return initialValue
};

const every = (predicate, array) => {

};

const some = (predicate, array) => {

};
