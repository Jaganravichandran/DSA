// deletion in linkedList

// (head, position, value, last(tail))

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// remove head
function removeHead(head) {
  if (head == null) return head; // edge case if head is null
  // let temp = head;
  return head.next;
}

// remove last
function removeTail(head) {
  if (head == null || head.next == null) {
    return null;
  }
  let temp = head;
  while (temp.next.next != null) {
    temp = temp.next;
  }
  temp.next = null;
  return head;
}

// remove kth element

function removeK(head, k) {
  if (head == null) return head; // Empty list
  if (k == 1) {
    return head.next;
  }
  let count = 1;
  let temp = head;
  let prev = null;
  while (temp !== null) {
    if (count === k) {
      if (prev !== null) {
        prev.next = temp.next;
      }
      return head;
    }
    prev = temp;
    temp = temp.next;
    count++;
  }
  return head;
}

// remove value(element)
function removeEl(head, el) {
  if (head == null) return head;
  if (head.data == el) {
    return head.next;
  }
  let temp = head;
  let prev = null;
  while (temp != null) {
    if (temp.data == el) {
      if (prev != null) {
        prev.next = temp.next;
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

  // head = removeHead(head);
  // traverse(head);

  // head = removeTail(head);
  // traverse(head);

  // head = removeK(head, 1);
  // traverse(head);

  head = removeEl(head, 12);
  traverse(head);
}

main();
