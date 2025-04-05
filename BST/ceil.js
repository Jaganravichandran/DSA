// ceil in BST

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function ceil(root, key) {
  let ceil = -1;
  while (root) {
    if (root.val == key) {
      ceil = root.val;
      return ceil;
    }

    if (key > root.val) {
      root = root.right;
    } else {
      ceil = root.val;
      root = root.left;
    }
  }
  return ceil;
}

const tree = new Node(10);
tree.left = new Node(5);
tree.left.left = new Node(3);
tree.left.left.left = new Node(2);
tree.left.left.right = new Node(4);
tree.left.right = new Node(6);
tree.left.right.right = new Node(9);
tree.right = new Node(13);
tree.right.left = new Node(11);
tree.right.right = new Node(14);

let res = ceil(tree, 12);
console.log(res);
