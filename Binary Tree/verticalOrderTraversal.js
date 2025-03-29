// vertical order traversal

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Optimal

function verticalTraversal(root) {
  if (!root) return [];

  let queue = [[root, 0, 0]]; // [node, column, row]

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

    columnMap.get(column).push([node.val, row]);

    if (node.left) queue.push([node.left, column - 1, row + 1]);
    if (node.right) queue.push([node.right, column + 1, row + 1]);
  }

  let result = [];
  for (let col = minCol; col <= maxCol; col++) {
    if (columnMap.has(col)) {
      let value = columnMap.get(col).sort((a, b) => {
        if (a[1] != b[1]) {
          return a[1] - b[1];
        }
        return a[0] - b[0];
      });
      result.push(value.map((pair) => pair[0]));
    }
  }

  return result;
}

const tree = new Node(1);
tree.left = new Node(2);
tree.right = new Node(3);
tree.left.left = new Node(4);
tree.left.right = new Node(6);
tree.right.left = new Node(5);
tree.right.right = new Node(7);

let res = verticalTraversal(tree);
console.log(res);
