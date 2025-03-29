// Boundary Traversal

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function boundaryTraversal(root) {
  let result = [];
  if (root == null) {
    return result;
  }
  result.push(root.data);

  if (isLeaf(root)) return result;

  result.push(...addLeftBoundary(root));
  result.push(...addLeaf(root));
  result.push(...addRightBoundary(root));
  return result;
}

function isLeaf(root) {
  return !root.left && !root.right;
}

function addLeftBoundary(node) {
  let boundary = [];
  let current = node.left;
  while (current) {
    if (!isLeaf(current)) {
      boundary.push(current.data);
    }
    current = current.left ? current.left : current.right;
  }
  return boundary;
}

function addLeaf(node) {
  let leaves = [];
  function dfs(node) {
    if (!node) {
      return leaves;
    }
    if (isLeaf(node)) {
      leaves.push(node.data);
      return;
    }
    dfs(node.left);

    dfs(node.right);
  }
  dfs(node);
  return leaves;
}

function addRightBoundary(node) {
  let current = node.right;
  let boundary = [];
  while (current) {
    if (!isLeaf(current)) {
      boundary.push(current.data);
    }
    current = current.right ? current.right : current.left;
  }
  return boundary.reverse();
}

// Optimal
function boundaryTraversalOptimal(root) {
  if (!root) return [];

  let result = [];
  if (!isLeaf(root)) {
    result.push(root.data);
  }
  addLeftBoundaryOptiaml(root.left, result);
  addLeafOptimal(root, result);
  addRightBoundaryOptimal(root.right, result);
  return result;
}

function addLeftBoundaryOptiaml(node, result) {
  if (!node || isLeaf(node)) return;

  result.push(node.data);

  if (node.left) {
    addLeftBoundaryOptiaml(node.left, result);
  } else {
    addLeftBoundaryOptiaml(node.right, result);
  }
}

function addLeafOptimal(node, result) {
  if (!node) return;

  if (isLeaf(node)) {
    result.push(node.data);
    result;
  }

  addLeafOptimal(node.left, result);
  addLeafOptimal(node.right, result);
}

function addRightBoundaryOptimal(node, result) {
  if (!node || isLeaf(node)) return;

  if (node.right) {
    addRightBoundaryOptimal(node.right, result);
  } else {
    addRightBoundaryOptimal(node.left, result);
  }
  result.push(node.data);
}

const tree = new Node(1);
tree.left = new Node(2);
tree.right = new Node(7);
tree.left.left = new Node(3);
tree.left.left.right = new Node(4);
tree.left.left.right.left = new Node(5);
tree.left.left.right.right = new Node(6);
tree.right.right = new Node(8);
tree.right.right.left = new Node(9);
tree.right.right.left.left = new Node(10);
tree.right.right.left.right = new Node(11);

// let res = boundaryTraversal(tree);
let res = boundaryTraversalOptimal(tree);
console.log(res);
