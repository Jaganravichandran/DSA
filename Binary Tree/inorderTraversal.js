// iterative Inorder traversal

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function inorderTraversal(root) {
  let result = [];
  if (root == null) {
    return result;
  }

  let stack = [];
  let current = root;
  while (current || stack.length > 0) {
    if (current != null) {
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    result.push(current.data);
    current = current.right;
  }
  return result;
}

// method 2
function inorderTraversal2(root) {
  let result = [];
  if (root == null) {
    return result;
  }

  let stack = [];
  let current = root;
  while (current || stack.length > 0) {
    while (current != null) {
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    result.push(current.data);
    current = current.right;
  }
  return result;
}

const tree = new Node(1);
tree.left = new Node(2);
tree.right = new Node(7);
tree.left.left = new Node(3);
tree.left.right = new Node(4);
tree.left.right.left = new Node(5);
tree.left.right.right = new Node(6);

let res = inorderTraversal(tree);
// let res = inorderTraversal2(tree);
console.log(res);
