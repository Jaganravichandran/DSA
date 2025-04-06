// validate binary search tree

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function isValidBST(root) {
  return helper(root, -Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
}

function helper(root, min, max) {
  if (root == null) return true;
  if (root.val >= max || root.val <= min) return false;
  return helper(root.left, min, root.val) && helper(root.right, root.val, max);
}

const tree = new Node(5);
tree.left = new Node(1);
tree.right = new Node(7);
tree.right.left = new Node(6);
tree.right.right = new Node(8);

let res = isValidBST(tree);
console.log(res);
