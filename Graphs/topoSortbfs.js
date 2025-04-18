// Topological sort (kahn's algorithm | BFS)

function topoSort(V, edges) {
  let adjList = [];
  for (let i = 0; i < V; i++) {
    adjList[i] = [];
  }

  for (let [u, v] of edges) {
    adjList[u].push(v);
  }

  let indeg = new Array(V).fill(0);
  for (let i = 0; i < V; i++) {
    for (let neighbor of adjList[i]) {
      indeg[neighbor] += 1;
    }
  }

  let queue = [];
  for (let i = 0; i < indeg.length; i++) {
    if (indeg[i] == 0) {
      queue.push(i);
    }
  }

  let result = [];
  while (queue.length > 0) {
    let node = queue.shift();
    result.push(node);
    for (let neighbor of adjList[node]) {
      indeg[neighbor] -= 1;
      if (indeg[neighbor] == 0) {
        queue.push(neighbor);
      }
    }
  }
  return result;
}

let edges = [
  [3, 0],
  [1, 0],
  [2, 0],
];

let res = topoSort(4, edges);
console.log(res);
