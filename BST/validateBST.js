// validate binary search tree

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Brute
function isValidBstBrute(root) {
  if (!root) return true;
  let values = [];

  function inorder(root) {
    if (!root) return;

    inorder(root.left);
    values.push(root.val);
    inorder(root.right);
  }

  inorder(root);

  for (let i = 1; i < values.length; i++) {
    if (values[i] <= values[i - 1]) {
      return false;
    }
  }
  return true;
}

// better
function isValidBst(root) {
  return helper(root, -Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
}

function helper(root, min, max) {
  if (root == null) return true;
  if (root.val >= max || root.val <= min) return false;
  return helper(root.left, min, root.val) && helper(root.right, root.val, max);
}

// Optimal
function isValidBstOptimal(root) {
  if (!root) return true;

  let stack = [];
  let current = root;
  let prev = Number.MIN_SAFE_INTEGER;

  while (current || stack.length > 0) {
    if (current != null) {
      stack.push(current);
      current = current.left;
    } else {
      current = stack.pop();
      if (current.val <= prev) {
        return false;
      }
      prev = current.val;
      current = current.right;
    }
  }
  return true;
}

const tree = new Node(5);
tree.left = new Node(1);
tree.right = new Node(7);
tree.right.left = new Node(6);
tree.right.right = new Node(8);

// let res = isValidBstBrute(tree);
// let res = isValidBst(tree);
let res = isValidBstOptimal(tree);
console.log(res);
