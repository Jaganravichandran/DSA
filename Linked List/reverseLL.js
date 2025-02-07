// reverse a LL (iterate and recursive)

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

function traverse(head) {
  let current = head;
  let result = [];
  while (current != null) {
    result.push(current.data);
    current = current.next;
  }
  console.log(result.join(" -> "));
}

// iterative approach
function reverseLLBrute(head) {
  if (head == null || head.next == null) return head;
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

function reverseLLOptimal(head) {
  if (head == null || head.next == null) return head; // edge case
  let temp = head;
  let prev = null;
  while (temp != null) {
    let front = temp.next;
    temp.next = prev;
    prev = temp;
    temp = front;
  }
  return prev;
}

// Recursive approach
function reverseLLRecursive(head) {
  if (head == null || head.next == null) {
    return head;
  }
  let newHead = reverseLLRecursive(head.next);
  let front = head.next;
  front.next = head;
  head.next = null;
  return newHead;
}
function main() {
  let arr = [1, 2, 3, 4, 5];
  let head = new Node(arr[0]);
  let mover = head;
  for (let i = 1; i < arr.length; i++) {
    let temp = new Node(arr[i]);
    mover.next = temp;
    mover = temp;
  }

  // iterate method
  //   head = reverseLLBrute(head);
  //   traverse(head);

  //   head = reverseLLOptimal(head);
  //   traverse(head);

  // Recursive method
  head = reverseLLRecursive(head);
  traverse(head);
}
main();
