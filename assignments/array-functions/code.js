const countTens = (numbers) => {
  let tens = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 10) {
      tens = tens + 1
    }
  }
  return tens
};

const sum = (number) => {
  let s = 0;
  for (let i = 0; i < number.length; i++) {
    s = s + number[i]
  }
  return s
};

const evens = (numbers) => {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      result.push(numbers[i])
    }
  }
  return result
}

const anyOverOneHundred = (numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 100) {
      return true
    }
  }
  return false
}

const pyramid = (numbers) => {
  const pyramid = []
  for (let i = 0; i <= numbers; i++) {
    for (let j = 0; j < i; j++) {
      pyramid.push(i)
    }
  }
  return pyramid
}
























//questions: 
// push pull, how the remainder % works, nested loops, fixing my code, if (someCondition(i)), index
