// merge two sorted linked list

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

function mergeTwoSortedLLBrute(head1, head2) {
  if (head1 == null && head2 == null) return null;
  let temp1 = head1;
  let temp2 = head2;
  let arr = [];
  while (temp1 != null) {
    arr.push(temp1.data);
    temp1 = temp1.next;
  }
  while (temp2 != null) {
    arr.push(temp2.data);
    temp2 = temp2.next;
  }
  arr.sort((a, b) => a - b);
  let head = new Node(arr[0]);
  let mover = head;
  for (let i = 1; i < arr.length; i++) {
    let temp = new Node(arr[i]);
    mover.next = temp;
    mover = temp;
  }
  return head;
}

function mergeTwoSortedLLOptimal(head1, head2) {
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
    if (t1) {
      temp.next = t1;
    } else {
      temp.next = t2;
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
  let arr1 = [2, 4, 8, 10];
  let head1 = new Node(arr1[0]);
  let mover1 = head1;
  for (let i = 1; i < arr1.length; i++) {
    let temp1 = new Node(arr1[i]);
    mover1.next = temp1;
    mover1 = temp1;
  }
  let arr2 = [1, 3, 3, 6, 11, 14];
  let head2 = new Node(arr2[0]);
  let mover2 = head2;
  for (let i = 1; i < arr2.length; i++) {
    let temp2 = new Node(arr2[i]);
    mover2.next = temp2;
    mover2 = temp2;
  }

  //   let mergeBrute = mergeTwoSortedLLBrute(head1, head2);
  //   traverse(mergeBrute);

  let mergeOptimal = mergeTwoSortedLLOptimal(head1, head2);
  traverse(mergeOptimal);
}
main();
