const fireAlarm = (pulled, smoke, drill) => {
  return pulled || smoke || drill
};

const canBePresident = (age, naturalBornCitizen, usFourteenYears) => {
  return age >= 35 && naturalBornCitizen && usFourteenYears >= 14
};

