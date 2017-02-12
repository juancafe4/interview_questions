function inorder(node) {
  if (node !== null) {
    inorder(node.left);
    console.log(node.data);
    inorder(node.right);
  }
}

function preorder(node) {
  if (node !== null) {
    console.log(node.data);
    preorder(node.left);
    preorder(node.right);
  }
}

function postorder(node) {
  if (node !== null) {
    postorder(node.left);
    postorder(node.right);
    console.log(node.data);
  }
}