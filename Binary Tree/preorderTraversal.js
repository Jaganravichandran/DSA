// iterative preorder traversal

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function preorderTraversal(root) {
  let result = [];
  if (root == null) {
    return result;
  }

  let stack = [root];
  while (stack.length > 0) {
    let size = stack.length;
    for (let i = 0; i < size; i++) {
      let node = stack.pop();
      result.push(node.data);
      if (node.right) {
        stack.push(node.right);
      }
      if (node.left) {
        stack.push(node.left);
      }
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

let res = preorderTraversal(tree);
console.log(res);
