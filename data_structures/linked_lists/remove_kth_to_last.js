const LinkedList = require('./LinkedLists');

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

console.log(findNode(head, 9));

let head2 = new LinkedList();
head2.addNode(1);
head2.addNode(2);
head2.addNode(32);
head2.addNode(34);
head2.addNode(6);
console.log(findNode(head2, 4));
console.log(kthToLastTwoPointers(head2.head, 4));
function findNode(head, index) {
  let len = head.length();

  let curr = head.head;
  let count = 0;
  
  if (len < index || Math.abs(len - index - 1 ) > len ) 
    return null;
  else {

    while (curr) {
      if (count === len - index - 1) {
        return curr.data;
      }
      count++
      curr = curr.next;
    }
  }
}


function kthToLastTwoPointers(list, k) {
  if (!list) {
    throw new Error('invalid list');
  }

  let last = list,
    kth = list;

  for (let i = 0; i < k; ++i) {

    last = last.next;
    if (!last) {
      throw new Error('list is not long enough');
    }
  }

  while (last.next) {
    last = last.next;
    kth = kth.next;
  }

  return kth.data;
}