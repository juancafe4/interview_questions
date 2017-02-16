const BST = require('./bst');

let bst = new BST();

bst.insert(12);
bst.insert(8);
bst.insert(6);
bst.insert(4);
bst.insert(1);
bst.insert(9);
bst.insert(13);
bst.insert(16);


function inorderSuccesor(node) {
  if (!node) {
    return null;
  }
  if (node.right) {
    let x = node.right;
    while (x.left) {
      x = x.left;
    }
    return x.data;
  } else {
    let x = node;
    while (x.parent && x.parent.left !== x) {
      x = x.parent;
    }
    return x.parent ? x.parent.data : null;
  }
}


console.log(inorderSuccesor(bst.root));
console.log(inorderSuccesor(bst.root.left.right));
console.log(inorderSuccesor(bst.root.right));
console.log(inorderSuccesor(bst.root.right.right));



