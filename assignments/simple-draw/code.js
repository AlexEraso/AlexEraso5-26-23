const drawBackground = (horizon, width, height) => {
  drawFilledRect(0, 0, width, horizon, '#ddeeff');
  drawFilledRect(0, horizon, width, height - horizon, 'white');
  drawLine(0, horizon, width, horizon, '#bbb');
}

const drawSnowman = (x, base, size) => {
  const proportions = [3, 4, 5];
  const total = proportions.reduce((tot, p) => tot + p, 0);
  const sizes = proportions.map(p => size * (p / total));

  const [headSize, torsoSize, buttSize] = sizes;

  const headY = (base - size) + headSize / 2;
  const torsoY = headY + headSize / 2 + torsoSize / 2;
  const buttY = torsoY + torsoSize / 2 + buttSize / 2;

  drawHead(x, headY, headSize);
  drawEyes(x, headY, headSize);
  drawNose(x, headY, headSize);
  drawMouth(x, headY, headSize);
  drawHat(x, headY, headSize);
  drawTorso(x, torsoY, torsoSize);
  drawArms(x, torsoY, torsoSize);
  drawButtons(x, torsoY, torsoSize);
  drawButt(x, buttY, buttSize);
}

const drawHead = (x, y, size) => {
  const radius = size / 2;
  drawCircle(x, y, radius + 2, 'black', 3);
  drawFilledCircle(x, y, radius, 'white', 3);
}

const drawEyes = (x, y, size) => {
  const radius = size / 2;
  const spacing = radius * 0.25;
  drawFilledCircle(x - spacing, y - spacing, 4, 'black');
  drawFilledCircle(x + spacing, y - spacing, 4, 'black');
}

const drawNose = (x, y, size) => {
  const length = size * 0.8;
  drawFilledTriangle(x, y, x + length, y + length * 0.2, x, y + length * 0.3, 'orange');
}

const drawMouth = (x, y, size) => {
  const radius = size / 2;
  for (let i = 0; i < 5; i++) {
    const dy = -2 * (2.1 ** Math.abs(i - 2));
    drawFilledCircle(x - (i - 2.3) * radius * 0.21, y + radius * 0.65 + dy, 4, 'black');
  }
}

const drawHat = (x, y, size) => {
  const radius = size / 2;
  const brimTop = y - radius * 0.9;
  const brimWidth = radius * 2.25;
  const brimHeight = brimWidth * 0.08;
  const hatWidth = brimWidth * 0.7;
  const hatHeight = radius * 1.25;
  drawFilledRect(x - brimWidth / 2, brimTop, brimWidth, brimHeight, 'black');
  drawFilledRect(x - hatWidth / 2, brimTop - hatHeight, hatWidth, hatHeight, 'black');
}

const drawTorso = (x, y, size


