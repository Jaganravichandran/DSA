// Bipartite graph BFS

// Leetcode
function isBipartite(graph) {
  let n = graph.length;
  let color = new Array(n).fill(-1);

  for (let i = 0; i < n; i++) {
    if (color[i] == -1) {
      if (!bfs(i, graph, color)) return false;
    }
  }
  return true;
}

function bfs(node, graph, color) {
  let queue = [node];
  color[node] = 0;
  while (queue.length > 0) {
    let curr = queue.shift();
    for (let neighbor of graph[curr]) {
      if (color[neighbor] == -1) {
        color[neighbor] = color[curr] ^ 1;
        queue.push(neighbor);
      } else if (color[neighbor] == color[curr]) {
        return false;
      }
    }
  }
  return true;
}

// GFG
function isBipartiteGraph(V, edges) {
  let color = new Array(V).fill(-1);
  let adjList = [];
  for (let i = 0; i < V; i++) {
    adjList[i] = [];
  }
  for (let [u, v] of edges) {
    adjList[u].push(v);
    adjList[v].push(u);
  }
  color[0] = 0;
  let queue = [0];

  while (queue.length > 0) {
    let node = queue.shift();

    for (let neighbor of adjList[node]) {
      if (color[neighbor] == -1) {
        color[neighbor] = color[node] ^ 1;
        queue.push(neighbor);
      } else if (color[neighbor] == color[node]) return false;
    }
  }
  return true;
}

// let graph = [
//   [1, 2, 3],
//   [0, 2],
//   [0, 1, 3],
//   [0, 2],
// ];

// let res = isBipartite(graph);
// console.log(res);

// GFG
let edges = [
  [0, 3],
  [1, 2],
  [3, 2],
  [0, 2],
];

let res = isBipartiteGraph(4, edges);
console.log(res);
