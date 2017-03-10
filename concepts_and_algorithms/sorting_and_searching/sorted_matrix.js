// Stair solution in O(n) O(1)

// function find_in_matrix(arr, x) {
//   if (!arr || arr.lenght === 0) {
//     return false;
//   }

//   if (x < arr[0][0] ||
//         x > arr[arr.length - 1][arr[0].length - 1]) {
//     return false;
//   }

//   let col = arr[0].length - 1;
//   let row = 0;

//   while (row < arr.length && col >= 0) {
//     if (x === arr[row][col]) {
//       return true;
//     }
//     else if (x < arr[row][col]) {
//       col--
//     } else if (x > arr[row][col]) {
//       row++;
//     }
//   }

//   return false;
// }


// A divide and conquer method to search a given key in mat[]
// in rows from fromRow to toRow and columns from fromCol to
// toCol 
function search(mat, fromRow, toRow, 
                              fromCol, toCol, key) {
  // Find middle and compare with middle 
  let i = (fromRow + toRow) / 2;
  let j = (fromCol + toCol) / 2;
  if (mat[i][j] == key) // If key is present at middle
    console.log("Found "+ key + " at "+ i + " " + j);
  else {
    // right-up quarter of matrix is searched in all cases.
    // Provided it is different from current call
    if (i!=toRow || j!=fromCol)
      search(mat,fromRow,i,j,toCol,key);
 
    // Special case for iteration with 1*2 matrix
    // mat[i][j] and mat[i][j+1] are only two elements.
    // So just check second element
    if (fromRow == toRow && fromCol + 1 == toCol)
      if (mat[fromRow][toCol] == key)
        console.log("Found "+ key+ " at "+ fromRow + " " + toCol);
 
    // If middle key is lesser then search lower horizontal 
    // matrix and right hand side matrix
    if (mat[i][j] < key) {
      // search lower horizontal if such matrix exists
      if (i+1<=toRow)
        search(mat, i+1, toRow, fromCol, toCol, key);
      }
 
      // If middle key is greater then search left vertical 
      // matrix and right hand side matrix
      else {
        // search left vertical if such matrix exists
          if (j-1>=fromCol)
            search(mat, fromRow, toRow, fromCol, j-1, key);
      }
  }
    }
}
let arr1 = [[2, 6, 7, 11],
            [3, 8, 10, 12],
            [4, 9, 11, 13],
            [5, 15, 16, 18]];
console.log(find_in_matrix(arr1, 8));
console.log(find_in_matrix(arr1, 14));
console.log(find_in_matrix(arr1, -4));
console.log(find_in_matrix(arr1, 18));


