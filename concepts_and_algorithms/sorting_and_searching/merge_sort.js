function merge_sort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid, arr.length);
  return merge(merge_sort(left), merge_sort(right));
}

function merge(left, right) {
  let result = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  while (left.length) {
    result.push(left.shift());
  }

  while (right.length) {
    result.push(right.shift());
  }

  return result;
}


console.log(merge_sort([ 4, 3, 2, 4, 5 ]));
console.log(merge_sort([5, 6, 2, 55, 3, 1, 999, -1]));
console.log(merge_sort([ -4, 3, 2, 4, -5, 1]));