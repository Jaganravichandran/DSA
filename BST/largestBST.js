// largest BST

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Brute
function largestBstBrute(root) {
  let maxCount = 0;

  function isValid(node, min, max) {
    if (!node) return true;
    if (node.val >= max || node.val <= min) return false;
    return (
      isValid(node.left, min, node.val) && isValid(node.right, node.val, max)
    );
  }

  function countNodes(node) {
    if (!node) return 0;
    return 1 + countNodes(node.left) + countNodes(node.right);
  }

  function findLargestBST(node) {
    if (!node) return;

    if (isValid(node, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY)) {
      let currentCount = countNodes(node);
      maxCount = Math.max(maxCount, currentCount);
    }

    findLargestBST(node.left);
    findLargestBST(node.right);
  }
  findLargestBST(root);
  return maxCount;
}

// Optimal
function largestBst(root) {
  let maxSize = 0;

  function checkBST(node) {
    if (!node) {
      return [true, 0, Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER]; // [isBST, size, min, max]
    }

    let left = checkBST(node.left);
    let right = checkBST(node.right);

    if (left[0] && right[0] && node.val > left[3] && node.val < right[2]) {
      let size = 1 + left[1] + right[1];
      maxSize = Math.max(maxSize, size);

      return [
        true,
        size,
        Math.min(node.val, left[2]),
        Math.max(node.val, right[3]),
      ];
    }

    return [false, 0, 0, 0];
  }
  checkBST(root);
  return maxSize;
}

const tree = new Node(10);
tree.left = new Node(5);
tree.left.left = new Node(1);
tree.left.right = new Node(8);
tree.right = new Node(15);
tree.right.right = new Node(7);

// let res = largestBstBrute(tree);
let res = largestBst(tree);
console.log(res);
