// number of provinces

function numProvinces(adj) {
  let n = adj.length;
  let visited = new Array(n).fill(0);

  // initialise adjacency list
  let adjList = new Map();
  for (let i = 0; i < n; i++) {
    adjList.set(i, []);
  }

  //  to change adj matrix into adj list
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (adj[i][j] && i != j) {
        adjList.get(i).push(j);
        adjList.get(j).push(i);
      }
    }
  }

  function dfs(node) {
    visited[node] = 1;
    for (let neightbor of adjList.get(node)) {
      if (!visited[neightbor]) {
        dfs(neightbor);
      }
    }
  }

  let count = 0;
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      count++;
      dfs(i);
    }
  }

  return count;
}

// method 2
function numProvinces2(adj) {
  let n = adj.length;
  let visited = new Array(n).fill(0);

  let count = 0;

  function dfs(node) {
    for (let i = 0; i < n; i++) {
      if (adj[node][i] == 1 && !visited[i]) {
        visited[i] = 1;
        dfs(i);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      count++;
      dfs(i);
    }
  }
  return count;
}

let adj = [
  [1, 0, 1],
  [0, 1, 0],
  [1, 0, 1],
];
// let res = numProvinces(adj);
let res = numProvinces2(adj);
console.log(res);
