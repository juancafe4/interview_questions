class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

export default class LimkedList {
  constructor() {
    this.head = null;
  }
  addNode(data) {
    let newNode = new Node(data);

    if (!this.head) {
      this.head = newNode
    } else {
      let temp = this.head;

      while (temp.next) {
        temp = temp.next;
      }
      temp = newNode;
    }
  }
  print() {
    return head.toString();
  }
}