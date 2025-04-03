// maximum width of binary tree (variation 2)
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// brute
function widthOfBinaryTreeBrute(root) {
  function getHeight(node) {
    if (!node) return 0;
    return 1 + Math.max(getHeight(node.left), getHeight(node.right));
  }

  function countNodesAtLevel(node, level) {
    if (!node) return 0;
    if (level === 1) return 1;
    return (
      countNodesAtLevel(node.left, level - 1) +
      countNodesAtLevel(node.right, level - 1)
    );
  }

  let height = getHeight(root);

  let maxWidth = 0;
  for (let i = 1; i <= height; i++) {
    let currentLevelWidth = countNodesAtLevel(root, i);
    maxWidth = Math.max(maxWidth, currentLevelWidth);
  }
  return maxWidth;
}

// Optimal
function widthOfBinaryTreeBetter(root) {
  if (!root) return 0;

  let queue = [root];

  let maxWidth = 0;
  while (queue.length > 0) {
    let size = queue.length;
    maxWidth = Math.max(maxWidth, size);
    for (let i = 0; i < size; i++) {
      let node = queue.shift();

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return maxWidth;
}

const tree = new Node(1);
tree.left = new Node(2);
tree.right = new Node(3);
tree.left.left = new Node(4);
tree.left.right = new Node(5);
tree.right.right = new Node(7);

// let res = widthOfBinaryTreeBrute(tree);
// let res = widthOfBinaryTreeBetter(tree);
let res = widthOfBinaryTree(tree);
console.log(res);
