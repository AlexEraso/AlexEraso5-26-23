/*
 * You will need this function for some of the problems. It returns a random
 * number between 0, inclusive, and n, exclusive. Thus rand(3) could possibly
 * return 0, 1, or 2 but will not return 3.
 */
const rand = (n) => Math.floor(Math.random() * n);

// Write your code here. Remember that you get partial credit for a
// syntactically correct function skeleton and more credit for a skeleton with a
// reasonable argument list. To get full credit you need to write a correct
// function but you can get partial credit for a function that is basically
// correct even if contains small mistakes.

const firstHalf = (s) => {
  return s.substring(0, s.length / 2)
};

const secondHalf = (s) => {
  return s.substring(s.length / 2)
};

const upDown = (s) => {
  return s.toUpperCase() + s.toLowerCase
};

const firstFewEveryOther = (s) => {
  return s(0) + s(2) + s(4)
};

const upDownLastCharacter = () => {
  return s(s.length - 1).toUpperCase() + s(s.length - 1).toLowerCase
};

const firstAndLast = (s) => {
  return s.substring(0, 1) + s.substring(s.length - 1, s.length)
};

const swapFrontAndBack = (s) => {
  return s.substring(s.length / 2) + s.substring(0, s.length / 2)
};

const simplePigLatin = (s, firstVowel) => {
  return s.substring(firstVowel) + s.substring(0, firstVowel) + 'ay';
};

//You will need this function for some of the problems. It returns a random
//number between 0, inclusive, and n, exclusive. Thus rand(3) could possibly
//return 0, 1, or 2 but will not return 3.
//const rand = (n) => Math.floor(Math.random() * n);

const randomCharacter = (s) => {
  return s(rand(s.length));
};

const randomCharacterUpDown = (s) => {
  const i = rand(s.length);
  return s(i).toUpperCase() + s(i).toLowerCase();
};

const isAllUpperCase = (s) => {
  if (s === s.toUpperCase(s)) {
    return true;
  } else {
    return false;
  }
};

const sameIgnoringCase = (word1, word2) => {
  if (s.toLowerCase(word1) === s.toLowerCase(word2)) {
    return true;
  } else {
    return false;
  }
};

//you use can if else statement. if the upper case is equal to
//the lower case than it returns true
//if not it returns false

const firstName = (s) => {
  return s.substring(0 , indexOf(" "))
};

const lastName = (s) => {
  return s.substring(s.indexOf(" "))
};

const initials = (s) => {
  return s.substring(s.indexOf(" ") + 1) + s.substring(s.indexOf(" "))
};
