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

// delete head

function removeHead(head) {
  if (head == null || head.next == null) return null; // edge cases
  let prev = head;
  head = head.next;
  head.back = null;
  prev.next = null;
  return head;
}

// delete tail
function removeTail(head) {
  if (head == null || head.next == null) return head; // edge cases
  let temp = head;
  // Method 1:
  //   while (temp.next.next != null) {
  //     temp = temp.next;
  //     temp.back = null;
  //   }
  //   temp.next = null;

  // Method 2
  while (temp.next != null) {
    temp = temp.next;
  }
  let prev = temp.back;
  prev.next = null;
  temp.next = null;
  return head;
}

// delete kth element

function removek(head, k) {
  if (head == null) return null;
  let temp = head;
  let count = 0;
  while (temp != null) {
    count++;
    if (count == k) {
      break;
    }
    temp = temp.next;
  }
  let prev = temp.back;
  let front = temp.next;
  if (prev == null && front == null) {
    return null;
  } else if (prev == null) {
    return removeHead(head);
  } else if (front == null) {
    return removeTail(head);
  }
  prev.next = front;
  front.back = prev;
  temp.next = null;
  temp.back = null;
  return head;
}

// delete node
function removeNode(temp) {
  let prev = temp.back;
  let front = temp.next;
  if (front == null) {
    prev.next = null;
  } else {
    prev.next = front;
    front.back = prev;
  }

  temp.next = null;
  temp.back = null;
  return temp;
}

function main() {
  let arr = [1, 3, 2, 4];
  let head = new Node(arr[0]);

  // initialise doubly linked list
  let prev = head;
  for (let i = 1; i < arr.length; i++) {
    let temp = new Node(arr[i], null, prev);
    prev.next = temp;
    prev = temp;
  }

  //   traverse(head);

  //   head = removeHead(head);
  //   traverse(head);

  //   head = removeTail(head);
  //   traverse(head);

  // head = removek(head, 1);
  // traverse(head);

  let nodeToRemove = head.next.next.next;
  removeNode(nodeToRemove);
  traverse(head);
}

main();
