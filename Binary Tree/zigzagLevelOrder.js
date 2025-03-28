// zig zag Level Order traversal

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function zigzagLevelOrder(root) {
  let result = [];
  if (root == null) {
    return result;
  }

  let queue = [root];
  let flag = 0;
  while (queue.length > 0) {
    let size = queue.length;
    let currentLevel = [];
    for (let i = 0; i < size; i++) {
      let node = queue.shift();
      currentLevel.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    if (flag == 0) {
      result.push(currentLevel);
      flag = 1;
    } else {
      result.push(currentLevel.reverse());
      flag = 0;
    }
  }
  return result;
}

const tree = new Node(1);
tree.left = new Node(2);
tree.right = new Node(3);
tree.left.left = new Node(4);
tree.left.right = new Node(5);
tree.right.left = new Node(6);
tree.right.right = new Node(7);

let res = zigzagLevelOrder(tree);
console.log(res);
