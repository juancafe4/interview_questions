const Graph = require('./direct_graph');
const Queue = require('../stacks_queues/queue')
let graph1 = new Graph();
let myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

myVertices.forEach(val => {
  graph1.addVertex(val);
});

graph1.addEdge('A', 'C');
graph1.addEdge('A', 'B');
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
  return false;
}

console.log(isConnectedBFS(graph1, 'A', 'D'))