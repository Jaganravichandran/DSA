// children sum property in binary tree (v2)

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// brute (only increase node, never decreases them)
function childrenSumProperty(root) {
  if (!root || (!root.left && !root.right)) {
    return;
  }

  childrenSumProperty(root.left);
  childrenSumProperty(root.right);

  let sum = 0;
  if (root.left) sum += root.left.data;
  if (root.right) sum += root.right.data;

  root.data = sum;
}

// Optimal
function childrenSumPropertyOptimal(root) {
  if (!root) {
    return;
  }

  childrenSumPropertyOptimal(root.left);
  childrenSumPropertyOptimal(root.right);

  let sum = 0;
  if (root.left) sum += root.left.data;
  if (root.right) sum += root.right.data;

  if (!root.left && !root.right) {
    return;
  }
  if (sum >= root.data) {
    root.data = sum;
  } else {
    distributeExcess(root, root.data - sum);
  }
}

function distributeExcess(node, excess) {
  if (!node) return;

  if (node.left && node.left.left && node.left.right) {
    node.left.data += excess;
    childrenSumPropertyOptimal(node.left);
  } else if (node.right && node.right.left && node.right.right) {
    node.right.data += excess;
    childrenSumPropertyOptimal(node.right);
  } else if (node.left) {
    node.left.data += excess;
    if (node.left.left || node.left.right) {
      childrenSumPropertyOptimal(node.left);
    }
  } else if (node.right) {
    node.right.data += excess;
    if (node.right.left || node.right.right) {
      childrenSumPropertyOptimal(node.right);
    }
  }
}

// method 2
function changeTree(root) {
  if (!root || (!root.left && !root.right)) return;

  let childSum = 0;
  if (root.left) childSum += root.left.data;
  if (root.right) childSum += root.right.data;

  if (childSum >= root.data) {
    root.data = childSum;
  } else {
    if (root.left) {
      root.left.data = root.data;
    } else if (root.right) {
      root.right.data = root.data;
    }
  }

  changeTree(root.left);
  changeTree(root.right);

  let total = 0;
  if (root.left) {
    total += root.left.data;
  }
  if (root.right) {
    total += root.right.data;
  }

  if (root.left || root.right) {
    root.data = total;
  }
}

const tree = new Node(40);
tree.left = new Node(10);
tree.right = new Node(20);
tree.left.left = new Node(2);
tree.left.right = new Node(5);
tree.right.left = new Node(30);
tree.right.right = new Node(40);

// let res = childrenSumProperty(tree);
let res = childrenSumPropertyOptimal(tree);
// let res = changeTree(tree);
