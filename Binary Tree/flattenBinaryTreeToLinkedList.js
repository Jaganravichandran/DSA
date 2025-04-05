// flatten binary tree to linked list

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Approach 1
function flatten1(root) {
  let prev = null;
  function helper(node) {
    if (node == null) {
      return;
    }
    helper(node.right);
    helper(node.left);
    node.right == prev;
    node.left = null;
    prev = node;
  }
  helper(root);
  return root;
}

// approach 2
function flatten2(root) {
  if (!root) return null;
  let stack = [root];
  while (stack.length > 0) {
    let current = stack.pop();
    if (current.right) {
      stack.push(current.right);
    }
    if (current.left) {
      stack.push(current.left);
    }
    if (stack.length > 0) {
      current.right = stack[stack.length - 1];
    }
    current.left = null;
  }
  return root;
}

// Approach 3
function flatten3(root) {
  if (!root) return null;

  let current = root;
  while (current != null) {
    if (current.left != null) {
      let prev = current.left;
      while (prev.right) {
        prev = prev.right;
      }
      prev.right = current.right;
      current.right = current.left;
    }
    current.left = null;
    current = current.right;
  }
  return root;
}

const tree = new Node(1);
tree.left = new Node(2);
tree.right = new Node(3);
tree.left.left = new Node(4);
tree.left.right = new Node(5);
tree.right.left = new Node(6);
tree.right.right = new Node(7);

// let res = flatten1(tree);
// let res = flatten2(tree);
let res = flatten3(tree);
console.log(res);
