

function next_lowest(x) {
  let removeOnes = (x + 1) & x;
  let isolate = removeOnes & ~(removeOnes - 1);
  let shifted = (removeOnes ^ isolate) | (isolate >> 1);
  let temp = (x + 1) & ~x;
  let factor = (shifted & ~(shifted - 1)) / (temp);
  let toadd = (temp - 1) * factor;
  return toadd|shifted;
}

console.log(next_lowest(12))