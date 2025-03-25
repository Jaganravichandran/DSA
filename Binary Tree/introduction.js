// Binary Tree introduction

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTreeTraversal {
  // Pre-order traversal
  preorderTraversal(root) {
    const result = [];

    const traverse = (node) => {
      if (node == null) {
        return;
      }

      result.push(node.data);

      traverse(node.left);

      traverse(node.right);
    };

    traverse(root);
    return result;
  }

  // In-order traversal
  inorderTraversal(root) {
    let result = [];

    const traverse = (node) => {
      if (node == null) return;

      traverse(node.left);

      result.push(node.data);

      traverse(node.right);
    };

    traverse(root);
    return result;
  }

  // Post-order traversal
  postorderTraversal(root) {
    const result = [];

    const traverse = (node) => {
      if (node == null) return;

      traverse(node.left);

      traverse(node.right);

      result.push(node.data);
    };

    traverse(root);
    return result;
  }
}

const tree = new Node(1);
tree.left = new Node(2);
tree.right = new Node(3);
tree.left.left = new Node(4);
tree.left.right = new Node(5);
tree.right.left = new Node(6);
tree.right.right = new Node(7);

const traversal = new BinaryTreeTraversal();

console.log(traversal.preorderTraversal(tree));
console.log(traversal.postorderTraversal(tree));
console.log(traversal.inorderTraversal(tree));
