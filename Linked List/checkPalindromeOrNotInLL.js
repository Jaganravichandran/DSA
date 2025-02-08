// check if a linked list is palindrome or not

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

function checkPalindromeBrute(head) {
  if (head == null || head.next == null) return true;
  let temp = head;
  let stack = [];
  while (temp != null) {
    stack.push(temp.data);
    temp = temp.next;
  }
  temp = head;
  while (temp != null) {
    if (stack.pop() != temp.data) {
      return false;
    }
    temp = temp.next;
  }
  return true;
}

function checkPalindromeOptimal(head) {
  if (head == null || head.next == null) return true;
  let slow = head;
  let fast = head;
  while (fast.next != null && fast.next.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  let newHead = reverseLL(slow.next);
  let first = head;
  let second = newHead;
  while (second != null) {
    if (first.data != second.data) {
      reverseLL(newHead);
      return false;
    }
    first = first.next;
    second = second.next;
  }
  reverseLL(newHead);
  return true;
}

// reverse LL
function reverseLL(head) {
  if (head.next == null || head == null) return head;
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

function main() {
  let arr = [1, 2, 3, 2, 1];
  let head = new Node(arr[0]);
  let mover = head;
  for (let i = 1; i < arr.length; i++) {
    let temp = new Node(arr[i]);
    mover.next = temp;
    mover = temp;
  }

  //   head = checkPalindromeBrute(head);
  //   console.log(head);

  head = checkPalindromeOptimal(head);
  console.log(head);
}
main();
