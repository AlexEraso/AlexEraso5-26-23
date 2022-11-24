let move = 0;

registerOnclick((x, y) => {
  const marker = move % 2 === 0 ? 'X' : 'O';
  const color = move % 2 === 0 ? 'red' : 'blue '
  
  const col = Math.floor(x / (width / 3));
  const xPos = (col * width / 3) + width / 9;

  const row = 1 + Math.floor(y / height / 3);
  const yPos = (row * height / 3) - (height / 9) + (height / 18);

  drawText(marker, xPos, yPos, color, Math.min(width, height) * 0.3);

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