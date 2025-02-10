// delete the middle node of the linked list

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

function deleteMiddleNodeBrute(head) {
  if (head == null || head.next == null) return null;
  let temp = head;
  let n = 0;
  while (temp != null) {
    n++;
    temp = temp.next;
  }
  let res = Math.floor(n / 2);
  temp = head;
  while (temp != null) {
    res--;
    if (res == 0) {
      break;
    }
    temp = temp.next;
  }
  temp.next = temp.next.next;
  return head;
}

function deleteMiddleNodeOptimal(head) {
  if (head == null || head.next == null) return null;
  let slow = head;
  let fast = head;
  //   let prev = slow; // we can store slow's prev node
  fast = fast.next.next;
  while (fast != null && fast.next != null) {
    // prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  //   prev.next = prev.next.next;
  slow.next = slow.next.next;
  return head;
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

  //   head = deleteMiddleNodeBrute(head);
  //   traverse(head);

  head = deleteMiddleNodeOptimal(head);
  traverse(head);
}
main();
