// Insertion in doubly linked list

class Node {
  constructor(data, next = null, back = null) {
    this.data = data;
    this.next = next;
    this.back = back;
  }
}

// print DLL
function traverse(head) {
  let current = head;
  let result = [];
  while (current != null) {
    result.push(current.data);
    current = current.next;
  }
  console.log(result.join(" <-> "));
}

// insert head(before)
function insertBeforeHead(head, val) {
  let newHead = new Node(val, head, null);
  head.back = newHead;
  return newHead;
}

// insert node before tail
function insertBeforeTail(head, val) {
  if (head.next == null) {
    return insertBeforeHead(head, val);
  }
  let temp = head;
  while (temp.next != null) {
    temp = temp.next;
  }
  let prev = temp.back;
  let newNode = new Node(val, temp, prev);
  prev.next = newNode;
  temp.back = newNode;
  return head;
}

// insert before the Kth element
function insertBeforeK(head, val, k) {
  if (k == 1) {
    return insertBeforeHead(head, val);
  }
  let temp = head;
  let count = 0;
  while (temp != null) {
    count++;
    if (count == k) {
      break;
    }
    temp = temp.next;
  }
  if (!temp) return head; // Return the original list if k is out of bounds
  let prev = temp.back;
  let newNode = new Node(val, temp, prev);
  temp.back = newNode;
  prev.next = newNode;
  return head;
}

// insert before node
function insertBeforeNode(node, val) {
  let prev = node.back;
  let newNode = new Node(val, node, prev);
  prev.next = newNode;
  node.back = newNode;
  return node;
}

// insert after head
function insertAfterHead(head, val) {
  let front = head.next;
  let newNode = new Node(val, front, head);
  front.back = newNode;
  head.next = newNode;
  return head;
}

// insert after tail
function insertAfterTail(head, val) {
  let temp = head;
  while (temp.next != null) {
    temp = temp.next;
  }
  let newNode = new Node(val, null, temp);
  temp.next = newNode;
  return head;
}

// insert after the Kth element
function insertAfterK(head, val, k) {
  if (k == 1) return insertAfterHead(head, val);
  let temp = head;
  let count = 0;
  while (temp != null) {
    count++;
    if (count == k) {
      break;
    }
    temp = temp.next;
  }
  if (!temp) return head;
  let front = temp.next;
  let newNode = new Node(val, front, temp);
  if (front != null) {
    front.back = newNode;
  }
  temp.next = newNode;
  return head;
}

// insert after node
function insertAfterNode(head, val) {
  let front = head.next;
  let newNode = new Node(val, front, head);
  if (front != null) {
    front.back = newNode;
  }

  head.next = newNode;
  return head;
}
function main() {
  let arr = [1, 3, 4, 5];
  let head = new Node(arr[0]);
  // initialise doubly linked list
  let prev = head;
  for (let i = 1; i < arr.length; i++) {
    let temp = new Node(arr[i], null, prev);
    prev.next = temp;
    prev = temp;
  }
  //   traverse(head);

  // Insert Before
  //   head = insertBeforeHead(head, 10);
  //   traverse(head);

  //   head = insertBeforeTail(head, 10);
  //   traverse(head);

  //   head = insertBeforeK(head, 10, 5);
  //   traverse(head);

  //   let insertNode = head.next.next.next;
  //   insertBeforeNode(insertNode, 10);
  //   traverse(head);

  // Insert After
  //   head = insertAfterHead(head, 10);
  //   traverse(head);

  //   head = insertAfterTail(head, 10);
  //   traverse(head);

  //   head = insertAfterK(head, 6, 4);
  //   traverse(head);

  let insertNode = head.next.next.next;
  insertAfterNode(insertNode, 10);
  traverse(head);
}

main();
