// Brute force O(N^22^N)

// function powerOfSets(S) {
//   let arr = {};
//   let str = "";
//   powerOfSetsUtil(S, arr, str)

//   for (let keys in arr) {
//     console.log(keys)
//   }
// }

// function powerOfSetsUtil(S, arr, str) {
//   str = str.split("").sort().join('')
//   if (!arr[str]) {
//     arr[str] = 1;
//   }
//   for (s of S) {
//     let duplicate = false;
//     for (char of str) {
//       if (char === s || !char) {
//         duplicate = true;
//       }
//     }

//     if (!duplicate) {
//       powerOfSetsUtil(S, arr, str + s)
//     }
//   }
// }

// O(N2^N)
// function getSubSets(set, index) {
//   let allSubsets = [];
//   if (set.length === index) { // Base case add empty set
//     allSubsets.push([]);
//   } else {
//     allSubsets = getSubSets(set, index + 1);
//     let item = set[index];  
//     let moreSubsets = [];
//     for (let subset of allSubsets) {
//       newSubset = [];
//       newSubset.push(item);
//       newSubset = [...newSubset, ...subset];
//       moreSubsets.push(newSubset);
//     }
//     allSubsets = [...allSubsets, ...moreSubsets];
//   }
//   return allSubsets;
// }

// Another way to see it but same runtime O(2^N)
function getSubSets(set) {
  let max = 1 << set.length;
  let allSets = []
  for (let i = 0; i < max; i++) {
    let index = 0;
    let subsets = [];
    for (let k = i; k > 0; k >>= 1) {
      if ((k & 1) === 1) {
        subsets.push(set[index])
      }
      index++;
    }
    allSets.push(subsets);
  }
  return allSets;
}
let set1 = ['a', 'b', 'c'];
console.log(getSubSets(set1));

let set2 = ['a', 'b', 'c', 'e', 'f'];
console.log(getSubSets(set2));