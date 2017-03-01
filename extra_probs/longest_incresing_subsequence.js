function longest(n) {
  let table = []

  for (let i = 0; i < n.length; i++) {
    table.push(1); // By default is one the longest
  }
  let i = 1;
  while (i < n.length) {
    for (let j = 0; j <= i; j++) {
      if (n[j] < n[i]) {
        console.log(table[i])
        table[i] += table[j];
      }
    }
    i++;
  }
}

longest([10, 22, 9, 33, 21, 50, 41, 60, 80]);