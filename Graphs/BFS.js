// BFS in Graph

// Brute
function bfsBrute(adj) {
  let n = adj.length;
  let visited = new Array(n).fill(0);
  let result = [];

  let queue = [0];
  visited[0] = 1;

  while (queue.length > 0) {
    let vertex = queue.shift();
    result.push(vertex);

    for (let neighbor of adj[vertex]) {
      if (!visited[neighbor]) {
        visited[neighbor] = 1;
        queue.push(neighbor);
      }
    }
  }

  return result;
}

// better
class Queue {
  constructor() {
    this.items = {};
    this.frontIndex = 0;
    this.backIndex = 0;
  }

  add(item) {
    this.items[this.backIndex] = item;
    this.backIndex++;
  }

  remove() {
    let item = this.items[this.frontIndex];
    delete this.items[this.frontIndex];
    this.frontIndex++;
    return item;
  }

  isEmpty() {
    return this.frontIndex == this.backIndex;
  }
}

function bfsBetter(adj) {
  let n = adj.length;
  let visited = new Array(n).fill(0);
  let result = [];

  let queue = new Queue();
  queue.add(0);
  visited[0] = 1;

  while (!queue.isEmpty()) {
    let vertex = queue.remove();
    result.push(vertex);

    for (let neighbor of adj[vertex]) {
      if (!visited[neighbor]) {
        visited[neighbor] = 1;
        queue.add(neighbor);
      }
    }
  }
  return result;
}

// Optimal
function bfsOptimal(adj) {
  let visited = new Set([0]);
  let result = [0];

  let queue = [0];
  let nextQueue = [];

  while (queue.length > 0) {
    for (let vertex of queue) {
      for (let neighbor of adj[vertex]) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          result.push(neighbor);
          nextQueue.push(neighbor);
        }
      }
    }
    queue = nextQueue;
    nextQueue = [];
  }

  return result;
}

let adj = [[1, 2], [0, 2], [0, 1, 3, 4], [2], [2]];
// let res = bfsBrute(adj);
// let res = bfsBetter(adj);
let res = bfsOptimal(adj);
console.log(res);
