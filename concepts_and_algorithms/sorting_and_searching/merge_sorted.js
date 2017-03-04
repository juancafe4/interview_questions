// Merge two sorted arrays first array has enough space;

function marge_sorted(a, b, sizeA, sizeB) {
  let indexA = sizeA - 1 // Last index of A
  let indexB = sizeB - 1 // last index of B

  let lastIndex = sizeA + sizeB - 1 // Total 
  while (0 <= indexB) {
    if (indexA >= 0 && a[indexA] > b[indexB]) {
      a[lastIndex] = a[indexA];
      indexA--;
    } else {
      a[lastIndex] = b[indexB];
      indexB--;
    }

    lastIndex--;
  }

  console.log(a)
}



let a = [1, 3, 5, 9, 10, 12, , , , ,];
console.log(a)
let b = [4, 6, 7, 14];

marge_sorted(a, b, 6, 4)