// recover BST

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Brute
function recoverBstBrute(root) {
  let traversal = [];
  function inorder(node) {
    if (!node) return;

    inorder(node.left);
    traversal.push(node.val);
    inorder(node.right);
  }

  inorder(root);

  traversal.sort((a, b) => a - b);
  let i = 0;
  function dfs(node) {
    if (!node) return;

    dfs(node.left);
    if (node.val == traversal[i]) {
      i++;
    } else {
      node.val = traversal[i];
      i++;
    }
    dfs(node.right);
  }

  dfs(root);
  return root;
}

// Optimal
function recoverBst(root) {
  let first,
    middle,
    last,
    prev = null;

  function inorderTraversal(root) {
    if (!root) return;

    inorderTraversal(root.left);

    if (prev != null && prev.val > root.val) {
      if (first == null) {
        first = prev;
        middle = root;
      } else {
        last = root;
      }
    }
    prev = root;
    inorderTraversal(root.right);
  }

  inorderTraversal(root);
  if (first && last) {
    let temp = first.val;
    first.val = last.val;
    last.val = temp;
  } else if (first && middle) {
    let temp = first.val;
    first.val = middle.val;
    middle.val = temp;
  }

  return root;
}

// Optimal 2
function recoverBst2(root) {
  let first,
    middle,
    last,
    prev,
    predecessor = null;

  let current = root;

  while (current) {
    if (!current.left) {
      if (prev && prev.val > current.val) {
        if (!first) {
          first = prev;
          middle = current;
        } else {
          last = current;
        }
      }
      prev = current;
      current = current.right;
    } else {
      predecessor = current.left;
      while (predecessor.right && predecessor.right != current) {
        predecessor = predecessor.right;
      }

      if (!predecessor.right) {
        predecessor.right = current;
        current = current.left;
      } else {
        predecessor.right = null;

        if (prev && prev.val > current.val) {
          if (!first) {
            first = prev;
            middle = current;
          } else {
            last = current;
          }
        }
        prev = current;
        current = current.right;
      }
    }
  }

  if (first && last) {
    [first.val, last.val] = [last.val, first.val];
  } else if (first && middle) {
    [first.val, middle.val] = [middle.val, first.val];
  }

  return root;
}

const tree = new Node(3);
tree.left = new Node(1);
tree.right = new Node(4);
tree.right.left = new Node(2);

// let res = recoverBstBrute(tree);
let res = recoverBst(tree);
// let res = recoverBst2(tree);
console.log(res);
