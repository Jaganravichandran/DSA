// Two Sum

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Brute
function twoSum(root, k) {
  let result = [];
  function inorder(node) {
    if (!node) return;

    inorder(node.left);
    result.push(node.val);
    inorder(node.right);
  }

  inorder(root);

  for (let i = 0; i < result.length; i++) {
    for (let j = i + 1; j < result.length; j++) {
      if (result[i] + result[j] === k) {
        return true;
      }
    }
  }

  return false;
}

// better
function twoSumBetter(root, k) {
  let result = [];
  function inorder(node) {
    if (!node) return;

    inorder(node.left);
    result.push(node.val);
    inorder(node.right);
  }

  inorder(root);

  let low = 0;
  let high = result.length - 1;
  while (low < high) {
    if (result[low] + result[high] === k) {
      return true;
    } else if (result[low] + result[high] > k) {
      high = high - 1;
    } else {
      low = low + 1;
    }
  }

  return false;
}

// Optimal
class BSTIterator {
  constructor(root, isReverse) {
    this.stack = [];
    // reverse -> true (before)
    // reverse -> false (next)
    this.reverse = isReverse;
    this.pushAll(root);
  }

  pushAll(node) {
    while (node) {
      this.stack.push(node);
      if (this.reverse == true) {
        node = node.right;
      } else {
        node = node.left;
      }
    }
  }

  next() {
    let node = this.stack.pop();

    if (!this.reverse) {
      this.pushAll(node.right);
    } else {
      this.pushAll(node.left);
    }
    return node.val;
  }

  hasNext() {
    return this.stack.length > 0;
  }
}

function twoSumOptimal(root, k) {
  if (!root) return false;

  let l = new BSTIterator(root, false);
  let r = new BSTIterator(root, true);

  let i = l.next();
  let j = r.next();

  while (i < j) {
    if (i + j == k) {
      return true;
    } else if (i + j < k) {
      i = l.next();
    } else {
      j = r.next();
    }
  }

  return false;
}

const tree = new Node(5);
tree.left = new Node(3);
tree.left.left = new Node(2);
tree.left.right = new Node(4);
tree.right = new Node(6);
tree.right.right = new Node(7);

// let res = twoSum(tree, 9);
// let res = twoSumBetter(tree, 4);
let res = twoSumOptimal(tree, 4);
console.log(res);
