function bubble_sort(a) {
  for (let i = 0; i < a.length; i++) {
    for (let j = 1; j < a.length; j++) {
      if (a[j - 1] > a[j]) {
        let temp = a[j - 1];
        a[j - 1] = a[j];
        a[j] = temp;
      }
    }
  }

  console.log(a);
}


bubble_sort([ 4, 3, 2, 4, 5 ]);
bubble_sort([5, 6, 2, 55, 3, 1, 999, -1]);
bubble_sort([ -4, 3, 2, 4, -5, 1]);

