// maximum width of binary tree

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function widthOfBinaryTree(root) {
  if (!root) return 0;
  let queue = [{ node: root, index: 0 }]; // [node, index]
  let maxWidth = 0;
  while (queue.length > 0) {
    let size = queue.length;
    let min = queue[0].index;
    let first = 0,
      last = 0;
    for (let i = 0; i < size; i++) {
      let currentNode = queue.shift();
      let currentIndex = currentNode.index - min;
      if (i == 0) first = currentIndex;
      if (i == size - 1) last = currentIndex;
      if (currentNode.node.left) {
        queue.push({
          node: currentNode.node.left,
          index: currentIndex * 2 + 1,
        });
      }
      if (currentNode.node.right) {
        queue.push({
          node: currentNode.node.right,
          index: currentIndex * 2 + 2,
        });
      }
    }
    maxWidth = Math.max(maxWidth, last - first + 1);
  }
  return maxWidth;
}

const tree = new Node(1);
tree.left = new Node(2);
tree.right = new Node(3);
tree.left.left = new Node(4);
tree.left.right = new Node(5);
tree.right.right = new Node(7);

let res = widthOfBinaryTree(tree);
console.log(res);
