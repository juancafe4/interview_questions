// Check if one string permutes of another string
// Input str1 and str2
// Output boolean

// O(n) runtime O(n) space
function isPermutation(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let col = {};
  for(let i = 0; i < str1.length; i++) {
    col[str1[i]] ? col[str1[i]]++ : col[str1[i]] = 1;
  }


  for(let i = 0; i < str2.length; i++) {
    if (col[str2[i]]) {
      col[str2[i]]--;
    } else {

      return false;
    }
  }

  for (let key in col) {
    if (col[key] !== 0)
      return false
  }
  return true
}

console.log(isPermutation('ax3e', 'x3ea'))
console.log(isPermutation('aii', 'aii'))
console.log(isPermutation('au4gse', 'x3ea'))
console.log(isPermutation('uu44321', 'uu44322'))
console.log(isPermutation('aiii', 'aaai'))
