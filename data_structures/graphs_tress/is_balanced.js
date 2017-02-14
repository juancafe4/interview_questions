const BST = require('./bst');

let bst = new BST();
bst.insert(11);
bst.insert(15);
bst.insert(5);
bst.insert(14);
bst.insert(9);
bst.insert(4);
bst.insert(1);
bst.insert(6);

console.log(bst.height(bst.root))