// maximum depth of binary tree

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// using recursion
function maxDepth(root) {
  if (root == null) return 0;
  let left = maxDepth(root.left);
  let right = maxDepth(root.right);
  return 1 + Math.max(left, right);
}

// using level order traversing
function maxDepth2(root) {
  let depth = 0;
  if (root == null) {
    return depth;
  }
  let q = [root];
  while (q.length > 0) {
    let size = q.length;
    depth++;
    for (let i = 0; i < size; i++) {
      let node = q.shift();
      if (node.left) {
        q.push(node.left);
      }
      if (node.right) {
        q.push(node.right);
      }
    }
  }
  return depth;
}

const tree = new Node(1);
tree.left = new Node(2);
tree.right = new Node(5);
tree.left.left = new Node(3);
tree.left.right = new Node(4);
tree.right.left = new Node(6);
tree.right.right = new Node(7);

// let res = maxDepth(tree);
let res = maxDepth2(tree);
console.log(res);
