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

function binary_search

let arr1 = [-4, -3, 3, 4, 5, 55];

console.log(binary_search(arr1, 4));
console.log(binary_search(arr1, 2));