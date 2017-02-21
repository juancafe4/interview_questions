function magicIndex(arr) {
  let index = findIndex(arr, 0, arr.length - 1);

  return index !== -1 ? index:-1;
}

function findIndex(arr, start, end) {
  if (start > end) {
    return -1;
  }

  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === mid) {
    return mid;
  }
  let left = findIndex(arr, start, mid - 1);
  if (left >= 0) {
    return left;
  }

  let right = findIndex(arr, mid + 1, end);
  return right;
}

console.log(magicIndex([-2, -1, 0, 1, 4, 7, 9, 11]));
console.log(magicIndex([-10, -5, 2, 2, 2, 3, 4, 7, 9, 12, 13]));
