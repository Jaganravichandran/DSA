// lowest common ancestor in BST

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function lca(root, p, q) {
  if (root == null) {
    return null;
  }

  let current = root.val;
  if (current == p.val || current == q.val) {
    return root;
  } else if (p.val > current && q.val > current) {
    return lca(root.right, p, q);
  } else if (p.val < current && q.val < current) {
    return lca(root.left, p, q);
  } else {
    return root;
  }
}

// iterative
function lcaIterative(root, p, q) {
  if (!root) return null;

  let current = root;
  while (current) {
    if (current.val == p.val || current.val == q.val) return current;

    if (p.val > current.val && q.val > current.val) {
      current = current.right;
    } else if (p.val < current.val && q.val < current.val) {
      current = current.left;
    } else {
      return current;
    }
  }
}

const tree = new Node(6);
tree.left = new Node(2);
tree.left.left = new Node(0);
tree.left.right = new Node(4);
tree.left.right.left = new Node(3);
tree.left.right.right = new Node(5);
tree.right = new Node(8);
tree.right.left = new Node(7);
tree.right.right = new Node(9);

let p = tree.left.right.right;
let q = tree.left.left;

// let res = lca(tree, p, q);
let res = lcaIterative(tree, p, q);
console.log(res);
