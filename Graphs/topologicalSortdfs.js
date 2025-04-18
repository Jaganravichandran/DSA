// Topological sort (DFS)

function topoSort(V, edges) {
  let adjList = [];
  for (let i = 0; i < V; i++) {
    adjList[i] = [];
  }

  for (let [u, v] of edges) {
    adjList[u].push(v);
  }

  let stack = [];
  let visited = new Array(V).fill(0);

  for (let i = 0; i < V; i++) {
    if (!visited[i]) {
      dfs(i, adjList, visited, stack);
    }
  }
  let result = [];
  for (let i = 0; i < stack.length; i++) {
    result[i] = stack[stack.length - 1 - i];
  }
  return result;
}

function dfs(node, adjList, visited, stack) {
  visited[node] = 1;

  for (let neighbor of adjList[node]) {
    if (!visited[neighbor]) {
      dfs(neighbor, adjList, visited, stack);
    }
  }
  stack.push(node);
}

let edges = [
  [3, 0],
  [1, 0],
  [2, 0],
];

let res = topoSort(4, edges);
console.log(res);
