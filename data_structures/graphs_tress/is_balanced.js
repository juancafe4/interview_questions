const BST = require('./bst');

let bst = new BST();
bst.insert(11);
bst.insert(5);
bst.insert(4);
bst.insert(6);
bst.insert(1);
bst.insert(15);
bst.insert(16);

console.log(bst.isBalance(bst.root));
let bst2 = new BST();
bst2.insert(11);
bst2.insert(5);
bst2.insert(4);
bst2.insert(3);
bst2.insert(12);
bst2.insert(13);
bst2.insert(14);

console.log(bst2.isBalance(bst2.root))
console.log(isBalanced(bst2.root));

function isBalanced(tree) {
  if (!tree ) {
    return true;
  }

  let node = tree,
    cache = {
      min: Number.MAX_SAFE_INTEGER,
      max: Number.MIN_SAFE_INTEGER
    };

  findDepth(cache, node, 0);
  console.log(cache)
  return cache.max - cache.min <= 1;
}

function findDepth(cache, node, depth) {
  if (!node) {
    if (depth < cache.min) {
      cache.min = depth;
    }
    if (depth > cache.max) {
      cache.max = depth;
    }
  } else {
    findDepth(cache, node.left, depth + 1);
    findDepth(cache, node.right, depth + 1);
  }
}
 