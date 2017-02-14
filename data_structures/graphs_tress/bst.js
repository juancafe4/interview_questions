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

module.exports = class BinaryTree {
  constructor() {
    this.root = null;
  }
  insert(data) {
    if (this.root === null) {
      this.root =  new Node(data);
    }
    else {
      this._insertNode(this.root, data)
    }
  }
  _insertNode(node, data) {
    let newNode = new Node(data);
    
    if (data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this._insertNode(node.left, data);
      }
    }
    else if (data > node.data) {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this._insertNode(node.right, data);
      }
    }
    
  }
  inorder(node) {

    if (node !== null) {
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
    }
  }

  preorder(node) {
      if (node !== null) {
        console.log(node.data);
        this.preorder(node.left);
        this.preorder(node.right);
      }
  }

  postorder(node) {
    if (node !== null) {
      this.postorder(node.left);
      this.postorder(node.right);
      console.log(node.data);
    }
  }

  height(node) {
    if (node === null) {
      return 0;
    }
    return 1 + Math.max(this.height(node.left), this.height(node.right));
  }
}