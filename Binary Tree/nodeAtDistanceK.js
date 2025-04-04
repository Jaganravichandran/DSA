// node at a distance k in binary tree

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function distanceKBrute(root, target, k) {
  let graph = new Map();

  function buildGraph(node, parent) {
    if (!node) return;

    if (!graph.has(node.val)) {
      graph.set(node.val, []);
    }

    if (parent != null) {
      graph.get(node.val).push(parent.val);
      graph.get(parent.val).push(node.val);
    }

    buildGraph(node.left, node);
    buildGraph(node.right, node);
  }

  if (!graph.has(root.val)) {
    graph.set(root.val, []);
  }

  buildGraph(root.left, root);
  buildGraph(root.right, root);

  let queue = [[target.val, 0]]; // [node, distance]
  let visited = new Set([target.val]);
  let result = [];

  while (queue.length > 0) {
    let [node, distance] = queue.shift();

    if (distance == k) {
      result.push(node);
      continue;
    }

    for (const neighbour of graph.get(node)) {
      if (!visited.has(neighbour)) {
        visited.add(neighbour);
        queue.push([neighbour, distance + 1]);
      }
    }
  }

  return result;
}

// Optimal
function distanceKOptimal(root, target, k) {
  if (!root) return [];

  let result = [];
  let parentMap = new Map();

  function mapParent(node, parent) {
    if (!node) return;

    parentMap.set(node, parent);
    mapParent(node.left, node);
    mapParent(node.right, node);
  }
  mapParent(root, null);

  function findKDistanceNodes(node, distance, visited) {
    if (!node || visited.has(node)) return;

    visited.add(node);

    if (distance == k) {
      result.push(node.val);
      return;
    }

    findKDistanceNodes(node.left, distance + 1, visited);
    findKDistanceNodes(node.right, distance + 1, visited);

    findKDistanceNodes(parentMap.get(node), distance + 1, visited);
  }

  findKDistanceNodes(target, 0, new Set());
  return result;
}

const tree = new Node(3);
tree.left = new Node(5);
tree.right = new Node(1);
tree.left.left = new Node(6);
tree.left.right = new Node(2);
tree.left.right.left = new Node(7);
tree.left.right.right = new Node(4);
tree.right.left = new Node(0);
tree.right.right = new Node(8);

let target = tree.left;

// let res = distanceKBrute(tree, target, 2);
let res = distanceKOptimal(tree, target, 2);
console.log(res);
