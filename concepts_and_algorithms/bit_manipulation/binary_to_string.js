function binaryToString(num) {
  if (num > 1 || num < 0 ){ 
    throw new Error('Invalid number')
  }
  let arr = [];
  arr.push('.')
  let temp = num;
  while (num > 0) {
    if (arr.length > 32) {
      throw new Error(`Error num ${temp} pass 32 bits`);
    }
    num *= 2;
    if (num >= 1) {
      num -= 1
      arr.push(1)
    } else {
      arr.push(0);
    }
  }
  return arr.join("");
}
function binaryToString2(num) {
  if (num > 1 || num < 0 ){ 
    throw new Error('Invalid number')
  }
  let arr = [];
  arr.push('.')
  let temp = num;
  let frac = 0.5;
  while (num > 0) {
    if (arr.length > 32) {
      throw new Error(`Error num ${temp} pass 32 bits`);
    }
  
    if (num >= frac) {
      num -= frac;
      arr.push(1)
    } else {
      arr.push(0);
    }
    frac /= 2;
  }
  return arr.join("");
}
try {
  console.log(binaryToString(0.72));
} catch (e) { }
console.log(binaryToString(0.5));
console.log(binaryToString(0.625));
console.log(binaryToString2(0.1250));




