function moveDisk(from, to, disk) {
  console.log(`Move disk ${disk} from ${from} to ${to}`)
}
function moveDisksBetweenTwoPoles(src, dest, s, d) {
  let pole1TopDisk = src.pop();
  let pole2TopDisk = dest.pop();

  // When pole 1 is empty
  if (!pole1TopDisk) {
    src.push(pole2TopDisk);
    moveDisk(d, s, pole2TopDisk);
  } else if (!pole2TopDisk) { //when pole 2 is empty
    dest.push(pole1TopDisk);
    moveDisk(s, d, pole1TopDisk);
  } else if (pole1TopDisk > pole2TopDisk){ // when top disk pole 1 > top disk pole 2
    src.push(pole1TopDisk);
    src.push(pole2TopDisk);
    moveDisk(d, s, pole2TopDisk);
  } else { // when top pole 2 > top pole 1
    dest.push(pole2TopDisk);
    dest.push(pole1TopDisk);
    moveDisk(s, d, pole1TopDisk);
  }
}
function towerOfHanoi(disks, src = [], aux = [], dest = []) {
  let totalMoves = Math.pow(2, disks) - 1;
  let s = 'S', d = 'D', a = 'A';

  // If number of disks is even, change dest pole with 
  // aux pole

  if (!(disks % 2)) {
    [d, a] = [a, d];
  }

  for (i = disks; i >= 1; i--) {
    src.push(i)
  }
  for (let i = 1; i <= totalMoves; i++) {
    if (i % 3 == 1) // src to dest
      moveDisksBetweenTwoPoles(src, dest, s, d);
    else if (i % 3 == 2) // src to aux
      moveDisksBetweenTwoPoles(src, aux, s, a);
    else if (i % 3 == 0) // aux to dest
      moveDisksBetweenTwoPoles(aux, dest, a, d);
  }
}

towerOfHanoi(4)