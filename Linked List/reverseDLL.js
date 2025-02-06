// Reverse a DLL

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

// Reverse Algo
function reverseBrute(head) {
  let temp = head;
  let stack = [];
  while (temp != null) {
    stack.push(temp.data);
    temp = temp.next;
  }
  temp = head;
  while (temp != null) {
    temp.data = stack.pop();
    temp = temp.next;
  }
  return head;
}

function reverseOptimal(head) {
  if (head == null || head.next == null) return head; // edge case
  let current = head;
  let last = null;
  while (current != null) {
    last = current.back;
    current.back = current.next;
    current.next = last;
    current = current.back;
  }
  let newHead = last.back;
  return newHead;
}

// main
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

  //   head = reverseBrute(head);
  //   traverse(head);

  head = reverseOptimal(head);
  traverse(head);
}

main();
