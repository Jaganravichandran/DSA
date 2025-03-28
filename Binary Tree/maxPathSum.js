// maximum path sum in binary tree

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// Brute
function maxPathSumBrute(root) {
  let result = [];
  function getMaxSum(node) {
    if (!node) return 0;

    let left = getMaxSum(node.left);
    let right = getMaxSum(node.right);

    let maxPath = Math.max(node.data, node.data + left, node.data + right);
    let maxVal = Math.max(maxPath, node.data + left + right);
    result.push(maxVal);
    return maxPath;
  }

  getMaxSum(root);
  return Math.max(...result);
}

// Better
function maxPathSumBetter(root) {
  let maxSum = Number.MIN_SAFE_INTEGER;

  function getAllPaths(node) {
    if (!node) return 0;

    let leftSum = Math.max(0, getAllPaths(node.left));
    let rightSum = Math.max(0, getAllPaths(node.right));

    let currentMax = node.data + leftSum + rightSum;

    maxSum = Math.max(maxSum, currentMax);

    return node.data + Math.max(leftSum, rightSum);
  }

  getAllPaths(root);

  return maxSum;
}

const tree = new Node(15);
tree.left = new Node(10);
tree.right = new Node(20);
tree.right.left = new Node(-30);
tree.right.right = new Node(-15);

// let res = maxPathSumBrute(tree);
let res = maxPathSumBetter(tree);
console.log(res);
