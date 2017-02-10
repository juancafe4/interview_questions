class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.min = null;
  }

  pop() {
    if (this.top === null) {
      throw new Error("Stack is Empty");
    }
    let data = this.top.data;
    this.top = this.top.next;
    let actualData = this.top;
    if (this.min >= actualData) {
      this.min == actualData
    }
    return data;
  }
  push(data) {
    let node = new Node(data);
    if (!this.min || this.min >= data) {
      this.min = data;
    }
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
  getMin() {
    return this.min;
  }
}


let stack = new Stack();
stack.push(4);
stack.push(13);
stack.push(11);
stack.push(3);
stack.push(5);
stack.push(6);
stack.push(-34);
console.log(stack.getMin())