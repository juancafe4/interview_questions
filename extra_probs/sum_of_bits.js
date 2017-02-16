// Sum of bit differences among all pairs
// Given an integer array of n integers, 
// find sum of bit differences in all 
// pairs that can be formed from array 
// elements. Bit difference of a pair (x, y) 
// is count of different bits at same positions 
// in binary representations of x and y. 
// For example, bit difference for 2 and 7 is 2. 
// Binary representation of 2 is 010 and 7 is 111 
// ( first and last bits differ in two numbers).

// Brute Force 

function findNumberOfBits(x, y) {
    let bitCount = 0;
    let z = x ^ y;  // set bits in z that are different in x and y to 1.
    while (z !== 0) { // not all bits are 0
        bitCount += z & 1; //  add least significant bit
        z = z >> 1;  // iterate over z; set next bit as lsb
    }
    return bitCount;
}

// O(n^2) runtime O(1) space
function sum_of_bits(a) {
  let count = 0;
  for (let i of a) {
    for (let j of a) {
      count += findNumberOfBits(i, j);
    }
  }
  return count;
}



// console.log(sum_of_bits([1, 2]));
// console.log(sum_of_bits([1, 3, 5]));