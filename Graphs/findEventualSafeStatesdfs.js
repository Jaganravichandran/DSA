// find eventual safe states (DFS)

function eventualSafeNodes(graph) {
  let n = graph.length;

  let visited = new Array(n).fill(0);
  let path = new Array(n).fill(0);
  let check = new Array(n).fill(0);

  let result = [];

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i, graph, visited, path, check);
    }
  }

  for (let i = 0; i < n; i++) {
    if (check[i] == 1) result.push(i);
  }
  return result;
}

function dfs(node, graph, visited, path, check) {
  visited[node] = 1;
  path[node] = 1;
  for (let neighbor of graph[node]) {
    if (!visited[neighbor]) {
      if (dfs(neighbor, graph, visited, path, check)) {
        return true;
      }
    } else if (path[neighbor]) {
      return true;
    }
  }
  check[node] = 1;
  path[node] = 0;
  return false;
}

let graph = [[1, 2], [2, 3], [5], [0], [5], [], []];
let res = eventualSafeNodes(graph);
console.log(res);
