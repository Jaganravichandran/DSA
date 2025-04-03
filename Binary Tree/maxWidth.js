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

// Optimal 2
function widthOfBinaryTree2(root) {
  if (!root) return 0;

  let queue = [[root, 0n]];
  let maxWidth = 0n;
  while (queue.length > 0) {
    let size = queue.length;
    let start = queue[0][1];
    let end = queue[size - 1][1];
    maxWidth = maxWidth > end - start + 1n ? maxWidth : end - start + 1n;
    for (let i = 0; i < size; i++) {
      let [node, postion] = queue.shift();

      if (node.left) queue.push([node.left, postion * 2n + 1n]);
      if (node.right) queue.push([node.right, postion * 2n + 2n]);
    }
  }
  return Number(maxWidth);
}

const tree = new Node(1);
tree.left = new Node(2);
tree.right = new Node(3);
tree.left.left = new Node(4);
tree.left.right = new Node(5);
tree.right.right = new Node(7);

// let res = widthOfBinaryTree(tree);
let res = widthOfBinaryTree2(tree);
console.log(res);
