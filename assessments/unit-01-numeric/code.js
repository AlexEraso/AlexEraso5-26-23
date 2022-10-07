// Some constants you will need. No need to do anything to these
const JUPITER_GRAVITY = 24.79;
const EARTH_GRAVITY = 9.8;
const G = 6.6743e-11;

// Write your code here. Remember that you get partial credit for a
// syntactically correct function skeleton, more credit for a skeleton with a
// reasonable argument list, yet more credit for a working function, and full
// credit for a clear and simple working function.
const itemsLeftOver = (people , items) => {
  return items%people
};

const areaOfCircle = (radius) => {
  return Math.PI*radius**2;
};

const volumeOfCube = (sideLength) => {
  return sideLength**3
};

const populationGrowth = (currentPopulation , growthRate) => {
  return (currentPopulation * growthRate) 
};

const earnedRunAverage = (earnedRuns , innings) => {
  return (earnedRuns / innings) * 9;
};

const valueOfJewels = (diamond , emerald , diamondInGold , emeraldInGold) => {
  return (diamond * diamondInGold) + (emerald * emeraldInGold);
};

const payWithOvertime = (hoursWorked , hourlyRate , overtimeRate) => {
  return (hoursWorked * hourlyRate) + ((hoursWorked - 8) * overtimeRate) ;
};

const firstClassPostage = (weightOfLetter) => {
  return ;
};

const weightOnJupiter = (weightOfPerson) => {
  return weightOfPerson *  (JUPITER_GRAVITY / EARTH_GRAVITY);
};

const gravity = (distance , body1 , body2) => {
  return ((body1 * body2)/distance**2) * G;
};

