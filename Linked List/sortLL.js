// Sort Linked list

class Node {
  constructor(data1, next1 = null) {
    this.data = data1;
    this.next = next1;
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

function sortBrute(head) {
  if (head == null || head.next == null) return head;
  let temp = head;
  let arr = [];
  while (temp != null) {
    arr.push(temp.data);
    temp = temp.next;
  }
  arr.sort((a, b) => a - b);
  temp = head;
  for (let i = 0; i < arr.length; i++) {
    temp.data = arr[i];
    temp = temp.next;
  }
  return head;
}

function sortOptimal(head) {
  if (head == null || head.next == null) return head;
  let middle = findMiddle(head);
  let leftHead = head;
  let rightHead = middle.next;
  middle.next = null;
  leftHead = sortOptimal(leftHead);
  rightHead = sortOptimal(rightHead);
  return mergeTwoSortedLL(leftHead, rightHead);
}

function findMiddle(head) {
  let slow = head;
  let fast = head.next;
  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

function mergeTwoSortedLL(head1, head2) {
  if (head1 == null && head2 == null) return null;
  let t1 = head1;
  let t2 = head2;
  let dNode = new Node(-1);
  let temp = dNode;
  while (t1 != null && t2 != null) {
    if (t1.data < t2.data) {
      temp.next = t1;
      temp = t1;
      t1 = t1.next;
    } else {
      temp.next = t2;
      temp = t2;
      t2 = t2.next;
    }
  }
  if (t1) {
    temp.next = t1;
  } else {
    temp.next = t2;
  }
  return dNode.next;
}

function main() {
  let arr = [3, 4, 2, 5, 1];
  let head = new Node(arr[0]);
  let mover = head;
  for (let i = 1; i < arr.length; i++) {
    let temp = new Node(arr[i]);
    mover.next = temp;
    mover = temp;
  }

  head = sortBrute(head);
  traverse(head);
}
main();
