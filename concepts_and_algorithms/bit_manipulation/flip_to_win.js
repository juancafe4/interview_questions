// Runtime O(b) numbers of bits

// function longestSequence(n) {
//   if (n === -1) {
//     return 32;
//   }
//   let seq = getAlternativeSequences(n);

//    let  maxSeq = 1;
//    for (let i = 0; i < seq.length; i += 2) {
//       let seqZeros = seq[i];
//       let actualSeq = 0;
//       let rightOnes = i + 1 < seq.length ? seq[i + 1]:0;
//       let leftOnes = i - 1 >= 0  ? seq[i - 1]:0;
      
//       if (seqZeros === 1) {
//         actualSeq = rightOnes + leftOnes + 1;
//       }
//       if (seqZeros > 1) {
//         actualSeq = 1 + Math.max(rightOnes, leftOnes);


//       } else if (seqZeros === 0) {
//         let actualSeq = Math.max(rightOnes, leftOnes);
//       }

//       maxSeq = Math.max(maxSeq, actualSeq);
//    }
//    console.log(seq)
//    return maxSeq;
// }

// function getAlternativeSequences(n) {
//   let seqs = [];
//   let searchingFor = 0;
//   counter = 0;

//   for (let i = 0; i < 32; i++) {
//     if ((n & 1) != searchingFor) {
//       seqs.push(counter);
//       searchingFor = n & 1; // Flip 0 to 1 or 1 to 0
//       counter = 0; 
//     }
//     counter++;
//     n >>>= 1;
//   }
//   seqs.push(counter);
//   return seqs;
// }

// console.log(longestSequence(540));


// O(b) no memory usage O(1)
function findLongestSequence(n) {
  if (~n === 0) return 32;
  let max = Number.MIN_SAFE_INTEGER;
  let currLength = 0, prevLength = 0;
  while (n !== 0) {
    if (n & 1) {
      currLength++;
    } 
    if (!(n & 1)) {
      prevLength = n&2 === 0 ? 0:currLength;
      currLength = 0;
    }

    max = Math.max(prevLength + currLength + 1, max);
    n >>>= 1
  }
  return max
}

console.log(findLongestSequence(540));
console.log(findLongestSequence(1775));

