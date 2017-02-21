/// Runtime O(b) space O(1)
function bitDiff(a, b) {
  let diff = a^b;
  let count = 0;
  while (diff) {
    count += diff & 1;
    diff >>= 1;
  }

  console.log(count)
}

bitDiff(29, 15);
bitDiff(0b10100, 0b11101);
