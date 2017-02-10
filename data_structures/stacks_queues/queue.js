class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;  
  }

  enqueue(data) {
    let node = new Node(data);

    if (this.last !== null) {
      this.last.next = node;
    }

    this.last = node;
    if (this.first == null) {
      this.first = this.last;
    }
  }

  dequeue() {
    if (this.first === null) {
      throw new Error("Queue is empty")
    }
    let data = first.data;
    this.first = this.first.next;
    if (this.first === null) {
      this.last = this.first;
    }

    return data;
  }
  peek() {
    if (this.first === null) {
      throw new Error("Queue is empty")
    }
    return this.first.data
  }

  isEmpty() {
    return this.first === null
  }
}