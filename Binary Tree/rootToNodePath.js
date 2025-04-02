// Root to node path in binary tree

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function paths(root, val) {
  let result = [];
  if (root == null) {
    return result;
  }
  getPath(root, result, val);
  return result;
}

function getPath(node, result, val) {
  if (!node) return false;

  result.push(node.data);

  if (node.data === val) {
    return true;
  }

  if (getPath(node.left, result, val) || getPath(node.right, result, val)) {
    return true;
  }

  result.pop();
  return false;
}

const tree = new Node(1);
tree.left = new Node(2);
tree.right = new Node(3);
tree.left.left = new Node(4);
tree.left.right = new Node(5);

// let res = paths(tree, 6);
// console.log(res);

// node to leaf paths

function leafPaths(root) {
  let result = [];
  if (root == null) {
    return result;
  }
  let path = [];
  function dfs(node, path) {
    if (!node) {
      return;
    }

    path.push(node.data);

    if (!node.left && !node.right) {
      result.push([...path]);
    } else {
      dfs(node.left, path);
      dfs(node.right, path);
    }
    path.pop();
  }

  dfs(root, path);
  return result;
}

// using stack
function leafPathsStack(root) {
  if (!root) return [];

  let stack = [{ node: root, path: [root.data] }];

  let result = [];

  while (stack.length > 0) {
    let { node, path } = stack.pop();

    if (!node.left && !node.right) {
      result.push([...path]);
    }

    if (node.right) {
      stack.push({ node: node.right, path: [...path, node.right.data] });
    }
    if (node.left) {
      stack.push({ node: node.left, path: [...path, node.left.data] });
    }
  }

  return result;
}

// let res = leafPaths(tree);
let res = leafPathsStack(tree);
console.log(res);
