//  minimum time taken to burn the binary tree from a node

class Node {
  constructor(x) {
    this.key = x;
    this.left = null;
    this.right = null;
  }
}

function minTime(root, target) {
  if (!root) return 0;

  let graph = new Map();

  function buildGraph(node, parent) {
    if (!node) return;

    if (!graph.has(node.key)) {
      graph.set(node.key, []);
    }

    if (parent) {
      graph.get(node.key).push(parent.key);
      graph.get(parent.key).push(node.key);
    }

    buildGraph(node.left, node);
    buildGraph(node.right, node);
  }

  buildGraph(root, null);

  if (!graph.has(target.key)) {
    return 0;
  }

  let queue = [[target.key, 0]]; // [node, distance];

  let visited = new Set([target.key]);
  let maxTime = 0;

  while (queue.length > 0) {
    let [node, distance] = queue.shift();
    maxTime = Math.max(maxTime, distance);

    for (let neightbour of graph.get(node)) {
      if (!visited.has(neightbour)) {
        visited.add(neightbour);
        queue.push([neightbour, distance + 1]);
      }
    }
  }
  return maxTime;
}

// optimal
function minTimeOptimal(root, target) {
  if (!root) return 0;

  let parentMap = new Map();
  //   let targetNode = null; if target is number, not node
  function mapParent(node, parent) {
    if (!node) return;

    // if (node.key === target) {
    //   targetNode = node;
    // }

    parentMap.set(node, parent);
    mapParent(node.left, node);
    mapParent(node.right, node);
  }
  mapParent(root, null);

  //   if (!targetNode) return 0;

  let maxTime = 0;

  function findMinTime(node, distance, visited) {
    if (!node || visited.has(node)) return;

    visited.add(node);
    maxTime = Math.max(maxTime, distance);

    findMinTime(node.left, distance + 1, visited);
    findMinTime(node.right, distance + 1, visited);

    findMinTime(parentMap.get(node), distance + 1, visited);
  }
  findMinTime(target, 0, new Set());
  return maxTime;
}

const tree = new Node(1);
tree.left = new Node(2);
tree.right = new Node(3);
tree.left.left = new Node(4);
tree.left.left.left = new Node(8);
tree.left.right = new Node(5);
tree.left.right.left = new Node(10);
tree.right.right = new Node(7);

let target = tree.left.right.left;

// let res = minTime(tree, target);
let res = minTimeOptimal(tree, target);
console.log(res);
