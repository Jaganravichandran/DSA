// check if the binary tree is symmetric around its center or not

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function isSymmetric(root) {
  return root == null || helper(root.left, root.right);
}

function helper(left, right) {
  if (left == null || right == null) {
    return left == right;
  }

  if (left.val != right.val) return false;

  return helper(left.left, right.right) && helper(left.right, right.left);
}

const tree = new Node(1);
tree.left = new Node(2);
tree.right = new Node(3);
tree.left.left = new Node(4);
tree.left.right = new Node(5);
tree.right.left = new Node(6);
tree.right.right = new Node(7);

let res = isSymmetric(tree);
console.log(res);
