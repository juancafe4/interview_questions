const LinkedList = require('./LinkedLists');

console.log(LinkedList)
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

// deleteMiddle(head.head, head.length());
// console.log(head.print());
// function deleteMiddle(head, len) {
//   if (!head) {
//     throw new Error("Head is null");
//   }

//   let middle = Math.floor((len - 1)/ 2) 
  
//   if (!middle) {
//     head = head.next;
//   } else {
//     let last = head;
//     for (let k = 0; k < middle - 1; k++) {
//       if (!last.next) {
//         throw new Error('Lst is not long enough');
//       }
//       last = last.next;
//     }
//     last.next = last.next.next;
//   }
// }


// I read wrong this is the original solution
export function deleteMiddleNode(node) {
  
  if (!node || !node.next) {
    throw new Error('invalid node');
  }

  node.val = node.next.val;
  node.next = node.next.next;
}