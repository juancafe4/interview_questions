function paintFill(screen, x, y, fill) {
  if (screen && screen.length !== 0) {
    let prevColor = screen[x][y];
    paintFillUtil(screen, x, y, prevColor, fill);
  }
  return screen;
}

function paintFillUtil(screen, x, y, prevColor, fill) {
  if (x < 0 || x >= screen[0].length) {
    return;
  }
  if (y < 0 || y >= screen.length) {
    return;
  }
  if (screen[x][y] !== prevColor) {
    return;
  }
  screen[x][y] = fill;

  paintFillUtil(screen, x + 1, y, prevColor, fill) // South
  paintFillUtil(screen, x - 1, y, prevColor, fill) // North
  paintFillUtil(screen, x, y + 1, prevColor, fill) // East
  paintFillUtil(screen, x, y - 1, prevColor, fill) // West
}

let screen = [[1, 1, 1, 1, 1, 1, 1, 1],
                      [1, 1, 1, 1, 1, 1, 0, 0],
                      [1, 0, 0, 1, 1, 0, 1, 1],
                      [1, 2, 2, 2, 2, 0, 1, 0],
                      [1, 1, 1, 2, 2, 0, 1, 0],
                      [1, 1, 1, 2, 2, 2, 2, 0],
                      [1, 1, 1, 1, 1, 2, 1, 1],
                      [1, 1, 1, 1, 1, 2, 2, 1],
                      ];

console.log(paintFill(screen, 4, 4, 3));