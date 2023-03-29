const fruitBowl = [
  {
    name: 'apple',
    colors: ['red', 'green', 'yellow', 'brown'],
    grams: 150,
    grownIn: ['USA', 'China', 'Poland', 'Turkey'],
    tastiness: 8,
    inconvenience: 2,
  },
  {
    name: 'banana',
    colors: ['yellow'],
    grams: 120,
    grownIn: ['Ecuador', 'Costa Rica', 'Colombia', 'Philippines'],
    tastiness: 6,
    inconvenience: 1
  },
  {
    name: 'orange',
    colors: ['orange'],
    grams: 150,
    grownIn: ['Brazil', 'USA', 'Mexico', 'Spain'],
    tastiness: 7,
    inconvenience: 3
  },
  {
    name: 'mango',
    colors: ['yellow', 'orange', 'red'],
    grams: 200,
    grownIn: ['India', 'China', 'Thailand', 'Mexico'],
    tastiness: 9,
    inconvenience: 5
  },
  {
    name: 'pineapple',
    colors: ['brown', 'green', 'yellow'],
    grams: 1000,
    grownIn: ['Costa Rica', 'Philippines', 'Brazil', 'Thailand'],
    tastiness: 7,
    inconvenience: 8,
  },
  {
    name: 'watermelon',
    colors: ['green', 'red'],
    grams: 5000,
    grownIn: ['China', 'Turkey', 'Iran', 'Brazil'],
    tastiness: 6,
    inconvenience: 9
  },
  {
    name: 'peach',
    colors: ['orange', 'yellow'],
    grams: 150,
    grownIn: ['China', 'Spain', 'Italy', 'USA'],
    tastiness: 8,
    inconvenience: 4
  },
  {
    name: 'kiwi',
    colors: ['brown', 'green'],
    grams: 50,
    grownIn: ['New Zealand', 'Italy', 'Chile', 'Greece'],
    tastiness: 7,
    inconvenience: 6
  },
  {
    name: 'grapefruit',
    colors: ['pink', 'red', 'white'],
    grams: 300,
    grownIn: ['USA', 'Mexico', 'China', 'Turkey'],
    tastiness: 5,
    inconvenience: 7,
  },
  {
    name: 'grape',
    colors: ['purple', 'green'],
    grams: 5,
    grownIn: ['Italy', 'China', 'Spain', 'USA'],
    tastiness: 6,
    inconvenience: 2
  },
  {
    name: 'blueberry',
    colors: ['blue'],
    grams: 1,
    grownIn: ['USA', 'Canada', 'Chile', 'Peru'],
    tastiness: 8,
    inconvenience: 3
  },
  {
    name: 'strawberry',
    colors: ['red'],
    grams: 20,
    grownIn: ['USA', 'Spain', 'Mexico', 'Egypt'],
    tastiness: 9,
    inconvenience: 4
  },
  {
    name: 'lemon',
    colors: ['yellow'],
    grams: 60,
    grownIn: ['Spain', 'USA', 'Turkey', 'India'],
    tastiness: 5,
    inconvenience: 6
  }
];

const isTasty = (fruit) => fruit.tastiness >= 5;

const isInconvenient = (fruit) => fruit.inconvenience >= 5;

//Start


//#1 GOOD 
const redFruits = (fruits) => {
  fruits.filter((fruit) => fruit.color.includes('red'))
}

//#2 GOOD 
const weights = (fruits) => {
  fruits.map((fruits) => fruits.grams)
}


//#3 COME BACK TO THIS QUESTION
const heaviest = (fruits) => {
  fruits.reduce((h, f) => Math.max(h, f.weight), 0);
}

//#4 GOOD 
const allColors = (fruits) => {
  fruits.flatmap((fruit) => fruit.color)
}

//#5 GOOD 
const areAllTasty = (fruits) => {
  fruits.every(isTasty)
}

//#6 GOOD 
const notAllInconvenient = (fruits) => {
  fruits.some((i) => !isInconvenient(i))
}

//#7 I THINK OK
const tasty = (fruits) => {
  let r = []
  for (let x = 0; x < fruits.length; x++) {
    if (isTasty(fruits[x])) {
      r.push(fruits[x])
    }
  }
  return r
}

//#8 I THINK OK
const names = (fruits) => {
  let r = []
  for (let x = 0; x < fruits.length; x++) {
    r[x] = fruits[x].name
  //r.push(fruits[x].name)
  }
  return r
}

//#9 IM CONFUSED**
const averageInconvenience = (fruits) => {
  let avg = null
  for (let x = 0; x < fruits.length; x++) {
    avg += fruits[x].inconvenience
  }
  return fruit.inconvenience / fruits.length
}

//#10 COME BACK TO THIS QUESTION
const allCountries = (fruits) => {
  let r = []
  for (let x = 0; x < fruits.length; x++) {
    for (let y = 0; y < fruits.length; y++) {
      r.push(countries[y])
    }
  }
  return r
}

//#11 I THINK OK
const allGrownInMoreThanNCountries = (fruits, n) => {
  for (let x = 0; x < fruits.length; x++) {
    if (fruits[x].grownIn.length > n) {
      return true
    }
  }
  return false
}

//#12 I THINK OK 
const someMoreThanColors = (fruits, n) => {
  for (let x = 0; x < fruits.length; x++) {
    if (fruits[x].colors.length > n) {
      return true
    }
  }
  return false
}