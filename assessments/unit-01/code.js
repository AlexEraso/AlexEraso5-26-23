// You will use this function in one of the problems. You don't need to change
// it or even worry about how exactly it works.
const emit = (a, b, product) => {
  console.log(`${a} times ${b} is ${product}`);
};

// Write your code here ...

const averageWeight = (weight, items) => {
  return weight / items;
};

const hypotenuse = (a, b) => {
  return Math.sqrt(a ** 2 + b ** 2);
};

const maxRadius = (width, height) => {
  return Math.min(width, height) / 2;
};


const numCircles = (radius, width) => {
  return Math.floor(width / (r * 2));
};

const offset = (width, figureWidth) => {
  return (width - figureWidth) / 2;
}

const canSleepIn = (weekday, vacation) => {
  return !weekday && vacation;
};

const canGoToProm = (senior, invited, exclusion) => {
  return senior || invited && !exclusion;
}

const getsSpeedingTicket = (mph, grouchy) => {
  return mph > 70 || grouchy && mph > 65;
};

const moreThanTwiceAsLong = (s1, s2) => {
  return s1.length > s2.length * 2;
};

const aFartherThanB = (a, b, c) => {
  return Math.abs(c - a) > Math.abs(b - c);
};

const firstHalf = (s) => {
  return s.substring(0, s.length / 2);
};

const secondHalf = (s) => {
  return s.string(s.length / 2, s.length)
};

const upDown = (s) => {
  return s.toUpperCase() + s.toLowerCase();
};

const everyOther = () => {
  return s(0) + s(2) + s(4);
};

const upDownLastCharacter = (s) => {
  return s.s(s.length -1). toUpperCase() + s(s.length -1) to.LowerCase();
};