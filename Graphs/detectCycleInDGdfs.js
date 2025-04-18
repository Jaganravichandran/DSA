// detect cycle in directed graph (DFS)

function isCyclic(V, edges) {
  let visited = new Array(V).fill(0);
  let path = new Array(V).fill(0);

  // initialize adjacency list
  let adjList = new Array(V);
  for (let i = 0; i < V; i++) {
    adjList[i] = [];
  }
  for (let [u, v] of edges) {
    adjList[u].push(v);
  }

  for (let i = 0; i < V; i++) {
    if (!visited[i]) {
      if (dfs(i, adjList, visited, path)) return true;
    }
  }
  return false;
}

function dfs(node, adjList, visited, path) {
  visited[node] = 1;
  path[node] = 1;

  for (let neighbor of adjList[node]) {
    if (!visited[neighbor]) {
      if (dfs(neighbor, adjList, visited, path)) {
        return true;
      }
    } else if (path[neighbor]) {
      return true;
    }
  }
  path[node] = 0;
  return false;
}

// using single visited array

// better
function isCyclicBetter(V, edges) {
  let visited = new Array(V);
  for (let i = 0; i < V; i++) {
    visited[i] = { vis: 0, pathVis: 0 };
  }

  // initialize adjacency list
  let adjList = new Array(V);
  for (let i = 0; i < V; i++) {
    adjList[i] = [];
  }
  for (let [u, v] of edges) {
    adjList[u].push(v);
  }

  for (let i = 0; i < V; i++) {
    if (!visited[i].vis) {
      if (dfsCheck(i, adjList, visited)) return true;
    }
  }
  return false;
}

function dfsCheck(node, adjList, visited) {
  visited[node].vis = 1;
  visited[node].pathVis = 2;

  for (let neighbor of adjList[node]) {
    if (!visited[neighbor].vis) {
      if (dfsCheck(neighbor, adjList, visited)) return true;
    } else if (visited[neighbor].pathVis == 2) return true;
  }

  visited[node].pathVis = 0;
  return false;
}

// Optimal
function isCyclicOptimal(V, edges) {
  let visited = new Array(V).fill(0);

  // initialize adjacency list
  let adjList = new Array(V);
  for (let i = 0; i < V; i++) {
    adjList[i] = [];
  }
  for (let [u, v] of edges) {
    adjList[u].push(v);
  }

  function dfsCyclic(node) {
    visited[node] = 2;
    for (let neighbor of adjList[node]) {
      if (!visited[neighbor]) {
        if (dfsCyclic(neighbor)) return true;
      } else if (visited[neighbor] == 2) {
        return true;
      }
    }
    visited[node] = 1;
    return false;
  }

  for (let i = 0; i < V; i++) {
    if (visited[i] == 0) {
      if (dfsCyclic(i)) return true;
    }
  }

  return false;
}

let edges = [
  [0, 1],
  [0, 2],
  [1, 2],
  [2, 0],
  [2, 3],
];
// let res = isCyclic(4, edges);
// let res = isCyclicBetter(4, edges);
let res = isCyclicOptimal(4, edges);
console.log(res);
