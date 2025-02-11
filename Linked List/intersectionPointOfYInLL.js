// find the intersection point of y in LL

class Node {
  constructor(data1, next1 = null) {
    this.data = data1;
    this.next = next1;
  }
}

function findIntersectionPointYBrute(head1, head2) {
  let temp1 = head1;
  let hashMap = new Map();
  while (temp1 != null) {
    hashMap.set(temp1, 1);
    temp1 = temp1.next;
  }
  let temp2 = head2;
  while (temp2 != null) {
    if (hashMap.has(temp2)) {
      return temp2;
    }
    temp2 = temp2.next;
  }
  return null;
}

function findIntersectionPointYBetter(head1, head2) {
  let temp1 = head1;
  let n1 = 0;
  while (temp1 != null) {
    n1++;
    temp1 = temp1.next;
  }
  let temp2 = head2;
  let n2 = 0;
  while (temp2 != null) {
    n2++;
    temp2 = temp2.next;
  }
  if (n1 < n2) {
    return collisionPoint(head1, head2, n2 - n1);
  } else {
    return collisionPoint(head2, head1, n1 - n2);
  }
}

function collisionPoint(t1, t2, d) {
  while (d) {
    d--;
    t2 = t2.next;
  }
  while (t1 != t2) {
    t1 = t1.next;
    t2 = t2.next;
  }
  return t1;
}

function findIntersectionPointYOptimal(head1, head2) {
  let t1 = head1;
  let t2 = head2;
  while (t1 != t2) {
    t1 = t1.next;
    t2 = t2.next;
    if (t1 == t2) return t1;
    if (t1 == null) t1 = head2;
    if (t2 == null) t2 = head1;
  }
  return t1;
}

function main() {
  let head1 = new Node(3);
  let head2 = new Node(1);
  let commonNodes = new Node(4);
  commonNodes.next = new Node(6);
  commonNodes.next.next = new Node(2);
  head1.next = new Node(1);
  head1.next.next = commonNodes;
  head2.next = new Node(2);
  head2.next.next = new Node(4);
  head2.next.next.next = new Node(5);
  head2.next.next.next.next = commonNodes;

  //   let intersection = findIntersectionPointYBrute(head1, head2);
  //   console.log(intersection);

  //   let intersection = findIntersectionPointYBetter(head1, head2);
  //   console.log(intersection);

  let intersection = findIntersectionPointYOptimal(head1, head2);
  console.log(intersection);
}
main();
