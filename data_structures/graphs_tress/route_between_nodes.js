const Graph = require('./direct_graph');
const Queue = require('../stacks_queues/queue')
let graph1 = new Graph();
let myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

myVertices.forEach(val => {
  graph1.addVertex(val);
});

graph1.addEdge('A', 'B');
graph1.addEdge('A', 'C');
graph1.addEdge('B', 'C');
graph1.addEdge('B', 'D');
graph1.addEdge('B', 'G');
graph1.addEdge('C', 'F');
graph1.addEdge('D', 'E');
graph1.addEdge('D', 'F');
graph1.addEdge('E', 'D');
graph1.addEdge('F', 'C');
graph1.addEdge('G', 'B');


function isConnectedBFS(graph, start, end) {
  if (start === end) {
    return true;
  }
  let match = false
  let discover = new Set();
  let queue = new Queue();
  discover.add(start)
  queue.enqueue(start)

  while (!queue.isEmpty()) {
    let node = queue.dequeue();
    graph.adjList[node].forEach(n => {
      if (!discover.has(n)) {
        if (n === end) {
          match = true;
        }

        discover.add(n);
        queue.enqueue(n);
      }
    });
  }
  return match;
}

console.log(isConnectedBFS(graph1, 'A', 'D'))
console.log(isConnectedDFS(graph1, 'A', 'D'))
function isConnectedDFS(graph, start, end) { 
  if (start === end) {
    return true;
  }
  let match = false
  let discover = new Set();
  let stack = [start];
  discover.add(start)
  
  while (stack.length !== 0) {
    let node = stack.pop();
    graph.adjList[node].forEach(n => {
      if (!discover.has(n)) {
        if (n === end) {
          match = true;
        }

        discover.add(n);
        stack.push(n);
      }
    });
  }
  return match;
}

// Another way

// export function isConnectedDFS(graph, source, target) {
//   return dfs(graph, new Set(), source, target);
// }

// function dfs(graph, discovered, source, target) {
//   if (source === target) {
//     return true;
//   }
//   discovered.add(source);
//   for (let neighbour of graph[source]) {
//     if (!discovered.has(neighbour)) {
//       if (dfs(graph, discovered, neighbour, target)) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

let graph2 = new Graph();
myVertices = ['A', 'B'];
myVertices.forEach(val => {
  graph2.addVertex(val);
});
graph2.addEdge('B', 'A');
console.log(isConnectedBFS(graph2   , 'A', 'B'))
console.log(isConnectedDFS(graph2   , 'A', 'B'))