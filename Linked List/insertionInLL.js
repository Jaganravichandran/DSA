class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

// insert head;
function insertHead(head, val) {
  let temp = new Node(val, head);
  return temp;
}

// insert tail
function insertTail(head, val) {
  if (head == null) {
    return new Node(val);
  }
  let temp = head;
  while (temp.next != null) {
    temp = temp.next;
  }
  let newNode = new Node(val);
  temp.next = newNode;
  return head;
}

// inserting at Kht element

function insertK(head, val, k) {
  if (head == null || k == 1) return new Node(val, head);
  let count = 1;
  let temp = head;
  let prev = null;
  while (temp != null) {
    if (count == k) {
      if (prev != null) {
        prev.next = new Node(val, temp);
      }
      return head;
    }

    prev = temp;
    temp = temp.next;
    count++;
  }
  return -1;
  //   return head;
}

// insert element before value x
function insertEl(head, val, x) {
  if (head == null) return null;
  if (head.data == x) {
    return new Node(val, head);
  }
  let temp = head;
  let prev = null;
  while (temp != null) {
    if (temp.data == x) {
      if (prev != null) {
        prev.next = new Node(val, temp);
      }
      return head;
    }
    prev = temp;
    temp = temp.next;
  }
  return head;
}

// print LL
function traverse(head) {
  let current = head;
  let result = [];
  while (current != null) {
    result.push(current.data);
    current = current.next;
  }
  console.log(result.join(" -> "));
}

// main
function main() {
  let arr = [12, 5, 8, 7];
  let head = new Node(arr[0]);

  // initialize LL
  let mover = head;
  for (let i = 1; i < arr.length; i++) {
    let temp = new Node(arr[i]);
    mover.next = temp;
    mover = temp;
  }

  console.log("Original List:");
  traverse(head);

  //   head = insertHead(head, 6);
  //   traverse(head);

  //   head = insertTail(head, 15);
  //   traverse(head);

  head = insertK(head, 13, 5);
  if (head == -1) {
    console.log("Invalid position insertion failed.");
  } else {
    traverse(head);
  }

  //   head = insertEl(head, 10, 12);
  //   traverse(head);
}

main();
