// One way edit
// Actions: add, edit, remove but only once

// O(n) runtime O(1) space 
function one_way(str1, str2) {
  let col = {}
  if (Math.abs(str1.length - str2.length) > 1){
    return false;
  }
  let edit = false;

  for (let i = 0, j = 0; i < str1.length && j < str2.length; i++, j++) {
    if (str1[i] !== str2[j]) {

      if (str1.length > str2.length)
        j--;
      else if (str1.length < str2.length)
        i--;

      if (edit)
        return false
      edit = true;
    }
  }
  return true;
}

console.log(one_way("pale", "pale"))
console.log(one_way("pale", "plee"))
console.log(one_way("ple", "paale"))
console.log(one_way("pale", "bae"))
console.log(one_way("ple", "pale"))
console.log(one_way("pale", "bake"))
console.log(one_way("pale", "pales"))