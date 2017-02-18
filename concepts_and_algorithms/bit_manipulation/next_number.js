function nextNumber(num) {
  let ones = 0;

  ones = getNumOfBits(num);
  let actualOnes = 0;
  max = num
  let tempNum = num;
  while(actualOnes !== ones) {
    max = Math.max(max, num);
    actualOnes = getNumOfBits(++num);
  }
  max = Math.max(max, num);

  console.log('Max ', max);

  let min = num;
  actualOnes = 0;
  while(actualOnes !== ones) {
    min = Math.min(min, tempNum);
    tempNum--;
    actualOnes = getNumOfBits(tempNum);
  }
  min = Math.min(min, tempNum);
  console.log('Min ', min);
}

function getNumOfBits(num) {
  let count = 0;
  while (num) {
    count += (num & 1 !== 0) ? 1:0;
    num >>>= 1;
  }

  return count
}
nextNumber(156);
nextNumber(12);
nextNumber(8)

