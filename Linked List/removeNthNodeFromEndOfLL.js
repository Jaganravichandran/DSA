// remover Nth node from the end of Linked list

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

function removeNthNodeBrute(head, n) {
  let temp = head;
  let count = 0;
  while (temp != null) {
    count++;
    temp = temp.next;
  }
  // edge case ==> what if removing node is head?
  if (count == n) {
    let newHead = head.next;
    return newHead;
  }
  let result = count - n;
  temp = head;
  while (temp != null) {
    result--;
    if (result == 0) {
      break;
    }
    temp = temp.next;
  }
  temp.next = temp.next.next;
  return head;
}

function removeNthNodeOptimal(head, n) {
  let fast = head;
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }
  if (fast == null) return head.next;
  let slow = head;
  while (fast.next != null) {
    slow = slow.next;
    fast = fast.next;
  }
  slow.next = slow.next.next;
  return head;
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

function main() {
  let arr = [1, 2, 3, 4, 5, 6];
  let head = new Node(arr[0]);
  let mover = head;
  for (let i = 1; i < arr.length; i++) {
    let temp = new Node(arr[i]);
    mover.next = temp;
    mover = temp;
  }

  // head = removeNthNodeBrute(head, 2);
  // traverse(head);

  head = removeNthNodeOptimal(head, 2);
  traverse(head);
}

main();
