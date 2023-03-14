const evens = (numbers) => { // correct
  let r = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      r.push(numbers[i]);
    }
  }
  return r;
};

const shouty = (strings) => { // almost
  let r = [];
  for (let i = 0; i < strings.length; i++) {
    r.push[i].toUpperCase;
  }
  return r;
};

//New shouty-forgot the () after the toUpperCase
const shouty = (strings) => {
  const r = [];
  for (let i = 0; i < strings.length; i++) {
    r.push(strings[i].toUpperCase());    
  }
  return r;
};

//New join
const join = (strings, delimiter) => {
  let joined = null;
  for (let i = 0; i < strings.length; i++) {
    if (joined === null) {
      joined = strings[i];
    } else {
      joined += delimiter + strings[i];
    }
  }
  return joined;
};

//New allSiblings
const allSiblings = (students) => {
  const siblings = [];
  for (let i = 0; i < students.length; i++) {
    const sibs = students[i].siblings;
    for (let j = 0; j < sibs.length; j++) {
      siblings.push(sibs[j]);
    }
  }
  return siblings;
};



const allPassing = (students, passing) => { // pattern
  for (let i = 0; i < passing.length; i++) {
    if (!students(passing[i])) {
      return false;
    }
  }
  return true;
};

const someonesFavorite = (people, food) => { // pattern
  for (let i = 0; i < food.length; i++) {
    if (people(food[i])) {
      return true
    }
  }
  return false
};

const strange = (array) => { // correct
  return array.filter((n) => n.strange)
}

const birthdays = () => {

}

const allCromulent = (array) => {
  return array.filter(() =>)
}
