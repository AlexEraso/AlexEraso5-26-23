const boardSize = Math.min(width, height) * 0.75;
const boardLeft = (width - boardSize) / 2;
const boardTop = (height - boardSize) / 2;
const cellSize = boardSize / 3;
const fontSize = boardSize / 3;
const lineEndAdjustment = cellSize * 0.7;

let move = 0;

const board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
];

const lines = [
  // Rows
  [[0, 0], [0, 1], [0, 2]],
  [[1, 0], [1, 1], [1, 2]],
  [[2, 0], [2, 1], [2, 2]],

  // Cols
  [[0, 0], [1, 0], [2, 0]],
  [[0, 1], [1, 1], [2, 1]],
  [[0, 2], [1, 2], [2, 2]],

  // Diagonals
  [[0, 0], [1, 1], [2, 2]],
  [[2, 0], [1, 1], [0, 2]],
];

const drawBoard = () => {
  const x1 = boardLeft + cellSize;
  const x2 = boardLeft + 2 * cellSize;
  const y1 = boardTop + cellSize;
  const y2 = boardTop + 2 * cellSize;;
  drawLine(x1, boardTop, x1, boardTop + boardSize, 'grey', 2);
  drawLine(x2, boardTop, x2, boardTop + boardSize, 'grey', 2);
  drawLine(boardLeft, y1, boardLeft + boardSize, y1, 'grey', 2);
  drawLine(boardLeft, y2, boardLeft + boardSize, y2, 'grey', 2);
};

const findWinner = () => {
  // Check if there's a winner already.
  for (let i = 0; i < lines.length; i++) {
    r = lines[i][0][0];
    c = lines[i][0][1];
    const m0 = board[r][c];
    r = lines[i][1][0];
    c = lines[i][1][1];
    const m1 = board[r][c];
    r = lines[i][2][0];
    c = lines[i][2][1];
    const m2 = board[r][c];
    if (m0 !== '' && m0 === m1 && m0 === m2) {
      winner = lines[i];
    }
  }
};
registerOnclick((x, y) => {

  let winner = null;
  let r;
  let c;

  1

  r = Math.floor((y - boardTop) / cellSize);
  c = Math.floor((x - boardLeft) / cellSize);

  // Only do anything if it's a legal move and the game isn't over.
  if (winner === null && 0 <= r && r < 3 && 0 <= c && c < 3 && board[r][c] === '') {

    // Draw the mark and record the move
    const marker = move % 2 === 0 ? 'X' : 'O';
    const x = boardLeft + c * cellSize + cellSize / 2;
    const y = boardTop + r * cellSize + cellSize / 2;
    const nudge = marker === 'O' ? cellSize / 9 : cellSize / 19;
    drawText(marker, x - (fontSize * 0.3 + nudge), y + fontSize * 0.3, 'black', fontSize);
    board[r][c] = marker;
    move++;

    // Check if there's a winner now
    winner = null;
    for (let i = 0; i < lines.length; i++) {
      r = lines[i][0][0];
      c = lines[i][0][1];
      const m0 = board[r][c];
      r = lines[i][1][0];
      c = lines[i][1][1];
      const m1 = board[r][c];
      r = lines[i][2][0];
      c = lines[i][2][1];
      const m2 = board[r][c];
      if (m0 !== '' && m0 === m1 && m0 === m2) {
        winner = lines[i];
      }
    }
    if (winner !== null) {
      // Draw the line through three in a row
      const [r1, c1] = winner[0];
      const [r2, c2] = winner[winner.length - 1];

      const x1 = boardLeft + c1 * cellSize + cellSize / 2;
      const y1 = boardTop + r1 * cellSize + cellSize / 2;
      const x2 = boardLeft + c2 * cellSize + cellSize / 2;
      const y2 = boardTop + r2 * cellSize + cellSize / 2;

      let adjX1 = x1;
      let adjX2 = x2;
      let adjY1 = y1;
      let adjY2 = y2;

      if (y1 === y2 || x1 !== x2) {
        adjX1 -= lineEndAdjustment;
        adjX2 += lineEndAdjustment;
      }

      if (x1 === x2 || y1 !== y2) {
        const slope = y1 < y2 ? 1 : -1;
        adjY1 -= (slope * lineEndAdjustment);
        adjY2 += (slope * lineEndAdjustment);
      }

      drawLine(adjX1, adjY1, adjX2, adjY2, 'red', 15);
    }
  }
});

drawBoard();