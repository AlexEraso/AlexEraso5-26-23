/*
 * You will need this function for some of the problems. It returns a random
 * number between 0, inclusive, and n, exclusive. Thus rand(3) could possibly
 * return 0, 1, or 2 but will not return 3.
 */
const rand = (n) => Math.floor(Math.random() * n);

// Write your code here. Remember that you get partial credit for a
// syntactically correct function skeleton, more credit for a skeleton with a
// reasonable argument list, yet more credit for a working function, and full
// credit for a clear and simple working function.

const fireAlarm = (pulled , smoke , drill) => {
  return pulled || smoke || drill
};

const canBePresident = ( thirtyFive, citizen , fourteenYears) => {
  return thirtyFive || citizen || fourteenYears
};

const willSeeTweet = (follows , retweeted, blocked) => {
  return follows || retweeted || blocked
};

const evenGreaterThanZero = (number) => {
  return even && number<0
};

const isLeapYear = (divisibleByFour , divisibleByHundred) => {
  return divisibleByFour ||  !divisibleByHundred && 
};

const firstAndLast = (s) => {
  return s.substring(1)	+ s.substring(s.length - 1, s.length)	
};

const swapFrontAndBack = (s) => {
  return 
};

const simplePigLatin = (singleWord , firstVowel) => {
  return 
};

const randomCharacter = () => {
  return 
};

const randomCharacterUpDown = () => {
  return
};

const isAllUpperCase = () => {
  return 
};

const sameIgnoringCase = () => {
  return 
};

