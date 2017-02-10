// O(1) enqueue O(N) dequeue and peek
class Queue {
  constructor() {
    this.s1 = [] // stack 1
    this.s2 = [] // stack 2
  }

  enqueue(val) {
    this.s1.push(val)
  }
  dequeue() {
    this.shiftStacks();
    let val = this.s2.pop();
    return val;
  }
  peek() {
    this.shiftStacks();
    if (this.s2.length === 0) {
      throw Error("Empty Queue");
    }
    return this.s2[this.s2.length - 1];
  }
  size() {
    return this.s1.length + this.s2.length;
  }
  shiftStacks() {
    if (this.s2.length === 0) {
      while (this.s1.length !== 0) {
        this.s2.push(this.s1.pop())
      }
    }
  }
}


let queue = new Queue();
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(7);
queue.enqueue(9);
console.log(queue.dequeue());
console.log(queue.peek());
