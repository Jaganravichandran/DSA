// construct unique binary tree from inorder and preorder

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function buildTree(preorder, inorder) {
  let n = preorder.length;
  let m = inorder.length;
  let map = new Map();
  for (let i = 0; i < m; i++) {
    map.set(inorder[i], i);
  }

  let root = helper(preorder, 0, n - 1, inorder, 0, m - 1, map);
  return root;
}

function helper(preorder, preStart, preEnd, inorder, inStart, inEnd, map) {
  if (preStart > preEnd || inStart > inEnd) return null;

  let root = new Node(preorder[preStart]);

  let inRoot = map.get(root.val);
  let numsLeft = inRoot - inStart;

  root.left = helper(
    preorder,
    preStart + 1,
    preStart + numsLeft,
    inorder,
    inStart,
    inRoot - 1,
    map
  );

  root.right = helper(
    preorder,
    preStart + numsLeft + 1,
    preEnd,
    inorder,
    inRoot + 1,
    inEnd,
    map
  );

  return root;
}

// Optimal
function buildTreeOptimal(preorder, inorder) {
  if (!preorder.length || !inorder.length) return null;
  let m = inorder.length;

  let inorderMap = new Map();
  for (let i = 0; i < m; i++) {
    inorderMap.set(inorder[i], i);
  }

  let preorderIndex = 0;

  function buildTreeHelper(inStart, inEnd) {
    if (inStart > inEnd) return null;

    let rootVal = preorder[preorderIndex++];
    let root = new Node(rootVal);

    let rootInorderIndex = inorderMap.get(rootVal);

    root.left = buildTreeHelper(inStart, rootInorderIndex - 1);
    root.right = buildTreeHelper(rootInorderIndex + 1, inEnd);
    return root;
  }

  return buildTreeHelper(0, m - 1);
}

let preorder = [10, 20, 40, 50, 30, 60];
let inorder = [40, 20, 50, 10, 60, 30];

// let res = buildTree(preorder, inorder);
let res = buildTreeOptimal(preorder, inorder);
console.log(res);
