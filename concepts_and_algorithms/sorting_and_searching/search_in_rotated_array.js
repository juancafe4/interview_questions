// Runtime O(n)

// function search(list, item) {
//   let len = list.length;
//   let min = Math.min(...list); // Min element;
//   let low = 0;

//   // Find min index
//   for (let i = 0; i < len; i++) {
//     if (list[i] === min) {
//       low = i;
//     }
//   }

//   let high = low + len - 1; // Highest index


//   while (low < high) {
//     let mid = Math.floor((low + high) / 2);
//     if (item > list[mid % len]) {
//       low = mid + 1;
//     } else if(item < list[mid % len]) {
//       high = mid - 1;
//     } else {
//       return mid % len
//     }
//   }

//   return -1;
// }

// Binary search function
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
      return mid;
    }
  }
  return 'not found';
}

// Find the minimum value start point the pivot
function findPivot(arr, low, high) {
  // Base case
  if (low > high) {
    return 0;
  }
  let mid = Math.floor((low + high) / 2);

  if (arr[mid] > arr[mid + 1]) { // We find pivot
    return mid + 1;
  }

  // Recursive case
  if (arr[low] <= arr[mid]) {
    return findPivot(arr, mid + 1, high);
  }
  if (arr[high] > arr[mid]) {
    return findPivot(arr, low, mid - 1);
  }
}

// Binary search O(logn) runtime O(1)
function search(arr, key) {
  let pivot = 0;
  if (!arr || !arr.length) {
    return -1;
  }
  // Check if there is rotation arr[0] <= arr[end] 
  if (arr.length !== 1 || arr[0] > arr[arr.length - 1]) {
    pivot = findPivot(arr, 0, arr.length - 1);
  }
  if (arr[pivot] === key) {
    return pivot;
  }

  // If zero perform a normal binary sarch search
  if (pivot === 0) {
    return binary_search(arr, key, 0, arr.length - 1);
  }
  if (arr[0] >= key) {
    return binary_search(arr, key, pivot, arr.length - 1);
  }
  if (arr[0] < key) {
    return binary_search(arr, key, 0, pivot - 1);
  }
}

let list1 = [5, 6, 7, 8, 9, 10, 1, 2, 3];
console.log(search(list1, 3));
console.log(search(list1, 7));
let list2 =[5, 6, 7, 8, 9, 10, 1, 2, 3];
console.log(search(list2, 30));

let list3 = [30, 40, 50, 10, 20];
console.log(search(list3, 10));

let list4 = [1, 2, 3, 4, 5];
console.log(search(list4, 1));

console.log(search(list4, 5));
