function numSteps(steps) {
  //O(3^N) O(N)
  // if (steps < 0) {
  //   return 0;
  // }
  // if (steps === 0) {
  //   return 1;
  // } else {
  //   return numSteps(steps - 1) + numSteps(steps - 2) + numSteps(steps - 3);
  // }
  // Memoization

  let mem = {};
  return numStepsUtil(steps, mem);
} 

// Discuss about big integer
function numStepsUtil(steps, mem) {
  if (steps < 0) {
    return 0;
  } else if (steps === 0) {
    return 1;
  } else if(mem[steps]){
     return mem[steps];
  } else {
    mem[steps] = numSteps(steps - 1, mem) + numSteps(steps - 2, mem) + numSteps(steps- 3, mem);
    return mem[steps];
  }
}

console.log(numSteps(34));