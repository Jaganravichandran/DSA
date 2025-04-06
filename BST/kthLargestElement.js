// kth largest element in BST

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// better
function kthLargest(root, k) {
  let result = [];
  function dfs(node) {
    if (!node) return;

    dfs(node.right);
    result.push(node.val);
    dfs(node.left);
  }
  dfs(root);
  for (let i = 0; i < result.length; i++) {
    if (i === k - 1) {
      return result[i];
    }
  }
  return -1;
}

// optimal
function kthLargestOptimal(root, k) {
  let count = 0;
  let ans = 0;
  function dfs(node) {
    if (!node) return;

    dfs(node.right);
    count = count + 1;
    if (count == k) {
      ans = node.val;
      return;
    }
    dfs(node.left);
  }
  dfs(root);
  return ans;
}

// iterative
function kthLargestIterative(root, k) {
  if (!root) return -1;
  let stack = [];
  let current = root;
  let count = 0;
  let ans = 0;
  while (current || stack.length > 0) {
    if (current != null) {
      stack.push(current);
      current = current.right;
    } else {
      current = stack.pop();
      count = count + 1;
      if (count == k) {
        ans = current.val;
        break;
      }
      current = current.left;
    }
  }
  return ans;
}

const tree = new Node(5);
tree.left = new Node(3);
tree.left.left = new Node(1);
tree.left.right = new Node(4);
tree.left.left.right = new Node(2);
tree.right = new Node(7);
tree.right.left = new Node(6);
tree.right.right = new Node(8);

// let res = kthLargest(tree, 2);
// let res = kthLargestOptimal(tree, 2);
let res = kthLargestIterative(tree, 4);
console.log(res);
