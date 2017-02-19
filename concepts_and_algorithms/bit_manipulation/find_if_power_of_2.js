function checkPower2(n) {
  return (n &(n - 1)) === 0;
}

console.log(checkPower2(8));
console.log(checkPower2(768));
