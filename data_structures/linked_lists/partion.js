const LinkedList = require('./LinkedLists');

let list = new LinkedList();

list.addNode(5);
list.addNode(8);
list.addNode(7);
list.addNode(4);
list.addNode(9);
list.addNode(15);
list.addNode(30);

list.head = partion(list.head, 8);
console.log(list.print())

let list2 = new LinkedList();
list2.addNode(4);
list2.head = partion(list2.head, 2);
console.log(list2.print())
function partion(node, partion) {
  let head = node;
  let tail = node;

  while (node) {
    let next = node.next

    if (node.data < partion) {
      node.next = head;
      head = node;
    } else {
      tail.next = node;
      tail = node;
    }
  
    node = next
  }

  tail.next = null;

  return head;
}