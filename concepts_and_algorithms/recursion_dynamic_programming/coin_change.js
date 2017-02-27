// function coin_change(n) {
//   if (n < 0) {
//     return 0;
//   }
//   if (n === 0) {
//     return 1;
//   }
//   else {
//     return coin_change(n - 1) + coin_change(n - 5) + coin_change(n - 10) + coin_change(n - 25);
//   }
// }

// console.log(coin_change(10))

//O(2^N) runtime 
// function  coin_change(n) {
//   let denons = [25, 10, 5, 1];

//   return coin_change_util(denons, denons.length, n);

// }


// function coin_change_util(denons, len, n) {
//   if (n < 0) return 0;
//   if (n === 0) return 1;
//   if (len <= 0 && n > 0) return 0;

//   return coin_change_util(denons, len - 1, n) 
//         + coin_change_util(denons, len, n - denons[len - 1]);
// }
// console.log(coin_change(10))

// Dynamic Programming memo
function  coin_change(n) {
  let denons = [25, 10, 5, 1];
  let memo = {}
  
  let total = coin_change_util(denons, denons.length, n, memo);
  console.log(memo);
  return total;
}


function coin_change_util(denons, len, n, memo) {
  let str = len + '-' + n;
  if (n < 0) {
    memo[str] = 0;
    return memo[str];
  }
  if (n === 0) {
    memo[str] = 1;
    return memo[str];
  }
  if (len <= 0 && n > 0) {
    memo[str] = 0;
    return memo[str];
  }
  if (!memo[str]) {
   memo[str] = coin_change_util(denons, len - 1, n, memo) 
        + coin_change_util(denons, len, n - denons[len - 1], memo);
  }
  return memo[str]
}
console.log(coin_change(5))

// Using Dynamic Programming

//   function  coin_change(n) {
//     let denons = [25, 10, 5, 1];
    
//     var table = new Array(n + 1);
//     for (var i = 0; i < n + 1; i++) {
//         table[i] = new Array(denons.length);
//     }
//     // Fill the enteries for 0 value case (n = 0)
//     for (let i = 0; i< denons.length; i++) {
//       table[0][i] = 1;
//     }
//     // Fill rest of the table enteries in bottom up manner 
//     for (let i = 1; i < n + 1; i++) {
//       for (let j = 0; j < denons.length; j++) {
//         let x = i - denons[j] >= 0 ? table[i - denons[j]][j]:0;
//         let y = j >= 1 ? table[i][j - 1]:0 ;
//         table[i][j] = x  + y
//       }
//     }

//     return table[n][denons.length - 1];
//   }



// console.log(coin_change(25))

// function coin_change(n) {
//   let denons = [25, 10, 5, 1];

//   return coin_change_util(n, denons, 0);
// }

// function coin_change_util(amount, denons, index) {
//   if (index >= denons.length - 1) {
//     return 1;
//   }
//   let denonsAmount = denons[index];
//   let ways = 0;

//   for (let i = 0; i * denonsAmount <= amount; i++) {
//     let amountRemaining = amount - i * denonsAmount;
//     ways += coin_change_util(amountRemaining, denons, index + 1);
//   }
//   return ways;
// }
// console.log(coin_change(10))