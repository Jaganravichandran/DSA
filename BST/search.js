// search in BST

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function search(root, val) {
  while (root != null && root.val != val) {
    root = val < root.val ? root.left : root.right;
  }
  return root;
}

const tree = new Node(8);
tree.left = new Node(5);
tree.left.left = new Node(4);
tree.left.right = new Node(7);
tree.left.right.left = new Node(6);
tree.right = new Node(12);
tree.right.left = new Node(10);
tree.right.right = new Node(14);
tree.right.right.left = new Node(13);

let res = search(tree, 5);
console.log(res);
