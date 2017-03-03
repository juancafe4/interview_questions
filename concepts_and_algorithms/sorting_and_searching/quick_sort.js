function quick_sort(list, start, end) {
  let index = partition(list, start, end);

  if (start < index - 1) {
    quick_sort(list, start, index - 1);
  }
  if (end > index) {
    quick_sort(list, index, end);
  }
}


function partition(list, start , end) {
  let pivot = list[end];

  let index = -1;
  let j = 0;
  while (j <= end) {
    if (list[j] <= pivot) {
      // Increase position to 
      // alocate smaller element than the pivot
      index++;
      // Swap smaller with greater than the pivot
      let temp = list[index];
      list[index] = list[j];
      list[j] = temp;
    }
    j++
  }
  return index;
}

let list1 = [ 4, 3, 2, 4, 5 ];
quick_sort(list1, 0, list1.length - 1)
console.log(list1);
let list2 = [5, 6, 2, 55, 3, 1, 999, -1];
quick_sort(list2, 0, list2.length - 1)
console.log(list2);