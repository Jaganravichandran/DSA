// Add 1 to a number represented by linked list

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

function reverseLL(head) {
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

function addOneBrute(head) {
  head = reverseLL(head);
  let temp = head;
  let carry = 1;
  while (temp != null) {
    temp.data = temp.data + carry;
    if (temp.data < 10) {
      carry = 0;
      break;
    } else {
      temp.data = 0;
      carry = 1;
    }
    temp = temp.next;
  }
  if (carry == 1) {
    let newNode = new Node(1);
    head = reverseLL(head);
    newNode.next = head;
    return newNode;
  }
  head = reverseLL(head);
  return head;
}

// Recursion backtracking
function addOneOptimal(head) {
  let carry = helper(head);
  if (carry == 1) {
    let newHead = new Node(1);
    newHead.next = head;
    return newHead;
  }
  return head;
}

function helper(temp) {
  // base condition
  if (temp == null) return 1;
  let carry = helper(temp.next);
  temp.data += carry;
  if (temp.data < 10) {
    return 0;
  }
  temp.data = 0;
  return 1;
}

function main() {
  let arr = [1, 5, 9];
  let head = new Node(arr[0]);
  let mover = head;
  for (let i = 1; i < arr.length; i++) {
    let temp = new Node(arr[i]);
    mover.next = temp;
    mover = temp;
  }
  //   head = addOneBrute(head);
  //   traverse(head);

  head = addOneOptimal(head);
  traverse(head);
}
main();
