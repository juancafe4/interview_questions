const LinkedList = require('./LinkedLists');

let list = new LinkedList();

list.addNode(1);
list.addNode(2);
list.addNode(3);
list.addNode(2);
list.addNode(1);

console.log(palindrome(list.head, list.length()))

let list2 = new LinkedList();

list2.addNode(1);
list2.addNode(2);
list2.addNode(3);
list2.addNode(4);
list2.addNode(5);
list2.addNode(6);
list2.addNode(7);
console.log(palindrome(list2.head, list2.length()))

let list3 = new LinkedList();

list3.addNode(2);
list3.addNode(1);
list3.addNode(3);
list3.addNode(8);
list3.addNode(9);
list3.addNode(16);
list3.addNode(11);
list3.addNode(16);
list3.addNode(9);
list3.addNode(8);
list3.addNode(3);
list3.addNode(1);
list3.addNode(2);
console.log(palindrome(list3.head, list3.length()))

let list4 = new LinkedList();

list4.addNode(2);
list4.addNode(2);

console.log(palindrome(list4.head, list4.length()))

function palindrome(head, len) {
  if (!head || !head.next) {
    return false;
  }

  let mid = Math.floor(len / 2);
  let i = 0;
  let curr = head;
  while (i < mid) {
    let tail = curr;
    while (tail.next && tail.next.next) {
      tail = tail.next;
    }

    if (tail.next.data !== curr.data) {
      return false;
    }
    tail.next = null;
    curr = curr.next;
    
    i++;
  }

  return true;
}
