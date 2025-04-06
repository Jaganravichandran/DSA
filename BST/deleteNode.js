// delete a node in BST

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function deleteNode(root, key) {
  if (!root) return null;

  if (root.val == key) {
    return helper(root);
  }

  let dummy = root;
  while (root != null) {
    if (key < root.val) {
      if (root.left != null && root.left.val == key) {
        root.left = helper(root.left);
        break;
      } else {
        root = root.left;
      }
    } else {
      if (root.right != null && root.right.val == key) {
        root.right = helper(root.right);
        break;
      } else {
        root = root.right;
      }
    }
  }
  return dummy;
}

function helper(root) {
  if (!root.left) return root.right;
  if (!root.right) return root.left;

  let rightChild = root.right;
  let lastRight = findLastRight(root.left);
  lastRight.right = rightChild;
  return root.left;
}

function findLastRight(node) {
  if (!node.right) return node;
  return findLastRight(node.right);
}

let root = new Node(5);
root.left = new Node(3);
root.right = new Node(7);
root.left.left = new Node(2);
root.left.right = new Node(4);
root.right.left = new Node(6);
root.right.right = new Node(8);

let res = deleteNode(root, 3);
console.log(res);
