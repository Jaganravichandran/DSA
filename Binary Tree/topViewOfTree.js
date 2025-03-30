// top view of binary tree

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// Optimal
function topView(root) {
  if (root == null) return [];

  let queue = [[root, 0, 0]];

  let minCol = 0;
  let maxCol = 0;

  let columnMap = new Map();
  while (queue.length > 0) {
    let [node, column, row] = queue.shift();

    minCol = Math.min(minCol, column);
    maxCol = Math.max(maxCol, column);

    if (!columnMap.has(column)) {
      columnMap.set(column, []);
    }

    columnMap.get(column).push([node.data, row]);

    if (node.left) queue.push([node.left, column - 1, row + 1]);
    if (node.right) queue.push([node.right, column + 1, row + 1]);
  }

  let result = [];
  for (let i = minCol; i <= maxCol; i++) {
    if (columnMap.has(i)) {
      result.push(columnMap.get(i)[0][0]);
    }
  }
  return result;
}

let tree = new Node(1);
tree.left = new Node(2);
tree.right = new Node(3);
tree.right.right = new Node(7);
tree.left.left = new Node(4);
tree.left.right = new Node(5);
tree.left.right.left = new Node(6);

let res = topView(tree);
console.log(res);
