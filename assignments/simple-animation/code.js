
const drawFrame = (time) => {
  clear();



  
  drawFilledRect(-10, height - 200, 900, 300, 'green');

drawFilledRect(-10, height - 600, 1400, 400, 'lightblue');

drawFilledCircle(width - 475, height - 575, 50, 'yellow');



drawFilledRect(110, height - 375, 300, 225, 'grey');

drawFilledRect(225, height - 260, 75, 115, 'brown');

drawFilledCircle(width - 210, height - 190, 5, 'white');
  drawFilledCircle((time / 1.9) % width, height / 1.2, 15, 'white');
  drawFilledCircle((time / 2) % width, height / 1.2, 15, 'darkblue');
    drawFilledCircle((time / 2.1) % width, height / 1.2, 15, 'red');


  drawFallingFilledTriangle(width / 2, time);
};


const drawFilledTriangle = (x1, y1, x2, y2, x3, y3, color, width = 1) => {
  drawLine(x1, y1, x2, y2, color, width);
  drawLine(x2, y2, x3, y3, color, width);
  drawLine(x3, y3, x1, y1, color, width);
};

const drawFallingFilledTriangle = (x, time) => {
 
  let x1 = x - 75;
  let x2 = x;
  let x3 = x + 25;


  let y1 = (time / 50) % height;
  let y2 = y1 + 75;
  let y3 = y1 - 23;


  drawFilledTriangle(x1, y1, x2, y2, x3, y3, 'orange', 3);




};

const drawSquare = (x1, y1, x2, y2, x3, y3, color, width = 1) => {
  drawLine(x1, y1, x2, y2, color, width);
  drawLine(x2, y2, x3, y3, color, width);
  drawLine(x3, y3, x1, y1, color, width);

const drawFallingSquareTriangle = (x, time) => {
 
  let = x - 75;
  let  = x;
  let  = x + 25;


  let y1 = (time / 50) % height;
  let  = y1 + 75;
  let  = y1 - 23;
  drawFilledTriangle(x1, y1, x2, y2, x3, y3, 'green', 3);


animate(drawFrame);
