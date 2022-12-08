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

  const xPos =  (col * width / 3) + width / 9;
  const yPos = (row * height / 3) - (height / 9) + (height / 18);

  if (board[row - 1][col] === '') {
    drawText(marker, xPos, yPos, color, Math.min(width, height) * 0.3);

    board[row - 1][col] = marker;
    move++;
    checkWinner()
  };
});

function checkWinner() { 
  //checking horizontally: y for first row is 60, second row is 170, third is 280
    if (board[0][0] == board[0][1] && board[0][1] == board[0][2] && board[0][0] != '') {
      drawLine(0, 60, 1000, 60, 'yellow', 20);
    }
  }
  //checking vertically: x for first column is 135, second column is 435, third column is 735 
  for (let c = 0; c < 3; c++) {
    if (board[0][c] == board[1][c] && board[1][c] == board[2][c] && board[0][c] != '') {
      drawLine(735, 0, 735, height, 'yellow', 20);

    }
  }
  //checking diagonally from left to right
  if (board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0][0] != '') {
    drawLine(0, 0, width, height, 'yellow', 20);
  }

  //checking diagonally from right to left
  if (board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[0][2] != '') {
    drawLine(0, height, width, 0, 'yellow', 20);
  }
}





//drawLine(x1, y1, x2, y2, color, lineWidth)

//horizontal

//drawLine(0, 100, 1000, 100, 'red', 30);

//vertical

//drawLine(100, 400, 100, 0, 'red', 30);


//diagonal left to right 

//drawLine(-800, -200, 900, 300, 'red', 30);

//diagonal right to left

//drawLine(0, 400, 900, 0,'red', 30);


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

