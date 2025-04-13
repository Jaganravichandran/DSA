// DFS in js

// Brute
function dfsBrute(adj) {
  let n = adj.length;
  let visited = new Array(n).fill(0);

  let result = [];
  let stack = [0];

  while (stack.length > 0) {
    let vertex = stack.pop();

    if (!visited[vertex]) {
      visited[vertex] = 1;
      result.push(vertex);

      for (let i = adj[vertex].length - 1; i >= 0; i--) {
        let neighbor = adj[vertex][i];
        if (!visited[neighbor]) {
          stack.push(neighbor);
        }
      }
    }
  }
  return result;
}

// Optimal
function dfsOptimal(adj) {
  let n = adj.length;
  let visited = new Array(n).fill(0);
  let result = [];

  function helper(node) {
    visited[node] = 1;
    result.push(node);

    for (let neighbor of adj[node]) {
      if (!visited[neighbor]) {
        helper(neighbor);
      }
    }
  }
  helper(0);
  return result;
}

let adj = [[2, 3, 1], [0], [0, 4], [0], [2]];
let res = dfsBrute(adj);
console.log(res);
