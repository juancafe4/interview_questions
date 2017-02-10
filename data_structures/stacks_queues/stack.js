class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  pop() {
    if (this.top === null) {
      throw new Error("Stack is Empty");
    }
    let data = this.top.data;
    this.top = this.top.next;
    return data;
  }
  push(data) {
    let node = new Node(data);
    node.next = this.top;
    this.top = node;
  }

  peek() {
    if (this.top === null) {
      throw new Error("Stack is Empty");
    }
    return this.top.data;
  }
  isEmpty() {
    return this.top == null;
  }
}