// Add 2 numbers in LinkedList

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

function addTwoNumbers(head1, head2) {
  let t1 = head1;
  let t2 = head2;
  let carry = 0;
  let dummyNode = new Node(-1);
  let curr = dummyNode;
  while (t1 != null || t2 != null) {
    let sum = carry;
    if (t1) {
      sum += t1.data;
    }
    if (t2) {
      sum += t2.data;
    }
    let newNode = new Node(sum % 10);
    carry = Math.floor(sum / 10);
    curr.next = newNode;
    curr = curr.next;
    if (t1) t1 = t1.next;
    if (t2) t2 = t2.next;
  }
  if (carry == 1) {
    let newNode = new Node(1);
    curr.next = newNode;
  }
  return dummyNode.next;
}

function main() {
  let arr1 = [3, 5];
  let head1 = new Node(arr1[0]);
  let mover1 = head1;
  for (let i = 1; i < arr1.length; i++) {
    let temp1 = new Node(arr1[i]);
    mover1.next = temp1;
    mover1 = temp1;
  }
  let arr2 = [4, 5, 9, 9];
  let head2 = new Node(arr2[0]);
  let mover2 = head2;
  for (let i = 1; i < arr2.length; i++) {
    let temp2 = new Node(arr2[i]);
    mover2.next = temp2;
    mover2 = temp2;
  }

  let addTwo = addTwoNumbers(head1, head2);
  traverse(addTwo);
}
main();
