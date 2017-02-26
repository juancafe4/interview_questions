function perms(str) {
  let map = buildTable(str);
  let result = [];
  permUitls(map, "", str.length, result);
  console.log(result)
}

function buildTable(str) {
  let map = {};

  for (let s of str) {
    if (!map[s]) {
      map[s] = 0;
    }
    map[s]++;
  }
  return map;
}

// Create an object or table the put the repeated characters
// go for every character recurservly creating a permutation of each
// one. It is faster when is only one character because the loop.
function permUitls(map, prefix, remainder, result) {
  if (remainder === 0) {
    result.push(prefix);
    return;
  }
  for (let key in map) {
    let c = key;
    let count = map[key];

    if (count > 0) {
      map[key] = count - 1;
      permUitls(map, prefix + c, remainder - 1, result);
      map[key] = count;
    }
  }
}
perms('AABB')


perms('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');

perms('AAAAAAAAAB');

