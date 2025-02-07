// detect loop in Linked List

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

function detectLoopBrute(head) {
  let temp = head;
  let nodeMap = new Map();
  while (temp != null) {
    if (nodeMap.has(temp)) {
      return true;
    }
    nodeMap.set(temp, true);
    temp = temp.next;
  }
  return false;
}

function detectLoopOptimal(head) {
  let slow = head;
  let fast = head;
  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast) return true;
  }
  return false;
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

  //   let detectLoop = detectLoopBrute(head);
  //   console.log(detectLoop);

  let detectLoop = detectLoopOptimal(head);
  console.log(detectLoop);
}
main();
