const LinkedList = require('./LinkedLists');

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

let list = new LinkedList();

list.addNode(7);
list.addNode(1);
list.addNode(6);

let list2 = new LinkedList();

list2.addNode(5);
list2.addNode(9);
list2.addNode(2);

let temp = sum(list.head, list2.head);
print(temp);

list = new LinkedList();
list2 = new LinkedList();
list.addNode(5);
list2.addNode(5);
temp = sum(list.head, list2.head);
print(temp);

list = new LinkedList();
list2 = new LinkedList();
list.addNode(4);
list.addNode(4);
list2.addNode(4);
list2.addNode(8);
temp = sum(list.head, list2.head);
print(temp);

// Better O(n) O(n)

function sum(head1, head2) {
  let node1 = head1, node2 = head2;
  let tail = new LinkedList(), head = null;
  let sum = 0, carry = 0;

  while (node1 && node2) {
    sum = node1.data + node2.data + carry;

    if (sum >= 10) {
      carry = 1;
      sum -= 10;
    } else {
      carry = 0;
    }
    
    let temp = new Node(sum);
    if (tail.head === null) {
      tail = temp
      head = tail;
    } else {
      tail.next = temp;
      tail = temp;
    }
    node1 = node1.next;
    node2 = node2.next;
  }

  node1 = node1 || node2;
  while (node1) {
    sum = node1.data + carry;

    if (sum >= 10) {
      carry = 1;
      sum -= 10;
    } else {
      carry = 0;
    }
    
    let temp = new Node(sum);
    if (tail.head === null) {
      tail = temp
      head = tail;
    } else {
      tail.next = temp;
      tail = temp;
    }
    node1 = node1.next;
  }

  if (carry) {
    let temp = new Node(carry);
    if (tail.head === null) {
      tail = temp
      head = tail;
    } else {
      tail.next = temp;
      tail = temp;
    }
  }
  return head;
}

function print(node) {
  let arr =    [];
  while (node) {
    arr.push(node.data)
    node = node.next;
  }
  console.log(arr);
}
// Bad optimization
// sum(list, list2)
// function sum(list, list2) {
//   let arr = [];
//   let sum = 0;
//   sum += getNumber(list.head, arr);
//   arr = [];
//   sum += getNumber(list2.head, arr);

//   sum = sum.toString().split('').map(Number);

//   list.head = null;
//   sum.map(val => {
//     list.addNode(val);
//   });

//   console.log(list.print())
// }
// function getNumber(head, arr) {
//   let curr = head;

//   while (curr) {
//     arr.push(curr.data)
//     curr = curr.next;
//   }

//   return Number(arr.join(""))
// }
