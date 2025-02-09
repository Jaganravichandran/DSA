// segrregate odd and even linked list

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

function segrregateOddAndEvenBrute(head) {
  if (head == null || head.next == null) return head;
  let temp = head;
  let list = [];
  while (temp != null && temp.next != null) {
    list.push(temp.data);
    temp = temp.next.next;
  }
  if (temp) list.push(temp.data);
  temp = head.next;
  while (temp != null && temp.next != null) {
    list.push(temp.data);
    temp = temp.next.next;
  }
  if (temp) list.push(temp.data);
  temp = head;
  let i = 0;
  while (temp != null) {
    temp.data = list[i];
    i++;
    temp = temp.next;
  }
  return head;
}

function segrregateOddAndEvenOptimal(head) {
  if (head == null || head.next == null) return head;
  let odd = head;
  let even = head.next;
  let evenHead = even;
  while (even != null && even.next != null) {
    odd.next = odd.next.next;
    even.next = even.next.next;
    odd = odd.next;
    even = even.next;
  }
  odd.next = evenHead;
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

  //   head = segrregateOddAndEvenBrute(head);
  //   console.log(head);

  head = segrregateOddAndEvenOptimal(head);
  console.log(head);
}
main();
