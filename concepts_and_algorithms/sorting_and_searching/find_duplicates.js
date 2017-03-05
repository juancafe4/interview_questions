// Rintime O(n) space O(1)\
// Given an array of n elements 
// which contains elements with 
// values ranging from 0 to k-1(thus k 
//   will always be smaller than n), and 
// can have p number of repeating elements 
// with frequency f_i. Find each repeating 
// element with its frequency.


function find_duplicates(arr) {
  for (let i in arr) {
    if (arr[Math.abs(arr[i])] >= 0) {
      arr[Math.abs(arr[i])] = arr[Math.abs(arr[i])] * -1;
    } else {
      console.log(Math.abs(arr[i]));
    }
  }
}

// let arr1 = [1, 2, 3, 1, 3, 6, 6];
// find_duplicates(arr1);

let arr2 = [1, 6, 3, 1, 3, 6];
find_duplicates(arr2);