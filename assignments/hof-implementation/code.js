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
  for (let i = 0; i < array.length; x++) {
  nArray.push(fn(array[x]))
}
return nArray
};

const flatMap = (fn, array) => {

};

const reduce = (fn, initialValue, array) => {

};

const every = (predicate, array) => {

};

const some = (predicate, array) => {

};
