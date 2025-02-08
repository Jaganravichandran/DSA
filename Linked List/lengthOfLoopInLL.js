// find the length of loop in Linked list
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

function lengthOfLoopBrute(head) {
  if (head == null || head.next == null) return 0;
  let temp = head;
  let timer = 1;
  let hashMap = new Map();
  while (temp != null) {
    if (hashMap.has(temp)) {
      let value = timer - hashMap.get(temp);
      return value;
    }
    hashMap.set(temp, timer);
    temp = temp.next;
    timer++;
  }
  return 0;
}

function lengthOfLoopOptimal(head) {
  if (head == null || head.next == null) return 0;
  let slow = head;
  let fast = head;
  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast) {
      return findLength(slow, fast);
    }
  }
  return 0;
}

function findLength(slow, fast) {
  let counter = 1;
  fast = fast.next;
  while (slow != fast) {
    counter++;
    fast = fast.next;
  }
  return counter;
}

function main() {
  let head = new Node(1);
  let second = new Node(2);
  let third = new Node(3);
  let fourth = new Node(4);
  let fifth = new Node(5);

  head.next = second;
  second.next = third;
  third.next = fourth;
  fourth.next = fifth;
  fifth.next = third;

  // let length = lengthOfLoopBrute(head);
  // console.log(length);

  let length = lengthOfLoopOptimal(head);
  console.log(length);
}
main();
