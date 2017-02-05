// Input; N -> NxN N 2D array
// Output array rotated by 90 degrees
// function rotate(N) {
//   let temp = new Array(N.length);

//   for (let i = 0; i < N.length; i++) {
//     temp[i] = new Array(N.length)
//   }
//   let k= 0, l = 0;

//   for (let i = N.length - 1; i >= 0; i--) {
   
//     for (let j = 0; j < N.length; j++) {
//       temp[k][l] = N[j][i]
//       l++;
//     }

//     k++
//     l = 0;
//   }

//   console.log(temp)
// }

function rotate(N) {
  if (!N.length || N.length !=== N[0].length) {
    throw "Empty N or not N x N N"
  }
  let n = N.length
  for (let layer = 0; layer < n / 2; i++) {
    let last = n - 1 -layer;
    for (let i = layer; i < last; i++) {
      let offset = i - layer;
      let top = N[first][i]; // save top 
      // left -> top
      N[first][i] = N[last-offset][first]; 
      // bottom -> left
      N[last-offset][first] = N[last][last - offset]
      //right -> bottom 
      N[last][last  - offset] = N[i][last];
      //top -> right N[i][last]
      N[i][last] = top // saved top
    }
  }
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
