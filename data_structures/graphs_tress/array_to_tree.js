const BST = require('./bst');

let bst = new BST();

bst.insert(4);
bst.insert(6);
bst.insert(5);

let bst2 = arrToTree([2, 4, 5, 6, 9, 12, 15])
bst2.inorder(bst2.root);

function arrToTree(arr) {
  let bst = new BST();
  if (arr && arr.length) {
    add(bst, arr, 0, arr.length - 1)
  }
  return bst;
}

function add(bst, arr, start, end) {
  if (start === end) {
    bst.insert(arr[start]);
  }
  else if (start < end) {
    let mid = start + Math.floor((end - start) / 2);
    bst.insert(arr[mid]);
    add(bst, arr, 0, mid - 1);
    add(bst, arr, mid + 1, end);
  }
}

