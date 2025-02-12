// find pairs with given sum in sorted doubly linked list

class Node {
  constructor(data, next = null, back = null) {
    this.data = data;
    this.next = next;
    this.back = back;
  }
}

// print DLL
function traverse(head) {
  let current = head;
  let result = [];
  while (current != null) {
    result.push(current.data);
    current = current.next;
  }
  console.log(result.join(" <-> "));
}

// brute => time limit exceeded
function findPairsBrute(head, sum) {
  let arr = [];
  if (head == null) return arr;
  let temp1 = head;
  while (temp1 != null) {
    let temp2 = temp1.next;
    while (temp2 != null && temp1.data + temp2.data <= sum) {
      if (temp1.data + temp2.data == sum) {
        arr.push([temp1.data, temp2.data]);
      }
      temp2 = temp2.next;
    }
    temp1 = temp1.next;
  }
  return arr;
}

function findTail(head) {
  let tail = head;
  while (tail.next != null) {
    tail = tail.next;
  }
  return tail;
}
function findPairsOptimal(head, sum) {
  let arr = [];
  if (head == null) return arr;
  let left = head;
  let right = findTail(head);
  while (left.data < right.data) {
    if (left.data + right.data == sum) {
      arr.push([left.data, right.data]);
      left = left.next;
      right = right.back;
    } else if (left.data + right.data < sum) {
      left = left.next;
    } else {
      right = right.back;
    }
  }
  return arr;
}

function main() {
  let arr = [1, 2, 3, 4, 9];
  let head = new Node(arr[0]);
  // initialise doubly linked list
  let prev = head;
  for (let i = 1; i < arr.length; i++) {
    let temp = new Node(arr[i], null, prev);
    prev.next = temp;
    prev = temp;
  }

  //   head = findPairsBrute(head, 5);
  //   console.log(head);

  head = findPairsOptimal(head, 5);
  console.log(head);
}

main();
