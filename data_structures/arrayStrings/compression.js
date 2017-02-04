// O(n) O(n)

function countCompressed(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (i + 1 >= str.length || str[i] !== str[i + 1]) {
      count += 2
      consecutive = 0
    }
  }
  return count
}

function compress(str) {
  if (!str) {
    return str
  }
  let newStr = new Array(countCompressed(str));
  let consecutive = 0;
  let j = 0;

  for (let i = 0; i < str.length; i++) {
    consecutive++
    
    if (i + 1 >= str.length || str[i] !== str[i + 1]) {
      newStr[j] = str[i];
      newStr[j + 1] = consecutive;
      j += 2
      consecutive = 0;
    }

  }
  return newStr.join('')
}


console.log(compress('aaaaaaa'))
console.log(compress('aaaaaaaaaaaaaaaaaaaaaabbbbbbbbbcccddddaaaaaa'))
console.log(compress(''))
console.log(compress('g'))







