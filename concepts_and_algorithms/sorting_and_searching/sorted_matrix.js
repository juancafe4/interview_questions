// Stair solution in O(n) O(1)

function find_in_matrix(arr, x) {
  if (!arr || arr.lenght === 0) {
    return false;
  }

  if (x < arr[0][0] ||
        x > arr[arr.length - 1][arr[0].length - 1]) {
    return false;
  }

  let col = arr[0].length - 1;
  let row = 0;

  while (row < arr.length && col >= 0) {
    if (x === arr[row][col]) {
      return true;
    }
    else if (x < arr[row][col]) {
      col--
    } else if (x > arr[row][col]) {
      row++;
    }
  }

  return false;
}

let arr1 = [[2, 6, 7, 11],
            [3, 8, 10, 12],
            [4, 9, 11, 13],
            [5, 15, 16, 18]];
console.log(find_in_matrix(arr1, 8));
console.log(find_in_matrix(arr1, 14));
console.log(find_in_matrix(arr1, -4));
console.log(find_in_matrix(arr1, 18));


