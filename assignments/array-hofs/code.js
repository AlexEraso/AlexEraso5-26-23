const evens = (array) => {
  return array.filter((n) => n % 2 === 0)
};

const odds = (array) => {
  return array.filter((n) => n % 2 !== 0)
};

const big = (array) => {
  return array.filter((n) => n > 100)
};

const names = (array) => {
  return array.map((n) => n.name)
};

const grades = (array) => {
  return array.map((n) => n.grade)
};

const pairs = (array) => {
  return array.map((n) => [n, n])
};

const averageGrade = () => {

};

const flatpairs = (array) => {
  return array.flatMap((n) => [n, n])
};

const allEven = () => {
return array.every((n) => n % 2 ===0)
};

const someEven = () => {

};

const lengthOfNames = () => {

};