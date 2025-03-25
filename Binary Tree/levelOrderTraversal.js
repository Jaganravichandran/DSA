// Level order traversal in Binary tree

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function leverOrdertraversal(root) {
  let result = [];
  if (root == null) {
    return result;
  }
  let queue = [root];
  while (queue.length > 0) {
    let levelSize = queue.length;
    let currentLevel = [];
    for (let i = 0; i < levelSize; i++) {
      let node = queue.shift();

      currentLevel.push(node.data);

      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    result.push(currentLevel);
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

let res = leverOrdertraversal(tree);
console.log(res);
