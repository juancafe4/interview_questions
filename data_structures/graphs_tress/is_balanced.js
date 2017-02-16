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
console.log(isBalanced(bst.root))
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


// O(n) O(H) space
function isBalanced(root) {
  return getHeight(root) !== Number.NEGATIVE_INFINITY;
}

function getHeight(node) {
  if (node === null) {
    return -1;
  }
  let leftHeight = getHeight(node.left);
  if (leftHeight === Number.NEGATIVE_INFINITY) {
    return Number.NEGATIVE_INFINITY;
  }

  let rightHeight = getHeight(node.right);
  if (rightHeight === Number.NEGATIVE_INFINITY) {
    return Number.NEGATIVE_INFINITY;
  }

  if (Math.abs(rightHeight - leftHeight) > 1) {
    return Number.NEGATIVE_INFINITY;
  } else {
    return 1 + Math.max(leftHeight, rightHeight);
  }
}
 