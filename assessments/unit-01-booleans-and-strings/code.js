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
  return thirtyFive >= 35 && citizen && fourteenYears >= 14
};

const willSeeTweet = (follows , retweeted, blocked) => {
  return (follows || retweeted) && !blocked
};

const evenGreaterThanZero = (n) => {
  return n%2 === 0 && number<0
};

const isLeapYear = (year) => {
  if(year % 100 === 0){
  if(year % 400 === 0){
    return true;
  }else{
    return false;
  }
}else if(year % 4 === 0){
  return true;
};

//Correct Answer 

const isLeapYear = (year) => {
const even4 = year % 4 === 0;
const even100 = year % 100 === 0;
const even400 = year % 400 === 0;

return even4 && (!even100 || even400);
}

const firstAndLast = (s) => {
  return s.substring(0 , 1)	+ s.substring(s.length - 1, s.length)	
};

const swapFrontAndBack = (s) => {
  return s.substring (s.length/2 ) + s.substring(0, s.length/2)

};

const simplePigLatin = (singleWord , firstVowel) => {
  return 
};

const randomCharacter = () => {
  return 
};

//const rand = (n) => Math.floor(Math.random() * n);

const randomCharacterUpDown = () => {
  return
};

const isAllUpperCase = (s) => {
  if (s === s.toUpperCase(s)){
  return true;
  }else{
  return false;
}};

const sameIgnoringCase = (word1 , word2) => {
  if(s.toLowerCase(word1) === s.toLowerCase(word2)){
    return true;
  }else{
    return false;
  } 
};

