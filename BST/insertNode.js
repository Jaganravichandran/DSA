// insert a given node in BST

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function insertNodeRecursive(root, val) {
  if (!root) return new Node(val);
  if (val > root.val) root.right = insertNodeRecursive(root.right, val);
  if (val < root.val) root.left = insertNodeRecursive(root.left, val);
  return root;
}

// iterative
function insertNode(root, val) {
  if (!root) return new Node(val);

  let current = root;
  while (true) {
    if (val < current.val) {
      if (current.left != null) {
        current = current.left;
      } else {
        current.left = new Node(val);
        break;
      }
    } else {
      if (current.right != null) {
        current = current.right;
      } else {
        current.right = new Node(val);
        break;
      }
    }
  }
  return root;
}

const tree = new Node(4);
tree.left = new Node(2);
tree.right = new Node(7);
tree.left.left = new Node(1);
tree.left.right = new Node(3);

// let res = insertNodeRecursive(tree, 9);
let res = insertNode(tree, 9);
console.log(res);
