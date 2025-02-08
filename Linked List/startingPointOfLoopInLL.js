// find the starting point of the (loop / cycle) in linked list

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

function startingPointBrute(head) {
  if (head == null || head.next == null) return null;
  let temp = head;
  let hashMap = new Map();
  while (temp != null) {
    if (hashMap.has(temp)) {
      return temp;
    }
    hashMap.set(temp, 1);
    temp = temp.next;
  }
  return null;
}

function startingPointOptimal(head) {
  if (head == null || head.next == null) return null;
  let slow = head;
  let fast = head;
  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast) {
      slow = head;
      while (slow != fast) {
        slow = slow.next;
        fast = fast.next;
      }
      return slow;
    }
  }
  return null;
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

  //   let startingPoint = startingPointBrute(head);
  //   console.log(startingPoint);

  let startingPoint = startingPointOptimal(head);
  console.log(startingPoint);
}
main();
