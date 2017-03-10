// Runtime O(nlogn) 
function peaks_and_valleys(arr) {
  arr.sort();

  for (let i = 1; i < arr.length; i += 2) {
    let temp = arr[i - 1];
    arr[i - 1] = arr[i]
    arr[i] = temp;
  }
}


let arr1 = [5, 8, 6, 2, 3, 4, 6];
peaks_and_valleys(arr1);

console.log(arr1)

