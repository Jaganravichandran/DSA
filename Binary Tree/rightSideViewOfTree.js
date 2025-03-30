// right/left side view of tree

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Better
function rightSideView(root) {
  if (!root) return [];

  let queue = [[root, 0]]; // [node, level]

  let minLevel = 0;
  let maxlevel = 0;

  let map = new Map();

  while (queue.length > 0) {
    let [node, level] = queue.shift();

    minLevel = Math.min(minLevel, level);
    maxlevel = Math.max(maxlevel, level);

    map.set(level, node.val);
    if (node.left) queue.push([node.left, level + 1]);
    if (node.right) queue.push([node.right, level + 1]);
  }

  let result = [];
  for (let i = minLevel; i <= maxlevel; i++) {
    if (map.has(i)) {
      result.push(map.get(i));
    }
  }
  return result;
}

// Optimal
function rightSideViewOptimal(root) {
  if (!root) return [];

  let queue = [root];

  let result = [];
  while (queue.length > 0) {
    let levelSize = queue.length;
    for (let i = 0; i < levelSize; i++) {
      let node = queue.shift();

      if (i == levelSize - 1) {
        result.push(node.val);
      }
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return result;
}

// Recursive
function rightSideViewRecursive(root) {
  if (!root) return [];

  let result = [];
  function dfs(node, level) {
    if (!node) return;

    if (level == result.length) {
      result.push(node.val);
    }

    dfs(node.right, level + 1);
    dfs(node.left, level + 1);
  }

  dfs(root, 0);
  return result;
}

let tree = new Node(1);
tree.left = new Node(2);
tree.right = new Node(3);
tree.left.left = new Node(4);
tree.left.right = new Node(5);
tree.left.right.left = new Node(6);
tree.right.right = new Node(7);

// let res = rightSideView(tree);
// let res = rightSideViewOptimal(tree);
// let res = rightSideViewRecursive(tree);
// console.log(res);

// left side view

// Recursion
function leftSideView(root) {
  if (!root) return [];
  let result = [];

  function dfs(node, level) {
    if (!node) return;

    if (level == result.length) {
      result.push(node.val);
    }
    dfs(node.left, level + 1);
    dfs(node.right, level + 1);
  }

  dfs(root, 0);
  return result;
}

let res = leftSideView(tree);
console.log(res);
