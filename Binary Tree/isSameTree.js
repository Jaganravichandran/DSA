// check if two trees are identical or not?

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function isSameTree(p, q) {
  if (p == null && q == null) return true;
  if (p == null || q == null) return false;
  if (p.val != q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

const tree1 = new Node(1);
tree1.left = new Node(2);
tree1.right = new Node(3);
tree1.left.left = new Node(4);
tree1.left.right = new Node(5);
tree1.right.left = new Node(6);
tree1.right.right = new Node(7);

const tree2 = new Node(1);
tree2.left = new Node(2);
tree2.right = new Node(3);
tree2.left.left = new Node(4);
tree2.left.right = new Node(5);
tree2.right.left = new Node(6);
tree2.right.right = new Node(7);

let res = isSameTree(tree1, tree2);
console.log(res);
