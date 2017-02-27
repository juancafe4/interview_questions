function isSafe(board, row, col) {
  // // Check from left to right
  // for (let i = 0; i < board.length; i++) {
  //   if (board[row][i]) {
  //     return false;
  //   }
  // }
  // // Top to bottom
  // for (let i = 0; i < board.length; i++) {
  //   if (board[i][row]) {
  //     return false;
  //   }
  // }

  // // Upper left diagnoal
  // for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
  //   if (board[i][j]) {
  //     return false;
  //   }
  // }

  // // Lower left diagonal 
  // for (i=row, j=col; j >= 0 && i < board.length; i++, j--) {
  //   if (board[i][j]) {
  //     return false;
  //   }
  // }
  // // Lower right diagnoal
  // for (let i = row, j = col; i < board.length && j < board.length; i++, j++) {
  //   if (board[i][j]) {
  //     return false;
  //   }
  // }
  // // Upper right  diagonal 
  // for (i=row, j=col; j < board.length && i >= 0; i--, j++) {
  //   if (board[i][j]) {
  //     return false;
  //   }
  // }
  // console.log('board', board)
  // return true;

  let i, j;
 
    /* Check this row on left side */
    for (i = 0; i < col; i++)
        if (board[row][i])
            return false;
 
    /* Check upper diagonal on left side */
    for (i=row, j=col; i>=0 && j>=0; i--, j--)
        if (board[i][j])
            return false;
 
    /* Check lower diagonal on left side */
    for (i=row, j=col; j>=0 && i<board.length; i++, j--)
        if (board[i][j])
            return false;
 
    return true;
}

function queens(board, col) {
  if (col >= board.length) {
    return true;
  }

  for (let row = 0; row < board.length; row++) {
    if (isSafe(board, row, col)) {
      board[row][col] = 1;
      if (queens(board, col + 1)) { // Recursive case
        return true
      }
      board[row][col] = 0; // BACKTRACKING // GO BACK!
    }
  }
  return false
}


let board = [[0 ,0, 0, 0],
            [0 ,0, 0, 0],
            [0 ,0, 0, 0],
            [0 ,0, 0, 0]];

if (queens(board, 0)) {
  console.log(board)
}