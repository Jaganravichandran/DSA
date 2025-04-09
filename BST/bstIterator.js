// BST iterator

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BSTIterator {
  constructor(root) {
    this.traversal = [];
    this.index = -1;
    this.inorder(root);
  }

  inorder(node) {
    if (!node) return;

    this.inorder(node.left);
    this.traversal.push(node.val);
    this.inorder(node.right);
  }

  next() {
    this.index++;
    return this.traversal[this.index];
  }

  hasNext() {
    return this.index + 1 < this.traversal.length;
  }
}

// Optimal
class BSTIterator2 {
  constructor(root) {
    this.stack = [];
    this.pushLeftNodes(root);
  }

  pushLeftNodes(node) {
    while (node) {
      this.stack.push(node);
      node = node.left;
    }
  }

  next() {
    let node = this.stack.pop();

    if (node.right) {
      this.pushLeftNodes(node.right);
    }

    return node.val;
  }

  hasNext() {
    return this.stack.length > 0;
  }
}

const tree = new Node(7);
tree.left = new Node(3);
tree.right = new Node(15);
tree.right.left = new Node(9);
tree.right.right = new Node(20);

// const iterator = new BSTIterator(tree);

// console.log(iterator.next());
// console.log(iterator.hasNext());

const iterator = new BSTIterator2(tree);

console.log(iterator.next());
console.log(iterator.next());

console.log(iterator.hasNext());
