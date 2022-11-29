let move = 0;

const board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
];


const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [1, 4, 7],
  [2, 5, 8],
  [1, 4, 7],
  [0, 3, 6],
];



registerOnclick((x, y) => {
  const marker = move % 2 === 0 ? 'X' : 'O';
  const color = move % 2 === 0 ? 'red' : 'blue';

  const row = 1 + Math.floor(y / (height / 3));
  const col = Math.floor(x / (width / 3));

  board[row - 1][col] = marker;
 


  const xPos = (col * width / 3) + width / 9;
  const yPos = (row * height / 3) - (height / 9) + (height / 18);


  drawText(marker, xPos, yPos, color, Math.min(width, height) * 0.3);


  move++;
});

const drawBoard = () => {
  for (let i = 0; i < 2; i++) {
    const x = (i + 1) * width / 3
    drawLine(x, 0, x, height, 'black', 5);
  }
  for (let i = 0; i < 2; i++) {
    const x = (i + 1) * height / 3
    drawLine(0, x, width, x, 'black', 5);
  }
}

drawBoard()