// check for balanced binary tree or not

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function checkBrute(root) {
  if (root == null) {
    return true;
  }

  let left = findHeight(root.left);
  let right = findHeight(root.right);
  if (Math.abs(left - right) > 1) return false;

  left = check(root.left);
  right = check(root.right);

  if (!left || !right) return false;
  return true;
}

function findHeight(node) {
  if (node == null) {
    return 0;
  }
  let left = findHeight(node.left);
  let right = findHeight(node.right);
  return 1 + Math.max(left, right);
}

// Optimal
function findHeight2(node) {
  if (node == null) {
    return 0;
  }
  let left = findHeight2(node.left);
  if (left == -1) return -1;
  let right = findHeight2(node.right);
  if (right == -1) return -1;

  if (Math.abs(left - right) > 1) return -1;

  return Math.max(left, right) + 1;
}

function check(root) {
  return findHeight2(root) != -1;
}

const tree = new Node(1);
tree.left = new Node(2);
tree.right = new Node(3);
tree.left.left = new Node(4);
tree.left.right = new Node(5);
tree.right.left = new Node(6);
tree.right.right = new Node(7);

// let res = checkBrute(tree);
let res = check(tree);
console.log(res);
