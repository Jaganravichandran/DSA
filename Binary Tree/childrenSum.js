// children sum property in binary tree

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function isSumProperty(root) {
  if (!root) return 1;

  if (!root.left && !root.right) return 1;

  let sum = 0;
  if (root.left) sum += root.left.data;
  if (root.right) sum += root.right.data;

  if (
    root.data == sum &&
    isSumProperty(root.left) == 1 &&
    isSumProperty(root.right) == 1
  ) {
    return 1;
  }
  return 0;
}

const tree = new Node(35);
tree.left = new Node(20);
tree.right = new Node(15);
tree.left.left = new Node(15);
tree.left.right = new Node(5);
tree.right.left = new Node(10);
tree.right.right = new Node(5);

let res = isSumProperty(tree);
console.log(res);
