// construct BST from preorder

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Brute
function bstFromPreorderBrute(preorder) {
  if (!preorder.length) return null;

  let root = new Node(preorder[0]);
  for (let i = 1; i < preorder.length; i++) {
    insertBST(root, preorder[i]);
  }
  return root;
}

function insertBST(root, val) {
  if (!root) return new Node(val);

  if (val < root.val) {
    root.left = insertBST(root.left, val);
  } else {
    root.right = insertBST(root.right, val);
  }
  return root;
}

// better
function bstFromPreorderBetter(preorder) {
  if (!preorder.length) return null;

  let inorder = [...preorder].sort((a, b) => a - b);

  let m = inorder.length;

  let inorderMap = new Map();
  for (let i = 0; i < m; i++) {
    inorderMap.set(inorder[i], i);
  }

  let preorderIndex = 0;

  function buildTreeHelper(inStart, inEnd) {
    if (inStart > inEnd) {
      return null;
    }

    let rootVal = preorder[preorderIndex++];
    let root = new Node(rootVal);

    let rootInorderIndex = inorderMap.get(rootVal);

    root.left = buildTreeHelper(inStart, rootInorderIndex - 1);
    root.right = buildTreeHelper(rootInorderIndex + 1, inEnd);
    return root;
  }

  return buildTreeHelper(0, m - 1);
}

// optimal 1
function bstFromPreorder(preorder) {
  let index = 0;

  function buildTree(upperBound) {
    if (index == preorder.length || preorder[index] > upperBound) {
      return null;
    }

    let root = new Node(preorder[index++]);

    root.left = buildTree(root.val);
    root.right = buildTree(upperBound);
    return root;
  }

  return buildTree(Number.MAX_SAFE_INTEGER);
}

// Optimal 2
function bstFromPreorder2(preorder) {
  if (!preorder.length) return null;

  let root = new Node(preorder[0]);
  let stack = [root];
  for (let i = 1; i < preorder.length; i++) {
    let node = new Node(preorder[i]);

    if (node.val < stack[stack.length - 1].val) {
      stack[stack.length - 1].left = node;
    } else {
      let parent = null;
      while (stack.length && stack[stack.length - 1].val < preorder[i]) {
        parent = stack.pop();
      }
      parent.right = node;
    }
    stack.push(node);
  }
  return root;
}

let preorder = [8, 5, 1, 7, 10, 12];

// let res = bstFromPreorderBrute(preorder);
// let res = bstFromPreorderBetter(preorder);
// let res = bstFromPreorder(preorder);
let res = bstFromPreorder2(preorder);
console.log(res);
