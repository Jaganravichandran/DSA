// course schedule I && II

function canFinish(n, prerequisites) {
  let adjList = [];
  for (let i = 0; i < n; i++) {
    adjList[i] = [];
  }

  for (let [u, v] of prerequisites) {
    adjList[u].push(v);
  }

  let indeg = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    for (let node of adjList[i]) indeg[node] += 1;
  }

  let queue = [];
  for (let i = 0; i < n; i++) {
    if (indeg[i] == 0) {
      queue.push(i);
    }
  }
  let count = 0;
  while (queue.length > 0) {
    let node = queue.shift();
    count++;
    for (let neighbor of adjList[node]) {
      indeg[neighbor] -= 1;
      if (indeg[neighbor] == 0) {
        queue.push(neighbor);
      }
    }
  }
  if (count == n) return true;
  return false;
}

let n = 5;
let prerequisites = [
  [1, 2],
  [4, 3],
  [2, 4],
];

let res = canFinish(n, prerequisites);
console.log(res);
