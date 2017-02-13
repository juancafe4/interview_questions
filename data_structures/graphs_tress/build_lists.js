const BST = require('./bst');
const LinkedList = require('../linked_lists/LinkedLists');
let bst = new BST();

bst.insert(11);
bst.insert(15);
bst.insert(5);
bst.insert(14);
bst.insert(9);
bst.insert(4);
bst.insert(1);
bst.insert(6);


// function buildList(root) {
//   let list = {};
//   let depth = 0;
//   build(root, list, depth)
//   return list;
// }

// function build(node, list, depth) {
//   if (node) {
//     if (!list[depth]) {
//       list[depth] = new LinkedList();
//     }
//     list[depth].addNode(node.data);
//     build(node.left, list, depth + 1);
//     build(node.right, list, depth + 1);
//   }
// }


function buildList(root) {
  let list = [];
  let curr = new LinkedList();
  if (root !== null) {
    curr.addNode(root);
  }

  while (curr.length() > 0) {
    list.push(curr);
    let parents = curr.head;
    curr = new LinkedList();
    while(parents) {
      if (parents.data.left) {
        curr.addNode(parents.data.left);
      }
      if (parents.data.right) {
        curr.addNode(parents.data.right);
      }
      parents = parents.next;
    }
  }
  return list;
}
let list = buildList(bst.root)


let s = '';
for (let i in list) {
  let curr = list[i].head;

  s += `depth ${i}: `;
  while (curr) {
    s+= `${curr.data.data}->`
    curr = curr.next
  }
  s += '\n'
}
console.log(s)

