class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.min = null
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
    if (!this.top) {
      this.top = node;
      this.top.min = data
    } else {
      let min = Math.min(this.top.min, data);
      node.next = this.top;
      this.top = node;
      this.top.min = min;
    }
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
    return this.top.min;
  }
}


let stack = new Stack();
stack.push(4);
stack.push(13);
stack.push(11);
stack.push(3);
stack.push(5);
stack.push(6);
stack.push(34);
stack.push(1)
stack.push(-43)
stack.pop()
stack.push(Number.MIN_VALUE);
console.log(stack.getMin())