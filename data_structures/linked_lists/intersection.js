// O(M + N) -> O(1)

const LinkedList = require('./LinkedLists');
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

let l1 = new Node(4);
l1.next = new Node(6);
l1.next.next = new Node(3);
l1.next.next.next = new Node(2);

l2 = l1.next.next;

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
let head2 = new LinkedList();

head2.addNode(1);
head2.addNode(2);
head2.addNode(3);
head2.addNode(4);
head2.addNode(5);
head2.addNode(6);
head2.addNode(7);
head2.addNode(8);
head2.addNode(9);
head2.addNode(10);
console.log(intersection(l1, l2, 4, 2))
console.log(intersection(head.head, head2.head, 10, 10))
function intersection(l1, l2, len1, len2) {
  let diff = Math.abs(len2 - len1);
  let long = null;
  let short = null;
  if (len1 < len2) {
    long = l2;
    short = l1;
  } else {
    long = l1;
    short = l2;
  }

  for (let i = 0; i < diff; i++) {

    long = long.next;
  }

  while (short) {
    if (short === long ){
      return true
    }
    short = short.next;
    long = long.next;
  }

  return false
}