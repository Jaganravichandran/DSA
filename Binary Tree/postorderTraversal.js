// post order traversal (iterative)

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// using 2 stack
function postorderTraversal(root) {
  let result = [];
  if (root == null) {
    return result;
  }
  let stack1 = [root];
  let stack2 = [];
  while (stack1.length > 0) {
    let node = stack1.pop();
    stack2.push(node);
    if (node.left) {
      stack1.push(node.left);
    }
    if (node.right) {
      stack1.push(node.right);
    }
  }
  while (stack2.length > 0) {
    let node = stack2.pop();
    result.push(node.data);
  }
  return result;
}

//using 1 stack
function postorderTraversal2(root) {
  let result = [];
  if (root == null) {
    return result;
  }

  let stack = [];
  let current = root;
  let lastVisited = null;
  while (current || stack.length > 0) {
    if (current != null) {
      stack.push(current);
      current = current.left;
    } else {
      let temp = stack[stack.length - 1];
      if (temp.right && lastVisited != temp.right) {
        current = temp.right;
      } else {
        result.push(temp.data);
        lastVisited = stack.pop();
      }
    }
  }
  return result;
}

const tree = new Node(1);
tree.left = new Node(2);
tree.right = new Node(7);
tree.left.left = new Node(3);
tree.left.left.right = new Node(4);
tree.left.left.right.right = new Node(5);
tree.left.left.right.right.right = new Node(6);
tree.right.left = new Node(8);

// let res = postorderTraversal(tree);
let res = postorderTraversal2(tree);
console.log(res);
