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
  let bigger = num1 < num2 ? num2:num1;
  return recursiveMultiplyUtil(smaller, bigger);
}

function recursiveMultiplyUtil(smaller, bigger) {
  // Base cases
  if (smaller === 0) {
    return 0;
  }
  if (smaller === 1) {
    return bigger;
  }
  // Recursive case 
  return recursiveMultiplyUtil(smaller - 1, bigger) + bigger;
}

console.log(recursiveMultiply(5, 4));
console.log(recursiveMultiply(13, 33));


