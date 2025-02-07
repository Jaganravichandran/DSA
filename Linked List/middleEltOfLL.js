// find the middle element of linked list

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

// find middle brute
function findMidBrute(head) {
  if (head == null || head.next == null) return head;
  let temp = head;
  let cnt = 0;
  while (temp != null) {
    cnt++;
    temp = temp.next;
  }
  let midNode = Math.floor(cnt / 2) + 1;
  temp = head;
  while (temp != null) {
    midNode -= 1;
    if (midNode == 0) {
      break;
    }
    temp = temp.next;
  }
  return temp;
}

// find middle Optimal
function findMidOptimal(head) {
  if (head == null || head.next == null) return head;
  let slow = head;
  let fast = head;
  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
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
  //   head = findMidBrute(head);
  //   traverse(head);

  head = findMidOptimal(head);
  traverse(head);
}
main();
