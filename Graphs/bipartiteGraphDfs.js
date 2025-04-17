// Bipartite Graph (DFS)

function isBipartite(graph) {
  let n = graph.length;
  let color = new Array(n).fill(-1);
  for (let i = 0; i < n; i++) {
    if (color[i] == -1) {
      if (!dfs(i, 0, graph, color)) return false;
    }
  }
  return true;
}

function dfs(node, col, graph, color) {
  color[node] = col;

  for (let neighbor of graph[node]) {
    if (color[neighbor] == -1) {
      if (!dfs(neighbor, !col, graph, color)) return false;
    } else if (color[neighbor] == col) return false;
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
  return dfs(0, 0, adjList, color);
}

// let graph = [
//   [1, 3],
//   [0, 2],
//   [1, 3],
//   [0, 2],
// ];

// let res = isBipartite(graph);
// console.log(res);

// GFG
let edges = [
  [0, 1],
  [1, 2],
];

let res = isBipartiteGraph(4, edges);
console.log(res);
