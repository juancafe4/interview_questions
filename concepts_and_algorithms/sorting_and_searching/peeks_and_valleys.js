// Runtime O(nlogn) 
// function peaks_and_valleys(arr) {
//   arr.sort();

//   for (let i = 1; i < arr.length; i += 2) {
//     let temp = arr[i - 1];
//     arr[i - 1] = arr[i]
//     arr[i] = temp;
//   }
// }

// O(n)
function peaks_valleys(arr) {
  for (let i = 1; i < arr.length; i += 2) {
    let biggestIndex = maxIndex(i - 1, i, i + 1);

    if (biggestIndex !== i) {
      let temp = arr[biggestIndex];
      arr[biggestIndex] = arr[i]
      arr[i] = temp;
    }
  }
}

function maxIndex(arr, a, b, c) {
  let len = arr.length;

  let aVal = a >= 0 && a < len ? arr[a]:Number.MIN_VALUE;
  let bVal = b >= 0 && b < len ? arr[b]:Number.MIN_VALUE;
  let cVal = c >= 0 && c < len ? arr[c]:Number.MIN_VALUE;

  let max = Math.max(aVal, bVal, cVal);

  if (max === aVal) return a;
  else if (max === bVal) return b;
  else return c
}
let arr1 = [5, 8, 6, 2, 3, 4, 6];
peaks_valleys(arr1);

console.log(arr1)

