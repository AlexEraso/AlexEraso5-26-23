
//Line of Circles
/*
const lineofcircles = (r) => {
  for (let x = 0; x < width/(r*2); x++) {
    drawFilledCircle(x * r*2, height - 250, r, 'blue');
  }
};

lineofcircles(13)

//Line of Circles Alternating 

for (let x = 0; x < 100; x++) {
  if (x % 2 == 0) {
    drawFilledCircle(x * 25, height - 250, 13, 'blue');
  } else {
    drawFilledCircle(x * 25, height - 250, 13, 'red');
  }
}
*/
//Concentric Circles

const cocentriccircles = (n) => {
  for (let x = 0; x < n; x++) {
    if (x % 2 === 0) {
      drawFilledCircle(width - 450, height - 230, 225 - x * 10, 'yellow');
    } else {
      drawFilledCircle(width - 450, height - 230, 225 - x * 10, 'black');
    }
  }
};

cocentriccircles(10)
