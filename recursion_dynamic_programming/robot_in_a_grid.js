function findPath(matrix) {
  if (matrix === null || !matrix.length) {
    return null
  }
  let table = {};
  let path = [];
  if (getPath(path, matrix, matrix.length - 1, matrix[0].length - 1, table)){
    console.log(table);
    return path;
  }
  throw new Error('Path not found');
}
function getPath(path, matrix, row, col, table) {
  if (row < 0 || col < 0 || matrix[row][col]) { // Case
    return false;
  }
  if (table[row] && table[row] === col) {
    return false;
  }
  let origin = (row === 0) &&  (col === 0);
  if (origin || getPath(path, matrix, row, col - 1, table)
    || getPath(path, matrix, row - 1, col, table)) {
    path.push({row, col});
    return true;
  }
  table[row] = col;
  return false;
}


// O(2^r+c) rintime 
// O(rc) with dynamic programming
console.log(findPath([ [0, 0, 0],
                       [0, 1, 0],
                       [0, 0, 0],
                            ]));

let m = [[ 0, 0, 1, 1, 0],
        [0, 1, 0, 1, 0],
        [0, 0, 1, 0, 0],
        [1, 1, 0, 0, 0]
                      ];
console.log(findPath(m));


// This does not save in a table if it can find a path but to
// do not waste time and not look every part is better to save it 
// in a table a lookup table 


