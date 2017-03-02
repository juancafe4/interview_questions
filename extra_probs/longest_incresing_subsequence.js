// Dynamic Programming runtime O(n^2) displays only an integer 
// O(n) space

// function longest(n) {
//   let table = []
//   for (let i = 0; i < n.length; i++) {
//     table.push(1); // By default is one the longest
//   }

//   for (let i = 1; i < n.length; i++) {
//     let arr = [];
//     for (let j = 0; j < i; j++) {
//       let temp = table[j] + 1;
//       if (n[j] < n[i] && table[i] <= temp) {
//         table[i] = temp;
//       }
//     }
//   }
//   return Math.max(...table);
// }


// Returns an array space O(n^2)
function longest(n) {
  if (!n || !n.length) {
    return;
  }
  let table = new Array(n.length);
  for (let i = 0 ; i < table.length; i++) {
    table[i] = [];
  }
  table[0].push(n[0]);
  for (let i = 1; i < n.length; i++) {
    for (let j = 0; j < i; j++) {
      /* L[i] = {Max(L[j])} + arr[i]
      where j < i and arr[j] < arr[i] */
      if ((n[j] < n[i]) && (table[i].length < table[j].length + 1)) {
        table[i] = [...table[j]] 
      }
    }
    
    table[i].push(n[i]);
  }
  let max = table[0];
  for (let i = 1 ; i < table.length; i++) {
    if (max.length < table[i].length) {
      max = table[i];
    }
  }

  return max;
}
console.log(longest([10, 22, 9, 33, 21, 50, 41, 60, 80]));
console.log(longest([3, 4, -1, 0, 6, 2, 3]));
console.log(longest([2, 5, 1, 8, 3]));


