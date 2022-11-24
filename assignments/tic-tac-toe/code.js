let move = 0;

registerOnclick((x, y) => {
  const marker = move % 2 === 0 ? 'X' : 'O';
  const color = move % 2 === 0 ? 'red' : 'blue';

  const row = 1 + Math.floor(y / (height / 3));
  const col = Math.floor(x / (width / 3));
  // chk arr at row,col
  // look for existence of any value
  // if that position is empty, then there's no x/o
  // so it's a safe move
  // otherwise, skip it

  const xPos = (col * width / 3) + width / 9;
  const yPos = (row * height / 3) - (height / 9) + (height / 18);


  drawText(marker, xPos, yPos, color, Math.min(width, height) * 0.3);
// save x to arr at row,col

//  0  1  2
//  3  4  5
//  6  7  8

// arr[9] = {0, 1, 2, 3, 4, 5, 6, 7, 8};
// arr[3][3] = { {0, 1, 2},
//               {3, 4, 5},
//               {6, 7, 8}}



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