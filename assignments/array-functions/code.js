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
    }
  }
  return pyramid
}

//So, I didn't realize how late it was getting. We are just now eating, and I have to do Coop's bedtime afterward. I won't be free for another hour at least. So, here's what I offer you for the pyramid instead:

//* Build a return array
//* Starting at 0 and counting up to the provided number (function parameter)...
//Get the current number, and create another loop. Start at 0 again and count up to whatever number you're on.
//On each iteration of the loop, append whatever number you're on to the return array
//After the second loop finishes, you will have the appropriate number of digits (one 1s, two 2s, etc.), and the first loop will keep going until the number provided to the function. Then you return your array and bada-bing, bada-boom!
//The point of the question is to do a nested for-loop






















//questions: 
// push pull, how the remainder % works, nested loops, fixing my code, if (someCondition(i)), index
