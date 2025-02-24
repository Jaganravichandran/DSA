// Implement Queue using stack (pop optimized)

class Queue {
  constructor() {
    this.s1 = [];
    this.s2 = [];
  }

  push(x) {
    while (this.s1.length > 0) {
      this.s2.push(this.s1.pop());
    }
    this.s1.push(x);
    while (this.s2.length > 0) {
      this.s1.push(this.s2.pop());
    }
  }

  pop() {
    if (this.s1.length == 0) {
      return "Queue is empty";
    }
    return this.s1.pop();
  }

  top() {
    if (this.s1.length == 0) {
      return "Queue is empty";
    }
    return this.s1[this.s1.length - 1];
  }

  isEmpty() {
    return this.s1.length == 0;
  }

  getSize() {
    return this.s1.length;
  }
}

// const queue = new Queue();
// queue.push(10);
// queue.push(20);
// queue.push(30);
// queue.push(40);

// console.log(queue.s1);

// console.log(queue.pop());

// console.log(queue.top());

// console.log(queue.getSize());

// Implement Queue using stack (push optimized)
class Queue2 {
  constructor() {
    this.s1 = [];
    this.s2 = [];
  }

  push(x) {
    this.s1.push(x);
  }

  pop() {
    if (this.s1.length == 0 && this.s2.length == 0) {
      return "Queue is empty";
    }
    if (this.s2.length == 0) {
      while (this.s1.length > 0) {
        this.s2.push(this.s1.pop());
      }
    }
    return this.s2.pop();
  }

  top() {
    if (this.s1.length == 0 && this.s2.length == 0) {
      return "Queue is empty";
    }
    if (this.s2.length == 0) {
      while (this.s1.length > 0) {
        this.s2.push(this.s1.pop());
      }
    }
    return this.s2[this.s2.length - 1];
  }

  isEmpty() {
    return this.s1.length == 0 && this.s2.length == 0;
  }

  getSize() {
    return this.s1.length + this.s2.length;
  }
}

const queue2 = new Queue2();
queue2.push(10);
queue2.push(20);
queue2.push(30);
queue2.push(40);

console.log(queue2.s1);

console.log(queue2.pop());

console.log(queue2.top());

console.log(queue2.getSize());
