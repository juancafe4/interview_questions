const BST = require('./bst');

class Node {
  constructor(data) {

    if (isNaN(data)) {
      throw new Error('Data must be a Number');
    }
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

let bst = new BST();

bst.insert(11);
bst.insert(6);
bst.insert(7);
bst.insert(4);
bst.insert(1);
bst.insert(14);
bst.insert(13);
bst.insert(56);

let bst2 = new Node(4);

bst2.right = new Node(5);

console.log(isBinarySearchTree(bst.root));
console.log(isBinarySearchTree(bst2))

bst3 = new Node(6);
bst3.left = new Node(10);
bst3.right = new Node(3);
console.log(isBinarySearchTree(bst2));
// First array 
// then to save space integer

function isBinarySearchTree(root) {
  if (root === null) {
    return true;
  }
  let last = {};
  last['num'] = null;
  return checkTree(root, last);
}

function checkTree(node, last) {
  if (node === null) return true;
  if (node.left === null && node.right !== null) return false;
  if (!checkTree(node.left, last)) {
    return false;
  }
  if (last['num'] !== null && last['num'] >= node.data) 
    return false;

  last['num'] = node.data;

  if (!checkTree(node.right, last)) {
    return false;
  }
  return true;
}

