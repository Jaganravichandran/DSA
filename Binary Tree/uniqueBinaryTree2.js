// construct unique binary tree from inorder and postorder

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function buildTree(inorder, postorder) {
  if (!inorder.length || !postorder.length) return null;

  let inorderMap = new Map();
  for (let i = 0; i < inorder.length; i++) {
    inorderMap.set(inorder[i], i);
  }

  let postorderIndex = postorder.length - 1;

  function buildTreeHelper(inStart, inEnd) {
    if (inStart > inEnd) return null;

    let rootVal = postorder[postorderIndex--];
    let root = new Node(rootVal);

    let rootInorderIndex = inorderMap.get(rootVal);

    root.right = buildTreeHelper(rootInorderIndex + 1, inEnd);
    root.left = buildTreeHelper(inStart, rootInorderIndex - 1);

    return root;
  }
  return buildTreeHelper(0, inorder.length - 1);
}

let inorder = [9, 3, 15, 20, 7];
let postorder = [9, 15, 7, 20, 3];

let res = buildTree(inorder, postorder);
console.log(res);
