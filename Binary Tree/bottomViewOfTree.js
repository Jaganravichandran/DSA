// Bottom view of binary tree

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// Better
function bottomView(root) {
  if (!root) return [];

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
      let temp = columnMap.get(i).sort((a, b) => a[1] - b[1]);
      result.push(temp[temp.length - 1][0]);
    }
  }
  return result;
}

// Optimal
function bottomViewOptimal(root) {
  if (!root) return [];

  let queue = [[root, 0]]; // [node, horizontal distance]

  let minHd = 0;
  let maxHd = 0;

  let map = new Map();
  let front = 0;
  while (front < queue.length) {
    let [node, hd] = queue[front++];

    map.set(hd, node.data);

    minHd = Math.min(minHd, hd);
    maxHd = Math.max(maxHd, hd);

    if (node.left) queue.push([node.left, hd - 1]);
    if (node.right) queue.push([node.right, hd + 1]);
  }

  let result = [];
  for (let i = minHd; i <= maxHd; i++) {
    if (map.has(i)) {
      result.push(map.get(i));
    }
  }
  return result;
}

let tree = new Node(20);
tree.left = new Node(8);
tree.right = new Node(22);
tree.right.left = new Node(4);
tree.right.right = new Node(25);
tree.left.left = new Node(5);
tree.left.right = new Node(3);
tree.left.right.left = new Node(10);
tree.right.left.right = new Node(14);

// let res = bottomView(tree);
let res = bottomViewOptimal(tree);
console.log(res);
