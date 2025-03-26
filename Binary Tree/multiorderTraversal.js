// multi-order traversal

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function multiorderTraversal(root) {
  let stack = [];
  stack.push({ node: root, num: 1 });
  let preorder = [],
    inorder = [],
    postorder = [];

  if (root == null) {
    return {
      preorder,
      inorder,
      postorder,
    };
  }

  while (stack.length > 0) {
    let it = stack.pop();

    if (it.num == 1) {
      preorder.push(it.node.data);
      it.num++;
      stack.push(it);
      if (it.node.left != null) {
        stack.push({ node: it.node.left, num: 1 });
      }
    } else if (it.num == 2) {
      inorder.push(it.node.data);
      it.num++;
      stack.push(it);
      if (it.node.right != null) {
        stack.push({ node: it.node.right, num: 1 });
      }
    } else {
      postorder.push(it.node.data);
    }
  }
  return {
    preorder,
    inorder,
    postorder,
  };
}

const tree = new Node(1);
tree.left = new Node(2);
tree.right = new Node(5);
tree.left.left = new Node(3);
tree.left.right = new Node(4);
tree.right.left = new Node(6);
tree.right.right = new Node(7);

let res = multiorderTraversal(tree);
console.log(res);
