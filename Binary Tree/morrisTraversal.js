// morris traversal (inorder & preorder)

class Node {
  constructor(x) {
    this.key = x;
    this.left = null;
    this.right = null;
  }
}

function inorder(root) {
  let result = [];
  if (!root) return resull;

  let current = root;
  while (current != null) {
    if (current.left == null) {
      result.push(current.key);
      current = current.right;
    } else {
      let predecessor = current.left;
      while (predecessor.right != null && predecessor.right != current) {
        predecessor = predecessor.right;
      }

      if (predecessor.right == null) {
        predecessor.right = current;
        current = current.left;
      } else {
        predecessor.right = null;
        result.push(current.key);
        current = current.right;
      }
    }
  }
  return result;
}

// Preorder
function preorder(root) {
  if (!root) return [];

  let result = [];
  let current = root;

  while (current != null) {
    if (current.left == null) {
      result.push(current.key);
      current = current.right;
    } else {
      let predecessor = current.left;
      while (predecessor.right != null && predecessor.right != current) {
        predecessor = predecessor.right;
      }

      if (predecessor.right == null) {
        result.push(current.key);
        predecessor.right = current;
        current = current.left;
      } else {
        predecessor.right = null;
        current = current.right;
      }
    }
  }
  return result;
}

const tree = new Node(1);
tree.left = new Node(2);
tree.right = new Node(3);
tree.left.left = new Node(4);
tree.left.right = new Node(5);
tree.right.left = new Node(6);
tree.right.right = new Node(7);

// let res = inorder(tree);
let res = preorder(tree);
console.log(res);
