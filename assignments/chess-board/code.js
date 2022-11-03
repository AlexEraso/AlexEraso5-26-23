const WHITE_KING   = '♔';
const WHITE_QUEEN  = '♕';
const WHITE_ROOK   = '♖';
const WHITE_BISHOP = '♗';
const WHITE_KNIGHT = '♘';
const WHITE_PAWN   = '♙';
const BLACK_KING   = '♚';
const BLACK_QUEEN  = '♛';
const BLACK_ROOK   = '♜';
const BLACK_BISHOP = '♝';
const BLACK_KNIGHT = '♞';
const BLACK_PAWN   = '♟';

// Example of drawing one of the pieces
drawText(WHITE_KING, width/2, height/8, 'black', 64);
drawText()


const board = () => {
  for (let i = 0; i < 7; i++) {
    const x = (i + 1) * width / 8
    drawLine(x, 0, x, height, 'black', 5);
  }
  for (let i = 0; i < 7; i++) {
    const x = (i + 1) * height / 8
    drawLine(0, x, width, x, 'black', 5);
  }

}

board()