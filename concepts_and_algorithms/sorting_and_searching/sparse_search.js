function binary_search(arr, x, low, high) {
  if (low > high) {
    return -1;
  }

  let mid = Math.floor((low + high) / 2);

  if (arr[mid] === '') {  // Empty string look for the next non empty string
    let left = mid - 1;
    let right = mid + 1;

    while (true) {
      if (left < low && right > high) {
        return -1; // we are sunrrounded by empty strings
      }

      if (left >= low && arr[left] !== '') {
        mid = left;
        break;
      }

      if (right <= high && arr[right] !== '') {
        mid = right;
        break;
      }

      right++;
      left--;
    }
  }
  if (arr[mid] === x) {
    return mid;
  }
  if (arr[mid] < x) {
    return binary_search(arr, x, mid + 1, high);
  }
  if (arr[mid] > x) {
    return binary_search(arr, x, low, mid - 1);
  }
}

function sparse_search(arr, x) {
  if (!arr || !arr.length || !x || x === '') {
    return -1;
  }
  return binary_search(arr, x, 0, arr.length - 1);
}

let arr1 = ["at", "", "", "", "ball", "", "", "car", "", "", "dad", "","",];

console.log(sparse_search(arr1, 'car'));
console.log(sparse_search(arr1, 'at'));
console.log(sparse_search(arr1, 'dad'));

console.log(sparse_search(["", "", "a"], '0'));
console.log(sparse_search(["", "", "a"], ''));
console.log(sparse_search(["", "", "a"], 'a'))





