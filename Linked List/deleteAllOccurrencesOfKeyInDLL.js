// delete all occurences of key in Doubly linked list

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

function deleteAllOccurrencesBrute(head, key) {
  let temp = head;
  while (temp != null) {
    if (temp.data == key) {
      if (temp == head) {
        head = head.next;
      }
      let nextNode = temp.next;
      let prevNode = temp.back;
      if (nextNode) nextNode.back = prevNode;
      if (prevNode) prevNode.next = nextNode;
      temp = nextNode;
    } else {
      temp = temp.next;
    }
  }
  return head;
}

function main() {
  let arr = [10, 4, 10, 10, 6, 10];
  let head = new Node(arr[0]);
  // initialise doubly linked list
  let prev = head;
  for (let i = 1; i < arr.length; i++) {
    let temp = new Node(arr[i], null, prev);
    prev.next = temp;
    prev = temp;
  }

  head = deleteAllOccurrencesBrute(head, 10);
  traverse(head);
}

main();
