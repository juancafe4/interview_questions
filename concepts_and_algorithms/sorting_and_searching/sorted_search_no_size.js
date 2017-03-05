class Listy {
  constructor(list) {  // Assume sorted
    this.list = list;
  }
  elementAt(i) { // Assume it take O(1) O(1)
    if (!isNaN(this.list[i])) {
      return this.list[i];
    } else {
      return undefined
    }
  }
}


function binarySearch(list, x, low, high) {
  if (low <= high) {

    let mid = Math.floor((low + high) / 2);

    if (list.elementAt(mid) === x) {
      return mid;
    }
    if (list.elementAt(mid) < x) {

      return binarySearch(list, x, mid + 1, high);
    }
    if (list.elementAt(mid) > x) {
      return binarySearch(list, x, low, mid - 1);
    }
  }

  return -1;
}

function search(list, x) {
  let index = 0;

  while (list.elementAt(index) && list.elementAt(index) < x) {
    index = Math.pow(index, 2);
    index++;
  }
  return binarySearch(list, x, index / 2, index);
}

let arr1 = [-5, -1, 0, 2, 3, 5, 7, 10];

let list1 = new Listy(arr1);
console.log(search(list1, 0))
