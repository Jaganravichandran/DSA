// count complete binary tree nodes

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Brute
function countNodes(root) {
  if (!root) return 0;

  let count = 0;
  function dfs(node) {
    if (!node) return;
    count++;
    dfs(node.left);
    dfs(node.right);
  }
  dfs(root);
  return count;
}

// Optimal 1
function countNodesOptimal(root) {
  return root != null
    ? 1 + countNodesOptimal(root.left) + countNodesOptimal(root.right)
    : 0;
}

// Optimal 2
function countNodes2(root) {
  if (!root) return 0;

  let lh = findLeftHeight(root);
  let rh = findRightHeight(root);

  if (lh == rh) return (1 << lh) - 1;
  return 1 + countNodes2(root.left) + countNodes2(root.right);
}

function findLeftHeight(node) {
  let height = 0;
  while (node) {
    height++;
    node = node.left;
  }
  return height;
}

function findRightHeight(node) {
  let height = 0;
  while (node) {
    height++;
    node = node.right;
  }
  return height;
}

const tree = new Node(1);
tree.left = new Node(2);
tree.right = new Node(3);
tree.left.left = new Node(4);
tree.left.right = new Node(5);
tree.right.left = new Node(6);

// let res = countNodes(tree);
// let res = countNodesOptimal(tree);
let res = countNodes2(tree);
console.log(res);
