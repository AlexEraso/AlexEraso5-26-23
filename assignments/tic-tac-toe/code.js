let move = 0;

registerOnclick((x, y) => {
  if (move % 2 === 0) {
  if (x < width/3 && y < height/3){
  if (x < width/2 && y < height/2){
    drawText('X', 75,  40, 'red', Math.min(width, height) * 0.3);}
  } else {
    drawText('O', x, y, 'blue', Math.min(width, height) * 0.3);
  }
  }
  move++;
});
const board = () => {
  for (let i = 0; i < 2; i++) {
    const x = (i + 1) * width / 3
    drawLine(x, 0, x, height, 'black', 5);
  }
  for (let i = 0; i < 2; i++) {
    const x = (i + 1) * height / 3
    drawLine(0, x, width, x, 'black', 5);
  }

}

board()