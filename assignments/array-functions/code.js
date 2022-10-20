const countTens = (numbers) => {
  let tens = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 10) {
      tens = tens + 1
    }
  }
 return tens 
};


  const anyOverOneHundred = (numbers) => {
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i]>100) {
    return true
  }
}
return false
  }





















//questions: 
// push pull, how the remainder % works, nested loops, fixing my code, if (someCondition(i)), index
