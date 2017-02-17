const BST = require('./bst');

let bst = new BST();
bst.insert(20);
bst.insert(8);
bst.insert(22);
bst.insert(7);
bst.insert(12);
bst.insert(10);
bst.insert(14);

// function commonAncestor(tree, node1, node2) {
//   let h1 = tree.getHeight(tree.root, node1);
//   let h2 = tree.getHeight(tree.root, node2);

//   let min, max;

//   if (h1 < h2) {
//     min = node1;
//     max = node2;
//   } else {
//     min = node2;
//     max = node1;
//   }

//   while(max !== min && max !== min.parent && (max && max.parent)) {
//     max = max.parent;
//   }

//   if (!max) {
//     return null;
//   } else {
//     return max.data
//   }
// }

function commonAncestor(root, node1, node2) {
  if (root === null || node1 === root || node2 === root) {
    return root ? root.data:null;
  }
  let node1Left = root.data > node1.data ? true:false;
  let node2Left = root.data > node2.data ? true:false; 

  if (node1Left !== node2Left) { // Different sides
    return root.data
  }

  let side = node1Left ? root.left:root.right;
  return commonAncestor(side, node1, node2)
}
console.log(commonAncestor(bst.root, bst.root.left, bst.root));
console.log(commonAncestor(bst.root, bst.root.left.right.left, bst.root.left.right.right));
console.log(commonAncestor(bst.root, bst.root.left.right, bst.root.left.right.right));
console.log(commonAncestor(bst.root, bst.root.left, bst.root.left.right.right));



