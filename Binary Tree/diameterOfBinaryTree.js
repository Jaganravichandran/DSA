// Diameter of Binary tree

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// Brute
function getHeight(node) {
  if (node == null) {
    return 0;
  }
  let left = getHeight(node.left);
  let right = getHeight(node.right);
  return 1 + Math.max(left, right);
}

function findDiameterBrute(root) {
  if (root == null) return 0;
  let left = getHeight(root.left);
  let right = getHeight(root.right);

  let leftDiameter = findDiameterBrute(root.left);
  let rightDiameter = findDiameterBrute(root.right);

  return Math.max(left + right, Math.max(leftDiameter, rightDiameter));
}

// better
function findDiameterBetter(root) {
  let result = { diameter: 0 };

  function dfs(node) {
    if (node == null) return 0;

    let left = dfs(node.left);
    let right = dfs(node.right);

    result.diameter = Math.max(result.diameter, left + right);
    return 1 + Math.max(left, right);
  }
  dfs(root);
  return result.diameter;
}

// Optimal
function findDiameter(root) {
  let diameter = 0;

  function height(node) {
    if (node == null) return 0;

    let left = height(node.left);
    let right = height(node.right);

    diameter = Math.max(diameter, left + right);
    return 1 + Math.max(left, right);
  }

  height(root);
  return diameter;
}

// visualization
function diameterOfBinaryTree(root) {
  function dfs(node) {
    if (node == null) return [0, 0, []]; // [height, diameter, path];

    let [leftHeight, leftDiameter, leftPath] = dfs(node.left);
    let [rightHeight, rightDiameter, rightPath] = dfs(node.right);

    let height = 1 + Math.max(leftHeight, rightHeight);

    let currentPath = leftPath.concat([node.data], rightPath);

    let currentDiameter = Math.max(
      leftDiameter,
      rightDiameter,
      leftHeight + rightHeight
    );

    let fullPath =
      currentPath.length > leftPath.concat(rightPath).length
        ? currentPath
        : leftPath.concat(rightPath);

    return [height, currentDiameter, fullPath];
  }

  let [height, diameter, path] = dfs(root);
  return {
    height,
    diameter,
    path,
  };
}

const tree = new Node(1);
tree.left = new Node(2);
tree.right = new Node(3);
tree.left.left = new Node(4);
tree.left.right = new Node(5);

// let res = findDiameterBrute(tree);
// let res = findDiameterBetter(tree);
// let res = findDiameter(tree);
let res = diameterOfBinaryTree(tree);
console.log(res);
