// Input; N -> NxN matrix 2D array
// Output array rotated by 90 degrees
function rotate(N) {
  let temp = new Array(N.length);

  for (let i = 0; i < N.length; i++) {
    temp[i] = new Array(N.length)
  }
  let k= 0, l = 0;

  for (let i = N.length - 1; i >= 0; i--) {
   
    for (let j = 0; j < N.length; j++) {
      temp[k][l] = N[j][i]
      l++;
    }

    k++
    l = 0;
  }

  console.log(temp)
}


rotate([ [1, 2, 3],
         [4, 5, 6],
         [7, 8, 9]         
       ])

rotate([ [1, 2, 3, 4],
         [5, 6, 7, 8],
         [9, 10, 11, 12],
         [13, 14, 15, 16]         
       ])
