function setToZeros(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0 ) {
        matrix[0][j] = true;
        matrix[i][0] = true;
      }
    }
  }

  for (let rows = 0; rows < matrix[0].length; rows++) {
    if (matrix[0][rows] === true) {
      for (let cols = 0; cols < matrix.length; cols++) {
        if (matrix[cols][rows] !== true)
          matrix[cols][rows] = 0
      }
    }
  }


  for (let cols = 0; cols < matrix.length; cols++) {
    if (matrix[cols][0] === true) {
      for (let rows = 0; rows < matrix[0].length; rows++) {
        matrix[cols][rows] = 0
      }
    }
  }

  for (let cols = 0; cols < matrix.length; cols++) {
      for (let rows = 0; rows < matrix[0].length; rows++) {
         if (matrix[cols][rows] === true) {
            matrix[cols][rows] = 0;
         }
      }
  }
  
  return matrix   
}
//O(NxM O(1))

console.log(setToZeros([ 
        [1, 2, 3],
        [4, 0, 6],
        [7, 8, 9]         
       ]));

console.log(setToZeros([ 
        [0, 2, 3, 0],
        [4, 3, 6, 3],
        [0, 8, 9, 0]         
       ]));

console.log(setToZeros( [
          [ 1,  2,  3,  4],
          [ 5,  6,  7,  8],
          [ 9,  0, 11, 12],
          [13, 14, 15,  0],
          [17, 18, 19, 20]
        ]))

console.log(setToZeros([
          [ 1,  2,  3,  4],
          [ 5,  6,  7,  8],
          [ 9, 10, 11, 12],
          [13, 14, 15, 16]
        ]))