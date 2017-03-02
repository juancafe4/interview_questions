// Runtime O(kn) O(K + n)
function countSort(arr, exp) {
  let bucket = {};
  for (let i = 0; i < 10; i++ ) {
    bucket[i] = [];
  }

  for (let i = 0; i < arr.length; i++) {
    bucket[Math.round(arr[i]/exp % 10)].push(arr[i]);
  }

  let output = [];

  for (let i = 0; i < 10; i++ ) {
    output.push(...bucket[i]);
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i] = output[i];
  }
}
function radixSort(arr) {
  let max = Math.max(...arr);

  for (let exp = 1; max/exp > 0; exp *= 10) {
    countSort(arr, exp);
  }

  console.log(arr)
}


radixSort([170, 45, 75, 90, 802, 24, 2, 66])
radixSort([1, 45, 759, 2, 24, 2, 6])
