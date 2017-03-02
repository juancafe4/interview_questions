function insertion_sort(a) {
  for (let i = 1; i < a.length; i++) {
    let j = i - 1;
    let key = a[i]
    while (j >= 0 && key < a[j]) {
      a[j + 1] = a[j];
      j--;
    }
    a[j + 1] = key
  }

  console.log(a)
}
insertion_sort([ 4, 3, 2, 4, 5 ]);
insertion_sort([5, 6, 2, 55, 3, 1, 999, -1]);
insertion_sort([ -4, 3, 2, 4, -5, 1]);