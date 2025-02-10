// sort 0's, 1's and 2's in linked list
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

function sortLLBrute(head) {
  if (head == null || head.next == null) return head;
  let temp = head;
  let count0 = 0,
    count1 = 0,
    count2 = 0;
  while (temp != null) {
    if (temp.data == 0) count0++;
    else if (temp.data == 1) count1++;
    else count2++;
    temp = temp.next;
  }
  temp = head;
  while (temp != null) {
    if (count0) {
      temp.data = 0;
      count0--;
    } else if (count1) {
      temp.data = 1;
      count1--;
    } else {
      temp.data = 2;
      count2--;
    }
    temp = temp.next;
  }
  return head;
}

function sortLLOptimal(head) {
  if (head == null || head.next == null) return head;
  let temp = head;
  let zeroHead = new Node(-1),
    oneHead = new Node(-1),
    twoHead = new Node(-1);
  let zero = zeroHead,
    one = oneHead,
    two = twoHead;
  while (temp != null) {
    if (temp.data == 0) {
      zero.next = temp;
      zero = temp;
    } else if (temp.data == 1) {
      one.next = temp;
      one = temp;
    } else {
      two.next = temp;
      two = temp;
    }
    temp = temp.next;
  }
  two.next = null; //  ensure the last node next is null.
  zero.next = oneHead.next ? oneHead.next : twoHead.next;
  one.next = twoHead.next;
  return zeroHead.next;
}

function main() {
  let arr = [0, 1, 0, 2, 1, 1, 2];
  let head = new Node(arr[0]);
  let mover = head;
  for (let i = 1; i < arr.length; i++) {
    let temp = new Node(arr[i]);
    mover.next = temp;
    mover = temp;
  }

  //   head = sortLLBrute(head);
  //   traverse(head);

  head = sortLLOptimal(head);
  traverse(head);
}
main();
