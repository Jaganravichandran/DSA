// detect cycle in undirected graph (BFS)

function isCycle(V, edges) {
  let visited = new Array(V).fill(0);

  let adjList = new Array(V);
  for (let i = 0; i < V; i++) {
    adjList[i] = [];
  }

  for (let [u, v] of edges) {
    adjList[u].push(v);
    adjList[v].push(u);
  }

  for (let i = 0; i < V; i++) {
    if (!visited[i]) {
      if (detect(i, adjList, visited)) {
        return true;
      }
    }
  }
  return false;
}

function detect(src, adjList, visited) {
  visited[src] = 1;

  let queue = [{ node: src, parent: 0 }];
  while (queue.length > 0) {
    let { node, parent } = queue.shift();

    for (let neighbor of adjList[node]) {
      if (!visited[neighbor]) {
        visited[neighbor] = 1;
        queue.push({ node: neighbor, parent: node });
      } else if (parent != neighbor) {
        return true;
      }
    }
  }

  return false;
}

let edges = [
  [0, 1],
  [0, 2],
  [1, 2],
  [2, 3],
];

let res = isCycle(4, edges);
console.log(res);
