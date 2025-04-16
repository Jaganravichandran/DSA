// detect cycle in undirected graph (DFS)

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
      if (dfs(i, -1, adjList, visited)) {
        return true;
      }
    }
  }

  return false;
}

function dfs(node, parent, adjList, visited) {
  visited[node] = 1;

  for (let neighbor of adjList[node]) {
    if (!visited[neighbor]) {
      if (dfs(neighbor, node, adjList, visited)) {
        return true;
      }
    } else if (parent != neighbor) {
      return true;
    }
  }

  return false;
}

let edges = [
  [0, 1],
  [1, 2],
  [2, 3],
];

let res = isCycle(4, edges);
console.log(res);
