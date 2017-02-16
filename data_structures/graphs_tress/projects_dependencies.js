/**
 * To get the order of the projects we just need to create a graph of the
 * projects and their dependencies and do a topological sort. To detect if an
 * order can be determined we also need to check for cycles as topological sort
 * will only work on DAGs.
 *
 * N = |projects|
 * M = |dependencies|
 * Time: O(N+M) - this assumes that the objects and we use as hashmaps and the
 * Set data type have operations that take O(1) time.
 * Additional space: O(N)
 */
function buildOrder(projects, dependencies) {
  let adj = {},
      finished = new Set(),
      discovered = new Set();
  let stack = [];
  // create adjacency matrix
  projects.forEach(project => adj[project] = []);
  dependencies.forEach(edge => adj[edge[1]].push(edge[0]));
  // run topological sort
  for (let project of projects) {
    if (!discovered.has(project)) {
      if (!dfs(project, stack, adj, discovered, finished)) {
        throw new Error("Not able to find a path");
      }
    }
  }

  return stack;
}
function dfs(project, stack, adj, discovered, finished) {
  if (discovered.has(project)) {
    console.log(project)
    throw new Error("There is a cycle.")
  }
  if (!finished.has(project)) {
    discovered.add(project);
    for (let neightbor of adj[project]) {
      if (!dfs(neightbor, stack, adj, discovered, finished)) {
        return false;
      }
    }
    finished.add(project);
    discovered.delete(project);
    stack.push(project);
  }

  return true;
}

console.log(buildOrder(['a', 'b', 'c', 'd', 'e', 'f'], [['a', 'd'], ['f', 'b',], ['b', 'd'], ['f', 'a'], ['d', 'c']]))