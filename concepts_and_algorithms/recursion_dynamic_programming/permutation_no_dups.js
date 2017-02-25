// function getPerms(set) {
//   if (!set || !set.length) {
//     return;
//   }
//   let index = 0;
//   getPermsUtil(set, index, []);
// }

// function getPermsUtil(set, index, subsets) {
//   if (set.length === index) { // Base
//     console.log(subsets);
//   }

//   for (let i = index; i < set.length; i++) { 
//     let arr = [...subsets, set[i]];
//     // Swapping
//     let tempArr = [...set];
//     let temp = tempArr[i]
//     tempArr[i] = tempArr[index];
//     tempArr[index] = temp;
//     // Recursion
//     getPermsUtil(tempArr, index + 1, arr);
//   }
// }

let s1 = ['A', 'B', 'C'];
getPerms(s1)

console.log('wtih 6 letters');
let s2 = ['A', 'B', 'C', 'D', 'E', 'F'];
getPerms(s2)