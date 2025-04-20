// find eventual safe state (BFS)

function eventualSafeNodes(graph) {
  let n = graph.length;
  let adjRev = [];
  for (let i = 0; i < n; i++) {
    adjRev[i] = [];
  }
  let inDeg = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    for (let node of graph[i]) {
      adjRev[node].push(i);
      inDeg[i]++;
    }
  }

  let queue = [];
  for (let i = 0; i < n; i++) {
    if (inDeg[i] == 0) {
      queue.push(i);
    }
  }
  let result = [];
  while (queue.length > 0) {
    let node = queue.shift();
    result.push(node);

    for (let neighbor of adjRev[node]) {
      inDeg[neighbor]--;
      if (inDeg[neighbor] == 0) {
        queue.push(neighbor);
      }
    }
  }
  return result.sort((a, b) => a - b);
}

let graph = [[1, 2], [2, 3], [5], [0], [5], [], []];
let res = eventualSafeNodes(graph);
console.log(res);
