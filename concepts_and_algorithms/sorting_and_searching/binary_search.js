// Iteration
// function binary_search(arr, x) {
//   let low = 0;
//   let high = arr.length - 1

//   while (low <= high) {
//     let mid = Math.floor((low + high) / 2);

//     if (arr[mid] < x) {
//       low = mid + 1;
//     }
//     else if (arr[mid] > x) {
//       high = mid - 1;
//     } else {
//       return x;
//     }
//   }

//   return 'not found';
// }

function binary_search(arr, x, low, high) {
  if (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] < x) {
      low = mid + 1;
      return binary_search(arr, x, low, high);
    }
    else if (arr[mid] > x) {
      high = mid - 1;
      return binary_search(arr, x, low, high);
    } else {
      return x;
    }
  }
  return 'not found';
}

let arr1 = [-4, -3, 3, 4, 5, 55];

console.log(binary_search(arr1, 4, 0, arr1.length - 1));
console.log(binary_search(arr1, 2, 0, arr1.length - 1));