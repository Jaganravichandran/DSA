// inorder successor / predecessor in BST

class Node {
  constructor(x) {
    this.data = x;
    this.left = null;
    this.right = null;
  }
}

function inorderSuccessor(root, x) {
  let result = [];
  function inorder(node) {
    if (!node) return null;

    inorder(node.left);
    result.push(node.data);
    inorder(node.right);
  }

  inorder(root);

  // method 1
  //   for (let i = 0; i < result.length; i++) {
  //     if (result[i] == x) {
  //       return result[i + 1] != undefined ? result[i + 1] : -1;
  //     }
  //   }

  // method 2
  //   for (let i = 0; i < result.length; i++) {
  //     if (result[i] > x) {
  //       return result[i];
  //     }
  //   }
  //   return -1;

  let low = 0;
  let high = result.length - 1;
  let res = 0;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (result[mid] > x) {
      res = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return res != 0 ? result[res] : -1;
}

// better
function inorderSuccessorBetter(root, x) {
  let res = -1;
  let flag = false;
  function inorder(node) {
    if (!node) return null;

    inorder(node.left);
    if (!flag && node.data > x) {
      res = node.data;
      flag = true;
      return;
    }
    inorder(node.right);
  }

  inorder(root);
  return res;
}

// Optimal
function inorderSuccessorOptimal(root, x) {
  let successor = -1;

  while (root) {
    if (x >= root.data) {
      root = root.right;
    } else {
      successor = root.data;
      root = root.left;
    }
  }
  return successor;
}

// Predecessor
function inorderPredecessor(root, x) {
  let predecessor = -1;

  while (root) {
    if (root.data < x) {
      predecessor = root.data;
      root = root.right;
    } else {
      root = root.left;
    }
  }
  return predecessor;
}

const tree = new Node(2);
tree.left = new Node(1);
tree.right = new Node(3);

// let res = inorderSuccessor(tree, 3);
// let res = inorderSuccessorBetter(tree, 2);
// let res = inorderSuccessorOptimal(tree, 3);
let res = inorderPredecessor(tree, 3);
console.log(res);
