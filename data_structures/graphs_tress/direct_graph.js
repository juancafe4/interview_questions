module.exports = class Graph {
  constructor() {
    this.vertices = [];
    this.adjList = {};
  }

  addVertex(v) {
    this.vertices.push(v);
    this.adjList[v] = [];
  }
  addEdge(vertex, neighbor) {
    this.adjList[vertex].push(neighbor);
  }
  toString() {
    let s = '';

    this.vertices.forEach(val => {
      s += val + '-> ';
      let neightbors = this.adjList[val];
      neightbors.forEach(n => {
        s += n + ' ';
      });
      s += '\n';
    });
    return s;
  }
}

