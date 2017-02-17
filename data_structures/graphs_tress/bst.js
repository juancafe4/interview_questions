class Node {
  constructor(data) {

    if (isNaN(data)) {
      throw new Error('Data must be a Number');
    }
    this.data = data;
    this.left = null;
    this.right = null;
    this.parent = null;
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
        node.left.parent = node;
      } else {
        this._insertNode(node.left, data);
      }
    }
    else if (data > node.data) {
      if (node.right === null) {
        node.right = newNode;
        node.right.parent = node;
      } else {
        this._insertNode(node.right, data);
      }
    }
    
  }
  inorder(node) {

    if (node !== null) {
      this.inorder(node.left);
      console.log('Parent', node.parent ? node.parent.data : null);
      console.log('Node', node.data);
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
      return -1;
    }
    return 1 + Math.max(this.height(node.left), this.height(node.right));
  }

  isBalance(node) {
    if (node === null) {
      return true;
    }
    let lh = this.height(node.left);
    let rh = this.height(node.right);
    if (Math.abs(lh - rh) <= 1 && this.isBalance(node.left)
      && this.isBalance(node.right)) {
      return true;
    } else {
      return false;
    }
  }
  getHeight(root, node) {
    if (node === null || root === null) {
      return -1;
    }
    if (root === node) {
      return 0;
    }
    if (node.data < root.data) {
      return 1 + this.getHeight(root.left, node);
    } else {
      return 1 + this.getHeight(root.right, node);
    }
  }
}