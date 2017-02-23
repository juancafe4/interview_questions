// O(n^2)
// function badMultiplication(n1, n2) {
//   let count = 0;
//   for (let i = 0; i < n1; i++) {
//     for (let j = 0; j < n2; j++) {
//       count++;
//     }
//   }

//   console.log(count)
// }

// badMultiplication(5, 4);
// badMultiplication(43, 23);

function recursiveMultiply(num1, num2) {
  let smaller = num1 < num2 ? num1:num2;
  let bigger = num1 > num2 ? num1:num2;
  return recursiveMultiplyUtil(smaller, bigger);
}

function recursiveMultiplyUtil(smaller, bigger) {
  if (smaller === 0) { // multiply by zero
    return 0;
  }
  if (smaller === 1) { // multiply by one
    return bigger;
  }
  let s = smaller >> 1;
  let side1 = recursiveMultiplyUtil(s, bigger);
  let side2 = side1;
  if (s % 2 === 1) {
    side2 = recursiveMultiplyUtil(smaller - s, bigger);
  }
  return side1 + side2;
}

console.log(recursiveMultiply(5, 4));
console.log(recursiveMultiply(3, 6));


