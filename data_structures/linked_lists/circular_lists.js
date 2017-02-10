const LinkedList = require('./LinkedLists');

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

let list = new Node('A');
list.next = new Node('B');
list.next.next = list;

let head = new LinkedList();

head.addNode(1);
head.addNode(2);
head.addNode(3);
head.addNode(4);
head.addNode(5);
head.addNode(6);
head.addNode(7);
head.addNode(8);
head.addNode(9);
head.addNode(10);

console.log(isCircular(list))
console.log(isCircular(head.head))

let list2 = new Node('A');
list2.next = new Node('B');
list2.next.next = new Node('C');
list2.next.next.next = new Node('D');
list2.next.next.next = new Node('E');
list2.next.next.next.next = list2.next.next;
console.log(isCircular(list2))
function isCircular(node) {
  if (!node) {
    return null;
  }
  let p1 = node, p2 = node;

  while (p1.next && p2.next && p2.next.next) {
    p1 = p1.next;
    p2 = p2.next.next;
    if (p1 === p2) {
      break;
    }
  }
  console.log('p2 node', p2)
  if (!p1 || p1 !== p2) {
    return null;
  }
  p1 = node;

  while (p1 !== p2) {
    p1 = p1.next
    p2 = p2.next;
  }

  return p2;
}