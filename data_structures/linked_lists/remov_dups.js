const LinkedList = require('./LinkedLists');

console.log(LinkedList)
let head = new LinkedList();

// head.addNode(3);
// head.addNode(4);
// head.addNode(23);
// head.addNode(5);
// head.deleteNode(23)
// head.deleteNode(3)
// head.deleteNode(5)
// head.addNode(23);


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
deleteDumps(head.head);
console.log(head.print())


let head2 = new LinkedList();
head2.addNode(2);
head2.addNode(4);
head2.addNode(2);
head2.addNode(2);
deleteDumps(head2.head);
console.log(head2.print())

let arr = [8, 8, 9, 9, 9, 6, 6, 4, 4, 6, 6, 4, 4, 6, 9, 4, 8, 2, 3, 1];

let head3 = new LinkedList();
arr.forEach(val => {
  head3.addNode(val);
});

deleteDumps(head3.head);
console.log(head3.print());

arr = [5, 5, 5, 5, 5];
let head4 = new LinkedList();
arr.forEach(val => {
  head4.addNode(val);
});

deleteDumps(head4.head);
console.log(head4.print());

function deleteDumps(head) {
  let curr = head;
  while (curr) {
    let runner = curr;
    while (runner.next) {
      if (runner.next.data === curr.data) {

        runner.next = runner.next.next;
      } else {
        runner = runner.next
      }
    }
    curr = curr.next
  }

}
