// Remove duplicates from sorted linked list
class Node {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
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

function removeDuplicatesBrute(head) {
  if (head == null || head.next == null) return head;
  let set = new Set();
  let temp = head;
  while (temp != null) {
    set.add(temp.data);
    temp = temp.next;
  }
  let dummy = new Node(-1);
  temp = dummy;
  for (let data of set) {
    let newNode = new Node(data);
    temp.next = newNode;
    newNode.prev = temp;
    temp = temp.next;
    newNode = newNode.next;
  }
  return dummy.next;
}

function removeDuplicatesOptimal(head) {
  if (head == null || head.next == null) return head;
  let temp = head;
  while (temp != null && temp.next != null) {
    let nextNode = temp.next;
    while (nextNode != null && nextNode.data == temp.data) {
      nextNode = nextNode.next;
    }
    temp.next = nextNode;
    if (nextNode) nextNode.prev = temp;
    temp = temp.next;
  }
  return head;
}
// main
function main() {
  let arr = [1, 1, 1, 2, 2, 3, 4, 4, 5];
  let head = new Node(arr[0]);
  // initialise doubly linked list
  let prev = head;
  for (let i = 1; i < arr.length; i++) {
    let temp = new Node(arr[i], null, prev);
    prev.next = temp;
    prev = temp;
  }
  //   head = removeDuplicatesBrute(head);
  //   traverse(head);
  head = removeDuplicatesOptimal(head);
  traverse(head);
}

main();
