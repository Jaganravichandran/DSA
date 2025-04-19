// detect cycle in directed graph (BFS)

function isCyclic(V, edges) {
  let adjList = [];
  for (let i = 0; i < V; i++) {
    adjList[i] = [];
  }

  for (let [u, v] of edges) {
    adjList[u].push(v);
  }

  let indeg = new Array(V).fill(0);
  for (let i = 0; i < V; i++) {
    for (let node of adjList[i]) {
      indeg[node] += 1;
    }
  }

  let queue = [];
  for (let i = 0; i < indeg.length; i++) {
    if (indeg[i] == 0) {
      queue.push(i);
    }
  }
  let count = 0;
  while (queue.length > 0) {
    let node = queue.shift();
    count++;
    for (let neighbor of adjList[node]) {
      indeg[neighbor] -= 1;
      if (indeg[neighbor] == 0) {
        queue.push(neighbor);
      }
    }
  }

  return count != V ? true : false;
}

let edges = [
  [0, 1],
  [0, 2],
  [1, 2],
  [2, 3],
];

let res = isCyclic(4, edges);
console.log(res);
