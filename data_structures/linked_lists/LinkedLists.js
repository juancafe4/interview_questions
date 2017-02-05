class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}


module.exports = class LimkedList {
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

      temp.next = newNode;
    }
  }

  deleteNode(data) {
    if (this.head) {
      if (this.head.data === data) {
        this.head = this.head.next;
      } else {
        let temp = this.head;
        while (temp.next) {
          if (temp.next.data === data) {
            temp.next = temp.next.next
            break;
          }
          temp = temp.next
        }
      }
    }
  }
  print() {
    let arr = [];
    let curr = this.head
    while (curr) {
      arr.push(curr.data);
      curr = curr.next;
    }

    return arr;
  }
  length() {
    let ct = 0;
    let curr = this.head
    while (curr) {
      ct++
      curr = curr.next;
    }

    return ct;
  }
}