function selection_sort(a) {
  for (let i = 0; i < a.length; i++) {
    let j = i + 1;
    let index = i;
    let min = a[i];

    while (j < a.length) {
      if (min > a[j]) {
        index = j;
        min = a[j]
      }
      j++;
    }
    if (a[i] > a[index]) {
      let temp = a[i];
      a[i] = a[index];
      a[index] = temp;
    }
  }

  console.log(a)
}

selection_sort([ 4, 3, 2, 4, 5 ]);
selection_sort([5, 6, 2, 55, 3, 1, 999, -1]);
selection_sort([ -4, 3, 2, 4, -5, 1]);