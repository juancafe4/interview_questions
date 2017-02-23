// O(n^2)
function badMultiplication(n1, n2) {
  let count = 0;
  for (let i = 0; i < n1; i++) {
    for (let j = 0; j < n2; j++) {
      count++;
    }
  }

  console.log(count)
}

badMultiplication(5, 4);
badMultiplication(43, 23);