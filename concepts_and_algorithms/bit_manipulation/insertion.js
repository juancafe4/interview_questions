function insertion(n, m, i, j) {
  if (i >= 32 || j < i) {
    throw new Error('Invalid input');
  }

  let allones = ~0;
  let right = allones << (j + 1);
  let left = (1 << i) - 1;
  let mask =  left | right;

  n &= mask;
  m <<= i
  return (n | m).toString(2);
}


console.log(insertion(0b100000000000, 0b10011, 2, 6));
console.log(insertion(0b11111111, 0b00011, 2, 6));
console.log(insertion(0b1110000, 0b0101, 0, 4));


