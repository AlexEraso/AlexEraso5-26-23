let move = 0;

const board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
];

registerOnclick((x, y) => {
  const marker = move % 2 === 0 ? 'X' : 'O';
  const color = move % 2 === 0 ? 'red' : 'blue';

  const row = 1 + Math.floor(y / (height / 3));
  const col = Math.floor(x / (width / 3));

  const xPos = (col * width / 3) + width / 9;
  const yPos = (row * height / 3) - (height / 9) + (height / 18);

  if (board[row - 1][col] === '') {
    drawText(marker, xPos, yPos, color, Math.min(width, height) * 0.3);

    board[row - 1][col] = marker;
    move++;
  };
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

