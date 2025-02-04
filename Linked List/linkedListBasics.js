class Node {
  constructor(data1, next1 = null) {
    this.data = data1;
    this.next = next1;
  }
}

function arrToLinkedList(arr) {
  let head = new Node(arr[0]);
  let mover = head;
  for (let i = 1; i < arr.length; i++) {
    let temp = new Node(arr[i]);
    mover.next = temp;
    mover = temp;
  }
  return head;
}

// Traverse linked List

// using while loop
function traverse(head) {
  let current = head;
  let row = "";
  while (current != null) {
    // row += current.data + " ";
    console.log(current.data);
    current = current.next;
  }
  // console.log(row.trim()); // print linkedList
}

// using Recursion
function traverseRecursive(head) {
  if (head == null) return;
  console.log(head.data);
  traverseRecursive(head.next);
}

// Linked list size

// using while
function size(head) {
  let count = 0;
  let current = head;
  while (current != null) {
    count++;
    current = current.next;
  }
  return count;
}

// using recursion
function sizeRecursive(head) {
  if (head == null) return 0;
  return 1 + sizeRecursive(head.next);
}

// search an element
function search(head, element) {
  let current = head;
  while (current != null) {
    if (current.data == element) {
      return true;
    }
    current = current.next;
  }
  return false;
}

let arr = [1, 3, 5, 8];
let head = arrToLinkedList(arr);
// console.log(head.data);

// traverse(head);
// traverseRecursive(head);

// size(head);
// sizeRecursive(head);

// console.log(search(head, 5)); // true
