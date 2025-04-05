// serialize and de-serialize binary tree

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function serialize(root) {
  if (!root) return "";

  let queue = [root];
  let data = "";
  while (queue.length > 0) {
    let node = queue.shift();
    if (node == null) data += "#,";
    else {
      data += node.val + ",";
    }

    if (node) {
      queue.push(node.left);
      queue.push(node.right);
    }
  }

  return data;
}

function deserialize(data) {
  if (data.length == 0) return null;

  let str = data.split(",");

  let rootVal = str.shift();

  let root = new Node(parseInt(rootVal));
  let queue = [root];
  while (queue.length > 0) {
    let node = queue.shift();

    let leftVal = str.shift();

    if (leftVal != "#") {
      let leftNode = new Node(parseInt(leftVal));
      node.left = leftNode;
      queue.push(leftNode);
    }

    let rightVal = str.shift();

    if (rightVal != "#") {
      let rightNode = new Node(parseInt(rightVal));
      node.right = rightNode;
      queue.push(rightNode);
    }
  }
  return root;
}

const tree = new Node(1);
tree.left = new Node(2);
tree.right = new Node(3);
tree.right.left = new Node(4);
tree.right.right = new Node(5);

let res = serialize(tree);

console.log(res);

let res2 = deserialize(res);
console.log(res2);
