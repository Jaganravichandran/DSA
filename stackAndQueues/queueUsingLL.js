// Implementation of Queue using LL(LinkedList)

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.start = null;
    this.end = null;
    this.size = 0;
  }

  push(x) {
    const temp = new Node(x);
    if (this.start == null) {
      this.start = temp;
      this.end = temp;
    } else {
      this.end.next = temp;
      this.end = temp;
    }
    this.size++;
  }

  pop() {
    if (this.start == null) {
      console.log("Queue is empty");
      return null;
    } else {
      let temp = this.start;
      this.start = this.start.next;
      if (this.start == null) {
        this.end = null;
      }
      this.size--;
      return temp.data;
    }
  }

  top() {
    if (this.start == null) {
      console.log("Queue is empty");
      return null;
    } else {
      return this.start.data;
    }
  }

  isEmpty() {
    return this.start == null;
  }

  getSize() {
    return this.size;
  }

  display() {
    let temp = this.start;
    let res = [];
    while (temp != null) {
      res.push(temp.data);
      temp = temp.next;
    }
    return res.join(" -> ");
  }
}

const queue = new Queue();
queue.push(10);
queue.push(20);
queue.push(30);

console.log(queue.display());

console.log(queue.pop());

console.log(queue.top());

console.log(queue.getSize());
